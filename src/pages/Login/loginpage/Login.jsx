import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import LOGIN_SCHEMA from "./LoginSchema";
import mainLogo from "../../../assets/img/main logo.png"
import mainImg from "../../../assets/img/login IMG.png"
const initialValues = {
  email: "",
  password: "",
};

const inputs = [
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
];

function Login() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const result = LOGIN_SCHEMA.safeParse(formData);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});
    console.log(result.data);
  };

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background */}
      <img
        src={mainImg}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 grid h-full md:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col items-center justify-center px-8 text-center text-white">
        <img src={mainLogo} className="w-50 md:w-100" alt="" />

          <i className="max-w-md text-xl font-semibold font-serif md:text-3xl">
            The World's Largest Movie Library
          </i>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center mt-4">
          <form
            onSubmit={handleLogin}
            className="w-80 rounded-3xl border border-white/10 bg-black/35 p-4 backdrop-blur-3xl shadow-[0_0_60px_rgba(115,0,255,0.25)]"
          >
            {/* Tabs */}
            <div className="text-center">
              <div className="flex justify-center mt-6 gap-8 text-2xl font-light">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-primary/90"
                      : "text-white transition hover:text-primary"
                  }
                >
                  Login
                </NavLink>

                <span>|</span>

                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-primary"
                      : "text-white transition hover:text-primary"
                  }
                >
                  Sign up
                </NavLink>
              </div>

              <p className="mt-2 text-sm text-white/70">
                Log in to watch your favourite shows.
              </p>
            </div>

            {/* Social Login */}
            <div className="mt-8 flex justify-center gap-6">
              <button
                type="button"
                className="flex h-11 w-20 items-center justify-center rounded-lg border border-white/20 bg-white/10 transition hover:bg-white/20"
              >
                <FcGoogle className="text-2xl" />
              </button>

              <button
                type="button"
                className="flex h-11 w-20 items-center justify-center rounded-lg border border-white/20 bg-white/10 transition hover:bg-white/20"
              >
                <FaFacebookF />
              </button>
            </div>

            <p className="mt-6 text-center text-white/70">or</p>

            {/* Inputs */}
            <div className="mt-6 space-y-5">
              {inputs.map(({ name, type, placeholder }) => (
                <div key={name}>
                  <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-primary"
                  />

                  {errors[name] && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors[name][0]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Remember */}
            <div className="mt-6 flex items-center justify-between text-sm text-white/70">
              <label className="flex cursor-pointer items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <NavLink
                to="/forgetPassword"
                className="transition hover:text-primary"
              >
                Forgot Password?
              </NavLink>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-8 w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
            >
              Login
            </button>

            {/* Social Icons */}
            <div className="mt-8 flex justify-center gap-8 text-2xl">
              <FaFacebookSquare className="text-white cursor-pointer transition hover:text-primary" />
              <FaSquareXTwitter className="text-white cursor-pointer transition hover:text-primary" />
              <FaInstagramSquare className="text-white cursor-pointer transition hover:text-primary" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
