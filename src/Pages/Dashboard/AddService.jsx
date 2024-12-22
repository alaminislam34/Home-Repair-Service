import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthContext/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = useContext(AuthContext);
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

    axios.post("http://localhost:5000/addService", { provider }).then((res) => {
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
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleServiceAdd)}
        className="flex flex-col p-4 md:p-6 rounded-lg gap-2 border shadow-xl w-10/12 sm:w-8/12 md:w-6/12 mx-auto"
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold my-2 md:my-4 text-center">
          Add Service
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
          <label htmlFor="service description">Service Description</label>
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
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
