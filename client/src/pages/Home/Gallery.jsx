import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(null);
  const images = [
    {
      id: 1,
      src: 'https://picsum.photos/id/1/800/600',
      title: 'Image 1',
      carousel: [
        'https://picsum.photos/id/1/800/600',
        'https://picsum.photos/id/11/800/600',
        'https://picsum.photos/id/21/800/600',
      ],
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/2/800/600',
      title: 'Image 2',
      carousel: [
        'https://picsum.photos/id/2/800/600',
        'https://picsum.photos/id/12/800/600',
        'https://picsum.photos/id/22/800/600',
      ],
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/3/800/600',
      title: 'Image 3',
      carousel: [
        'https://picsum.photos/id/3/800/600',
        'https://picsum.photos/id/13/800/600',
        'https://picsum.photos/id/23/800/600',
      ],
    },
    {
      id: 4,
      src: 'https://picsum.photos/id/4/800/600',
      title: 'Image 4',
      carousel: [
        'https://picsum.photos/id/4/800/600',
        'https://picsum.photos/id/14/800/600',
        'https://picsum.photos/id/24/800/600',
      ],
    },
    {
      id: 5,
      src: 'https://picsum.photos/id/5/800/600',
      title: 'Image 5',
      carousel: [
        'https://picsum.photos/id/5/800/600',
        'https://picsum.photos/id/15/800/600',
        'https://picsum.photos/id/25/800/600',
      ],
    },
    {
      id: 6,
      src: 'https://picsum.photos/id/6/800/600',
      title: 'Image 6',
      carousel: [
        'https://picsum.photos/id/6/800/600',
        'https://picsum.photos/id/16/800/600',
        'https://picsum.photos/id/26/800/600',
      ],
    },
    {
      id: 7,
      src: 'https://picsum.photos/id/7/800/600',
      title: 'Image 7',
      carousel: [
        'https://picsum.photos/id/7/800/600',
        'https://picsum.photos/id/17/800/600',
        'https://picsum.photos/id/27/800/600',
      ],
    },
    {
      id: 8,
      src: 'https://picsum.photos/id/8/800/600',
      title: 'Image 8',
      carousel: [
        'https://picsum.photos/id/8/800/600',
        'https://picsum.photos/id/18/800/600',
        'https://picsum.photos/id/28/800/600',
      ],
    },
    {
      id: 9,
      src: 'https://picsum.photos/id/9/800/600',
      title: 'Image 9',
      carousel: [
        'https://picsum.photos/id/9/800/600',
        'https://picsum.photos/id/19/800/600',
        'https://picsum.photos/id/29/800/600',
      ],
    },
    {
      id: 10,
      src: 'https://picsum.photos/id/10/800/600',
      title: 'Image 10',
      carousel: [
        'https://picsum.photos/id/10/800/600',
        'https://picsum.photos/id/20/800/600',
        'https://picsum.photos/id/30/800/600',
      ],
    },
    {
      id: 11,
      src: 'https://picsum.photos/id/11/800/600',
      title: 'Image 11',
      carousel: [
        'https://picsum.photos/id/11/800/600',
        'https://picsum.photos/id/21/800/600',
        'https://picsum.photos/id/31/800/600',
      ],
    },
    {
      id: 12,
      src: 'https://picsum.photos/id/12/800/600',
      title: 'Image 12',
      carousel: [
        'https://picsum.photos/id/12/800/600',
        'https://picsum.photos/id/22/800/600',
        'https://picsum.photos/id/32/800/600',
      ],
    },
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