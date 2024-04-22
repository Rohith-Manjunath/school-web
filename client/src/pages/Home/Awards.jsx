import React from 'react';
import image2 from '../../assets/Images/HomeImages/Awards/awards1.jpg';
import image3 from '../../assets/Images/HomeImages/Awards/awards2.jpg';
import image4 from '../../assets/Images/HomeImages/Awards/awards3.jpg';
import image5 from '../../assets/Images/HomeImages/Awards/awards4.jpg';;
import image6 from '../../assets/Images/HomeImages/Awards/awards5.jpg';
import image7 from '../../assets/Images/HomeImages/Awards/awards6.jpg';
import image8 from '../../assets/Images/HomeImages/Awards/awards7.jpg';
import image9 from '../../assets/Images/HomeImages/Awards/awards8.jpg';
import image10 from '../../assets/Images/HomeImages/Awards/awards9.jpg';
import image11 from '../../assets/Images/HomeImages/Awards/awards10.jpg';
import image12 from '../../assets/Images/HomeImages/Awards/awards11.jpg';
// import image13 from '../../assets/Images/HomeImages/Awards/awards12.jpg';

const Awards = () => {
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
    // image13,
  ];



  return (
    <div className="bg-secondary py-12 md:px-12 mt-10">
      <div className=" mx-auto px-8 ">
        <h2 className="text-4xl font-bold text-white font-title mb-4">Awards & Achievements</h2>
        <p className="text-white mb-8">Explore stunning collection of images of our Awards and Achievements</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 `}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full object-cover bg-white"
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Awards;