import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between bg-white text-sm p-0 border-b-2">
            <div className="flex items-center p-0 text-xl leading-none">
                <img 
                    src="src/assets/logo.png" 
                    alt="logo" 
                    className="h-12 w-15 p-0"
                />
            </div>
            <ul className="flex items-center space-x-5 w-full justify-end">
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
                    <button className="border border-gray-400 bg-gray-300 rounded-md w-16 h-7">Sign In</button>
                    <button className="border border-black bg-black rounded-md w-16 h-7 text-white">Register</button>
                </li>
            </ul>
        </nav>
    );
};

export { NavBar };
