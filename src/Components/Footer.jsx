import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { MdHome, MdOutgoingMail, MdWhatsapp } from "react-icons/md";
import logo from "../assets/logos/Blogo.png";
import { Link } from "react-router-dom";
import { FaPhoneFlip } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-6 bg-base-300 pt-8 md:pt-12">
      <div className="flex justify-center items-center">
        <div className="flex flex-row gap-2 items-center">
          <img className="w-10 h-10 md:w-14 md:h-14" src={logo} alt="" />
          <button
            onClick={() => navigate("/")}
            className="text-base sm:text-xl md:text-2xl font-bold"
          >
            Repair<span className="text-blue-500">Mate</span>
          </button>
        </div>
      </div>
      <footer className="flex flex-wrap justify-between gap-4 md:gap-10 lg:gap-6 p-6 md:p-10 py-6 max-w-7xl mx-auto">
        <div className="flex flex-col justify-start">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">About Us</h3>
          <p className="text-xs md:text-sm w-[250px] md:w-[300px]">
            Discover who we are! We are dedicated to delivering exceptional
            services, prioritizing customer satisfaction, innovation, and
            professional expertise every day.
          </p>
        </div>
        <div className="flex flex-col justify-start gap-3 list-none">
          <h6 className="text-lg md:text-xl font-medium">Services</h6>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block">Electrical Work</p>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block">Plumbing Work</p>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block">Deep Cleaning</p>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block">Painting & Polishing</p>
          </li>
        </div>
        <div className="flex flex-col justify-start gap-3 list-none">
          <h6 className="text-lg md:text-xl font-medium">Use Links</h6>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <Link to="/" className="inline-block hover:underline">
              Home
            </Link>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <Link to="/services" className="inline-block hover:underline">
              Services
            </Link>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <Link to="/aboutUs" className="inline-block hover:underline">
              About Us
            </Link>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <Link to="/manageService" className="inline-block hover:underline">
              Manage Services
            </Link>
          </li>
        </div>
        <div className="flex flex-col justify-start gap-3 list-none">
          <h6 className="">Address</h6>
          <li className="text-xs md:text-sm">
            <p className=" flex flex-row gap-1">
              <FaPhoneFlip className="text-base md:text-lg p-0.5" /> 01821858917
            </p>
          </li>
          <li className="text-xs md:text-sm">
            <p className=" flex flex-row gap-1">
              <MdOutgoingMail className=" text-lg md:text-xl p-0.5" />{" "}
              mi3548514@gmail.com
            </p>
          </li>
          <li className="text-xs md:text-sm">
            <p className=" flex flex-row gap-1">
              <MdWhatsapp className=" text-lg md:text-xl p-0.5" /> 01929671795
            </p>
          </li>
          <li className="text-xs md:text-sm">
            <p className="flex flex-row gap-1">
              <MdHome className=" text-lg md:text-xl p-0.5" /> House k/19, block
              K, road n/1, Mirpur, Dhaka
            </p>
          </li>
        </div>
      </footer>
      <div className="max-w-7xl mx-auto border-t-2 border-gray-500 py-4 flex justify-between flex-col sm:flex-row gap-4 items-center p-2 px-4">
        <p className="text-xs md:text-sm">
          © RepairMade 2024 Made With by Al Amin
        </p>
        <p className="flex flex-row gap-4 items-center">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaPinterest />
        </p>
      </div>
    </div>
  );
};

export default Footer;
