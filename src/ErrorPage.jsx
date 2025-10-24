import React from "react";
import { GiLindenLeaf } from "react-icons/gi";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center p-4">
      <div className="mb-8">
       
        <h1 className="text-6xl font-bold text-green-800 mb-2">404</h1>
        <p className="text-2xl text-gray-600 mb-4">Oops! Plant not found.</p>
        <p className="text-lg text-gray-500 max-w-md">
          It seems like you've wandered into a barren patch. Let's get you back
          to the greenhouse!
        </p>
      </div>

      <div className="space-x-4 mb-8">
        <Link
          to="/home"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
        >
          Go Home
        </Link>
        <Link
          to="/"
          className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
        >
          Explore Plants
        </Link>
      </div>

      <p className="text-sm text-gray-400">
        Lost? Try searching for a specific plant or check our care tips.
      </p>
    </div>
  );
};

export default ErrorPage;
