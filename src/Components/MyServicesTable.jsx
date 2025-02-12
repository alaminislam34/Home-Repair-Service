import { FaPen } from "react-icons/fa";
import { motion } from "motion/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthContext/AuthProvider";
import Loader from "./Loader";

/* eslint-disable react/prop-types */
const MyServicesCard = ({ service }) => {
  const { user, theme } = useContext(AuthContext);
  const { myServices, setMyServices } = service;
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 },
    }),
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      serviceImgURL: "",
      serviceName: "",
      serviceArea: "",
      servicePrice: 0,
      description: "",
    },
  });

  // handle delete service
  const handleDeleteService = (id) => {
    setLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_URL}/deleteService/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted",
                text: "Service Deleted Successfully",
                icon: "success",
              });

              const remainingService = myServices.filter((s) => s._id !== id);
              setMyServices(remainingService);
            }
          })
          .catch(() => {})
          .finally(() => {
            setLoading(false);
          });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Service delete cancelled",
          icon: "success",
        });
        setLoading(false);
      }
    });
  };

  // handleUpdatedService
  const updateService = (e) => {
    const service = e;
    const { displayName: name, email, photoURL } = user;
    const provider = { name, email, photoURL, service };
    axios
      .put(
        `${import.meta.env.VITE_URL}/updateService/${id}`,
        { provider },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        document.getElementById("my_modal_5").close();
        reset();
        Swal.fire({
          title: "Success",
          text: "Service Updated Successfully",
          icon: "success",
        });
      })
      .catch(() => {});
  };

  return (
    <div>
      {loading ? (
        <div className="w-full h-[300px] flex justify-center items-center ">
          <Loader />
        </div>
      ) : (
        <div className="p-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="py-4 md:py-6 overflow-x-auto"
          >
            <table className="w-full border-collapse table border border-gray-300">
              <thead>
                <tr className="bg-gray-500 text-white">
                  <th className="border border-gray-300 px-4 py-2">Image</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Service Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Area</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Description
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myServices?.map((s, index) => (
                  <tr key={s._id} className="*:truncate">
                    <td className="border border-gray-300 px-4 py-2">
                      <img
                        src={s?.provider.service.serviceImgURL}
                        alt="service"
                        className="h-16 w-16 object-cover rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {s?.provider.service.serviceName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {s?.provider.service.serviceArea}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {s?.provider.service.description.slice(0, 30)}...
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">
                      {s?.provider.service.servicePrice} ৳
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            document.getElementById("my_modal_5").showModal();
                            setId(s?._id);
                          }}
                          className="px-3 py-1 text-sm border-gray-300 bg-blue-500 text-white font-semibold rounded hover:scale-105 duration-300 flex items-center gap-2"
                        >
                          Edit <FaPen />
                        </button>
                        <button
                          onClick={() => handleDeleteService(s?._id)}
                          className="px-3 py-1 text-sm border-none bg-red-500 text-white font-semibold rounded hover:scale-105 duration-300"
                        >
                          X
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form
                onSubmit={handleSubmit(updateService)}
                className="flex flex-col p-4 md:p-6 rounded-lg gap-2 border shadow-xl"
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold my-2 md:my-4 text-center">
                  Update Service
                </h3>
                {/* Services image url */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="imageURL">Image URL</label>
                  <input
                    className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg border"
                    type="text"
                    {...register("serviceImgURL", {
                      required: "Service image is required",
                    })}
                  />
                  {errors?.serviceImgURL ? (
                    <small>{errors.serviceImgURL.message}</small>
                  ) : (
                    ""
                  )}
                </div>
                {/* Service name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="imageURL">Service Name</label>
                  <input
                    className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg border"
                    type="text"
                    {...register("serviceName", {
                      required: "Service name is required",
                    })}
                  />
                  {errors?.serviceName ? (
                    <small>{errors.serviceName.message}</small>
                  ) : (
                    ""
                  )}
                </div>
                {/* Service are */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="imageURL">Service Area</label>
                  <input
                    className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg border"
                    type="text"
                    {...register("serviceArea", {
                      required: "Service area is required",
                    })}
                  />
                  {errors?.serviceArea ? (
                    <small>{errors.serviceArea.message}</small>
                  ) : (
                    ""
                  )}
                </div>
                {/* Service price */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="servicePrice">Service Price</label>
                  <input
                    className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg border"
                    type="number"
                    {...register("servicePrice", {
                      required: "Service Price is required",
                      valueAsNumber: true,
                    })}
                  />
                  {errors?.servicePrice ? (
                    <small>{errors.servicePrice.message}</small>
                  ) : (
                    ""
                  )}
                </div>
                {/* service description */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="service description">
                    Service Description
                  </label>
                  <input
                    className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg border"
                    type="text"
                    {...register("description", {
                      required: "Service description is required",
                    })}
                  />
                  {errors?.description ? (
                    <small>{errors.description.message}</small>
                  ) : (
                    ""
                  )}
                </div>
                <button type="submit" className="btn w-full">
                  {" "}
                  Update
                </button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default MyServicesCard;
