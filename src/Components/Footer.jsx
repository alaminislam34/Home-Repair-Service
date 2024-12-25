import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { MdHome, MdOutgoingMail, MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <div className="py-6 bg-base-300">
      <footer className="flex flex-wrap gap-4 md:gap-6 p-6 md:p-10 py-6 max-w-7xl mx-auto">
        <div className="flex flex-col justify-start">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">About Us</h3>
          <p className="text-xs md:text-sm w-[300px] md:w-[350px]">
            Discover who we are! We are dedicated to delivering exceptional
            services, prioritizing customer satisfaction, innovation, and
            professional expertise every day.
          </p>
        </div>
        <div className="flex flex-col justify-start gap-3 list-none">
          <h6 className="text-lg md:text-xl font-medium">Services</h6>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block hover:underline">Electrical Work</p>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block hover:underline">Plumbing Work</p>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block hover:underline">Deep Cleaning</p>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block hover:underline">Painting & Polishing</p>
          </li>
        </div>
        <div className="flex flex-col justify-start gap-3 list-none">
          <h6 className="text-lg md:text-xl font-medium">Use Links</h6>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block hover:underline">Home</p>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block hover:underline">Services</p>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block hover:underline">About Us</p>
          </li>
          <li className="text-xs md:text-sm *:cursor-pointer">
            <p className="inline-block hover:underline">Manage Services</p>
          </li>
        </div>
        <div className="flex flex-col justify-start gap-3 list-none">
          <h6 className="">Address</h6>
          <li className="text-xs md:text-sm">
            <p className="hover:underline flex flex-row gap-1">
              <FaPhone /> 01821858917
            </p>
          </li>
          <li className="text-xs md:text-sm">
            <p className="hover:underline flex flex-row gap-1">
              <MdOutgoingMail /> mi3548514@gmail.com
            </p>
          </li>
          <li className="text-xs md:text-sm">
            <p className="hover:underline flex flex-row gap-1">
              <MdWhatsapp /> 01929671795
            </p>
          </li>
          <li className="text-xs md:text-sm">
            <p className="hover:underline flex flex-row gap-1">
              <MdHome /> House k/19, block K, road n/1, Mirpur, Dhaka
            </p>
          </li>
        </div>
      </footer>
      <div className="max-w-7xl mx-auto border-t-2 border-gray-500 py-4 flex justify-between flex-col sm:flex-row items-center p-2">
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
