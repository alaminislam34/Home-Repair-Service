import axios from "axios";

/* eslint-disable react/prop-types */
const ServiceTodoTable = ({ service }) => {
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
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service Image</th>
              <th>Name</th>
              <th>Status</th>
              <th></th>
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
                <td>{book?.serviceName}</td>
                <td>
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
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceTodoTable;
