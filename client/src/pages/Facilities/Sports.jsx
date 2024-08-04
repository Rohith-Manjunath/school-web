import React from 'react';
import HeroImage from '../../assets/Images/FacilitiesImages/Amenities/transport.jpg';
import Tech from '../../assets/Images/FacilitiesImages/Amenities/tech.jpg';
import Learning from '../../assets/Images/FacilitiesImages/Amenities/learning.jpg';
import Solving from '../../assets/Images/FacilitiesImages/Amenities/solving.jpg';
import Resources from '../../assets/Images/FacilitiesImages/Amenities/resources.jpg';
import Footer from "../../components/layouts/Footer";



const Sports = () => {
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
            Sports Activity 
            </h1>
            <p className="text-sm md:text-lg max-w-3xl text-secondary font-description pb-6 tracking-wide">
            Mysore International School offers state-of-the-art sports facilities to support students' physical fitness and athletic development.
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
          State-of-the-Art Sports Facilities which includes
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
                Diverse Sports Offerings
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Our school provides a wide range of sports activities, including throwball, basketball, golf, tennis, and more, catering to diverse interests and skill levels.
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
                Professional Coaching
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Experienced and qualified coaches lead our sports programs, providing professional training, guidance, and support to students in developing their skills and techniques.
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
                Fitness and Wellness
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                In addition to sports training, we prioritize fitness and wellness with dedicated facilities for gym workouts, yoga sessions, and wellness programs to promote overall well-being among students.
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
                Competitive Opportunities
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Students have the opportunity to participate in inter-school and regional sports competitions, fostering sportsmanship, teamwork, and leadership skills.
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
    Join us in Improving athletic abilities, fosters teamwork and leadership skills, and prepares students for competitive sports events.
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

export default Sports;