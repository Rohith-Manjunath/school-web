import React from 'react';
import HeroImage from '../../assets/Images/FacilitiesImages/Amenities/ComputerLab.jpg';
import Tech from '../../assets/Images/FacilitiesImages/Amenities/tech.jpg';
import Learning from '../../assets/Images/FacilitiesImages/Amenities/learning.jpg';
import Solving from '../../assets/Images/FacilitiesImages/Amenities/solving.jpg';
import Resources from '../../assets/Images/FacilitiesImages/Amenities/resources.jpg';
import Footer from "../../components/layouts/Footer";



const ScienceLab = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
            Science Laboratories
            </h1>
            <p className="text-sm md:text-lg max-w-3xl text-secondary font-description pb-6 tracking-wide">
            The study of science at Mysore International School goes beyond theoretical knowledge; it's about hands-on exploration and discovery. 
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
            Key Features of Our Science Laboratories
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <li className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <img
                src={Tech}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                Physics Laboratory: Learning Through Experimentation
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                In our physics laboratory, students engage in a variety of experiments designed to deepen their understanding of physical phenomena. From designing experiments to performing them under controlled conditions, students learn to handle equipment, make accurate measurements, and analyze data. This practical approach not only reinforces theoretical concepts but also fosters critical thinking and problem-solving skills.
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
                Chemistry Laboratory: Discovering through Experimentation
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                The chemistry laboratory is where the magic of discovery happens. Students delve into the fascinating world of chemical reactions and processes through hands-on experimentation. From designing experiments to observing reactions firsthand, students develop a deeper understanding of chemical principles and improve their practical skills in handling apparatus and chemicals safely.
                </p>
              </div>
            </li>
            {/* <li className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <img
                src={Solving}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                Chemistry Laboratory: Discovering through Experimentation
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                The chemistry laboratory is where the magic of discovery happens. Students delve into the fascinating world of chemical reactions and processes through hands-on experimentation. From designing experiments to observing reactions firsthand, students develop a deeper understanding of chemical principles and improve their practical skills in handling apparatus and chemicals safely.
                </p>
              </div>
            </li> */}
            <li className="bg-white rounded-lg shadow-lg overflow-hidden items-center cursor-pointer">
            <img
                src={Resources}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                Biology Laboratory: Exploring the Diversity of Life
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                In the biology laboratory, students explore the intricate structures and functions of living organisms. Through microscope studies, specimen analysis, and practical investigations, students delve into the morphological, histological, and physiological aspects of plants and animals. This hands-on approach instills a sense of curiosity and appreciation for the rich diversity of life forms around us.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Closing Section */}
      <div className="py-16 bg-primary">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* <h2 className="text-3xl font-semibold text-gray-800 mb-6">
      Experience Safe and Secure Transportation
    </h2>
    <p className="text-gray-600 text-lg mb-8">
      Our transportation services with tracking facilities are designed to provide the utmost safety and convenience to both students and their families. We understand that trust and peace of mind are essential when it comes to your child's transportation, and our commitment to these values is reflected in our advanced tracking technology.
    </p> */}
    <p className="text-secondary tracking-wider text-lg font-semibold mb-10">
    Join us at Mysore International School and embark on a scientific journey filled with exploration, experimentation, and discovery. Enroll now and be part of a vibrant learning community that values hands-on learning and scientific inquiry.
    </p>
    <a
      href="#"
      className="bg-secondary text-white font-semibold py-3 px-10 rounded-md hover:bg-primary border  hover:border-secondary hover:text-secondary transition duration-300"
    >
      Enroll Now
    </a>
  </div>
</div>
      <Footer />
    </div>
  
  );
};

export default ScienceLab;