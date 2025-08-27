export default function Banner() {
  return (
    <div>
      {" "}
      {/* Banner section */}
      <div className="w-full relative">
        <div className="h-[500px]">
          <img
            className="w-full h-full object-cover bg-center bg-no-repeat"
            src={banner1}
            alt=""
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-transparent/60">
          <div className="flex flex-col gap-2 md:gap-4 text-center text-wrap text-white px-4">
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="text-2xl md:text-3xl lg:text-5xl font-bold lg:w-9/12 mx-auto text-center tracking-wide leading-relaxed"
            >
              Bangladesh`s One-Stop Solution for Renovation & Interior Design.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1150"
              data-aos-easing="ease-in-out"
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300"
            >
              Explore Our Comprehensive Range of Services
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1100"
              data-aos-easing="ease-in-out"
            >
              <button
                onClick={() => navigate("/services")}
                className="px-4 py-2 md:py-2.5 border-gray-300 bg-gradient-to-l from-blue-300 via-blue-400 to-blue-500 text-white font-semibold rounded hover:rounded-2xl shadow-lg hover:scale-105 hover:-rotate-3 duration-500 hover:shadow-[_2px_2px_10px_rgb(0,0,0,0.5)]"
              >
                See All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
