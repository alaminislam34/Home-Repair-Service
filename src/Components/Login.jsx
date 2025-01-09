import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { setUser, theme } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUpWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        navigate(location?.state ? location.state : "/");
        setUser(res.user);
      })
      .catch(() => {});
  };
  // handle login user
  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.table({ email, password });
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "User Logged Successfully",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          title: "Ops!",
          text: "Your email or password incorrect",
          icon: "error",
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form
        onSubmit={handleLoginUser}
        className={`flex flex-col gap-2 m-4 p-4 md:p-8 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto rounded-3xl ${
          theme === "light"
            ? "shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            : "shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]"
        }`}
      >
        <h2 className="my-2 md:my-4 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500">
          Login
        </h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold py-1">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input border-base-300 focus:border-blue-500 border focus:outline-none text-sm md:text-base"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold py-1">
            Your Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input border-base-300 focus:border-blue-500 border focus:outline-none text-sm md:text-base"
            required
          />
        </div>
        <input
          className="btn my-2 bg-blue-500 text-white hover:bg-blue-600 text-base"
          type="submit"
          value="Login"
        />
        <p className="text-right">
          Don`t have an account ?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
        <div className="divider">or</div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={handleSignUpWithGoogle}
            className="btn"
          >
            <FcGoogle className="text-xl md:text-2xl" /> Continue with google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
