import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logos/Blogo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      </li>

      <button className="relative ">
        <button onClick={handleDropdown} className="">
          Dashboard
        </button>
        {isOpen ? (
          <div
            className={`${
              isOpen ? "" : ""
            } overflow-hidden absolute top-10 left-0 flex flex-col gap-1 w-44 bg-none hover:bg-none`}
          >
            <ul className="list-none m-0 bg-none">
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
  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img className="w-16 h-16" src={logo} alt="" />
            <Link className="text-xl md:text-2xl font-bold">RepairMate</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 *:*:bg-none">{menu}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
