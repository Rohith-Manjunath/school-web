import React from 'react';
import HeroImage from '../../assets/Images/FacilitiesImages/Amenities/ComputerLab.jpg';
import Tech from '../../assets/Images/FacilitiesImages/Amenities/tech.jpg';
import Learning from '../../assets/Images/FacilitiesImages/Amenities/learning.jpg';
import Solving from '../../assets/Images/FacilitiesImages/Amenities/solving.jpg';
import Resources from '../../assets/Images/FacilitiesImages/Amenities/resources.jpg';
import Footer from "../../components/layouts/Footer";



const ComputerPage = () => {
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
            Computer Lab
            </h1>
            <p className="text-sm md:text-lg max-w-3xl text-secondary font-description pb-6 tracking-wide">
            Our computer lab is a dedicated space equipped with cutting-edge technology, providing students with hands-on learning opportunities and access to the latest software and resources.
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
            Key Features of Our Computer Labs
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
                Technology Integration
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Our curriculum integrates technology seamlessly into learning, ensuring students stay abreast of technological advancements.
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
                Hands-On Learning
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Students engage in practical exercises, experimenting with software applications, exploring the internet, and mastering programming languages.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <img
                src={Solving}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                Problem-Solving Skills
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Through hands-on experiences, students develop strong problem-solving abilities, applying theoretical knowledge to real-world scenarios.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <img
                src={Resources}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                Innovative Resources
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                The lab is equipped with state-of-the-art hardware and software, fostering innovation and creativity among students.
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
    Join us in providing your child with a safe and enriching learning experience in our state-of-the-art computer lab at Mysore International School.
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

export default ComputerPage;