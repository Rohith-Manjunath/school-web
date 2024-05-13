import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const searchQuery=useSearchParams()[0]
  const referenceNum=searchQuery.get("reference")
  const navigate=useNavigate()


  if(!referenceNum){
      
      navigate("/")
      return;

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={300}
        recycle={false}
        run={inView}
      />
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50, scale: 0.5 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
        >
          <FaCheckCircle className="text-6xl text-green-500 mb-4 animate-pulse" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.7 }}
          className="tracking-wide font-extrabold text-2xl sm:text-3xl md:text-4xl text-center mb-2 text-secondary"
        >
          Fee Payment Successful
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.9 }}
          className="text-black text-[16px] md:text-[18px]  text-center mb-2"
        >
          Thank you for your fee payment! Your transaction has been processed successfully.
        </motion.p>

        <span className='my-5 text-gray-600'>Reference No.{referenceNum}</span>
        
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.1 }}
        >
          <a
            href="/"
            className="bg-ctcPrimary hover:bg-[#7A0D71] text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-300 flex items-center"
          >
            <span className="mr-2">Back to Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;