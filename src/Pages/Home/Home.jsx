import banner1 from "../../assets/Banner/banner1.jpg";
const Home = () => {
  return (
    <div className="mb-32">
      <div className="w-full relative mb-36">
        <div className="h-[350px] md:h-[400px] lg:h-[500px]">
          <img
            className="w-full h-full object-cover bg-center bg-no-repeat"
            src={banner1}
            alt=""
          />
        </div>
        <div className="absolute -bottom-20 md:top-1/2 md:-translate-y-1/2 w-8/12 left-1/2 -translate-x-1/2 md:translate-x-0 md:w-2/5 lg:w-1/4 md:left-0 flex flex-col gap-1 text-center p-2 md:p-4 rounded-xl bg-base-300/50 backdrop-blur-md space-y-2">
          <h2 className="text-base md:text-xl lg:text-2xl font-semibold">
            Bangladesh`s One-Stop Solution for Renovation & Interior Design.
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Explore Our Comprehensive Range of Services
          </p>
          <button className="py-2 px-4 bg-base-200 rounded duration-500 hover:-translate-x-1 hover:bg-green-400">
            See All Services
          </button>
        </div>
      </div>
      <div>hel</div>
    </div>
  );
};

export default Home;
