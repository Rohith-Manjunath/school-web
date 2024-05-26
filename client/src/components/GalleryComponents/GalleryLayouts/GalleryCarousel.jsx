import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion as Motion } from 'framer-motion'; // Assuming you need to rename it to avoid conflict
import Modal from 'react-modal'

const GalleryCarousel = ({
  handleOutsideClick,
  motion,
  handleCloseModal,
  singleContent,
  currentIndex,
  handlePrev,
  handleNext,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <Modal

      isOpen={true}
      shouldCloseOnOverlayClick={true}
      className=""
      style={{
        overlay: {
          zIndex: 98,
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
        },
        content: {
          width: '90%', // Adjust the width for small screens
          maxWidth: '1000px',
          height: '82vh', // Set height to auto for responsiveness
          maxHeight: '90vh', // Ensuring the modal doesn't exceed the viewport height
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: '#580B57',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '10px',
          border: '4px solid white',
          outline: 'none',
          backgroundColor: 'transparent',
          padding: '0px',
          zIndex:"200",
          overflowY: 'auto', // Allow scrolling if content exceeds modal height
        },
      
      }}

      >
        <button
          className="absolute top-4 z-10 right-4 md:top-6 md:right-6 bg-white rounded-lg text-secondary border border-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.stopPropagation();
            handleCloseModal();
          }}
        >
          <IoMdClose className="h-4 w-4 md:h-6 md:w-6" />
        </button>
        <div className="relative">
          <img
            src={singleContent?.avatar[currentIndex]?.url}
            className="w-full h-auto rounded-lg"
            alt="Gallery Image"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
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
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
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
            {singleContent?.avatar.map((_, index) => (
              <span
                key={index}
                className={`mx-1 h-2 w-2 md:h-4 md:w-4 rounded-full ${
                  index === currentIndex ? 'bg-secondary h-2 w-3 md:h-4 md:w-7 ' : 'bg-white'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryCarousel;
