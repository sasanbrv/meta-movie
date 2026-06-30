import background from "../../../assets/img/bg-Sign up.png";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
function Login() {
  // const ROUTE = [
  //   {
  //     name: "Login",
  //     path: "/login",
  //   },
  //   {
  //     name: "Signin",
  //     path: "/signin",
  //   },
  //   {
  //     name:"forgotPass",
  //     path:"/forgotPass"
  //   }
  // ];

  return (
    <section className="relative w-screen h-screen ">
      {/* Background */}

      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover backdrop-blur-2xl"
      />

      {/* Content */}
      <div className="md:grid grid-cols-2 relative z-10 flex flex-col items-center justify-center h-full text-white md:flex-row md:justify-between ">
        <div className="text-center ml-4">
          <h3 className="text-3xl font-bold md:text-5xl ">
            <span className="text-primary">M</span>eta Movie
          </h3>
          <p className="font-bold text-xl text-center md:text-4xl mt-4">
            The world’s Largest Movie Library{" "}
          </p>
        </div>

        <div className="w-full h-auto mt-4 flex justify-center">
          <div className="w-2xs h-130 backdrop-blur-lg border-2 border-glass rounded-2xl md:w-96">
            <div className="flex justify-center mt-8 text-2xl gap-8 font-light">
              <span>Login </span>
              <span>|</span>
              <span>Sign in</span>
            </div>
            <div className="font-light text-center mt-2 text-white/70">
              Log in to watch your favourite shows
            </div>

            <div className="flex justify-center gap-8 mt-8">
              <div className="w-20 h-9 backdrop-blur-[1px] border border-glass flex justify-center items-center bg-white/10 rounded-lg">
                <FcGoogle className="w-6 h-6" />
              </div>
              <div className="w-20 h-9 backdrop-blur-[1px] border border-glass flex justify-center items-center bg-white/10 rounded-lg">
                <FaFacebookF />
              </div>
            </div>

            <div className="text-center mt-8">
              <span className="font-light">or</span>
            </div>
            <div className="flex flex-col justify-center items-center mt-8 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="px-6 py-2 border-2 border-glass rounded-md focus:border-primary focus:outline-none transition  "
              />
              <input
                type="email"
                placeholder="Password"
                className="px-6 py-2 border-2 border-glass rounded-md focus:border-primary focus:outline-none transition"
              />
            </div>
            <div className="flex justify-center gap-4 font-light text-sm mt-4">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border border-glass rounded-full checked:bg-primary checked:border-primary"
                />
                <p>remember me</p>
              </div>
              <p>Forget Password</p>
            </div>
            <div className="flex justify-center items-center mt-8 ">
              <button className="bg-primary w-3/4 px-6 py-2 rounded-sm">
                Login
              </button>
            </div>
            <div className="flex justify-center items-center gap-8 mt-4">
              <div>
                <FaFacebookSquare className="w-7 h-7" />
              </div>
              <div>
                <FaSquareXTwitter className="w-7 h-7" />
              </div>
              <div>
                <FaInstagramSquare className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
