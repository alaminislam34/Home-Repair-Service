import g1 from "../../assets/gallery/g1.jpg";
import g2 from "../../assets/gallery/g5.jpg";
import g3 from "../../assets/gallery/g4.jpg";
import g4 from "../../assets/gallery/g6.jpg";
import g5 from "../../assets/gallery/g3.jpg";
import g6 from "../../assets/gallery/g7.jpg";
import g7 from "../../assets/gallery/g2.jpg";
import g8 from "../../assets/gallery/g8.jpg";
import g9 from "../../assets/gallery/g9.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { div } from "motion/react-client";

const MasonryGallery = () => {
  const images = [g5, g7, g3, g6, g4, g9, g1, g8, g2];

  return (
    <div>
      <SectionTitle
        Title={"Service Gallery"}
        description={
          "Explore our service gallery to see the high-quality, reliable home repairs and transformations we’ve completed for satisfied customers."
        }
      />
      <div className="p-4 flex justify-center items-center">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 items-center">
          {images.map((image, index) => (
            <div key={index} className="mb-4 overflow-hidden rounded-xl">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasonryGallery;
