import { useContext } from "react";
import banner1 from "../../assets/Banner/banner1.jpg";
import { AuthContext } from "../../AuthContext/AuthProvider";
import Loader from "../../Components/Loader";
import { Link } from "react-router-dom";
const Home = () => {
  const { services, loader } = useContext(AuthContext);
  console.log(services);
  return (
    <div className="mb-32">
      <div className="w-full relative mb-36">
        <div className="h-[350px] md:h-[400px] lg:h-[500px]">
          <img
            className="w-full h-full object-cover bg-center bg-no-repeat"
            src={banner1}
            alt=""
          />
        </div>
        <div className="absolute -bottom-20 md:top-1/2 md:-translate-y-1/2 w-8/12 left-1/2 -translate-x-1/2 md:translate-x-0 md:w-2/5 lg:w-1/4 md:left-0 flex flex-col gap-1 text-center p-2 md:p-4 rounded-xl bg-base-300/50 backdrop-blur-md space-y-2">
          <h2 className="text-base md:text-xl lg:text-2xl font-semibold">
            Bangladesh`s One-Stop Solution for Renovation & Interior Design.
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Explore Our Comprehensive Range of Services
          </p>
          <button className="py-2 px-4 bg-base-200 rounded duration-500 hover:-translate-x-1 hover:bg-green-400">
            See All Services
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {loader ? (
          <Loader />
        ) : services ? (
          services.map((service) => (
            <div key={service._id} className="flex flex-row gap-4 *:flex-1">
              <div>
                <img
                  className="aspect-square object-cover bg-center bg-cover bg-no-repeat w-full h-full"
                  src={service?.provider?.service.serviceImgURL}
                  alt=""
                />
              </div>
              <div>
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
                <p>{service?.provider.service.servicePrice} ৳</p>

                <Link
                  to={`/serviceDetails/${service._id}`}
                  className="px-4 py-2 bg-transparent hover:translate-x-2 hover:scale-105 border duration-500 inline-block hover:bg-green-500 hover:text-white"
                >
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
