import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
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
            id="email"
            placeholder="your email"
            className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5"
          />
          <label
            htmlFor="password"
            className="text-sm text-white font-semibold font-sans mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="your password"
            className="bg-text-input-field text-base rounded-lg h-10 p-2 mb-6"
          />
          <Link to="/">
            <button className="place-self-center font-bold  bg-[#426B69] text-white rounded-lg h-12 w-full mb-4">
              Log in
            </button>
          </Link>
          <a
            href="/"
            className="flex self-center text-sm font-sans text-[#426B69] mb-4"
          >
            Forgot my password
          </a>
        </div>
      </div>
    </div>
  );
};

export { SignIn };
