import { useContext, useEffect } from "react";
import banner1 from "../../assets/Banner/banner1.jpg";
import { AuthContext } from "../../AuthContext/AuthProvider";
import Loader from "../../Components/Loader";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import OurServices from "../../Components/OurServices";
import OurClients from "../../Components/OurClients";

const Home = () => {
  const { services, loader, setId, theme } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(services);

  useEffect(() => {
    Aos.init({
      offset: 200,
      once: true,
    });
  }, []);
  return (
    <div className="mb-12 md:mb-20">
      <div className="w-full relative">
        <div className="h-[350px] md:h-[400px] lg:h-[500px]">
          <img
            className="w-full h-full object-cover bg-center bg-no-repeat"
            src={banner1}
            alt=""
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-transparent/60">
          <div className="flex flex-col gap-2 md:gap-4 text-center text-wrap text-white px-4">
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="text-2xl md:text-3xl lg:text-5xl font-bold lg:w-9/12 mx-auto text-center tracking-wide leading-relaxed"
            >
              Bangladesh`s One-Stop Solution for Renovation & Interior Design.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1150"
              data-aos-easing="ease-in-out"
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300"
            >
              Explore Our Comprehensive Range of Services
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1100"
              data-aos-easing="ease-in-out"
            >
              <button
                onClick={() => navigate("/services")}
                className="px-4 py-2 md:py-2.5 border-gray-300 bg-gradient-to-l from-blue-300 via-blue-400 to-blue-500 text-white font-semibold rounded hover:rounded-2xl shadow-lg hover:scale-105 hover:-rotate-3 duration-500 hover:shadow-[_2px_2px_10px_rgb(0,0,0,0.5)]"
              >
                See All Services
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1500"
        className="mx-4 flex justify-center items-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold border-b-2 border-blue-500 inline-block py-2 mt-8 md:mt-12">
          Our Popular Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 lg:gap-6 my-6 mx-4 border-t-2 py-8">
        {loader ? (
          <div className="md:col-span-2">
            <Loader />
          </div>
        ) : services.length > 0 ? (
          services?.slice(0, 6).map((service, i) => (
            <div
              // data-aos="fade-up"
              // data-aos-duration="1200"
              // data-aos-delay={`${i + 400}`}
              key={service._id}
              className={`grid grid-cols-1 lg:grid-cols-5 shadow-xl hover:shadow-2xl overflow-hidden ${
                theme === "light"
                  ? "bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300"
                  : "bg-gradient-to-br from-gray-800 via-gray-900 to-black"
              } rounded-lg transition-transform duration-500`}
            >
              <div className="lg:col-span-3 overflow-hidden">
                <img
                  className="aspect-video object-cover bg-center bg-cover bg-no-repeat w-full h-full transition-transform duration-500 hover:scale-110"
                  src={service?.provider?.service.serviceImgURL}
                  alt=""
                />
              </div>
              <div className="p-4 lg:col-span-2 flex flex-col justify-between">
                <div>
                  {/* service name */}
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                    {service?.provider?.service.serviceName}
                  </h2>
                  {/* service description */}
                  <p className="text-sm md:text-[15px] text-gray-500">
                    {service?.provider?.service.description.slice(0, 80)}
                  </p>
                  <p className="text-green-600 font-semibold">
                    {service?.provider.service.servicePrice} ৳
                  </p>
                </div>
                <div>
                  <p>Service Provider</p>
                  {/* service provider */}
                  <div className="flex flex-row gap-4 items-center mt-2">
                    <img
                      className="w-8 h-8 md:w-10 md:h-10 hover:rotate-12 duration-500 hover:scale-110 rounded-full object-cover bg-center border-2 border-accent"
                      src={service?.provider.photoURL}
                      referrerPolicy="no-referrer"
                    />
                    <h4>{service?.provider.name}</h4>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => {
                        setId(service._id);
                        navigate(`/serviceDetails/${service._id}`);
                      }}
                      className="px-4 py-2 border-gray-300 bg-gradient-to-l from-blue-300 via-blue-400 to-blue-500 text-white font-semibold rounded hover:rounded-2xl shadow-lg hover:scale-105 hover:-rotate-3 duration-500 hover:shadow-[_2px_2px_10px_rgb(0,0,0,0.5)]"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-[200px] flex justify-center items-center text-xl md:text-2xl lg:text-3xl font-semibold md:col-span-2">
            No Service Available
          </div>
        )}
      </div>
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={() => navigate("/services")}
          className="px-4 py-2 border-gray-300 bg-gradient-to-l from-blue-300 via-blue-400 to-blue-500 text-white font-semibold rounded hover:rounded-2xl shadow-lg hover:scale-105 hover:-rotate-3 duration-500 hover:shadow-[_2px_2px_10px_rgb(0,0,0,0.5)]"
        >
          See All Services
        </button>
      </div>
      <br />
      <div className="">
        <br />
        <OurServices />
        <br />
        <OurClients />
      </div>
    </div>
  );
};

export default Home;
