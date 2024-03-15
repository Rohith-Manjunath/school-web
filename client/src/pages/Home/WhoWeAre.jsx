import { Link } from "react-router-dom";
import logo from "../../assets/Images/HomeImages/WhoWeAre.jpg"; // Adjust the path accordingly
import { motion } from "framer-motion";


const WhoWeAre = () => {
  return (
    <div className="p-6 space-y-6 md:space-y-0 text-textSecondary md:grid md:grid-cols-2 gap-6 lg:gap-20 lg:px-20 lg:py-20 bg-primary tracking-wide ">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="col-span-1 md:flex  "
      >
        <img src={logo} alt="" className="rounded-md w-full " />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4 md:space-y-6 col-span-1"
      >
        <div className="">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Who We Are?
          </h2>
          <h5 className="text-[15px] md:text-[17px] lg:text-xl  font-semibold text-left md:text-justify">
            At Mysore International School, we are a vibrant community dedicated
            to fostering academic excellence and holistic development.
          </h5>
        </div>
        <p className="text-left md:text-justify">
          At the heart of Mysore International School is a belief in the
          transformative power of education. Our approach is unique, focusing
          not only on imparting knowledge but also on nurturing essential life
          skills. We are a close-knit community that values collaboration,
          diversity, and personal growth. As we embrace a future-driven
          perspective, our students are not just prepared for exams but equipped
          for life's challenges.
        </p>
        <div className="">
          <Link
            to={"/our-team"}
            className="w-full px-20 rounded-md shadow-sm shadow-white border p-2 font-semibold tracking-widest active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200 hover:scale-105 bg-ctcPrimary text-white"
          >
            Know More
          </Link>{" "}
        </div>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
