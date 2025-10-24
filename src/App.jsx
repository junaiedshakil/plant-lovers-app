import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { AuthContext } from "./AuthContext"; 
import router from "./Routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { loading } = useContext(AuthContext);

 
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-green-50">
        <span className="loading loading-ring loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
