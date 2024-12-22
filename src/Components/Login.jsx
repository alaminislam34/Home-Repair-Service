import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { handleLogin, handleSignUpWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.table({ email, password });
    handleLogin(email, password);
    navigate(location?.state ? location.state : "/");
    form.reset();
    Swal.fire({
      title: "Success!",
      text: "User Login successfully",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form
        onSubmit={handleLoginUser}
        className="flex flex-col gap-2 border m-4 p-4 md:p-6 shadow-xl  w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto"
      >
        <h2 className="my-2 md:my-4 text-center text-xl md:text-2xl lg:text-3xl font-semibold">
          Login
        </h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-secondary focus:ring-2 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Your Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-secondary focus:ring-2 focus:outline-none"
            required
          />
        </div>
        <input className="btn" type="submit" value="Login" />
        <p>
          Don`t have an account ? <Link to="/register">Register</Link>
        </p>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              handleSignUpWithGoogle,
                navigate(location?.state ? location.state : "/");
            }}
            className="btn"
          >
            Continue with google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
