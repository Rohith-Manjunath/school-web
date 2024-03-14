import { Link } from "react-router-dom";
import logo from "../../assets/Images/HomeImages/WhoWeAre.jpg";
import { motion } from "framer-motion";
import { FaHandPointRight } from "react-icons/fa";

// ... (your imports)

const OurVision = () => {
    return (
      <div className="p-6 space-y-6 md:space-y-0 text-white md:grid md:grid-cols-2 gap-6 lg:gap-20 lg:px-20 lg:py-20 bg-secondary tracking-wide">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-6 col-span-1"
        >
          <div className="">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider pb-2 font-title">
              Our Vision
            </h1>
            <h2 className="text-[15px] md:text-[17px] lg:text-xl font-semibold text-left md:text-justify tracking-wider font-subtext">
              At Mysore International School, we pledge to continuously ignite an intrinsic drive in our
              students, inspiring them to relentlessly pursue their loftiest aspirations, regardless of their
              chosen paths.
            </h2>
          </div>
          <p className="text-left md:text-justify font-medium tracking-wider">
            Our vision extends to holistically nurturing each child, encompassing physical, intellectual,
            emotional, social, and cultural dimensions by:
            <ul className="list-disc pl-1 pt-3">
              {/* Use a wrapper div for consistent icon size */}
              <li className="py-2 flex items-start">
                <div className="mr-2 w-6 h-6">
                  <FaHandPointRight className="text-l mt-1" />
                </div>
                Providing tangible learning tools and fostering opportunities for exploration, discovery, and
                comprehension.
              </li>
              <li className="py-2 flex items-start">
                <div className="mr-2 w-6 h-6">
                  <FaHandPointRight className="text-l mt-1" />
                </div>
                Creating a nurturing educational environment where learning is enjoyable.
              </li>
              <li className="py-2 flex items-start">
                <div className="mr-2 w-6 h-6">
                  <FaHandPointRight className="text-l" />
                </div>
                Empowering children to learn how to learn, rather than simply learning what we teach.
              </li>
              <li className="py-2 flex items-start">
                <div className="mr-2 w-6 h-6">
                  <FaHandPointRight className="text-l mt-1" />
                </div>
                Cultivating motor skills and coordination through diverse indoor and outdoor activities.
              </li>
              <li className="py-2 flex items-start">
                <div className="mr-2 w-6 h-6">
                  <FaHandPointRight className="text-l mt-1" />
                </div>
                Encouraging positive relationships with peers and family, emphasizing values.
              </li>
              <li className="py-2 flex items-start">
                <div className="mr-2 w-6 h-6">
                  <FaHandPointRight className="text-l mt-1" />
                </div>
                Our distinctive vision shapes a future where Mysore International School stands as a beacon of
                holistic education, propelling students towards excellence and global citizenship.
              </li>
            </ul>
          </p>
          {/* <div className="">
            <Link
              to={"/our-team"}
              className="w-full px-20 rounded-md shadow-sm shadow-white border p-2 font-semibold tracking-widest active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200 hover:scale-105 bg-ctcPrimary text-white"
            >
              Know More
            </Link>{" "}
          </div> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="col-span-1 md:flex items-center justify-center"
        >
          <img src={logo} alt="" className="rounded-md w-full md:w-[550px]" />
        </motion.div>
      </div>
    );
  };
  
  export default OurVision;
  