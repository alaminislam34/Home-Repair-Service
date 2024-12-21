import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import Swal from "sweetalert2";

const Register = () => {
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
    const form = e;
    const email = e.email;
    const password = e.password;
    console.table(form);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Success",
          text: "Account Register Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Ops",
          text: "Account Register Failed",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
    reset();
  };
  return (
    <div className="flex justify-center items-center min-h-[80vh] my-6 md:my-12">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col gap-2 border m-4 p-4 md:p-6 shadow-xl w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto"
      >
        <h2 className="my-2 md:my-4 text-center text-xl md:text-2xl lg:text-3xl font-semibold">
          Register
        </h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Your Name</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-secondary"
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
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-secondary"
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
          <label htmlFor="email">Your Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-secondary"
            {...register("password", {
              required:
                "Password must be at least 6 character one upperChase, one lowerChase or one special character",
            })}
          />
          {errors?.password ? (
            <small className="text-red-500 text-left py-1">
              {errors?.password.message}
            </small>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Photo URL</label>
          <input
            type="text"
            placeholder="Enter your photoURL"
            className="input input-secondary"
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
        <input className="btn" type="submit" value="Login" />
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
