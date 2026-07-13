import { useState } from "react";
import SIGNUP_SCHEMA from "./SignupSchema";
import { NavLink } from "react-router-dom";
import mainLogo from "../../assets/img/main logo.png"
import mainImg from "../../assets/img/login IMG.png"
const initialValues = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = SIGNUP_SCHEMA.safeParse(formData);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});
    console.log(result.data);
  };

  const inputs = [
    {
      name: "userName",
      type: "text",
      placeholder: "Username",
    },
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
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
    },
  ];

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
            onSubmit={handleSubmit}
            className="w-80 rounded-3xl border border-white/10 bg-black/35 p-4 backdrop-blur-3xl shadow-[0_0_60px_rgba(115,0,255,0.25)]"
          >
            <div className="text-center">
              <div className="flex justify-center mt-8 text-2xl gap-8 font-light">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-bold"
                      : "text-white hover:text-primary"
                  }
                >
                  Login
                </NavLink>

                <span>|</span>

                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-bold"
                      : "text-white hover:text-primary"
                  }
                >
                  Sign up
                </NavLink>
              </div>

              <p className="mt-2 text-sm text-white/70">
                Register now to watch your favourite movies.
              </p>
            </div>

            <div className="mt-8 space-y-5">
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



            <button
              type="submit"
              className="mt-8 w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
