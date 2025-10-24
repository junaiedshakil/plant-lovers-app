import React, { useContext, useState, useEffect } from "react"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./Firebaseconfig";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { user, loading } = useContext(AuthContext); 
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/home";

  
  useEffect(() => {
    if (user && !loading) {
      navigate(from, { replace: true });
    }
  }, [user, loading, from, navigate]);

  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-green-50">
        <span className="loading loading-ring loading-lg text-green-600"></span>
      </div>
    );
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((e) => toast.error(e.message));
  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Google sign-in successful");
        navigate(from, { replace: true });
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
            >
              <FaRegEye />
            </span>
          </div>

        
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-green-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Login
          </button>
        </form>

       
        <div className="mt-4">
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="w-full bg-white hover:bg-gray-100 text-black font-semibold px-4 py-2 rounded-lg shadow-md border border-gray-300 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        <p className="text-center text-gray-700 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
