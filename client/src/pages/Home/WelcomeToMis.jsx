import { motion } from "framer-motion";
import logo from "../../assets/Images/LogoAndOthers/hori-xnjhSTpu.png"; // Adjust the path accordingly

const WelcomeToMIS = () => {
  return (
    <div className="p-6 lg:px-20 lg:py-28 space-y-10 md:space-y-0 bg-secondary text-white md:grid md:grid-cols-2 tracking-wide">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="col-span-1 space-y-6"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl">
          Welcome to <span className="font-myfont">MIS</span>
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl">
          Empower. Excel. Educate
        </h3>
        <p className="text-justify">
          Welcome to Mysore International School, a place where every student's
          journey is crafted with care and purpose. Here, education goes beyond
          textbooks, shaping young minds into confident, curious learners. Our
          vibrant community of educators and students fosters an environment of
          collaboration and growth. As you embark on this educational adventure
          with us, you'll discover not just a school but a supportive family,
          dedicated to unlocking the full potential of each individual.
        </p>
        <button className="md:w-1/3 rounded-md shadow-sm border p-2 font-semibold tracking-widest bg-ctcPrimary text-white">
          Enroll Today
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="col-span-1 flex justify-center md:justify-end items-center"
      >
        <img
          src={logo}
          alt="MIS Logo"
          className="w-[200px] sm:w-[250px] lg:w-1/2 h-auto "
        />
      </motion.div>
    </div>
  );
};

export default WelcomeToMIS;
