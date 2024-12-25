import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logos/Blogo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import userImage from "../assets/logos/user.jpg";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "motion/react";
import "../../src/index.css";
import { IoMdLogOut } from "react-icons/io";
const Navbar = () => {
  const { user, handleLogout, id, setTheme, theme } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [light, setLight] = useState(true);
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  // handle page theme mode
  const handleTheme = () => {
    setLight(!light);
  };

  // set page title
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "HomeRepairBD";
        break;
      case "/login":
        document.title = "Login Page";
        break;
      case "/register":
        document.title = "Register Page";
        break;
      case "/services":
        document.title = "All Services";
        break;
      case "/addService":
        document.title = "Add Service";
        break;
      case `/serviceDetails/${id}`:
        document.title = "Service Details";
        break;
      case `/manageService`:
        document.title = "Manage Service";
        break;
      case `/bookedServices`:
        document.title = "Booked Services";
        break;
      case `/serviceToDo`:
        document.title = "Service To Do";
        break;
      case `/*`:
        document.title = "Page Not Founded";
        break;
    }
  }, [location.pathname, id]);

  const handleDropdownOpen = () => setIsOpen(true);

  const handleDropdownClose = () => setIsOpen(false);

  const menu = (
    <>
      <li className="hover:scale-105 transition duration-500 hover:-translate-y-1 hover:shadow-[_2px_2px_6px_rgb(0,0,0,0.5)] py-1 px-2 rounded-lg">
        <NavLink to="/" className="text-sm md:text-base">
          Home
        </NavLink>
      </li>
      <li className="hover:scale-105 transition duration-500 hover:-translate-y-1 hover:shadow-[_2px_2px_6px_rgb(0,0,0,0.5)] py-1 px-2 rounded-lg">
        <NavLink to="/services" className="text-sm md:text-base">
          Services
        </NavLink>
      </li>
      <li className="hover:scale-105 transition duration-500 hover:-translate-y-1 hover:shadow-[_2px_2px_6px_rgb(0,0,0,0.5)] py-1 px-2 rounded-lg">
        <NavLink to="/aboutUs" className="text-sm md:text-base">
          About Us
        </NavLink>
      </li>
      <div
        className="relative"
        onMouseEnter={handleDropdownOpen}
        onMouseLeave={handleDropdownClose}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`transition duration-500 hover:scale-105 hover:-translate-y-1.5 hover:shadow-[_2px_2px_6px_rgb(0,0,0,0.5)]  py-2 px-4 rounded-lg`}
        >
          Dashboard
        </button>
        {isOpen && (
          <div
            className={`absolute left-0 w-48 md:w-52 rounded-lg shadow-lg z-50 ${
              theme === "light"
                ? "bg-white text-black"
                : "bg-gray-900 text-white"
            }`}
          >
            <ul className="flex flex-col p-4">
              <li
                className="hover:scale-105 transition duration-500 hover:-translate-y-1 hover:shadow-[_2px_2px_6px_rgb(0,0,0,0.5)] py-2 px-4 rounded-lg text-sm md:text-base"
                onClick={() => setIsOpen(false)}
              >
                <NavLink to="/addService">Add Service</NavLink>
              </li>
              <li
                className="hover:scale-105 transition duration-500 hover:-translate-y-1 hover:shadow-[_2px_2px_6px_rgb(0,0,0,0.5)] py-2 px-4 rounded-lg text-sm md:text-base"
                onClick={() => setIsOpen(false)}
              >
                <NavLink to="/manageService">Manage Service</NavLink>
              </li>
              <li
                className="hover:scale-105 transition duration-500 hover:-translate-y-1 hover:shadow-[_2px_2px_6px_rgb(0,0,0,0.5)] py-2 px-4 rounded-lg text-sm md:text-base"
                onClick={() => setIsOpen(false)}
              >
                <NavLink to="/bookedServices">Booked Service</NavLink>
              </li>
              <li
                className="hover:scale-105 transition duration-500 hover:-translate-y-1 hover:shadow-[_2px_2px_6px_rgb(0,0,0,0.5)] py-2 px-4 rounded-lg text-sm md:text-base"
                onClick={() => setIsOpen(false)}
              >
                <NavLink to="/serviceToDo">Service ToDo</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );

  // handle sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full transition-all duration-500 z-50 ${
        isSticky
          ? "sticky top-0 z-50 shadow-md backdrop-blur-lg bg-base-200"
          : "relative"
      }`}
    >
      {/* navbar */}
      <div
        className={`navbar max-w-7xl mx-auto py-4 transition-all duration-300 `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <motion.div
              tabIndex={0}
              whileHover={{ scale: 1.1 }}
              role="button"
              className="lg:hidden mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </motion.div>
            <ul
              tabIndex={0}
              className="flex flex-col dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 md:w-44 p-2 shadow gap-4"
            >
              {menu}
            </ul>
          </div>
          <motion.div className="flex flex-row gap-2 items-center">
            <img className="w-10 h-10 md:w-14 md:h-14" src={logo} alt="" />
            <button
              onClick={() => navigate("/")}
              className="text-base sm:text-xl md:text-2xl font-bold"
            >
              Repair<span className="text-blue-500">Mate</span>
            </button>
          </motion.div>
        </div>

        {/* navbar center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-row items-center px-1 gap-4">{menu}</ul>
        </div>

        {/* navbar end */}
        <div className="navbar-end">
          <div>
            <button
              onClick={handleTheme}
              className="text-lg flex items-center justify-center m-2 hover:bg-base-300 rounded-lg"
            >
              {light ? (
                <MdLightMode
                  className="w-full h-full"
                  onClick={() => {
                    setTheme("dark");
                  }}
                />
              ) : (
                <MdDarkMode
                  className="w-full h-full"
                  onClick={() => {
                    setTheme("light");
                  }}
                />
              )}
            </button>
          </div>
          {/* user section */}
          {user ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-center bg-cover border-2 border-blue-500"
                src={user?.photoURL ? user.photoURL : userImage}
                alt=""
                referrerPolicy="no-referrer"
              />
              <button
                onClick={handleLogout}
                className="px-2 md:px-3 py-1.5 text-sm ml-2 border-gray-300 bg-gradient-to-l from-red-300 via-red-400 to-red-500 text-white font-semibold rounded hover:rounded-2xl shadow-lg hover:scale-105 hover:-rotate-6 duration-500 hover:shadow-[_2px_2px_10px_rgb(0,0,0,0.5)]"
              >
                <span className="hidden sm:flex">Logout</span>{" "}
                <span className="sm:hidden">
                  <IoMdLogOut />{" "}
                </span>
              </button>
            </motion.div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 border-gray-300 bg-gradient-to-l from-blue-300 via-blue-400 to-blue-500 text-white font-semibold rounded hover:rounded-2xl shadow-lg hover:scale-105 hover:-rotate-6 duration-500 hover:shadow-[_2px_2px_10px_rgb(0,0,0,0.5)]"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
