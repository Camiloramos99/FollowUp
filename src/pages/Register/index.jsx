import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center relative w-full h-screen ">
      <div className="login-container flex flex-col h-full w-80">
        <h1 className="flex flex-col font-sans font-semibold text-white text-xl mt-6 mb-6">
          Create your account
        </h1>
        <form className="form flex flex-col mt-1 h-full w-full">
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
            placeholder="your name"
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
            type="text"
            id="email"
            name="email"
            placeholder="camiloramos99@outlook.com"
            className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5"
            autoComplete="email"
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
            placeholder="***********"
            className="bg-text-input-field text-base rounded-lg h-10 p-2 mb-5"
            autoComplete="new-password"
          />
          <button
            className="place-self-center font-bold bg-[#426B69] text-white rounded-lg h-12 w-full mt-6 mb-7"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export { Register };
