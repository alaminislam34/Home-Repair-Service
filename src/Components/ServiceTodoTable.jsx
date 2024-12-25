import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";

/* eslint-disable react/prop-types */
const ServiceTodoTable = ({ service }) => {
  const { theme } = useContext(AuthContext);
  const handleStatus = (e, id) => {
    const status = e.target.value;

    console.log(status, id);
    axios
      .patch(
        `${import.meta.env.VITE_URL}/statusChange/${id}`,
        { status },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  const { bookedService: booked } = service;
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <div className="overflow-x-auto rounded-lg">
        <table className="table">
          <thead>
            <tr
              className={`${theme === "light" ? "bg-blue-400" : "bg-blue-600"}`}
            >
              <th>Service</th>
              <th>Name</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {booked.map((book) => (
              <tr key={book._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={book?.serviceImg} alt="Service" />
                    </div>
                  </div>
                </td>
                <td className="text-xs md:text-sm">{book?.serviceName}</td>
                <td className="text-xs md:text-sm">
                  <select
                    defaultValue={"Pending"}
                    onChange={(e) => handleStatus(e, book._id)}
                    name="status"
                  >
                    <option value={"Pending"} selected>
                      Pending
                    </option>
                    <option value={"Working"}>Working</option>
                    <option value={"Completed"}>Completed</option>
                  </select>
                </td>
                <td className="text-green-500 font-semibold text-xs md:text-sm">
                  {book?.price} ৳
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceTodoTable;
