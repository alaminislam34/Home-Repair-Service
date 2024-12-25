import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import axios from "axios";
import BookedServiceTable from "../../Components/BookedServiceTable";
import serviceImage from "../../assets/Banner/service.jpg";

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
      <div className="relative flex justify-center items-center bg-cover object-cover bg-center lg:bg-top bg-no-repeat  h-[200px] md:h-[250px] lg:h-[300px] mb-6 md:mb-8">
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
            <span>Booked Services</span>
          </h2>
        </div>
      </div>
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
