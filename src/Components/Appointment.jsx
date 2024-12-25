import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";

const Appointment = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center min-h-[400px] my-6">
      <div
        className={`w-full max-w-4xl bg-gradient-to-tr ${
          theme === "light"
            ? "from-blue-50 via-blue-100 to-blue-200"
            : "from-gray-800 via-gray-900 to-black"
        } rounded-lg shadow-lg p-8`}
      >
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-3xl font-bold">FREE APPOINTMENT</h2>
          <p className="text-gray-500 text-sm md:text-base">
            Schedule your free appointment today for expert services. Connect
            with our team to address your needs with professionalism and care!
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="NAME*"
            className="input input-bordered bg-transparent w-full focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="EMAIL*"
            className="input input-bordered bg-transparent w-full focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="PHONE*"
            className="input input-bordered bg-transparent w-full focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="ZIP-CODE*"
            className="input input-bordered bg-transparent w-full focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="MESSAGE"
            className="textarea textarea-bordered bg-transparent w-full col-span-1 md:col-span-2 focus:ring-2 focus:ring-blue-400"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className=" md:col-span-2 btn my-2 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-white duration-500 hover:scale-105 "
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
