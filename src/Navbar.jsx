import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import logo from "./assets/attachment_152183063.jpeg";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 py-3 flex justify-between items-center">
      <Link to="/home">
        <img className="h-16 w-16" src={logo} alt="Logo" />
      </Link>
      <div className="flex gap-4 font-semibold">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `transition-colors ${
              isActive
                ? "font-bold text-green-600"
                : "text-base-content hover:text-green-600"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/plants"
          className={({ isActive }) =>
            `transition-colors ${
              isActive
                ? "font-bold text-green-600"
                : "text-base-content hover:text-green-600"
            }`
          }
        >
          Plant Tips
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `transition-colors ${
              isActive
                ? "font-bold text-green-600"
                : "text-base-content hover:text-green-600"
            }`
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
