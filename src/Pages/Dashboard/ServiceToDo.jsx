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
      <h1 className="flex flex-row gap-1 items-end">
        Service To Do{" "}
        {loading ? (
          <span className="loading-dots loading-sm"></span>
        ) : (
          bookedService.length
        )}
      </h1>
      <div>
        {bookedService.length > 0 ? (
          <ServiceTodoTable service={{ bookedService }} />
        ) : (
          <div>NO Service Available</div>
        )}
      </div>
    </div>
  );
};

export default ServiceToDo;
