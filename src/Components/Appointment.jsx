import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Appointment = () => {
  const { theme, user } = useContext(AuthContext);
  const handleAppointment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const phone = form.phone.value;
    const message = form.message.value;
    const date = form.date.value;

    axios
      .post(
        `${import.meta.env.VITE_URL}/appointment`,
        { name, email, phone, date, message },
        { withCredentials: true }
      )
      .then((res) => {
        if (res) {
          toast.success("Appointment send successfully");
          form.reset();
        } else {
          toast.error("Appointment send Failed");
        }
      });
  };
  return (
    <div className="flex justify-center items-center min-h-[400px] my-6 mx-4">
      <div
        className={`w-full max-w-4xl ${
          theme === "light"
            ? "shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            : "shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]"
        } rounded-3xl p-8`}
      >
        <div className="text-center mb-8 space-y-2 md:space-y-4">
          <h2 className="text-3xl font-bold">FREE APPOINTMENT</h2>
          <p className="text-gray-500 text-sm md:text-base">
            Schedule your free appointment today for expert services. Connect
            with our team to address your needs with professionalism and care!
          </p>
        </div>
        <form
          onSubmit={handleAppointment}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="NAME*"
            className="input input-bordered bg-transparent w-full focus:ring-2 focus:ring-blue-400"
          />
          <input
            required
            type="date"
            name="date"
            placeholder="Date*"
            className="input input-bordered bg-transparent w-full focus:ring-2 focus:ring-blue-400"
          />
          <input
            required
            type="text"
            name="phone"
            placeholder="PHONE*"
            className="input input-bordered bg-transparent w-full focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            required
            name="message"
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Appointment;
