// CardComponent.jsx
import { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const CardComponent = ({ link,imageSrc, title, description }) => {
  const [show, setShow] = useState(false);

  const handleLineClampToggle = () => {
    setShow(!show);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="col max-mb-30 hover:cursor-pointer"
    >
      <div className="block bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
        <div className="p-4">
          <div className="mb-4">
            <img src={imageSrc} alt={title} loading="lazy" className="w-full h-[250px] object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 tracking-wider">{title}</h3>
            <p className={`text-gray-700 tracking-wide ${show ? "" : "line-clamp-4"} lg:line-clamp-none`}>{description}</p>
            <span className='block lg:hidden text-sm text-textSecondary cursor-pointer' onClick={handleLineClampToggle}>
              {show ? "Show Less" : "Read More"}
            </span>
          </div>
        </div>
        <Link to={link} className="font-semibold block bg-secondary text-primary text-center py-2 tracking-wider">
          View More 
        </Link>
      </div>
    </motion.div>
  );
};

export default CardComponent;
