import team from "../../assets/team/group.jpg";
import Appointment from "../../Components/Appointment";
import { useEffect } from "react";
import Aos from "aos";
import { TfiAlarmClock } from "react-icons/tfi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import teamMan from "../../assets/team/m3.jpg";
import TeamMembers from "./TeamMembers";
import PageBanner from "../../Components/pageBanner/PageBanner";

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
      <PageBanner title={"About Us"} />
      <div>
        <br />
        <div className="m-4 md:m-6 flex flex-wrap gap-4 items-center p-6 md:p-8">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1100"
            className="h-full flex justify-center items-center"
          >
            <img className="h-full" src={teamMan} alt="" />
          </div>
          <div className="flex-1 space-y-2">
            <h2
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="500"
              className="text-2xl md:text-3xl lg:text-4xl font-semibold"
            >
              <span className="text-blue-600">15 years</span> of experience in
              this business.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="800"
              className="text-base md:text-lg font-medium"
            >
              Mastering excellence: 15 years of expertise in the business.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1100"
              className="text-justify leading-relaxed text-xs md:text-sm text-gray-500"
            >
              With 15 years of unparalleled experience in the industry, we have
              honed our skills to deliver exceptional quality, innovation, and
              trust, ensuring client satisfaction and long-term success.
            </p>
            <br />
          </div>
          <div className=" flex flex-col gap-3 justify-center">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1000"
              className="flex flex-row gap-4  items-center text-xl md:text-2xl lg:text-3xl font-medium justify-st"
            >
              <TfiAlarmClock className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500" />
              <h4>24/7 Services</h4>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1300"
              className=" flex flex-row gap-4  items-center text-xl md:text-2xl lg:text-3xl font-medium justify-st"
            >
              <AiOutlineFileSearch className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500" />
              <h4>Affordable Price</h4>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1600"
              className=" flex flex-row gap-6 items-center text-xl md:text-2xl lg:text-3xl font-medium justify-st"
            >
              <IoSettingsOutline className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500" />
              <h4>Professional HandyMan</h4>
            </div>
          </div>
        </div>

        <TeamMembers />
        <br />
        <Appointment />
      </div>
    </div>
  );
};

export default AboutUs;
