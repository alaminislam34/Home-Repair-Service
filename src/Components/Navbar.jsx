import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logos/Blogo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import userImage from "../assets/logos/user.jpg";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "motion/react";
import "../../src/index.css";
import { IoMdLogOut } from "react-icons/io";
const Navbar = () => {
  const { user, handleLogout, id, setTheme } = useContext(AuthContext);
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

  // handle dashboard dropdown
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>{" "}
      <button
        onClick={handleDropdown}
        className="relative z-50 font-medium rounded-lg px-2"
      >
        <span className="hover:text-red-500">Dashboard</span>
        {isOpen ? (
          <div
            className={`${
              isOpen ? "" : ""
            } overflow-hidden  backdrop-blur-lg absolute top-10 left-0 flex flex-col gap-2 p-4 w-40 md:w-44 bg-none hover:bg-none`}
          >
            <ul className="flex flex-col gap-1 justify-start text-left">
              <li onClick={() => setIsOpen(!open)}>
                <NavLink to="/addService">Add Service</NavLink>
              </li>
              <li onClick={() => setIsOpen(!open)}>
                <NavLink to="/manageService">Manage Service</NavLink>
              </li>
              <li onClick={() => setIsOpen(!open)}>
                <NavLink to="/bookedServices">Booked Service</NavLink>
              </li>
              <li onClick={() => setIsOpen(!open)}>
                <NavLink to="/serviceToDo">Service ToDo</NavLink>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </button>
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
    <motion.div
      data-aos="zoom-in-down"
      data-aos-delay="500"
      data-aos-duration="2000"
      className={`w-full transition-all duration-500 z-50 ${
        isSticky
          ? "sticky top-0 z-50 bg-white shadow-md backdrop-blur-lg"
          : "relative"
      }`}
    >
      {/* navbar */}
      <div
        className={`navbar bg-base-100 max-w-7xl mx-auto py-4 transition-all duration-300 `}
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
              className="text-lg sm:text-xl md:text-2xl font-bold"
            >
              RepairMate
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
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={handleTheme}
              className="text-lg sm:text-xl md:text-2xl flex items-center justify-center m-2 duration-1000"
            >
              {light ? (
                <MdLightMode
                  className="hover:scale-105"
                  onClick={() => {
                    setTheme("dark");
                  }}
                />
              ) : (
                <MdDarkMode
                  className="hover:scale-105"
                  onClick={() => {
                    setTheme("light");
                  }}
                />
              )}
            </motion.button>
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
                className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover bg-center bg-cover border-2 border-accent"
                src={user?.photoURL ? user.photoURL : userImage}
                alt=""
                referrerPolicy="no-referrer"
              />
              <button
                onClick={handleLogout}
                className="p-2 sm:py-1 md:py-2 sm:px-3 text-sm md:text-base rounded-lg bg-base-300 ml-2"
              >
                <span className="hidden sm:flex">Logout</span>{" "}
                <span className="sm:hidden">
                  {" "}
                  <IoMdLogOut />{" "}
                </span>
              </button>
            </motion.div>
          ) : (
            <Link to="/login">
              <motion.button className="btn btn-primary btn-sm md:btn-md">
                Login
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
