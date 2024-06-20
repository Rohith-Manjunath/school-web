// JoinOurFramework.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import EarlyYearsImage from "../../assets/Images/HomeImages/joinourframework/EarlyYears.jpg";
import PYPImage from "../../assets/Images/HomeImages/joinourframework/cbse.jpg";
import JoinOurFrameWorkCard from '../../components/layouts/Cards/JoinOurFrameWorkCard';

const programmeData = [
  {
    id: 1,
    imageSrc: EarlyYearsImage,
    alt: "Early Years Image",
    title: "Early Years",
    link: "./EarlyProgram",
    buttonText: "The Early Years Programme"
  },
  {
    id: 2,
    imageSrc: PYPImage,
    alt: "CBSE Image",
    title: "CBSE",
    link: "./CBSEProg",
    buttonText: "The CBSE Programme"
  }
];

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
          {programmeData.map((programme, index) => (
     <JoinOurFrameWorkCard key={programme.id} motion={motion} programme={programme} index={index} Link={Link}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinOurFramework;
