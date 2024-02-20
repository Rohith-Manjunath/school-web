import scanMe from "../../assets/Images/HomeImages/scan_me-8-PSFtuHzV.png"; // Adjust the path accordingly
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const VirtualTour = () => {
  return (
    <div className="p-6 text-textSecondary bg-primary space-y-8 md:space-y-0 md:grid grid-cols-2 lg:px-20 lg:py-28 ">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6 md:space-y-7  col-span-1"
      >
        <div>
          <h2 className="text-3xl font-semibold md:text-3xl lg:text-5xl">
            Virtual School Tour
          </h2>
          <h5 className="text-[15px] md:text-[18px] lg:text-xl font-semibold">
            Your window to the exterior beauty and architectural grace of Mysore
            International School.
          </h5>
        </div>
        <p className="text-left md:text-justify">
          Unlock the doors to Mysore International School by scanning the QR
          code on the left. Immerse yourself in a virtual stroll around our
          campus, exploring the architecture, surroundings, and the unique charm
          of our school from the outside. Get a sneak peek into the world of
          learning that awaits within.
        </p>
        <div>
          <Link
            to={"/facilities"}
            className="px-20 rounded-md shadow-sm shadow-white border p-2 font-semibold tracking-widest active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200 hover:scale-105 bg-ctcPrimary text-white"
          >
            Know More
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className=" md:flex items-center justify-end col-span-1 mr-20"
      >
        <img src={scanMe} alt="" className="w-[180px] md:w-[200px]" />
      </motion.div>
    </div>
  );
};

export default VirtualTour;
