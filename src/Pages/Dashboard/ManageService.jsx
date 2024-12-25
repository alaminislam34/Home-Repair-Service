import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import MyServicesTable from "../../Components/MyServicesTable";
import serviceImage from "../../assets/Banner/service.jpg";

const ManageService = () => {
  const [myServices, setMyServices] = useState([]);
  const [loader, setLoader] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const email = user.email;
    axios
      .get(`${import.meta.env.VITE_URL}/allServices?email=${email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyServices(res.data);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  }, [user]);
  return (
    <div>
      <div className="relative flex justify-center items-center h-[200px] md:h-[250px] lg:h-[300px] mb-6 md:mb-8">
        <img
          src={serviceImage}
          className="w-full h-full object-cover bg-cover bg-top"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start bg-black/60 pt-4 md:pt-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold py-2 inline text-center text-white">
            <span className="border-b-2">Dashboard</span>
            <br />
            <br />
            <span>Manage Services</span>
          </h2>
        </div>
      </div>
      <div className="border-t-2 mt-6 md:pt-8">
        {loader ? (
          <div className="w-full h-[50vh] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : myServices.length > 0 ? (
          <MyServicesTable service={{ myServices, setMyServices }} />
        ) : (
          <div className="text-xl text-center my-4">
            {" "}
            You have no services Added!
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageService;
