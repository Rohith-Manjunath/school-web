// CardComponent.jsx
import React from 'react';
import { motion } from "framer-motion";

const CardComponent = ({ link, imageSrc, title, description }) => {
  return (
    
    <motion.div initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    viewport={{ once: true }}
    className="col max-mb-30">
      <a href={link} className="block bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
        <div className="p-4">
          <div className="mb-4">
            <img src={imageSrc} alt={title} className="w-full h-[250px] object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 tracking-wider">{title}</h3>
            <p className="text-gray-700 tracking-wide">{description}</p>
          </div>
        </div>
        <div className="bg-secondary text-primary text-center py-2 tracking-wider">
          View More <i className="fas fa-arrow-right ml-1"></i>
        </div>
      </a>
    </motion.div>
  );
};

export default CardComponent;
