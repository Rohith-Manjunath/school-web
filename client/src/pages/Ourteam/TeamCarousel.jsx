import React, { useState, useEffect } from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import image1 from "../../assets/Images/OutTeamImages/HOD.jpeg"
import image2 from "../../assets/Images/OutTeamImages/SupportTeam.jpg"
import image3 from "../../assets/Images/OutTeamImages/Coordinators.jpg"

const TeamCarousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    {
      image: image1,
      title: "HOD's of various departments",
      description: ' Meet our dedicated HODs, leading their departments with expertise and passion. They guide our faculty and students, fostering innovation and academic excellence.',
    },
    {
      image: image2,
      title: 'Support Team',
      description: 'Meet our dedicated Support Team, committed to providing exceptional service and assistance to our community.',
    },
    {
      image: image3,
      title: 'Our Coordinators Team',
      description: 'Meet the dedicated coordinators who play a pivotal role in ensuring a smooth and enriching educational experience. From curriculum planning to extracurricular activities.',
    },
   
  ];

  const handleSlideChange = (n) => {
    const newIndex = currentSlideIndex + n;
    if (newIndex < 0) {
      setCurrentSlideIndex(slides.length - 1);
    } else if (newIndex >= slides.length) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(newIndex);
    }
  };

  const handleCurrentSlide = (n) => {
    setCurrentSlideIndex(n - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  return (
    <div className="relative h-[50vh] md:h-[80vh] mx-[1rem] my-[3rem] md:mx-[8rem] md:my-[3rem] overflow-hidden rounded-2xl md:rounded-2xl shadow-2xl shadow-secondary ">
      <div className="slider-container h-full relative">
        {slides.map((slide, index) => (
          <div
          key={index}
          className={`slide fade absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img className="slide-image w-full h-full object-cover brightness-50" src={slide.image} alt={`Slide ${index + 1}`} />
          <div className="flex flex-col slide-content items-center justify-center absolute mt-2 p-4 md:p-10 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%]   text-center bg-white bg-opacity-70 rounded-xl ">
            <h3 className="text-secondary text-xl md:text-2xl font-bold font-title tracking-wide  capitalize mb-0 md:mb-3">{slide.title}</h3>
            <p className="text-secondary  font-medium tracking-wide text-l md:text-xl font-subtext ">{slide.description}</p>
          </div>
        
          <div className="slide-number-container absolute justify-center bottom-4 left-4 z-10 flex items-center gap-2 text-gray-300 font-medium tracking-wider">
            <p className="slider-number">{index + 1}</p>
            <hr className="w-4 transform rotate-45 border-gray-300 " />
            <p className="slider-number">{slides.length}</p>
          </div>
        </div>
        ))}
      </div>

      <div className="slider-nav absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
  <button
    className="slider-nav-btn bg-gray-200 bg-opacity-20 text-white p-2 mt-5 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-opacity-50"
    onClick={() => handleSlideChange(-1)}
  >
    <FaCaretLeft />
  </button>
  <button
    className="slider-nav-btn bg-gray-200 bg-opacity-20 text-white p-2 mt-5 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-opacity-50"
    onClick={() => handleSlideChange(1)}
  >
    <FaCaretRight />
  </button>
</div>


      <div className="dot-container absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
        {slides.map((_slide, index) => (
          <span
            key={index}
            className={`dot w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentSlideIndex ? 'bg-white shadow' : 'bg-gray-200 bg-opacity-20'
            }`}
            onClick={() => handleCurrentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;