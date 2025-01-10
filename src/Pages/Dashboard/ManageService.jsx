import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import MyServicesTable from "../../Components/MyServicesTable";
import serviceImage from "../../assets/Banner/service.jpg";
import PageBanner from "../../Components/pageBanner/PageBanner";

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
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4">
        Manage Services
      </h1>
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
