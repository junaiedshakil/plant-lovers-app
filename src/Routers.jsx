import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import PlantDetails from "./PlantDetails";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";
import PlantData from "./PlantData";
import ForgotPassword from "./ForgotPassword";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        index: true,
        loader: async () => {
          try {
            const res = await fetch("/data.json");
            if (!res.ok) throw new Error("Failed to load plant data");
            const data = await res.json();
            return { plants: data };
          } catch (error) {
            console.error(error);
            return { plants: [] };
          }
        },
        element: <Home />,
      },
      {
        path: "home",
        loader: async () => {
          try {
            const res = await fetch("/data.json");
            if (!res.ok) throw new Error("Failed to load plant data");
            const data = await res.json();
            return { plants: data };
          } catch (error) {
            console.error(error);
            return { plants: [] };
          }
        },
        element: <Home />,
      },
      {
        path: "plants",
        loader: async () => {
          try {
            const res = await fetch("/PlantsData.json");
            if (!res.ok) throw new Error("Failed to load plant tips");
            const data = await res.json();
            return { plants: data };
          } catch (error) {
            console.error(error);
            return { plants: [] };
          }
        },
        element: <PlantData />,
      },
      { path: "login", element: <Login /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "signup", element: <Signup /> },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "details/:id",
        loader: async ({ params }) => {
          try {
            const res = await fetch("/data.json");
            if (!res.ok) throw new Error("Failed to load plant details");
            const data = await res.json();
            const plant = data.find(
              (item) => item.plantId === parseInt(params.id)
            );
            if (!plant) throw new Error("Plant not found");
            return plant;
          } catch (error) {
            console.error(error);
            throw error;
          }
        },
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
