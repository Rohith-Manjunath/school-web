import React from 'react';
import HeroImage from '../../assets/Images/FacilitiesImages/Amenities/transport.jpg';
import Spacious from '../../assets/Images/FacilitiesImages/Amenities/Classroom.jpg';
import Learning from '../../assets/Images/FacilitiesImages/Amenities/HandsOn.jpg';
import SmartClass from '../../assets/Images/FacilitiesImages/Amenities/SmartClass.jpg';
import Environment from '../../assets/Images/FacilitiesImages/Amenities/Environment.jpg';
import Footer from "../../components/layouts/Footer";



const Security= () => {
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
            Security Measures 
            </h1>
            <p className="text-sm md:text-lg max-w-3xl lg:px-5 text-secondary font-description pb-6 tracking-wide">
            At Mysore International School (MIS), the safety and well-being of our students are paramount. We understand that a secure learning environment is essential for fostering personal and academic growth. 
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
          Key Features of Our Security
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
                A Home Away from Home
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Mysore International School is more than just an educational institution; it's a second home for our students. Our Safety and Security Department is dedicated to cultivating an atmosphere of trust and enhancing the quality of life within our diverse educational community. 
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
                Vast and Secure Campus
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Our expansive campus provides students with ample space to learn, grow, and explore safely. We have implemented multi-level security protocols to ensure that students can enjoy the campus without concerns about their safety
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
                Comprehensive Screening
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                No one is permitted on our properties without proper identification and purpose. We conduct thorough background checks on teaching and non-teaching staff, ensuring the highest level of safety and security within our school premises.
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
                CCTV Surveillance
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Our campuses are equipped with state-of-the-art CCTV cameras strategically placed to monitor and record activities across the campus. These cameras play a crucial role in maintaining a secure environment by deterring incidents of crime and bullying, as well as providing valuable evidence in case of any untoward incidents.
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
    Join us at Mysore International School, where student safety is our top priority. Enroll now and experience a learning environment that prioritizes security, trust, and well-being.
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

export default Security;