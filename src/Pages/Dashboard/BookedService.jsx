import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import axios from "axios";
import BookedServiceTable from "../../Components/BookedServiceTable";

const BookedService = () => {
  const { user } = useContext(AuthContext);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/bookedService?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);

        setBooked(res.data);
      });
  }, [user]);
  return (
    <div>
      <h1 className="flex flex-row gap-1 items-end">
        Booked Service{" "}
        {booked ? (
          booked.length
        ) : (
          <span className="loading loading-dots loading-xs"></span>
        )}
      </h1>
      <div>
        {booked ? (
          <BookedServiceTable service={{ booked }} />
        ) : (
          <div>No Book service</div>
        )}
      </div>
    </div>
  );
};

export default BookedService;
