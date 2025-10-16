import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../../authService";
import { auth } from "../../../firebase";

const SignIn = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {

    if (!email || !password) {
      setError("Please complete both fields.");
      return;
    }

    try {
      await loginUser(email, password);
      await auth.currentUser.reload();
      setError(null);
      navigate("/");
    } catch (error) {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="login-container flex flex-col h-full w-80">
        <h1 className="flex font-sans font-semibold mt-6 text-white justify-center text-xl mb-6">
          Welcome! Let's get started
        </h1>
        <div className="form flex flex-col mt-3 h-full w-full">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-white font-sans mb-1"
          >
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="your email"
            className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5"
            autoComplete="email"
          
          />
          <label
            htmlFor="password"
            className="text-sm text-white font-semibold font-sans mb-1"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="your password"
            className="bg-text-input-field text-base rounded-lg h-10 p-2 mb-6"
            autoComplete="current-password"
          />
          <button 
            className="place-self-center font-bold  bg-[#426B69] text-white rounded-lg h-12 w-full mb-4"
            onClick={handleLogin}
            >
            Log in
          </button>
          <a
            href="/"
            className="flex self-center text-sm font-sans text-[#426B69] mb-4"
          >
            Forgot my password
          </a>
          {error && <p className="text-white">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export { SignIn };
