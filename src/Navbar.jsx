import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/home">Home</Link>
        <Link to="/plants">Plant Tips</Link>{" "}
        
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
