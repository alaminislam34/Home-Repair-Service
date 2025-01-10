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
    <div>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold my-4 px-4">
        Appointment Letter {appoint.length}
      </h1>
      <div className="overflow-x-auto mx-2">
        <table className="table rounded-xl overflow-hidden">
          {/* head */}
          <thead className="bg-blue-400">
            <tr className="text-black font-normal text-base">
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Confirm</th>
            </tr>
          </thead>
          <tbody>
            {appoint.map((a, i) => (
              <tr key={a._id} className="bg-base-200">
                <td>{i + 1}</td>
                <td>
                  {a.name}
                  <span className="text-xs md:text-sm">{a.email}</span>
                </td>
                <td>{a.date}</td>
                <td>
                  <button>Ok</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentLetter;
