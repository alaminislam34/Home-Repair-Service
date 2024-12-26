import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader";
import banner from "../../assets/Banner/banner1.jpg";
import Aos from "aos";

const Services = () => {
  const { setId, loader, setLoader, theme } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [allService, setServices] = useState([]);
  const navigate = useNavigate();

  console.log(allService);

  useEffect(() => {
    setLoader(true);
    axios
      .get(`${import.meta.env.VITE_URL}/publicServices`, {
        withCredentials: true,
      })
      .then((res) => {
        setLoader(false);
        setServices(res.data);
        console.log(res.data);
      })
      .catch(() => {
        setLoader(false);
      });
  }, []);
  // search data handle
  const handleSearch = (e) => {
    e.preventDefault();
    setLoader(true);
    axios
      .get(`${import.meta.env.VITE_URL}/publicServices?search=${value}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);

        setServices(res.data);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };
  useEffect(() => {
    Aos.init({
      offset: 200,
      once: true,
    });
    Aos.refresh();
  }, [allService]);
  return (
    <div>
      <div>
        <div
          style={{ backgroundImage: `url(${banner})` }}
          className="flex justify-center items-center bg-cover object-cover bg-center lg:bg-top bg-no-repeat  h-[200px] md:h-[250px] lg:h-[300px]"
        >
          <div className="w-full h-full flex justify-center items-center bg-black/60">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold py-2 inline text-center text-gray-200">
              Our All Services
            </h2>
          </div>
        </div>
        <div className="w-10/12 mx-auto py-4">
          <form
            onSubmit={handleSearch}
            className="flex flex-row justify-center items-center border-b-2 border-base-300 p-4 rounded-lg"
          >
            <div className="">
              <input
                className="border border-blue-400 focus:border-blue- outline-none rounded-l-lg py-1.5 px-3 md:py-2 text-sm md:text-base"
                type="text"
                name="search"
                onChange={(v) => setValue(v.target.value)}
                value={value}
                placeholder="Search service"
              />
            </div>
            <div className="">
              <input
                className="border hover:scale-105 duration-500 overflow-hidden hover:shadow-xl border-base-300 cursor-pointer bg-blue-400 text-white rounded-r-lg py-1.5 px-3 md:py-2 md:px-4 "
                type="submit"
                value="Search"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 my-6 md:my-8 lg:my-12 m-4">
        {loader ? (
          <div className="md:col-span-2">
            <Loader />
          </div>
        ) : allService.length > 0 ? (
          allService?.map((service, i) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1200"
              data-aos-delay={`${i + 400}`}
              key={service._id}
              className={`grid grid-cols-1 lg:grid-cols-5 shadow-xl hover:shadow-2xl overflow-hidden ${
                theme === "light"
                  ? "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-black"
                  : "bg-gradient-to-br from-gray-800 via-gray-900 to-black"
              } rounded-lg transition-transform duration-500`}
            >
              <div className="lg:col-span-3 overflow-hidden">
                <img
                  className="aspect-video object-cover bg-center bg-cover bg-no-repeat hover:scale-105 transition-transform duration-500  w-full h-full"
                  src={service?.provider.service.serviceImgURL}
                  alt=""
                />
              </div>
              <div className="p-4 lg:col-span-2 flex flex-col justify-between">
                <div>
                  {/* service name */}
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                    {service?.provider.service.serviceName}
                  </h2>
                  {/* service description */}
                  <p className="text-sm md:text-[15px] text-gray-500">
                    {service?.provider.service.description.slice(0, 80)}
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
                      className="w-8 h-8 md:w-10 md:h-10 hover:rotate-12 duration-500 hover:scale-110 rounded-full object-cover bg-center border-2 border-blue-500"
                      src={service?.provider.photoURL}
                      referrerPolicy="no-referrer"
                    />
                    <h4>{service?.provider.name}</h4>
                  </div>

                  <div className="my-2">
                    <button
                      onClick={() => {
                        setId(service._id);
                        navigate(`/serviceDetails/${service._id}`);
                      }}
                      className="px-4 py-2 border-gray-300 bg-gradient-to-l from-blue-400 via-blue-400 to-blue-500 text-white font-semibold rounded hover:rounded-2xl shadow-lg hover:scale-105 hover:-rotate-6 duration-500 hover:shadow-[_2px_2px_10px_rgb(0,0,0,0.5)]"
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
      </div>{" "}
    </div>
  );
};

export default Services;
