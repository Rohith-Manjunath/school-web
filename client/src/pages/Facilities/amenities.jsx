import React from 'react';
import { motion } from 'framer-motion';

const FacilityCard = () => {
  const facilities = [
    {
      id: 1,
      title: 'Swimming Pool',
      image: 'https://placekitten.com/300/200', // Replace with your image URL
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Sports Arena',
      image: 'https://placekitten.com/300/201',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 1,
        title: 'Swimming Pool',
        image: 'https://placekitten.com/300/200', // Replace with your image URL
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        title: 'Sports Arena',
        image: 'https://placekitten.com/300/201',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 2,
        title: 'Sports Arena',
        image: 'https://placekitten.com/300/201',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
          id: 1,
          title: 'Swimming Pool',
          image: 'https://placekitten.com/300/200', // Replace with your image URL
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 2,
          title: 'Sports Arena',
          image: 'https://placekitten.com/300/201',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 2,
            title: 'Sports Arena',
            image: 'https://placekitten.com/300/201',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
              id: 1,
              title: 'Swimming Pool',
              image: 'https://placekitten.com/300/200', // Replace with your image URL
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
    // Add more facilities as needed
  ];

  return (
    <div className="container mx-auto mt-10 text-textSecondary">
       <motion.h2 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      className="text-center align-center items-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase lg:text-center mb-5 ">
        Amenities
      </motion.h2>
      <motion.p
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      className="text-center mx-auto w-[50%] max-lg:w-[80%] align-center items-center font-sans mb-10 ">
        Explore our exceptional amenities at Mysore International School, enhancing student life with a modern swimming pool for relaxation and fitness, and a state-of-the-art sports arena for diverse activities.
      </motion.p>
      <div className="w-[80%] md:grid grid-cols-3 mx-auto space-y-6 md:space-y-0 md:gap-10 xl:gap-24 lg:px-8 py-5">
        {facilities.map((facility) => (
          <div key={facility.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={facility.image} alt={facility.title} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
            <p className="text-gray-600 mb-4">{facility.description}</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilityCard;
