import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import AuthLayout from "../components/layout/AuthLayout";
import HomePage from "../pages/Home/HomePage";
import Login from './../pages/Login/loginpage/Login';
import Signup from './../pages/Signup/Signup';
import ForgotPass from "./../pages/Login/forgotpass/ForgotPass"
import UpComing from "../pages/upComing/UpComing";
import MoviePlayer from "../pages/MoviePlayer/MoviePlayer";
import GenrePage from './../pages/Genre/GenrePage';
import Plans from "../pages/plans/components/Plans";
import ContactUs from "../pages/contactUs/components/ContactUs"
export const router = createBrowserRouter([
  {
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/upcoming",
        element: <UpComing />,
      },
      {
        path: "movie/:id",
        element: <MoviePlayer />,
      },
      {

        path: "/plans",
        element: <Plans/>

      },
      {
        path:"contactUs",
        element:<ContactUs/>
      },

      { path: "genre/:id",
        element: <GenrePage />
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
      {
        path: "/forgetPassword",
        element: <ForgotPass />,
      },
    ],
  },
]);