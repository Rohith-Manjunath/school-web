import React from 'react';
import HeroImage from '../../assets/Images/FacilitiesImages/Amenities/transport.jpg';
import Spacious from '../../assets/Images/FacilitiesImages/Amenities/Classroom.jpg';
import Learning from '../../assets/Images/FacilitiesImages/Amenities/HandsOn.jpg';
import SmartClass from '../../assets/Images/FacilitiesImages/Amenities/SmartClass.jpg';
import Environment from '../../assets/Images/FacilitiesImages/Amenities/Environment.jpg';
import Footer from "../../components/layouts/Footer";



const Classroom = () => {
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
            Classroom Facilities
            </h1>
            <p className="text-sm md:text-lg max-w-3xl lg:px-5 text-secondary font-description pb-6 tracking-wide">
            At Mysore International School, we understand that learning goes beyond academics. Our classroom facilities are designed to create an environment conducive to holistic growth, critical thinking, and creativity among our students.
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
          Classroom Facilities at Mysore International School
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
                Technology Integration
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Our school boasts spacious and well-ventilated classrooms that are bathed in natural light, creating an ideal setting for effective learning. Each classroom is equipped with state-of-the-art audio-visual facilities, interactive whiteboards, display boards, and ergonomically designed age-appropriate furniture, ensuring a comfortable and engaging learning environment.
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
                At Mysore International School, we strongly believe in the power of hands-on learning as a transformative educational approach. Our curriculum is designed to provide students with ample opportunities for practical, experiential learning that goes beyond traditional classroom instruction.
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
                Interactive Learning
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Smart classrooms at Mysore International School are equipped with interactive whiteboards, Smart displays, and multimedia resources. These tools enable teachers to deliver engaging lessons that capture students' attention and encourage active participation.
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
                Environmental Sustainability
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Students have the opportunity to At Mysore International School, we prioritize the holistic development of our students, which includes fostering an eco-friendly environment. Our classrooms are designed with sustainability in mind, incorporating eco-friendly practices and materials wherever possible.
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
    By joining Mysore International School, students not only excel academically but also develop essential life skills, leadership qualities, and a passion for lifelong learning. Join us in creating a dynamic and enriching learning environment for your child.
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

export default Classroom;