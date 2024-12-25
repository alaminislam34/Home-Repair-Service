import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";

const PageNotFound = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen text-gray-800">
      {/* Animated 404 Icon */}
      <div className="relative flex items-center justify-center">
        <h1
          className="text-7xl md:text-9xl font-extrabold"
          style={{
            textShadow:
              "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)",
            WebkitTextStroke: "1px rgba(0, 0, 0, 0.8)",
            color: "transparent",
            WebkitTextFillColor: "gray",
          }}
        >
          404
        </h1>
      </div>

      {/* Error Message */}
      <h1
        className="text-xl md:text-2xl font-semibold tracking-wide"
        style={{
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
          WebkitTextStroke: "0.5px rgba(0, 0, 0, 0.6)",
          WebkitTextFillColor: "gray",
        }}
      >
        Oops! Page Not Found
      </h1>

      {/* Back to Home Button */}
      <button className={theme === "light" ? "text-blue-400" : "text-white"}>
        Go Back to{" "}
        <Link to="/" className="underline">
          Home
        </Link>
      </button>
    </div>
  );
};

export default PageNotFound;
