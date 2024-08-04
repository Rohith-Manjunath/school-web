import React from 'react';
import HeroImage from '../../assets/Images/FacilitiesImages/Amenities/ComputerLab.jpg';
import Tech from '../../assets/Images/FacilitiesImages/Amenities/tech.jpg';
import Learning from '../../assets/Images/FacilitiesImages/Amenities/learning.jpg';
import Solving from '../../assets/Images/FacilitiesImages/Amenities/solving.jpg';
import Resources from '../../assets/Images/FacilitiesImages/Amenities/resources.jpg';
import Footer from "../../components/layouts/Footer";



const ScoutsAndGuide = () => {
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
            Scouts and Guides at MIS
            </h1>
            <p className="text-sm md:text-lg max-w-3xl text-secondary font-description pb-6 tracking-wide">
            The Scouts and Guides program at Mysore International School plays a crucial role in nurturing confidence, self-esteem, and essential life skills among our students. 
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
            Key Features of Our Scouts and Guides
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
                Building Confidence and Self-Esteem
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Participation in Scouts and Guides empowers students to build confidence in themselves and their abilities. Engaging in challenging activities, overcoming obstacles, and achieving milestones contribute to a sense of accomplishment and self-worth.
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
                Life Skills and Team Building
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Scouts and Guides learn valuable life skills such as leadership, problem-solving, communication, and collaboration. Team building exercises, outdoor challenges, and group projects foster a sense of camaraderie and teamwork among participants.
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
                Outdoor Adventures and Exploration
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                The program encourages students to explore the world beyond the classroom through outdoor adventures. Activities like camping, hiking, orienteering, and nature exploration provide opportunities for hands-on learning and appreciation of the environment.
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
                Educational and Fun Activities
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Scouts and Guides engage in a variety of educational and fun activities throughout the year. These activities include workshops, skill-building sessions, community service projects, cultural exchanges, and adventurous expeditions, ensuring a well-rounded experience for participants.
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
    Discover the world, build lifelong friendships, and make a positive impact on your community. Enroll now and be part of a vibrant scouting community that celebrates adventure, learning, and service!
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

export default ScoutsAndGuide;