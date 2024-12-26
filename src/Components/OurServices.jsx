import { BsDoorOpen } from "react-icons/bs";
import { GiPaintBucket } from "react-icons/gi";
import { LuChefHat } from "react-icons/lu";
import { MdOutlineElectricalServices } from "react-icons/md";
import { PiPipeFill } from "react-icons/pi";
import { RiSofaLine } from "react-icons/ri";

const OurServices = () => {
  return (
    <div className="my-6 md:my-8 lg:mx-12">
      <div className="flex justify-center items-center flex-col gap-3 md:gap-4 my-4 md:my-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Our Services
        </h2>
        <p className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto text-gray-400">
          Our home repair services include plumbing, carpentry, electrical
          fixes, painting, and maintenance, ensuring quality solutions for every
          household need.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-center my-8 md:my-12 mx-4">
        <div className="flex justify-center items-center flex-col hover:scale-105 hover:shadow-2xl duration-500 rounded-xl p-6 group">
          <div className="text-4xl border-4 w-28 h-28 rounded-full p-2 group-hover:border-blue-600">
            <GiPaintBucket className="bg-base-300 rounded-full w-full h-full p-4 group-hover:bg-blue-500 group-hover:text-white" />
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl py-2">Wall Paintings</h3>
            <p className="text-sm md:text-base text-gray-500">
              Wall paintings enhance the beauty of any space, offering vibrant
              designs, creative patterns, and personalized art. Transform your
              walls with unique styles that reflect your personality and elevate
              your home`s ambiance.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col hover:scale-105 hover:shadow-2xl duration-500 rounded-xl p-6 group">
          <div className="text-4xl border-4 w-28 h-28 rounded-full p-2 group-hover:border-blue-600">
            <PiPipeFill className="bg-base-300 rounded-full w-full h-full p-4 group-hover:bg-blue-500 group-hover:text-white" />
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl py-2">Pipe Fitting</h3>
            <p className="text-sm md:text-base text-gray-500">
              Pipe fitting involves installing and repairing piping systems for
              water, gas, or drainage. Expert services ensure proper alignment,
              leak prevention, and long-lasting functionality for residential,
              commercial, and industrial needs.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col hover:scale-105 hover:shadow-2xl duration-500 rounded-xl p-6 group">
          <div className="text-4xl border-4 w-28 h-28 rounded-full p-2 group-hover:border-blue-600">
            <BsDoorOpen className="bg-base-300 rounded-full w-full h-full p-4 group-hover:bg-blue-500 group-hover:text-white" />
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl py-2">Door Replace</h3>
            <p className="text-sm md:text-base text-gray-500">
              Door replacement improves security, functionality, and style.
              Upgrade your home with durable, modern doors tailored to fit your
              space, ensuring smooth installation and long-lasting quality
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col hover:scale-105 hover:shadow-2xl duration-500 rounded-xl p-6 group">
          <div className="text-4xl border-4 w-28 h-28 rounded-full p-2 group-hover:border-blue-600">
            <MdOutlineElectricalServices className="bg-base-300 rounded-full w-full h-full p-4 group-hover:bg-blue-500 group-hover:text-white" />
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl py-2">Electrical Services</h3>
            <p className="text-sm md:text-base text-gray-500">
              Electrical services include installation, repair, and maintenance
              of wiring, lighting, and appliances. Expert electricians ensure
              safety, energy efficiency, and reliable solutions for residential,
              commercial, and industrial electrical needs.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col hover:scale-105 hover:shadow-2xl duration-500 rounded-xl p-6 group">
          <div className="text-4xl border-4 w-28 h-28 rounded-full p-2 group-hover:border-blue-600">
            <RiSofaLine className="bg-base-300 rounded-full w-full h-full p-4 group-hover:bg-blue-500 group-hover:text-white" />
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl py-2">Furniture Moving</h3>
            <p className="text-sm md:text-base text-gray-500">
              Furniture moving involves safely transporting items during
              relocations or renovations. Expert movers ensure careful handling,
              efficient packing, and smooth delivery, protecting your furniture
              from damage and making transitions stress-free.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col hover:scale-105 hover:shadow-2xl duration-500 rounded-xl p-6 group">
          <div className="text-4xl border-4 w-28 h-28 rounded-full p-2 group-hover:border-blue-600">
            <LuChefHat className="bg-base-300 rounded-full w-full h-full p-4 group-hover:bg-blue-500 group-hover:text-white" />
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl py-2">Kitchen Counter</h3>
            <p className="text-sm md:text-base text-gray-500">
              A kitchen counter serves as a functional and stylish workspace,
              essential for cooking and storage. Upgrade your kitchen with
              durable, modern materials like granite, quartz, or wood for a
              sleek finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
