/* eslint-disable react/prop-types */
const BookedServiceTable = ({ service }) => {
  const { booked } = service;
  console.log(booked);

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
                <td
                  className={`${
                    book?.serviceStatus === "Completed"
                      ? "text-green-600 font-semibold"
                      : ""
                  }`}
                >
                  {book?.serviceStatus === "Working"
                    ? book?.serviceStatus + "..."
                    : book?.serviceStatus}
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

export default BookedServiceTable;
