import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { theme, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      photoURL: "",
    },
  });
  const handleRegister = (e) => {
    const email = e.email;
    const password = e.password;
    const name = e.name;
    const photoURL = e.photoURL;

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          Swal.fire({
            title: "Success",
            text: "Account Register Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          title: "Ops",
          text: "Account Register Failed",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
    reset();
  };

  // google log in
  const handleSignUpWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        navigate(location?.state ? location.state : "/");
        setUser(res.user);
      })
      .catch(() => {});
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] my-6 md:my-8">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className={`flex flex-col gap-2 m-4 p-4 md:p-6 ${
          theme === "light"
            ? "shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            : "shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]"
        }  w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto rounded-3xl`}
      >
        <h2 className="my-2 md:my-4 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500">
          Register
        </h2>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="email">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input focus:border-blue-500 focus:outline-none placeholder:text-gray-500 border-base-300 outline-none"
            {...register("name", { required: "Name is required" })}
          />
          {errors?.name ? (
            <small className="text-red-500 text-left py-1">
              {errors?.name.message}
            </small>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input focus:border-blue-500 focus:outline-none placeholder:text-gray-500 border-base-300 outline-none"
            {...register("email", { required: "Email is required" })}
          />
          {errors?.email ? (
            <small className="text-red-500 text-left py-1">
              {errors?.email.message}
            </small>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="email">
            Your Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input focus:border-blue-500 focus:outline-none placeholder:text-gray-500 border-base-300 outline-none"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                message:
                  "Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, and one number",
              },
            })}
          />
          {errors?.password && (
            <small className="text-red-500 text-left py-1 text-wrap">
              {errors.password.message}
            </small>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="email">
            Photo URL
          </label>
          <input
            type="text"
            placeholder="Enter your photoURL"
            className="input focus:border-blue-500 focus:outline-none placeholder:text-gray-500 border-base-300 outline-none"
            {...register("photoURL", { required: "PhotoURL is required" })}
          />
          {errors?.photoURL ? (
            <small className="text-red-500 text-left py-1">
              {errors?.photoURL.message}
            </small>
          ) : (
            ""
          )}
        </div>
        <input
          className="btn my-2 bg-blue-500 hover:bg-blue-600 text-white border-base-300 outline-none text-base"
          type="submit"
          value="Register"
        />
        <p className="text-right">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
        <div className="divider">or</div>
        <div className="flex justify-center items-center">
          <button onClick={handleSignUpWithGoogle} className="btn">
            <FcGoogle className="text-xl md:text-2xl" /> Continue with google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
