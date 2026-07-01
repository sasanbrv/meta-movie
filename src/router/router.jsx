import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import AuthLayout from "../components/layout/AuthLayout";
import HomePage from "../pages/Home/HomePage";
import Login from './../pages/Login/loginpage/Login';
import Signup from './../pages/Signup/Signup';


export const router = createBrowserRouter([
  {
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },

  {
    element: <AuthLayout />,

    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);