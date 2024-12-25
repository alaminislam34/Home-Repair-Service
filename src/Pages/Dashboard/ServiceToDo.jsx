import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import ServiceTodoTable from "../../Components/ServiceTodoTable";

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
  return (
    <div>
      <div className="w-full h-full flex justify-center items-center my-4 md:my-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold py-2 inline text-center">
          Service To Do
        </h2>
      </div>

      {loading ? (
        <loading />
      ) : (
        <div>
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
