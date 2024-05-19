import React, { useState, useEffect, useRef } from 'react';
import image1 from "../../assets/Images/HomeImages/WelcomeModal/AdmissionOpen.jpg";
import image2 from "../../assets/Images/HomeImages/WelcomeModal/flyer_MIS_1.jpg";
import image3 from "../../assets/Images/HomeImages/WelcomeModal/flyer_MIS_2.jpeg";
import image4 from "../../assets/Images/HomeImages/WelcomeModal/flyer_MIS_3.jpeg";

const WelcomeModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4];
  const modalRef = useRef(null);

  useEffect(() => {
    // Reset the localStorage value on page refresh
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('hasSeenModal');
    });

    const hasSeenModal = localStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      setTimeout(() => {
        setShowModal(true);
      }, 3000); // Delay the modal by 3 seconds
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (event.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalRef]);

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem('hasSeenModal', 'true');
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = () => {
    window.open(images[currentImageIndex], '_blank');
  };

  return (
    <>
     <noscript>
        <div className="fixed z-50 inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"></div>
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 sm:mx-0 relative z-10 modal-container">
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="object-scale-down w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </noscript>
      
      {showModal && (
        <div className="fixed z-50 inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"></div>
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 sm:mx-0 relative z-10 modal-container"
            ref={modalRef}
            aria-modal="true"
            role="dialog"
          >
            <div className="absolute top-2 right-2 z-10">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleClose}
                aria-label="Close modal"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative h-96 w-full modal-image-container">
              <div className="absolute pt-14 left-0 w-full h-full ">
                <img
                  src={images[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                  className="object-scale-down w-full h-full cursor-pointer"
                  loading="lazy"
                  onClick={handleImageClick}
                />
              </div>
              <button
                className="absolute top-1/2 -translate-y-1/2 left-4 text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute top-1/2 -translate-y-1/2 right-4 text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex justify-center mt-4 mb-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full mx-1 cursor-pointer ${
                    index === currentImageIndex ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .modal-container {
          max-width: 2xl;
        }

        @media (min-width: 1024px) {
          .modal-container {
            max-width: 4xl;
          }

          .modal-image-container {
            height: 600px;
          }
        }
      `}</style>
    </>
  );
};

export default WelcomeModal;