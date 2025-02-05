import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Testimonial = () => {
  const [clients, setClients] = useState([]);
  const [sliderRef, sliderInstance] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 13,
    },
    breakpoints: {
      "(min-width: 620px)": {
        slides: {
          perView: 2,
          spacing: 13,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 13,
        },
      },
    },
    animation: {
      duration: 1000,
      easing: (t) => t * (2 - t),
    },
  });

  useEffect(() => {
    axios(`clientReview.json`)
      .then((res) => setClients(res.data))
      .catch((error) => console.error("Error loading JSON file:", error));
  }, []);

  useEffect(() => {
    if (clients.length > 0 && sliderInstance.current) {
      const interval = setInterval(() => {
        sliderInstance.current.next();
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [sliderInstance, clients]);

  useEffect(() => {
    if (clients.length > 0 && sliderInstance.current) {
      sliderInstance.current.update();
    }
  }, [clients]);

  return (
    <div className="mx-4 md:mx-auto">
      <br />
      <SectionTitle
        Title={"Testimonial"}
        description={
          "Insights and feedback from our esteemed clients hold immense value, guiding us to improve and deliver exceptional service consistently."
        }
      />
      {clients.length > 0 ? (
        <section
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
          ref={sliderRef}
          className="keen-slider py-4"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className={`keen-slider__slide number-slide${
                index + 1
              } rounded-xl shadow-xl hover:shadow-2xl text-center flex flex-col justify-center items-center p-4 space-y-3`}
            >
              <img
                className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover bg-cover bg-center"
                src={client.img}
                alt="client"
                referrerPolicy="no-referrer"
              />
              <Rating
                style={{ maxWidth: 180 }}
                value={client.rating}
                readOnly
              />
              <h4 className="text-lg md:text-xl font-semibold">
                {client.name}
              </h4>
              <p className="text-sm md:text-base text-gray-500">
                {client.description}
              </p>
            </div>
          ))}
        </section>
      ) : (
        <p>Loading testimonials...</p>
      )}
    </div>
  );
};

export default Testimonial;
