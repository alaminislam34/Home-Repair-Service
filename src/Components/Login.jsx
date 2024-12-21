import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.table({ email, password });
  };
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form
        onSubmit={handleLogin}
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
      </form>
    </div>
  );
};

export default Login;
