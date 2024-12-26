import { AiOutlineFileSearch } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiAlarmClock } from "react-icons/tfi";
import team from "../../assets/team/m3.jpg";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="m-4 md:m-6 flex flex-wrap gap-4 items-center p-6 md:p-8">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1100"
          className="h-full flex justify-center items-center"
        >
          <img className="h-full" src={team} alt="" />
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
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1400"
            data-aos-offset="0"
          >
            <button
              onClick={() => navigate("/aboutUs")}
              className="px-4 py-2 border-gray-300 bg-gradient-to-l from-blue-400 via-blue-400 to-blue-500 text-white font-semibold rounded hover:rounded-2xl shadow-lg hover:scale-105 hover:-rotate-3 duration-500 hover:shadow-[_2px_2px_10px_rgb(0,0,0,0.5)]"
            >
              About Us
            </button>
          </div>
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
    </div>
  );
};

export default Experience;
