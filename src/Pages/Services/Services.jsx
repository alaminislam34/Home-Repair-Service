import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";

const Services = () => {
  const { services, setServices, setId } = useContext(AuthContext);
  const [value, setValue] = useState("");

  // search data handle
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(value);
    axios
      .get(`${import.meta.env.VITE_URL}/allServices?search=${value}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
      });
  };
  return (
    <div>
      <div>
        <div className="w-full py-4 px-4">
          <form
            onSubmit={handleSearch}
            className="flex flex-row justify-center items-center border-b-2 border-base-300 p-4 rounded-lg"
          >
            <input
              className="border border-base-300 rounded-l-lg py-1.5 px-3 md:py-2 md:px-4"
              type="text"
              name="search"
              onChange={(v) => setValue(v.target.value)}
              value={value}
              placeholder="Search service"
            />
            <input
              className="border border-base-300 cursor-pointer bg-accent rounded-r-lg py-1.5 px-3 md:py-2 md:px-4"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 my-6 md:my-8 lg:my-12 m-4">
        {services.map((service) => (
          <div
            key={service._id}
            className="flex flex-col p-4 lg:flex-row gap-4 *:flex-1"
          >
            <div>
              <img
                className="aspect-square object-cover bg-center bg-cover bg-no-repeat w-full h-full"
                src={service?.provider?.service.serviceImgURL}
                alt=""
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4">
              {/* service name */}
              <h2>{service?.provider?.service.serviceName}</h2>
              {/* service description */}
              <p>{service?.provider?.service.description.slice(0, 100)}</p>
              {/* service provider */}
              <div className="flex flex-row gap-4 items-center">
                <img
                  className="w-14 h-14 rounded-full object-cover bg-center border-2 border-accent"
                  src={service?.provider.photoURL}
                  alt=""
                />
                <h4>{service?.provider.name}</h4>
              </div>
              <p>Service Area: {service?.provider.service.serviceArea}</p>
              <p> Price: {service?.provider.service.servicePrice} ৳</p>

              <Link
                onClick={() => setId(service._id)}
                to={`/serviceDetails/${service._id}`}
                className="px-4 py-2 bg-transparent hover:translate-x-2 hover:scale-105 border duration-500 inline-block hover:bg-green-500 hover:text-white"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
