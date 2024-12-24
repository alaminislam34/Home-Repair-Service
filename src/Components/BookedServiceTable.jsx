/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";

const BookedServiceTable = ({ service }) => {
  const { theme } = useContext(AuthContext);
  const { booked } = service;

  return (
    <div className="md:w-11/12 md:mx-auto my-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Your Booked Services
      </h2>

      {booked.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 text-xl">
            You haven’t booked any services yet!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto  shadow-[_4px_4px_25px_1px_rgb(0,0,0,0.3)] rounded-xl m-4">
          <table className="table-auto w-full border-collapse border border-gray-300 ">
            <thead>
              <tr
                className={`${
                  theme === "light" ? "bg-blue-400" : "bg-blue-600"
                }`}
              >
                <th className="border border-gray-300 p-2 md:px-3 md:py-2 text-sm md:text-base text-center">
                  Service Image
                </th>
                <th className="border border-gray-300 p-2 md:px-3 md:py-2 text-sm md:text-base text-center">
                  Name
                </th>
                <th className="border border-gray-300 p-2 md:px-3 md:py-2 text-sm md:text-base text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {booked.map((book) => (
                <tr
                  key={book._id}
                  className={`hover:bg-gradient-to-bl ${
                    theme === "light"
                      ? "from-blue-100 via-blue-200 to-blue-300"
                      : "from-slate-500 via-slate-600  to-slate-700"
                  }`}
                >
                  <td className="border border-gray-300 p-2 md:px-3 md:py-2 text-sm md:text-base text-center">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={
                            book?.serviceImg ||
                            "https://via.placeholder.com/150"
                          }
                          alt="Service"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2 md:px-3 md:py-2 text-sm md:text-base text-center">
                    {book?.serviceName}
                  </td>
                  <td
                    className={`border border-gray-300 p-2 md:px-3 md:py-2 text-sm md:text-base text-center font-semibold ${
                      book?.serviceStatus === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {book?.serviceStatus === "Working"
                      ? `${book?.serviceStatus}...`
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
