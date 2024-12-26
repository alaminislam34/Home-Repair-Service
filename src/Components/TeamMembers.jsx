import { useContext } from "react";
import member1 from "../assets/team/m1.jpg";
import member2 from "../assets/team/m2.jpg";
import member3 from "../assets/team/m3.jpg";
import member4 from "../assets/team/m4.jpg";
import { AuthContext } from "../AuthContext/AuthProvider";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const TeamMembers = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="my-6 md:my-8 lg:my-12">
      <div className="text-center space-y-2 my-4 md:my-8 lg:my-12">
        <h2
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-delay="200"
          className="text-2xl md:text-3xl lg:text-4xl font-semibold "
        >
          Team Members
        </h2>
        <p data-aos="zoom-in-up" data-aos-duration="1200" data-aos-delay="400">
          Our most experienced and friendly team members.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mx-4">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-delay="600"
          className="bg-base-100 rounded-lg relative group overflow-hidden flex justify-center items-center px-4 pt-4"
        >
          <img src={member1} className="bg-center object-cover pt-4 px-4" />
          <div
            className={`absolute group-hover:bottom-0 -bottom-40 duration-500 left-0 w-full bg-gradient-to-bl ${
              theme === "light"
                ? " from-blue-200/80 via-blue-300/80 to-blue-400/80"
                : "from-gray-800/90 via-gray-900/90 to-black/90"
            } py-6 flex flex-col gap-2 justify-center items-center`}
          >
            <h3 className="text-lg md:text-xl font-semibold">
              Franziska Schmitt{" "}
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              {" "}
              Plumbing Engineer.
            </p>
            <div className="flex flex-row justify-around items-center gap-4 text-xl hover:*:scale-110 *:cursor-pointer">
              <FaFacebook />
              <FaInstagram />
              <FaPinterest />
              <FaTwitter />
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-delay="800"
          className="bg-base-100 rounded-lg relative group overflow-hidden  flex justify-center items-center px-4 pt-4"
        >
          <img src={member2} className="bg-center object-cover pt-4 px-4" />
          <div
            className={`absolute group-hover:bottom-0 -bottom-40 duration-500 left-0 w-full bg-gradient-to-bl ${
              theme === "light"
                ? " from-blue-200/80 via-blue-300/80 to-blue-400/80"
                : "from-gray-800/90 via-gray-900/90 to-black/90"
            } py-6 flex flex-col gap-2 justify-center items-center`}
          >
            <h3 className="text-lg md:text-xl font-semibold">Olivia</h3>
            <p className="text-sm md:text-base text-gray-400">
              Managing Director
            </p>
            <div className="flex flex-row justify-around items-center gap-4 text-xl hover:*:scale-110 *:cursor-pointer">
              <FaFacebook />
              <FaInstagram />
              <FaPinterest />
              <FaTwitter />
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-delay="1000"
          className="bg-base-100 rounded-lg relative group overflow-hidden  flex justify-center items-center px-4 pt-4"
        >
          <img src={member3} className="bg-center object-cover pt-4 px-4" />
          <div
            className={`absolute group-hover:bottom-0 -bottom-40 duration-500 left-0 w-full bg-gradient-to-bl ${
              theme === "light"
                ? " from-blue-200/80 via-blue-300/80 to-blue-400/80"
                : "from-gray-800/90 via-gray-900/90 to-black/90"
            } py-6 flex flex-col gap-2 justify-center items-center`}
          >
            <h3 className="text-lg md:text-xl font-semibold">Frankon Devid</h3>
            <p className="text-sm md:text-base text-gray-400">Civil Engineer</p>
            <div className="flex flex-row justify-around items-center gap-4 text-xl hover:*:scale-110 *:cursor-pointer">
              <FaFacebook />
              <FaInstagram />
              <FaPinterest />
              <FaTwitter />
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-delay="1200"
          className="bg-base-100 rounded-lg relative group overflow-hidden  flex justify-center items-center px-4 pt-4"
        >
          <img src={member4} className="bg-center object-cover pt-4 px-4" />
          <div
            className={`absolute group-hover:bottom-0 -bottom-40 duration-500 left-0 w-full bg-gradient-to-bl ${
              theme === "light"
                ? " from-blue-200/80 via-blue-300/80 to-blue-400/80"
                : "from-gray-800/90 via-gray-900/90 to-black/90"
            } py-6 flex flex-col gap-2 justify-center items-center`}
          >
            <h3 className="text-lg md:text-xl font-semibold">Evelyn </h3>
            <p className="text-sm md:text-base text-gray-400">Architecture </p>
            <div className="flex flex-row justify-around items-center gap-4 text-xl hover:*:scale-110 *:cursor-pointer">
              <FaFacebook />
              <FaInstagram />
              <FaPinterest />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
