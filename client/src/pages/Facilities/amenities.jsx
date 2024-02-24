import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../assets/Images/FacilitiesImages/Amenities/transport.jpg";
import image2 from "../../assets/Images/FacilitiesImages/Amenities/library.jpg";
import image3 from "../../assets/Images/FacilitiesImages/Amenities/SportsGround.jpg"
import image4 from "../../assets/Images/FacilitiesImages/Amenities/chemistrylab.jpg"
import image5 from "../../assets/Images/FacilitiesImages/Amenities/sportsarea.jpg"

const FacilityCard = () => {
  const facilities = [
    {
      id: 1,
      title: 'Transport',
      image: image1,
      description: 'Experience comfortable and secure transportation services for our students.',
    },
    {
      id: 2,
      title: 'Computer Lab',
      image: 'https://placekitten.com/300/201',
      description: 'Explore the world of technology in our state-of-the-art computer lab.',
    },
    {
      id: 3,
      title: 'Sports Ground',
      image: image3,
      description: 'Engage in physical activities and sports in our expansive sports ground.',
    },
    {
      id: 4,
      title: 'Classroom',
      image: 'https://placekitten.com/300/203',
      description: 'Experience interactive learning and a conducive environment in our classrooms.',
    },
    {
      id: 5,
      title: 'Chemistry Laboratory',
      image: image4,
      description: 'Conduct experiments and explore the world of chemistry in our well-equipped laboratory.',
    },
    {
      id: 6,
      title: 'Music Classroom',
      image: 'https://placekitten.com/300/205',
      description: 'Unleash your musical talents and creativity in our dedicated music classroom.',
    },
    {
      id: 7,
      title: 'Library',
      image: image2,
      description: 'Immerse yourself in a world of knowledge and literature in our spacious library.',
    },
    {
      id: 8,
      title: 'Sports Arena',
      image: image5,
      description: 'Experience the thrill of sports competitions in our modern sports arena.',
    },
    {
      id: 9,
      title: 'Art Studio',
      image: 'https://placekitten.com/300/208',
      description: 'Unveil your artistic talents and express yourself in our vibrant art studio.',
    },
    // Add more facilities as needed
  ];

  return (
    <div className="container mx-auto mt-10 py-10 text-textSecondary">
       <motion.h2 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      className="text-center align-center items-center font-semibold font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase lg:text-center mb-5 ">
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
