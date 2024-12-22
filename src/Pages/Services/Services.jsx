import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { Link } from "react-router-dom";

const Services = () => {
  const { services } = useContext(AuthContext);
  return (
    <div>
      <div>
        <div className="w-full py-4 px-4">
          <form className="flex flex-row border rounded-lg">
            <input type="text" name="search" placeholder="Search service" />
            <input type="submit" value="Search" />
          </form>
          <select name="select"></select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {services.map((service) => (
          <div
            key={service._id}
            className="flex flex-row gap-4 *:flex-1 border shadow-xl"
          >
            <div key={service._id} className="flex flex-row gap-4 *:flex-1">
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
                  to={`/serviceDetails/${service._id}`}
                  className="px-4 py-2 bg-transparent hover:translate-x-2 hover:scale-105 border duration-500 inline-block hover:bg-green-500 hover:text-white"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
