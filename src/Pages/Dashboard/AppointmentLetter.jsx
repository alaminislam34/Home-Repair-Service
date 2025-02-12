import axios from "axios";
import { useEffect, useState } from "react";

const AppointmentLetter = () => {
  const [appoint, setAppoint] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/appointment`, {
        withCredentials: true,
      })
      .then((res) => {
        setAppoint(res.data);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold my-4 px-4">
        Appointment Letter ({appoint.length})
      </h1>
      <div className="overflow-x-auto mx-2 bg-white shadow-md rounded-lg">
        <table className="table w-full border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr className="text-lg font-medium">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {appoint.map((a, i) => {
              const appointmentDate = new Date(a.date);
              const currentDate = new Date();
              const isExpired = appointmentDate < currentDate;

              return (
                <tr
                  key={a._id}
                  className={`text-center border-b ${
                    isExpired ? "bg-red-100" : "bg-green-100"
                  }`}
                >
                  <td className="py-2 px-4">{i + 1}</td>
                  <td className="py-2 px-4 text-left font-medium">{a.name}</td>
                  <td className="py-2 px-4 text-left text-gray-600">
                    {a.email}
                  </td>
                  <td
                    className={`py-2 px-4 text-left  ${
                      isExpired ? "text-red-600 font-semibold" : ""
                    }`}
                  >
                    {a.date}
                  </td>
                  <td className="py-2 px-4 text-left">
                    <span
                      className={`px-2 py-1 text-sm rounded-lg ${
                        isExpired
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {isExpired ? "Expired" : "Upcoming"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentLetter;
