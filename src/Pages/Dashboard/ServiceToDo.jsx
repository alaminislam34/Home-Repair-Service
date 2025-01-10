import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import ServiceTodoTable from "./ServiceTodoTable";
import Aos from "aos";
// import ServiceTodoTable from "../../Components/ServiceTodoTable";

const ServiceToDo = () => {
  const { user } = useContext(AuthContext);
  const [bookedService, setBookedService] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${import.meta.env.VITE_URL}/bookedService?provider=${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setLoading(false);
        setBookedService(res.data);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [user]);

  useEffect(() => {
    Aos.init({
      offset: 200,
      once: true,
    });
    Aos.refresh();
  }, [bookedService]);
  return (
    <div>
      <div className="w-full h-full flex justify-center items-center my-4 md:my-6">
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
          className="text-2xl md:text-3xl lg:text-4xl font-semibold py-2 inline text-center"
        >
          Service To Do
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center my-5">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
        >
          {bookedService.length > 0 ? (
            <ServiceTodoTable service={{ bookedService }} />
          ) : (
            <div className="flex justify-center items-center text-xl">
              No booked services available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceToDo;
