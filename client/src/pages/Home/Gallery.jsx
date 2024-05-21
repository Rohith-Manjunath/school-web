import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

//Annual Day
import AnnualDayThumbnail from '../../assets/Images/HomeImages/Gallery/AnnualDay2023/AnnualDay3.jpg';
import AnnualDayEx1 from '../../assets/Images/HomeImages/Gallery/AnnualDay2023/AnnualDay2.jpg';
import AnnualDayEx2 from '../../assets/Images/HomeImages/Gallery/AnnualDay2023/AnnualDay5.jpg';
import AnnualDayEx3 from '../../assets/Images/HomeImages/Gallery/AnnualDay2023/AnnualDay4.jpg';
import AnnualDayEx4 from '../../assets/Images/HomeImages/Gallery/AnnualDay2023/AnnualDay1.jpg';

//Annual Sports Meet
import AnnualSportsThumbnail from "../../assets/Images/HomeImages/Gallery/Annual sports meet/AnnualSports6.jpg";
import AnnualSportsEx1 from "../../assets/Images/HomeImages/Gallery/Annual sports meet/AnnualSports1.jpg";
import AnnualSportsEx2 from "../../assets/Images/HomeImages/Gallery/Annual sports meet/Annualsports2.jpg";
import AnnualSportsEx3 from "../../assets/Images/HomeImages/Gallery/Annual sports meet/AnnualSports3.jpg";
import AnnualSportsEx4 from "../../assets/Images/HomeImages/Gallery/Annual sports meet/AnnualSports4.jpg";
import AnnualSportsEx5 from "../../assets/Images/HomeImages/Gallery/Annual sports meet/AnnualSports5.jpg";

//Enviornment Day
import EnvDayThumbnail from "../../assets/Images/HomeImages/Gallery/Environment day/EnvDay4.jpg"
import EnvDayEx1 from "../../assets/Images/HomeImages/Gallery/Environment day/EnvDay.jpg"
import EnvDayEx2 from "../../assets/Images/HomeImages/Gallery/Environment day/EnvDay1.jpg"
import EnvDayEx3 from "../../assets/Images/HomeImages/Gallery/Environment day/EnvDay2.jpg"
import EnvDayEx4 from "../../assets/Images/HomeImages/Gallery/Environment day/EnvDay3.jpg"
import EnvDayEx5 from "../../assets/Images/HomeImages/Gallery/Environment day/EnvDay4.jpg"


//Fun Fair
import FunFairThumnail from "../../assets/Images/HomeImages/Gallery/Fun fair/FunFair.jpg";
import FunFairEx1 from "../../assets/Images/HomeImages/Gallery/Fun fair/FunFair1.jpg";
import FunFairEx2 from "../../assets/Images/HomeImages/Gallery/Fun fair/FunFair2.jpg";
import FunFairEx3 from "../../assets/Images/HomeImages/Gallery/Fun fair/FunFair3.jpg";
import FunFairEx4 from "../../assets/Images/HomeImages/Gallery/Fun fair/FunFair4.jpg";
import FunFairEx5 from "../../assets/Images/HomeImages/Gallery/Fun fair/FunFair5.jpg";
import FunFairEx6 from "../../assets/Images/HomeImages/Gallery/Fun fair/FunFair6.jpg";

//G20 
import G20Thumnail from "../../assets/Images/HomeImages/Gallery/G20/G202.jpg";
import G20Ex1 from "../../assets/Images/HomeImages/Gallery/G20/G201.jpg";
import G20Ex2 from "../../assets/Images/HomeImages/Gallery/G20/G205.jpg";
import G20Ex3 from "../../assets/Images/HomeImages/Gallery/G20/G203.jpg";
import G20Ex4 from "../../assets/Images/HomeImages/Gallery/G20/G204.jpg";

//Teachers Day
import TeachersDayThumnail from "../../assets/Images/HomeImages/Gallery/Teachers day/TeachDay3.jpg";
import TeachersDayEx1 from "../../assets/Images/HomeImages/Gallery/Teachers day/TechDay1.jpg";
import TeachersDayEx2 from "../../assets/Images/HomeImages/Gallery/Teachers day/Teachday2.jpg";
import TeachersDayEx3 from "../../assets/Images/HomeImages/Gallery/Teachers day/TeachDay4.jpg";
import TeachersDayEx4 from "../../assets/Images/HomeImages/Gallery/Teachers day/TeachDay5.jpg";
import TeachersDayEx5 from "../../assets/Images/HomeImages/Gallery/Teachers day/TeachDay6.jpg";

//Science Day 
import SciDayThumnail from "../../assets/Images/HomeImages/Gallery/Science day/SciDay6.jpg";
import SciDayEx1 from "../../assets/Images/HomeImages/Gallery/Science day/Sciday1.jpg";
import SciDayEx2 from "../../assets/Images/HomeImages/Gallery/Science day/SciDay2.jpg";
import SciDayEx3 from "../../assets/Images/HomeImages/Gallery/Science day/SciDay3.jpg";
import SciDayEx4 from "../../assets/Images/HomeImages/Gallery/Science day/SciDay4.jpg";
import SciDayEx5 from "../../assets/Images/HomeImages/Gallery/Science day/SciDay5.jpg";

//Yoga Day
import YogaDayThumnail from "../../assets/Images/HomeImages/Gallery/Yoga Day/YogaDay2.jpg";
import YogaDayEx1 from "../../assets/Images/HomeImages/Gallery/Yoga Day/YogaDay1.jpg";
import YogaDayEx2 from "../../assets/Images/HomeImages/Gallery/Yoga Day/YogaDay2.jpg";
import YogaDayEx3 from "../../assets/Images/HomeImages/Gallery/Yoga Day/YogaDay3.jpg";

//Science Exibition
import SciExiThumnail from "../../assets/Images/HomeImages/Gallery/Science Exihibition/SciExi2.jpg";
import SciExiEx1 from "../../assets/Images/HomeImages/Gallery/Science Exihibition/SciExi2.jpg";
import SciExiEx2 from "../../assets/Images/HomeImages/Gallery/Science Exihibition/SciExi2.jpg";
import SciExiEx3 from "../../assets/Images/HomeImages/Gallery/Science Exihibition/SciExi2.jpg";
import SciExiEx4 from "../../assets/Images/HomeImages/Gallery/Science Exihibition/SciExi2.jpg";
import SciExiEx5 from "../../assets/Images/HomeImages/Gallery/Science Exihibition/SciExi2.jpg";



const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(null);
  const images = [
    {
      id: 1,
      src: AnnualDayThumbnail,
      title: 'Annual Day 2023',
      carousel: [
        AnnualDayEx1,
        AnnualDayEx2,
        AnnualDayEx3,
        AnnualDayEx4,
      ],
    },
    {
      id: 2,
      src: AnnualSportsThumbnail,
      title: 'Annual Sports Meet',
      carousel: [
        AnnualSportsEx1,
        AnnualSportsEx2,
        AnnualSportsEx3,
        AnnualSportsEx4,
        AnnualSportsEx5,
      ],
    },
    {
      id: 3,
      src: EnvDayThumbnail,
      title: 'Enviornment Day',
      carousel: [
        EnvDayEx1,
        EnvDayEx2,
        EnvDayEx3,
        EnvDayEx4,
        EnvDayEx5,
      ],
    },
    {
      id: 4,
      src: FunFairThumnail,
      title: 'Fun Day',
      carousel: [
        FunFairEx2,
        FunFairEx1,
        FunFairEx3,
        FunFairEx4,
        FunFairEx5,
        FunFairEx6,
      ],
    },
    {
      id: 5,
      src: G20Thumnail,
      title: 'G20',
      carousel: [
        G20Ex1,
        G20Ex2,
        G20Ex3,
        G20Ex4,
      ],
    },
    {
      id: 6,
      src: TeachersDayThumnail,
      title: 'Teachers Day',
      carousel: [
        TeachersDayEx1,
        TeachersDayEx2,
        TeachersDayEx3,
        TeachersDayEx4,
        TeachersDayEx5,
      ],
    },
    {
      id: 7,
      src: SciDayThumnail,
      title: 'Science Day',
      carousel: [
        SciDayEx1,
        SciDayEx2,
        SciDayEx3,
        SciDayEx4,
        SciDayEx5,
      ],
    },
    {
      id: 8,
      src: YogaDayThumnail,
      title: 'Yoga Day',
      carousel: [
        YogaDayEx1,
        YogaDayEx2,
        YogaDayEx3,
      ],
    },
    {
      id: 9,
      src: SciExiThumnail,
      title: 'Science Exihibition',
      carousel: [
        SciExiEx1,
        SciExiEx2,
        SciExiEx3,
        SciExiEx4,
        SciExiEx5,
      ],
    },
    // {
    //   id: 10,
    //   src: 'https://picsum.photos/id/10/800/600',
    //   title: 'Image 10',
    //   carousel: [
    //     'https://picsum.photos/id/10/800/600',
    //     'https://picsum.photos/id/20/800/600',
    //     'https://picsum.photos/id/30/800/600',
    //   ],
    // },
    // {
    //   id: 11,
    //   src: 'https://picsum.photos/id/11/800/600',
    //   title: 'Image 11',
    //   carousel: [
    //     'https://picsum.photos/id/11/800/600',
    //     'https://picsum.photos/id/21/800/600',
    //     'https://picsum.photos/id/31/800/600',
    //   ],
    // },
    // {
    //   id: 12,
    //   src: 'https://picsum.photos/id/12/800/600',
    //   title: 'Image 12',
    //   carousel: [
    //     'https://picsum.photos/id/12/800/600',
    //     'https://picsum.photos/id/22/800/600',
    //     'https://picsum.photos/id/32/800/600',
    //   ],
    // },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setCurrentIndex(0);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    clearInterval(autoScroll);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? selectedImage.carousel.length - 1
        : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedImage.carousel.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest('.modal-content') === null) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (showModal) {
      const interval = setInterval(() => {
        handleNextImage();
      }, 5000);
      setAutoScroll(interval);
    }

    return () => {
      clearInterval(autoScroll);
    };
  }, [showModal, selectedImage]);

  return (
    <div className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-white tracking-wider font-title mb-2"
        >
          Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-white tracking-wider font-medium font-description mb-8"
        >
          Explore our collection of beautiful images. Click on any image to view more in the carousel.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 border-4 rounded-2xl border-b-primary "
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-medium font-serif tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOutsideClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="modal-content bg-white rounded-lg shadow-lg max-w-7xl mx-auto relative p-4"
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors duration-300"
              onClick={handleCloseModal}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative">
              <img
                src={selectedImage.carousel[currentIndex]}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
                onClick={handlePrevImage}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
                onClick={handleNextImage}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center py-2">
                {selectedImage.carousel.map((_, index) => (
                  <span
                    key={index}
                    className={`mx-1 h-3 w-3 rounded-full bg-white ${
                      index === currentIndex ? 'bg-fuchsia-950 h-4 w-4' : ''
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;