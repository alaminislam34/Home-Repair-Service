import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { TbArrowBack } from "react-icons/tb";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { provider } = data;

  // handel book service
  const handleBooked = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceId = form.serviceId.value;
    const serviceName = form.serviceName.value;
    const serviceImg = form.serviceImg.value;
    const pEmail = form.pEmail.value;
    const pName = form.pName.value;
    const uEmail = form.uEmail.value;
    const uName = form.uName.value;
    const serviceDate = new Date(form.sDate.value);
    const sDate = serviceDate.toISOString();
    const price = form.price.value;
    const provideArea = form.area.value;
    const serviceStatus = "pending";

    if (pEmail === uEmail) {
      return toast.error("Action not permitted");
    }

    axios
      .post(
        `${import.meta.env.VITE_URL}/bookServices`,
        {
          serviceId,
          serviceName,
          serviceImg,
          pEmail,
          pName,
          uEmail,
          uName,
          sDate,
          price,
          provideArea,
          serviceStatus,
        },
        { withCredentials: true }
      )
      .then((res) => {
        form.reset();
        document.getElementById("my_modal_5").close();
        Swal.fire({
          title: "Success",
          text: "Service booked successfully",
          icon: "success",
        });
        console.log(res.data);
      });
  };

  return (
    <div>
      <div className="text-center">
        <br />
        <h2 className="my-4 md:my-8 lg:my-12 text-center text-xl md:text-2xl lg:text-3xl font-bold border-b-2 border-blue-500 py-2 inline">
          {provider?.service.serviceName}
        </h2>
      </div>
      <div className="flex justify-start items-center">
        <Link
          to="/"
          className="flex flex-row gap-2 items-center px-4 py-2 bg-base-200 rounded-lg hover:scale-105 duration-500 hover:bg-base-300"
        >
          Back <TbArrowBack className="text-lg" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 md:my-12 lg:my-16 p-4 shadow-lg rounded-lg">
        {/* Service Image */}

        <div className="md:col-span-2">
          <img
            className="w-full h-full aspect-video object-cover rounded-lg"
            src={provider?.service.serviceImgURL}
            alt="Service"
          />
        </div>

        {/* Service Details */}
        <div className="space-y-6 p-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold ">Service Details</h3>
            <p className="text-gray-600 text-justify leading-relaxed">
              {provider?.service.description}
            </p>
            <p className="text-2xl font-extrabold text-green-600">
              {provider?.service.servicePrice} ৳
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold ">Service Provider</h3>
            <div className="flex items-center gap-6">
              <img
                className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-blue-400"
                src={provider?.photoURL}
                referrerPolicy="no-referrer"
                alt="Provider"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold ">
                  {provider?.name}
                </h3>
                <p className="text-sm ">{provider?.service.serviceArea}</p>
              </div>
            </div>
          </div>

          {/* Book Service Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="px-4 py-2 w-full border-gray-300 bg-gradient-to-l from-blue-300 via-blue-400 to-blue-500 text-white font-semibold rounded hover:rounded-2xl shadow-lg hover:scale-105 hover:-rotate-[0.5deg] duration-500 hover:shadow-[_2px_2px_10px_rgb(0,0,0,0.5)]"
            >
              Book Service
            </button>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-6 sm:p-8 rounded-lg shadow-lg bg-white">
          <div className="flex flex-col items-center">
            <form onSubmit={handleBooked} className="w-full space-y-6">
              {/* Modal Heading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-500">
                Book Service
              </h2>

              {/* Service Details Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service ID */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Service ID
                  </label>
                  <input
                    type="text"
                    value={data._id}
                    name="serviceId"
                    readOnly
                    className="border border-gray-300 py-2 px-3 rounded text-sm bg-gray-100 text-gray-500"
                  />
                </div>

                {/* Service Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Service Name
                  </label>
                  <input
                    type="text"
                    value={provider?.service.serviceName}
                    name="serviceName"
                    readOnly
                    className="border border-gray-300 py-2 px-3 rounded text-sm bg-gray-100 text-gray-500"
                  />
                </div>
              </div>

              {/* Provider and User Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Provider Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Provider Name
                  </label>
                  <input
                    type="text"
                    value={provider?.name}
                    name="pName"
                    readOnly
                    className="border border-gray-300 py-2 px-3 rounded text-sm bg-gray-100 text-gray-500"
                  />
                </div>

                {/* User Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    User Name
                  </label>
                  <input
                    type="text"
                    value={user?.displayName}
                    name="uName"
                    readOnly
                    className="border border-gray-300 py-2 px-3 rounded text-sm bg-gray-100 text-gray-500"
                  />
                </div>
              </div>

              {/* Date and Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Date */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Service Date
                  </label>
                  <input
                    type="date"
                    name="sDate"
                    required
                    className="border border-gray-300 py-2 px-3 rounded text-sm"
                  />
                </div>

                {/* Service Area */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Service Area
                  </label>
                  <input
                    type="text"
                    name="area"
                    placeholder="Service Location"
                    required
                    className="border border-gray-300 py-2 px-3 rounded text-sm"
                  />
                </div>
              </div>

              {/* Price and Provider Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Price */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Service Price
                  </label>
                  <input
                    type="text"
                    value={provider?.service.servicePrice}
                    name="price"
                    readOnly
                    className="border border-gray-300 py-2 px-3 rounded text-sm bg-gray-100 text-gray-500"
                  />
                </div>

                {/* Provider Email */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Provider Email
                  </label>
                  <input
                    type="email"
                    value={provider?.email}
                    name="pEmail"
                    readOnly
                    className="border border-gray-300 py-2 px-3 rounded text-sm bg-gray-100 text-gray-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg shadow-md font-semibold hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
                Purchase
              </button>
            </form>
          </div>

          {/* Close Button */}
          <div className="modal-action">
            <button
              type="button"
              onClick={() => {
                document.getElementById("my_modal_5").close();
              }}
              className="py-2 px-4 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
              method="dialog"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>

      <ToastContainer />
    </div>
  );
};

export default ServiceDetails;
