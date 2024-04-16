import React from 'react';
import image2 from '../../assets/Images/HomeImages/Gallery/AnnualDay2023.jpg';
import image3 from '../../assets/Images/HomeImages/Gallery/CurioQuest.jpg';
import image4 from '../../assets/Images/HomeImages/Gallery/EnviornmentDay.jpg';
import image5 from '../../assets/Images/HomeImages/Gallery/G20.jpg';
import image6 from '../../assets/Images/HomeImages/Gallery/GrandparentsDay.jpg';
import image7 from '../../assets/Images/HomeImages/Gallery/HindiDiwas.jpg';
import image8 from '../../assets/Images/HomeImages/Gallery/IndependenceDay.jpg';
import image9 from '../../assets/Images/HomeImages/Gallery/InvestitureCeremony.jpg';
import image10 from '../../assets/Images/HomeImages/Gallery/MockParliamnet.jpg';
import image11 from '../../assets/Images/HomeImages/Gallery/ScienceDay.jpg';
import image12 from '../../assets/Images/HomeImages/Gallery/ScienceExibition.jpg';
import image13 from '../../assets/Images/HomeImages/Gallery/TeachersDay.jpg';

const Gallery = () => {
  const images = [
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];

  const titles = [
    '" Annual Day 2023 "',
    '" Curio Quest "',
    '" Enviornment Day "',
    '" G20 "',
    '" Grandparents Day "',
    '" Hindi Diwas "',
    '" Independence Day "',
    '" Investiture Ceremony "',
    '" Mock Parliamnent "',
    '" Science Day "',
    '" ScienceExibition "',
    '" Teachers Day "',
  ];

  return (
    <div className="bg-secondary py-12 md:px-12">
      <div className=" mx-auto px-8 ">
        <h2 className="text-4xl font-bold text-white font-title mb-4">Gallery</h2>
        <p className="text-white mb-8">Explore our stunning collection of images.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 `}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <h3 className="text-white text-xl font-bold">{titles[index]}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Gallery;