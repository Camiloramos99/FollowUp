import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../../authService.js";
import { sendVerificationEmail } from "../../../authService.js";
import { reload } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [verificationMessage, setVerificationMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(email, password);
      await sendVerificationEmail(user);
      setVerificationMessage("Check your email to complete verification.");

      const checkEmailVerified = setInterval(async () => {
        await reload(user);
        if (user.emailVerified) {
          clearInterval(checkEmailVerified);
          navigate("/");
        }
      }, 5000);
    } catch (err) {
      setError(err.message);
    }
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
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export { Register };
