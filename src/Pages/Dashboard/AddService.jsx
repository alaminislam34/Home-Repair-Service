import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthContext/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
  const { user, theme } = useContext(AuthContext);
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

  // handle add service
  const handleServiceAdd = (e) => {
    const service = e;
    const { displayName: name, email, photoURL } = user;
    const provider = { name, email, photoURL, service };

    axios
      .post(`${import.meta.env.VITE_URL}/addService`, { provider })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Service Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          reset();
        } else {
          Swal.fire({
            title: "Ops",
            text: "Service Added Failed",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="flex justify-center items-center my-6">
      <form
        onSubmit={handleSubmit(handleServiceAdd)}
        className={`flex flex-col gap-2 m-4 p-4 md:p-8 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto rounded-3xl ${
          theme === "light"
            ? "shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            : "shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]"
        }`}
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold my-2 md:my-4 text-center text-blue-500">
          Add Service
        </h3>
        {/* Services image url */}
        <div className="flex flex-col gap-1">
          <label className="text-base md:text-lg" htmlFor="imageURL">
            Image URL
          </label>
          <input
            className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg border-2 focus:border-blue-400 outline-none text-sm md:text-base bg-transparent"
            type="text"
            {...register("serviceImgURL", {
              required: "Service image is required",
            })}
          />
          {errors?.serviceImgURL ? (
            <small className="text-red-500 py-0.5">
              {errors.serviceImgURL.message}
            </small>
          ) : (
            ""
          )}
        </div>
        {/* Service name */}
        <div className="flex flex-col gap-1">
          <label className="text-base md:text-lg" htmlFor="imageURL">
            Service Name
          </label>
          <input
            className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg border-2 focus:border-blue-400 outline-none text-sm md:text-base bg-transparent"
            type="text"
            {...register("serviceName", {
              required: "Service name is required",
            })}
          />
          {errors?.serviceName ? (
            <small className="text-red-500 py-0.5">
              {errors.serviceName.message}
            </small>
          ) : (
            ""
          )}
        </div>
        {/* Service are */}
        <div className="flex flex-col gap-1">
          <label className="text-base md:text-lg" htmlFor="imageURL">
            Service Area
          </label>
          <input
            className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg border-2 focus:border-blue-400 outline-none text-sm md:text-base bg-transparent"
            type="text"
            {...register("serviceArea", {
              required: "Service area is required",
            })}
          />
          {errors?.serviceArea ? (
            <small className="text-red-500 py-0.5">
              {errors.serviceArea.message}
            </small>
          ) : (
            ""
          )}
        </div>
        {/* Service price */}
        <div className="flex flex-col gap-1">
          <label className="text-base md:text-lg" htmlFor="servicePrice">
            Service Price
          </label>
          <input
            className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg border-2 focus:border-blue-400 outline-none text-sm md:text-base bg-transparent"
            type="number"
            {...register("servicePrice", {
              required: "Service Price is required",
              valueAsNumber: true,
            })}
          />
          {errors?.servicePrice ? (
            <small className="text-red-500 py-0.5">
              {errors.servicePrice.message}
            </small>
          ) : (
            ""
          )}
        </div>
        {/* service description */}
        <div className="flex flex-col gap-1">
          <label className="text-base md:text-lg" htmlFor="service description">
            Service Description
          </label>
          <input
            className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg border-2 focus:border-blue-400 outline-none text-sm md:text-base bg-transparent"
            type="text"
            {...register("description", {
              required: "Service description is required",
            })}
          />
          {errors?.description ? (
            <small className="text-red-500 py-0.5">
              {errors.description.message}
            </small>
          ) : (
            ""
          )}
        </div>
        <button
          type="button"
          className={`text-blue-600 font-semibold underline text-end`}
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="btn my-2 w-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-white duration-500 hover:scale-105 hover:rotate-[0.5deg]"
          >
            {" "}
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
