import React from 'react';
import HeroImage from '../../assets/Images/FacilitiesImages/Amenities/transport.jpg';
import DaVinciEmblem from '../../assets/Images/FacilitiesImages/Amenities/Danvinci.jpg';
import ColumbusEmblem from '../../assets/Images/FacilitiesImages/Amenities/Columbus.jpg';
import EinsteinEmblem from '../../assets/Images/FacilitiesImages/Amenities/AlbertEinstein.jpg';
import GandhiEmblem from '../../assets/Images/FacilitiesImages/Amenities/MahatmaGandhi.jpg';
import Footer from "../../components/layouts/Footer";

const Houses = () => {
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
          <div className="max-w-4xl mx-4 px-3 text-center bg-white p-10 rounded-md bg-opacity-70">
            <h1 className="text-2xl md:text-4xl font-bold font-title tracking-wide text-secondary mb-2">
              Houses at Mysore International School
            </h1>
            <p className="text-sm md:text-lg max-w-3xl text-secondary font-description pb-6 tracking-wide">
              At Mysore International School, we believe in nurturing more than just academic excellence. Our mission is to foster holistic growth, leadership, and a sense of community among our students.
            </p>
            <a
              href="#houses"
              className="bg-secondary text-white py-2 px-4 rounded-md tracking-wider hover:bg-primary hover:text-secondary border border-secondary hover:border-secondary font-semibold transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Houses Section */}
      <div className="py-8 md:py-16 bg-gray-100" id="houses">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-title tracking-wide text-secondary mb-10 text-center">
            Houses at Mysore International School
          </h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <li className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <img
                src={DaVinciEmblem}
                alt="Da-Vinci Emblem"
                className="w-full h-48 object-center"
              />
              <div className="p-4 md:p-6 bg-red-700">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    Da-Vinci ( Red House )
                </h3>
                <p className="text-white text-sm md:text-base ">
                  The emblem of Red represents courage and determination. Red symbolizes passion, energy, and the drive to achieve one's goals.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <img
                src={ColumbusEmblem}
                alt="Columbus Emblem"
                className="w-full h-48 object-fill"
              />
              <div className="p-4 md:p-6 bg-blue-700">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Columbus ( Blue House )
                </h3>
                <p className="text-white text-sm md:text-base">
                  The blue emblem stands for unity and compassion. Blue represents trust, responsibility, and the sense of belonging to a larger community.
                </p>
              </div>
            </li>
            <li className="bg-yellow-300 rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <img
                src={EinsteinEmblem}
                alt="Einstein Emblem"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                  Einstein (Yellow House)
                </h3>
                <p className="text-secondary text-sm md:text-base">
                  The yellow emblem signifies loyalty and steadfastness. Yellow embodies friendship, trust, and unwavering commitment to one's house.
                </p>
              </div>
            </li>
            <li className="bg-orange-500 rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <img
                src={GandhiEmblem}
                alt="Gandhi Emblem"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Gandhi (Green House)
                </h3>
                <p className="text-white text-sm md:text-base">
                  The green emblem reflects growth and harmony. Green represents balance, development, and a commitment to nurturing the environment and each other.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Closing Section */}
          {/* Closing Section */}
          <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-lg mb-10 ">
            At Mysore International School, we prepare our students not only for academic success but for leadership in life. Unlock your potential, grow as a leader, and embrace the rich diversity of our school community through our Houses System.
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

export default Houses;

