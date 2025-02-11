/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { FaRegSadTear } from "react-icons/fa"; // Empty State Icon

const BookedServiceTable = ({ service }) => {
  const { theme } = useContext(AuthContext);
  const { booked } = service;

  return (
    <div className="md:w-11/12 md:mx-auto my-6">
      {booked.length === 0 ? (
        <div className="text-left py-10">
          <FaRegSadTear className="text-gray-400 text-5xl mx-auto mb-3" />
          <p className="text-gray-600 text-xl font-semibold">
            You haven't booked any services yet.
          </p>
          <p className="text-gray-500 text-sm">
            Explore our services and get started today!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-xl m-4">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr
                className={`${
                  theme === "light" ? "bg-blue-400" : "bg-blue-600"
                } text-white`}
              >
                <th className="p-3 text-left">Service Image</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {booked.map((book) => (
                <tr
                  key={book._id}
                  className={`hover:bg-gradient-to-bl border-b`}
                >
                  <td className="p-3 text-left">
                    <div className="avatar">
                      <div className="rounded-full w-12 h-12">
                        <img
                          src={
                            book?.serviceImg ||
                            "https://via.placeholder.com/150"
                          }
                          alt="Service"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-left">{book?.serviceName}</td>
                  <td
                    className={`p-3 text-left ${
                      book?.serviceStatus === "Completed"
                        ? "text-green-600"
                        : book?.serviceStatus === "Working"
                        ? "text-blue-500 animate-pulse"
                        : "text-yellow-600"
                    }`}
                  >
                    {book?.serviceStatus === "Working"
                      ? `⏳ ${book?.serviceStatus}...`
                      : book?.serviceStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookedServiceTable;
