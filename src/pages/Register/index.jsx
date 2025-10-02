import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../../authService.js";
import { sendVerificationEmail } from "../../../authService.js";
import { reload } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [verificationMessage, setVerificationMessage] = useState("");

const handleRegister = async (e) => {
  e.preventDefault();
  setError(null); // Clean previous errors
  setVerificationMessage(null); // Clean previous messages

  // 1. Field validation
  if (!email.trim()) {
    setError("Please enter a valid email address.");
    return;
  }
  if (!password || password.length < 6) {
    setError("The password must be at least 6 characters.");
    return;
  }

  let user;

  // 2. User register
  try {
    user = await registerUser(email, password);
  } catch (err) {
    const errorMessages = {
      "auth/email-already-in-use": "This email address is already registered. You'll probably be logged in.",
      "auth/invalid-email": "The email format is not valid.",
      "auth/weak-password": "Password too weak.",
      "auth/network-request-failed": "Connection problem. Please try again.",
    };
    setError(errorMessages[err.code] || "Unexpected error. Please try again later.");
    return;
  }

  // 3. Sending verification email
  try {
    await sendVerificationEmail(user);
    setVerificationMessage("Check your email to complete verification.");
  } catch (err) {
    setError("The verification email could not be sent. Please try again later.");
    return;
  }

  // 4. Field cleanup after success
  setEmail("");
  setPassword("");

  // 5. Periodic email verification
  let attempts = 0;
  const maxAttempts = 24; // 2 minutes

  const checkEmailVerified = async () => {
    await reload(user);
    if (user.emailVerified) {
      navigate("/");
    } else if (attempts < maxAttempts) {
      attempts++;
      setTimeout(checkEmailVerified, 5000);
    } else {
      setError("We couldn't verify your email. Check your inbox.");
    }
  };

  checkEmailVerified();
};

  return (
    <div className="flex items-center justify-center relative w-full h-screen ">
      <div className="login-container flex flex-col h-full w-80">
        <h1 className="flex flex-col font-sans font-semibold text-white text-xl mt-6 mb-6">
          Create your account
        </h1>
        <form
          className="form flex flex-col mt-1 h-full w-full"
          onSubmit={handleRegister}
        >
          <label
            htmlFor="name"
            className="font-medium text-white font-sans mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="email"
            className="font-medium text-white font-sans mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="New email"
            className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="password"
            className="font-medium text-white font-sans mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="New password"
            className="bg-text-input-field text-base rounded-lg h-10 p-2 mb-5"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="place-self-center font-bold bg-[#426B69] text-white rounded-lg h-12 w-full mt-6 mb-7"
            type="submit"
          >
            Create
          </button>
          {verificationMessage && (
            <p className="text-white">{verificationMessage}</p>
          )}
          {error && <p className="text-white" >{error}</p>}
        </form>
      </div>
    </div>
  );
};

export { Register };
