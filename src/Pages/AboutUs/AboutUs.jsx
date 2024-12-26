import team from "../../assets/team/group.jpg";
import Appointment from "../../Components/Appointment";
import TeamMembers from "../../Components/TeamMembers";
import Experience from "./Experience";
import { useEffect } from "react";
import Aos from "aos";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      once: true,
    });
    Aos.refresh();
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center h-[200px] md:h-[250px]  relative">
        <img
          className="w-full h-full bg-cover bg-no-repeat bg-center object-cover"
          src={team}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/60">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold py-2 inline text-center text-gray-200">
            About Us
          </h2>
        </div>
      </div>
      <div>
        <br />
        <Experience />
        <br />
        <TeamMembers />
        <br />
        <Appointment />
      </div>
    </div>
  );
};

export default AboutUs;
