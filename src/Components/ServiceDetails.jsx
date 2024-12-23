import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

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
      <div>
        <h2 className="my-4 md:my-8 lg:my-12 text-center text-xl md:text-2xl lg:text-3xl font-bold">
          {provider?.service.serviceName}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 md:my-8 lg:my-12">
        <div className="md:col-span-2">
          <img
            className="w-full h-full"
            src={provider?.service.serviceImgURL}
            alt=""
          />
        </div>
        <div className="space-y-2 p-4">
          <p className="">{provider?.service.description}</p>
          <p>{provider?.service.servicePrice}</p>
          <div>
            <h3 className="text-lg font-semibold">Service Provider </h3>
            <div className="flex flex-row items-center gap-4">
              <h3>{provider?.name}</h3>
              <img
                className="w-16 h-16 rounded-full object-cover bg-center border-2 border-accent"
                src={provider?.photoURL}
                alt=""
              />
            </div>
            <p>{provider?.service.serviceArea}</p>
          </div>
          <div>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="px-4 py-2 bg-transparent hover:scale-105 border duration-500 inline-block hover:bg-green-500 hover:text-white"
            >
              Book Service
            </button>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-center items-center">
            <form onSubmit={handleBooked} className="w-full">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center my-2">
                Book Service
              </h2>
              <div className="flex w-full flex-row *:flex-1 gap-3 items-center *:w-full">
                {/* service id */}
                <div className="flex flex-col">
                  <span>Service Id</span>
                  <input
                    type="text"
                    value={data._id}
                    name="serviceId"
                    readOnly
                    className={` border py-1.5 rounded px-3 text-sm  text-gray-400`}
                  />
                </div>
                {/* service name */}
                <div className="flex flex-col">
                  <span>Service Name</span>
                  <input
                    type="text"
                    name="serviceName"
                    value={provider?.service.serviceName}
                    readOnly
                    className={` border py-1.5 px-3 rounded text-sm my-2 text-gray-400`}
                  />
                </div>
              </div>
              <div className="flex w-full flex-row *:flex-1 gap-2 items-center *:w-full">
                {/* service image */}
                <div className="flex flex-col">
                  <span>Service Image</span>
                  <input
                    value={provider?.service.serviceImgURL}
                    name="serviceImg"
                    className={` border py-1.5 px-3 rounded text-sm my-2 text-gray-400`}
                    readOnly
                  />
                </div>
                {/* provider email  */}
                <div className="flex flex-col">
                  <span>Provider Email</span>
                  <input
                    type="email"
                    value={provider?.email}
                    name="pEmail"
                    readOnly
                    className={` border py-1.5 px-3 rounded text-sm  my-2 text-gray-400`}
                  />
                </div>
              </div>
              <div className="flex w-full flex-row *:flex-1 gap-2 items-center *:w-full">
                {/* provider name */}
                <div className="flex flex-col">
                  <span>Provider Name</span>
                  <input
                    type="text"
                    name="pName"
                    value={provider?.name}
                    readOnly
                    className={` border py-1.5 px-3 rounded text-sm  my-2 text-gray-400`}
                  />
                </div>
                {/* user email  */}
                <div className="flex flex-col">
                  <span>User Email</span>
                  <input
                    type="email"
                    name="uEmail"
                    value={user?.email}
                    readOnly
                    className={` border py-1.5 px-3 rounded text-sm  my-2 text-gray-400`}
                  />
                </div>
              </div>
              <div className="flex w-full flex-row *:flex-1 gap-2 items-center *:w-full">
                {/* user name */}
                <div className="flex flex-col">
                  <span>User Name </span>
                  <input
                    type="text"
                    name="uName"
                    value={user?.displayName}
                    readOnly
                    className={` border py-1.5 px-3 rounded text-sm  my-2 text-gray-400`}
                  />
                </div>

                {/* service date */}
                <div className="flex flex-col">
                  <span>Service Date</span>
                  <input
                    type="date"
                    name="sDate"
                    className={` border py-1.5 px-3 rounded text-sm  my-2 text-gray-400`}
                    required
                  />
                </div>
              </div>
              <div className="flex w-full flex-row *:flex-1 gap-2 items-center *:w-full">
                {/* service area */}
                <div className="flex flex-col">
                  <span>Service Area</span>
                  <input
                    type="text"
                    name="area"
                    placeholder="Special Instructions"
                    className={` border py-1.5 px-3 rounded text-sm  my-2 text-gray-400`}
                    required
                  />
                </div>
                {/* service price */}
                <div className="flex flex-col">
                  {" "}
                  <span>Service Price</span>
                  <input
                    type="text"
                    name="price"
                    value={provider?.service.servicePrice}
                    readOnly
                    className={` border py-1.5 px-3 rounded text-sm  my-2 text-gray-400`}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Purchase
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <ToastContainer />
    </div>
  );
};

export default ServiceDetails;
