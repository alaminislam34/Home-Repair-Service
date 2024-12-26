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
  console.log(myServices);

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
            console.log(res.data);
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
          .catch((error) => {
            console.log(error);
          })
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
      .catch((error) => {
        console.log(error);
      });
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
            className="grid gap-4 md:gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 md:py-6"
          >
            {myServices?.map((s, index) => (
              <motion.div
                key={s._id}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                }}
                className={`rounded-xl ${
                  theme === "light"
                    ? "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
                    : "bg-gradient-to-br from-gray-800 via-gray-900 to-black"
                } shadow-md transition-all duration-300`}
              >
                <div className="h-40 overflow-hidden rounded-t-lg">
                  <img
                    src={s?.provider.service.serviceImgURL}
                    alt="service"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {s?.provider.service.serviceName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {s?.provider.service.serviceArea}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {s?.provider.service.description.slice(0, 30)}...
                  </p>
                  <p className="mt-2 text-lg font-semibold text-green-600">
                    {s?.provider.service.servicePrice} ৳
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() => {
                        document.getElementById("my_modal_5").showModal();
                        setId(s?._id);
                      }}
                      className="px-3 py-2 text-sm border-gray-300 bg-gradient-to-l from-blue-400 via-blue-400 to-blue-500 text-white font-semibold rounded hover:rounded-2xl shadow-lg hover:scale-105 hover:-rotate-6 duration-500 hover:shadow-[_2px_2px_10px_rgb(0,0,0,0.5)] flex items-center justify-center gap-2"
                    >
                      Edit
                      <FaPen />
                    </button>
                    <button
                      onClick={() => handleDeleteService(s?._id)}
                      data-tip="Delete"
                      className="btn btn-outline btn-xs text-red-500 border-none bg-base-100 hover:bg-gradient-to-t from-red-400 to-red-500 tooltip tooltip-top"
                    >
                      X
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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
