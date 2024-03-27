import React from 'react';
import HeroImage from '../../assets/Images/FacilitiesImages/Amenities/ComputerLab.jpg';
import Tech from '../../assets/Images/FacilitiesImages/Amenities/tech.jpg';
import Learning from '../../assets/Images/FacilitiesImages/Amenities/learning.jpg';
import Solving from '../../assets/Images/FacilitiesImages/Amenities/solving.jpg';
import Resources from '../../assets/Images/FacilitiesImages/Amenities/resources.jpg';
import Footer from "../../components/layouts/Footer";



const Music = () => {
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
            Music Program
            </h1>
            <p className="text-sm md:text-lg max-w-3xl text-secondary font-description pb-6 tracking-wide">
            The music program at Mysore International School is designed to ignite a passion for music, nurture artistic talents, and cultivate a deep appreciation for musical expression among our students. 
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
            Key Features of Our Musical classroom
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
                Artistic Expression
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Our music program encourages students to explore their creativity and express themselves artistically through various musical genres, instruments, and vocal performances. We provide opportunities for students to develop their musical talents and showcase their skills through concerts, recitals, and performances.
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
                Musical Education
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                We offer comprehensive musical education that covers theoretical knowledge, practical skills, music history, and appreciation. Students learn about musical concepts, notation, rhythm, melody, harmony, and ensemble playing, enhancing their understanding and proficiency in music.
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
                Instrumental Training
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Our school provides access to a wide range of musical instruments, including piano, guitar, violin, drums, flute, and more. Students receive expert guidance and training in playing their chosen instruments, allowing them to develop technical skills, musicality, and confidence in their musical abilities.
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
                Vocal Training and Choir
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Our vocal training programs focus on developing students' singing abilities, vocal techniques, and performance skills. We also have a school choir where students can participate, learn harmonization, teamwork, and stage presence while enjoying the joy of singing together.
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
    Join us at Mysore International School and discover the joy of music, creativity, and artistic expression. Experience the power of music in shaping minds, touching hearts, and creating unforgettable memories.
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

export default Music;