import { FaPen } from "react-icons/fa";
import { motion } from "motion/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

/* eslint-disable react/prop-types */
const MyServicesCard = ({ service }) => {
  const { myServices, setMyServices } = service;
  const [loading, setLoading] = useState(false);
  console.log(myServices);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 },
    }),
  };

  // handle delete service
  const handleDeleteService = (id) => {
    setLoading(true); // Start loading when the delete process starts
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
          .delete(`http://localhost:5000/deleteService/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted",
                text: "Service Deleted Successfully",
                icon: "success",
              });

              // Remove the deleted service from the myServices array
              const remainingService = myServices.filter((s) => s._id !== id);
              setMyServices(remainingService); // Update the state after successful deletion
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false); // End loading after the deletion process completes
          });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Service delete cancelled",
          icon: "success",
        });
        setLoading(false); // End loading if the user cancels the action
      }
    });
  };

  return (
    <div>
      {loading ? (
        <div className="w-full h-[300px] flex justify-center items-center ">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="p-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
                className="rounded-lg border bg-white shadow-md transition-all duration-300"
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
                    {s?.provider.service.description.slice(0, 50)}...
                  </p>
                  <p className="mt-2 text-lg font-semibold text-green-600">
                    {s?.provider.service.servicePrice} ৳
                  </p>
                  <div className="mt-4 flex justify-between">
                    <button className="btn btn-outline btn-xs flex items-center gap-1">
                      <FaPen /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteService(s?._id)}
                      className="btn btn-outline btn-xs text-red-500"
                    >
                      X
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MyServicesCard;
