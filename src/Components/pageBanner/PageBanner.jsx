import team from "../../assets/team/group.jpg";

const PageBanner = ({ title, subtitle }) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1200"
        className="flex justify-center items-center h-[200px] md:h-[250px]  relative"
      >
        <img
          className="w-full h-full bg-cover bg-no-repeat bg-center object-cover"
          src={team}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/60">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold py-2 inline text-center text-gray-200">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
