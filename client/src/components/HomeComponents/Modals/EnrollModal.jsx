import React from 'react';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import { FaUser, FaCalendar, FaPhone, FaMapMarkerAlt, FaListAlt, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const EnrollmentModal = ({ isModalOpen, setIsModalOpen, handleSubmit, ...formProps }) => {
  const {
    name, setName,
    dob, setDob,
    phone, setPhone,
    altPhone, setAltPhone,
    category, setCategory,
    address, setAddress,
    isLoading,
    file
  } = formProps;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              zIndex: 98,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
            content: {
              width: '95%',
              maxWidth: '800px',
              height: '95vh',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#ffffff',
              color: '#333333',
              overflowY: 'auto',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '20px',
              border: 'none',
              outline: 'none',
              padding: '0',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <div className="bg-secondary p-6 rounded-t-2xl">
              <h2 className="text-3xl font-bold text-white text-center mb-2">Enrollment Form</h2>
              <p className="text-white text-center opacity-80">Join our community of learners</p>
            </div>

            <motion.button
              className="absolute top-4 right-4 cursor-pointer text-white text-2xl transition-colors duration-300 bg-white bg-opacity-20 rounded-full p-2"
              onClick={() => setIsModalOpen(false)}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.9 }}
            >
              <IoMdClose />
            </motion.button>

            <form onSubmit={handleSubmit} className="space-y-6 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  icon={<FaUser />}
                  label="Student Name*"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <InputField
                  icon={<FaCalendar />}
                  label="Date of Birth*"
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />

                <InputField
                  icon={<FaPhone />}
                  label="Phone Number*"
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <InputField
                  icon={<FaPhone />}
                  label="Alternative Phone Number"
                  type="tel"
                  name="altPhone"
                  value={altPhone}
                  onChange={(e) => setAltPhone(e.target.value)}
                />

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <FaListAlt className="text-textSecondary" /> Category*
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select category</option>
                    <option value="Pre-Primary-School">Pre-Primary School</option>
                    <option value="Primary-School">Primary School</option>
                    <option value="Middle-School">Middle School</option>
                    <option value="High-School">High School</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-textSecondary" /> Address
                  </label>
                  <textarea
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="address"
                    rows="3"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 justify-start">
                <input type="checkbox" id="agree" className="w-5 h-5 text-textSecondary rounded" />
                <label htmlFor="agree" className="flex text-sm text-gray-700">
                  <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:underline font-medium"
                  >
                    I agree with the terms and conditions
                  </a>
                </label>
              </div>

              <div className="text-center">
                <motion.button
                  disabled={isLoading}
                  type="submit"
                  className="bg-gradient-to-r from-secondary to-ctcPrimaryLight text-white px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <FaCheckCircle className="mr-2" /> Submit Enrollment
                    </span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

const InputField = ({ icon, label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
      <span className="text-textSecondary">{icon}</span> {label}
    </label>
    <input
      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      {...props}
    />
  </div>
);

export default EnrollmentModal;
