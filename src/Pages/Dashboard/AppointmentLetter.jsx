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
      <h1>Appointment {appoint.length}</h1>
      <div className="overflow-x-auto mx-2">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-500">
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Confirm</th>
            </tr>
          </thead>
          <tbody>
            {appoint.map((a, i) => (
              <tr key={a._id} className="bg-base-200">
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
