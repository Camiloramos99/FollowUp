import React, { useContext } from "react"
import { NavBarContext } from "../contexts/NavbarContext"

const NavBar = () => {

    return (
        <nav className="flex justify-center space-x-5 bg-white text-sm p-0 border-b-2 "> 
            <li className="flex p-5 place-self-start text-xl leading-none " >
                F
            </li>
            <ul className="flex w-full place-content-end ">
                <li className="flex p-5 items-center">
                    Habits
                    
                </li>

                <li className="flex p-5 items-center ">
                    To-DO
                        
                    
                </li>

                <li className="flex p-5 items-center">
                    Expense
        
                </li>

                <li className="flex items-center space-x-1 m-0 ml-0	p-5	" >
                    <button className=" border border-gray-400 bg-gray-300 rounded-md w-16 h-7 " >Sign In</button>

                    <button className="border border-black bg-black rounded-md w-16 h-7 text-white " >Register</button>
                </li>

            </ul>
        </nav>
    )

 };

export { NavBar };