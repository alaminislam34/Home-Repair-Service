import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import MyServicesTable from "../../Components/MyServicesTable";

const ManageService = () => {
  const [myServices, setMyServices] = useState([]);
  const [loader, setLoader] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const email = user.email;
    axios
      .get(`http://localhost:5000/allServices?email=${email}`, {
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
      <h1 className="flex items-end flex-row gap-2">
        Manage Service{" "}
        {loader ? (
          <span className="loading loading-dots loading-xs"></span>
        ) : (
          myServices.length
        )}
      </h1>
      <div>
        {loader ? (
          <div className="w-full h-[50vh] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <MyServicesTable service={{ myServices, setMyServices }} />
        )}
      </div>
    </div>
  );
};

export default ManageService;
