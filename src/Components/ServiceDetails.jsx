import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";

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
    const sDate = new Date(form.sDate.value);
    const price = form.price.value;
    const provideArea = form.area.value;
    console.table({
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
          <img src={provider?.service.serviceImgURL} alt="" />
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
              className="px-4 py-2 bg-transparent hover:translate-x-2 hover:scale-105 border duration-500 inline-block hover:bg-green-500 hover:text-white"
            >
              Details
            </button>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-center items-center">
            <form onSubmit={handleBooked}>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center my-2">
                Book Service
              </h2>
              <div className="flex w-full flex-row *:flex-1 gap-2 items-center *:border *:border-white *:w-full *:py-1 *:px-2 md:*:py-1.5 md:*:px-3">
                {/* service id */}
                <input
                  type="text"
                  value={data._id}
                  name="serviceId"
                  readOnly
                  className="input"
                />

                {/* service name */}
                <input
                  type="text"
                  name="serviceName"
                  value={provider?.service.serviceName}
                  readOnly
                  className="input my-2"
                />
              </div>
              <div className="flex w-full flex-row *:flex-1 gap-2 items-center *:border *:border-white *:w-full *:py-1 *:px-2 md:*:py-1.5 md:*:px-3">
                {/* service image */}
                <input
                  value={provider?.service.serviceImgURL}
                  name="serviceImg"
                  className="input my-2"
                  readOnly
                />
                {/* provider email  */}
                <input
                  type="email"
                  value={provider?.email}
                  name="pEmail"
                  readOnly
                  className="input my-2"
                />
              </div>
              <div className="flex w-full flex-row *:flex-1 gap-2 items-center *:border *:border-white *:w-full *:py-1 *:px-2 md:*:py-1.5 md:*:px-3">
                {/* provider name */}
                <input
                  type="text"
                  name="pName"
                  value={provider?.name}
                  readOnly
                  className="input my-2"
                />

                {/* user email  */}
                <input
                  type="email"
                  name="uEmail"
                  value={user?.email}
                  readOnly
                  className="input my-2"
                />
              </div>
              <div className="flex w-full flex-row *:flex-1 gap-2 items-center *:border *:border-white *:w-full *:py-1 *:px-2 md:*:py-1.5 md:*:px-3">
                {/* user name */}
                <input
                  type="text"
                  name="uName"
                  value={user?.displayName}
                  readOnly
                  className="input my-2"
                />

                {/* service date */}
                <input type="date" name="sDate" className="input my-2" />
              </div>
              <div className="flex w-full flex-row *:flex-1 gap-2 items-center *:border *:border-white *:w-full *:py-1 *:px-2 md:*:py-1.5 md:*:px-3">
                {/* service area */}
                <input
                  type="text"
                  name="area"
                  placeholder="Special Instructions"
                  className="textarea my-2"
                />

                {/* service price */}
                <input
                  type="text"
                  name="price"
                  value={provider?.service.servicePrice}
                  readOnly
                  className="input my-2"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Purchase
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
