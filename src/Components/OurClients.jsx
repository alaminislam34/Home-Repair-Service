import client1 from "../assets/Our clients/client1.jpg";
import client2 from "../assets/Our clients/client2.jpg";
import client3 from "../assets/Our clients/client3.jpg";
import client4 from "../assets/Our clients/client4.jpg";
import client5 from "../assets/Our clients/client5.jpg";
import client6 from "../assets/Our clients/client6.jpg";
import client7 from "../assets/Our clients/client7.jpg";
import client8 from "../assets/Our clients/client8.jpg";

const OurClients = () => {
  const clients = [
    client6,
    client1,
    client5,
    client2,
    client8,
    client3,
    client7,
    client4,
  ];

  const cloneSlides = [...clients, ...clients];

  return (
    <div className="overflow-hidden flex justify-center items-center h-[250px]">
      <div className="relative w-full">
        <div className="flex flex-col gap-3 justify-center items-center text-center my-6 md:my-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Our Valuable Clients{" "}
          </h3>
          <p className="text-gray-500 w-11/12 md:w-8/12">
            Our valuable clients are the heart of our business. We prioritize
            their satisfaction, building strong, lasting relationships through
            exceptional service.
          </p>
        </div>
        <div
          className="flex animate-scroll"
          style={{ animation: "scroll 20s linear infinite" }}
        >
          {cloneSlides.map((client, index) => (
            <div
              key={index}
              className="slide flex-shrink-0 w-[100px] md:w-[200px] h-[100px] flex justify-center items-center p-2"
            >
              <img
                src={client}
                alt={`Client ${index + 1}`}
                className="h-full w-auto object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
