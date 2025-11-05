import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";


const NavBar = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("You have successfully logged out 👋");
      navigate("/signIn");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  
  return (
    <nav className="flex items-center justify-between bg-[#426B69] text-sm p-0">
      <div className="flex items-center p-0 text-xl leading-none">
        <img src={logo} alt="logo" className="h-12 w-15 p-0" />
      </div>
      <ul className="flex items-center space-x-5 w-full justify-end text-white">
        <li className="p-5 items-center hidden">
          <Link to="/">Habits</Link>
        </li>
        <li className="p-5 items-center hidden">
          <Link to="/to-do">To-DO</Link>
        </li>
        <li className="p-5 items-center hidden">
          <Link to="/expense">Expense</Link>
        </li>
        <li className="flex p-5 items-center cursor-pointer">
          <span>¡Hi {user?.displayName || user?.email?.split("@")[0] || "Guest"}!</span>
        </li>

        {user ? (
          <li className="flex items-center space-x-1 p-5">
            <button
              onClick={handleLogout}
              className="border border-white bg-transparent rounded-md w-16 h-7 text-white hover:bg-white hover:text-[#426B69] transition"
            >
              Logout
            </button>
          </li>
        ) : (
          <li className="flex items-center space-x-1 p-5">
            <button className="border border-gray-600 bg-gray-600 rounded-md w-16 h-7">
              <Link to="/signIn">Sign In</Link>
            </button>
            <button className="border border-white bg-white rounded-md w-16 h-7 text-black">
              <Link to="/register">Register</Link>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export { NavBar };
