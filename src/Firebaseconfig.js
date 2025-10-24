// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7_rMh3eSECSZC1s0_Idsf1UqDfauutHU",
  authDomain: "tree-project-f8284.firebaseapp.com",
  projectId: "tree-project-f8284",
  storageBucket: "tree-project-f8284.firebasestorage.app",
  messagingSenderId: "184400293125",
  appId: "1:184400293125:web:9c98d94064e4c7c6e15b6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
