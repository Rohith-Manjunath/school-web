import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import EarlyYearsImage from "../../assets/Images/HomeImages/joinourframework/EarlyYears.jpg";
import PYPImage from "../../assets/Images/HomeImages/joinourframework/cbse.jpg";

const JoinOurFramework = () => {
  return (
    <div className="flex justify-center bg-secondary py-[80px]">
      <div className="container flex flex-col items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-title tracking-wider font-bold text-4xl text-white text-center"
          >
            BEGIN YOUR JOURNEY WITH US
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-subtext tracking-wider text-white font-bold"
          >
            Programme Framework at Mysore International School
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center pb-5 font-subtext text-white font-semibold tracking-wider text-l"
          >
            Explore our comprehensive programme offerings designed to nurture your child's growth and development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[110px] pt-8 px-8 lg:px-0">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid border border-grey-300 bg-white rounded-md overflow-hidden hover:shadow-lg hover:shadow-primary"
          >
            <div>
              <a href="#">
                <img src={EarlyYearsImage} alt="Course Image" className="w-full h-[250px] object-cover" />
              </a>
            </div>
            <div className="flex flex-col justify-center bg-white items-center gap-y-4 p-4">
              <span className="font-title text-3xl font-bold tracking-wider text-secondary">Early Years</span>
              <Link to="./EarlyProgram" className="btn-primary">
                <h3 className="font-subtext font-bold tracking-wider text-xl text-white bg-secondary py-2 px-4 rounded-md">The Early Years Programme</h3>
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="border border-grey-300 rounded-md overflow-hidden hover:shadow-lg hover:shadow-primary bg-white"
          >
            <div>
              <a href="#">
                <img src={PYPImage} alt="Course Image" className="w-full h-[250px] object-cover" />
              </a>
            </div>
            <div className="flex flex-col justify-center bg-white items-center gap-y-4 p-4">
              <span className="font-title text-3xl font-bold tracking-wider text-secondary">CBSE</span>
              <Link to="./CBSEProg" className="btn-primary">
                <h3 className="font-subtext font-bold tracking-wider text-xl text-white bg-secondary py-2 px-4 rounded-md">The CBSE Programme</h3>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurFramework;
