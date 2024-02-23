import image1 from "../../assets/Images/HomeImages/CarouselImages/children_outing.jpg"; // Adjust the path accordingly
import image3 from "../../assets/Images/HomeImages/CarouselImages/children_kannada_rajostsava.jpg"; // Adjust the path accordingly
import image4 from "../../assets/Images/HomeImages/CarouselImages/school1.jpg";
import image5 from "../../assets/Images/HomeImages/CarouselImages/school2.jpg";
import { motion } from "framer-motion";
import Slider from "../../components/layouts/Slider";

const slides = [
  {
    id: 1,
    url: image1,
  },
  {
    id: 2,
    url: image5,
  },
  {
    id: 3,
    url: image4,
  },
  {
    id: 4,
    url: image3,
  },
];

const CarouselSlider = () => {
  return (
    <motion.div
      animate={{ y: 0, scale: 1, opacity: 1 }}
      initial={{ y: 0, scale: 0.8, opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      className="slider-container w-[100vw] h-[83vh]"
    >
      <Slider slides={slides} />
    </motion.div>
  );
};

export default CarouselSlider;
