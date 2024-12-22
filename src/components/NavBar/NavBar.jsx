import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-900 text-sm p-0">
            <div className="flex items-center p-0 text-xl leading-none">
                <img 
                    src="src/assets/logo.png" 
                    alt="logo" 
                    className="h-12 w-15 p-0"
                />
            </div>
            <ul className="flex items-center space-x-5 w-full justify-end text-white">
                <li className="flex p-5 items-center">
                    <Link to="/">Habits</Link>
                </li>
                <li className="flex p-5 items-center">
                    <Link to="/to-do">To-DO</Link>
                </li>
                <li className="flex p-5 items-center">
                    <Link to="/expense">Expense</Link>
                </li>
                <li className="flex items-center space-x-1 p-5">
                    <button className="border border-gray-600 bg-gray-600 rounded-md w-16 h-7">Sign In</button>
                    <button className="border border-white bg-white rounded-md w-16 h-7 text-black">Register</button>
                </li>
            </ul>
        </nav>
    );
};

export { NavBar };
