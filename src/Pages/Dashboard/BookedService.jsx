import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import axios from "axios";
import BookedServiceTable from "../../Components/BookedServiceTable";
import serviceImage from "../../assets/Banner/service.jpg";
import PageBanner from "../../Components/pageBanner/PageBanner";

const BookedService = () => {
  const { user } = useContext(AuthContext);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/bookedService?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBooked(res.data);
      });
  }, [user]);
  return (
    <div>
      <PageBanner title={"Booked Services"} />
      <div className="flex justify-center items-center w-full min-h-80">
        {booked ? (
          <BookedServiceTable service={{ booked }} />
        ) : (
          <div> You haven`t booked any services yet!</div>
        )}
      </div>
    </div>
  );
};

export default BookedService;
