import image1 from "../../assets/Images/HomeImages/CarouselImages/children_outing.jpg"; // Adjust the path accordingly
import image2 from "../../assets/Images/HomeImages/CarouselImages/principle_and_children.jpg"; // Adjust the path accordingly
import image3 from "../../assets/Images/HomeImages/CarouselImages/children_kannada_rajostsava.jpg"; // Adjust the path accordingly
import { motion } from "framer-motion";
import Slider from "../../components/layouts/Slider";

const slides = [
  {
    id: 1,
    url: image1,
  },
  {
    id: 2,
    url: image2,
  },
  {
    id: 3,
    url: image3,
  },
];

const CarouselSlider = () => {
  return (
    <motion.div
      animate={{ y: 0, scale: 1, opacity: 1 }}
      initial={{ y: 0, scale: 0.8, opacity: 0 }}
      transition={{ duration: 1.8, delay: 2.4 }}
      viewport={{ once: true }}
      className="slider-container w-[100vw] h-[83vh]"
    >
      <Slider slides={slides} />
    </motion.div>
  );
};

export default CarouselSlider;
