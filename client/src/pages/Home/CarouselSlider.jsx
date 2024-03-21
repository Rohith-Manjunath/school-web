import React, { useState, useEffect } from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import image1 from "../../assets/Images/HomeImages/CarouselImages/children_outing.jpg"
import image2 from "../../assets/Images/HomeImages/CarouselImages/school1.jpg"
import image3 from "../../assets/Images/HomeImages/CarouselImages/school2.jpg"
import image4 from "../../assets/Images/HomeImages/CarouselImages/children_kannada_rajostsava.jpg"
import image5 from "../../assets/Images/HomeImages/CarouselImages/principle_and_children.jpg"
const CarouselSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    {
      image: image1,
      title: 'Unveiling Brilliance',
      description: ' Ignite potential, shape futures. At Mysore International School , we nurture brilliance, empowering confident leaders',
    },
    {
      image: image2,
      title: 'Beyond Boundaries',
      description: 'Expand horizons, embrace diversity. Join us to cultivate global citizens ready to thrive',
    },
    {
      image: image3,
      title: 'Innovate. Inspire. Ignite.',
      description: 'Ignite imagination, foster innovation. Join Mysore International School to inspire lifelong learners.',
    },
    {
      image: image4,
      title: 'Elevating Excellence',
      description: 'Tradition meets innovation. Join Mysore International School to elevate excellence for tomorrow.',
    },
    {
      image: image5,
      title: 'Beyond Education',
      description: 'Holistic education, meaningful lives. Join Mysore International School to nurture heart, mind, and soul.',
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
    <div className="relative h-[80vh] overflow-hidden">
      <div className="slider-container h-full relative">
        {slides.map((slide, index) => (
          <div
          key={index}
          className={`slide fade absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img className="slide-image w-full h-full object-cover brightness-50" src={slide.image} alt={`Slide ${index + 1}`} />
          <div className="flex flex-col slide-content items-center justify-center absolute mt-10 p-4 md:p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl px-4 text-center bg-white bg-opacity-70 rounded-xl">
            <h3 className="text-secondary text-4xl font-bold font-title tracking-wide  capitalize mb-4">{slide.title}</h3>
            <p className="text-secondary  font-medium tracking-wide text-xl font-subtext ">{slide.description}</p>
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

export default CarouselSlider;