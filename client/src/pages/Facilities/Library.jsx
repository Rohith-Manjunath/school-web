import React from 'react';
import HeroImage from '../../assets/Images/FacilitiesImages/Amenities/New/lib1.jpg';
import Spacious from '../../assets/Images/FacilitiesImages/Amenities/New/Classroom.jpg';
import Learning from '../../assets/Images/FacilitiesImages/Amenities/HandsOn.jpg';
import SmartClass from '../../assets/Images/FacilitiesImages/Amenities/SmartClass.jpg';
import Environment from '../../assets/Images/FacilitiesImages/Amenities/Environment.jpg';
import Footer from "../../components/layouts/Footer";



const Library = () => {
  return (
    <div className="min-h-screen flex flex-col pt-11 md:pt-0">
      {/* Hero Section */}
      <div className="relative h-[330px] lg:h-[550px]">
        <img
          src={HeroImage}
          alt="School Bus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="max-w-4xl mx-4 px-3 text-center bg-white p-10   rounded-md bg-opacity-70">
            <h1 className="text-2xl md:text-4xl font-bold font-title tracking-wide text-secondary mb-2">
            Library Services 
            </h1>
            <p className="text-sm md:text-lg max-w-3xl lg:px-5 text-secondary font-description pb-6 tracking-wide">
            The library at Mysore International School is a cornerstone of knowledge and learning for our students. 
            </p>
            <a
              href="#features"
              className="bg-secondary text-white py-2 px-4 rounded-md tracking-wider hover:bg-primary hover:text-secondary border border-secondary hover:border-secondary font-semibold transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8 md:py-16 bg-gray-100" id="features">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-title tracking-wide text-secondary mb-10 text-center">
          Key Features of Our Library
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <li className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <img
                src={Spacious}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                An Abode of Knowledge
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Our library is a treasure trove of books, resources, and information that enriches the minds of our students. It serves as a vital source of knowledge and encourages a love for reading among students.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <img
                src={Learning}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                Academic Excellence
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                The library plays a crucial role in positively impacting the academic achievement of our students. By providing access to a wide range of books, journals, and reference materials, students can enhance their understanding of various subjects and perform better during examinations.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <img
                src={SmartClass}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                Curiosity and Innovation
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                We believe that libraries are catalysts for curiosity, innovation, and problem-solving. Our library spaces are designed to inspire creativity and critical thinking, encouraging students to explore new ideas, conduct research, and develop innovative solutions to real-world challenges.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <img
                src={Environment}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                Cultural and Social Hub
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                The library is an integral part of the cultural and social life of our school community. It serves as a central point for reading, cultural activities, access to information, knowledge building, deep thinking, and lively discussions. Students and staff alike benefit from the rich resources and collaborative learning environment that the library provides.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Closing Section */}
      <div className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    <p className="text-gray-600 text-lg mb-10 ">
    Join us at Mysore International School and immerse yourself in a world of knowledge, curiosity, and innovation through our vibrant library services. Unlock the doors to a brighter future filled with endless possibilities.
    </p>
    <a
      href="#"
      className="bg-secondary text-white font-semibold py-3 px-10 rounded-md hover:bg-primary hover:text-secondary transition duration-300"
    >
      Enroll Now
    </a>
  </div>
</div>
      <Footer />
    </div>
  
  );
};

export default Library;