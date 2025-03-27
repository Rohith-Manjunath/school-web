// HeroSection.jsx
import React, { useState } from 'react';
import { School, GraduationCap, Award, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import service from '../../marketingservices/services/service'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [form, setForm] = useState({
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    referenceNumber:'',
    childName:''
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (form.parentName === '' || form.email === '' || form.phone === '' || form.grade === ''|| form.childName === '') {
      setError('All fields are required');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    try {
      setLoading(true);
      const referenceNumber = `MIS-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
      form.referenceNumber = referenceNumber;
      
      // Make API call
      await service.submitForm(form);

      // Handle success
      setShowSuccess(true);
     
      setForm({
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        childName:'',
        referenceNumber:''
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 1000);
      navigate('/Thankyou', { 
        state: { referenceNumber }
      });
    } catch (err) {
      // Handle error
      setError(err.response.data.err || 'Failed to submit form. Please try again.');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Moving background elements
  const floatingElements = [
    { id: 1, size: 'w-16 h-16', color: 'bg-[#E76F51]', opacity: 'opacity-20', initialPosition: 'top-10 left-10', animate: { x: [0, 30, 0], y: [0, -30, 0], rotate: [0, 15, 0] } },
    { id: 2, size: 'w-20 h-20', color: 'bg-yellow-300', opacity: 'opacity-10', initialPosition: 'top-32 right-20', animate: { x: [0, -40, 0], y: [0, 20, 0], rotate: [0, -10, 0] } },
    { id: 3, size: 'w-24 h-24', color: 'bg-[#8A2E88]', opacity: 'opacity-15', initialPosition: 'bottom-10 left-1/4', animate: { x: [0, 20, 0], y: [0, -20, 0], rotate: [0, 5, 0] } },
    { id: 4, size: 'w-12 h-12', color: 'bg-white', opacity: 'opacity-10', initialPosition: 'bottom-20 right-1/3', animate: { x: [0, -15, 0], y: [0, 25, 0], rotate: [0, -8, 0] } },
  ];

  return (
    <section className="bg-secondary py-10 sm:py-16 lg:py-24 overflow-hidden relative">
      {/* Floating background elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full ${element.size} ${element.color} ${element.opacity} ${element.initialPosition} z-0`}
          animate={element.animate}
          transition={{ 
            repeat: Infinity, 
            duration: 8 + Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl mx-auto lg:mx-0"
          >
            <motion.p 
              variants={itemVariants}
              className="text-base font-semibold tracking-wider text-yellow-300 uppercase"
            >
              A World-Class Educational Experience
            </motion.p>
            
            <motion.h1 
              variants={itemVariants}
              className="mt-4 text-4xl font-bold text-white lg:mt-8 sm:text-6xl xl:text-7xl"
            >
              Mysore International School
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-base text-white lg:mt-8 sm:text-xl"
            >
              Academics. Leadership. Sports. A Future Without Limits!
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-8"
            >
              <Award className="w-6 h-6 text-[#E76F51]" />
              <p className="text-xl font-semibold text-yellow-300">
                Admissions Open for 2025-26! Secure Your Spot Today.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Admission Form - Updated for better mobile view */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 w-full max-w-md mx-auto sm:max-w-lg lg:max-w-none"
          >
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 shadow-black relative overflow-hidden">
              {/* Decorative elements on the form */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#E76F51] opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#8A2E88] opacity-15"></div>
              
              <div className="relative z-10">
                <h2 className="text-[#8A2E88] text-2xl font-bold mb-2">Admission Enquiry</h2>
                <p className="text-gray-600 mb-6">Limited seats available for Academic Year 2025-26</p>
                
                {/* Success Message */}
                {showSuccess && (
                  <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                    Thank you! Your admission inquiry has been submitted successfully. Our team will contact you soon.
                  </div>
                )}
                
                {/* Error Message */}
                {showError && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-[#E76F51] rounded-full mr-2"></div>
                      Parent's Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      name="parentName"
                      onChange={handleChange}
                      value={form.parentName}
                      type="text" 
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A2E88]" 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-[#E76F51] rounded-full mr-2"></div>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      name="email"
                      onChange={handleChange}
                      value={form.email}
                      type="email" 
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A2E88]" 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-[#E76F51] rounded-full mr-2"></div>
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone"
                      onChange={handleChange}
                      value={form.phone} 
                      type="tel" 
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A2E88]" 
                    />
                  </div>
                  
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-[#E76F51] rounded-full mr-2"></div>
                      Children Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="childName"
                      onChange={handleChange}
                      value={form.childName} 
                      type="text" 
                      placeholder="Enter yourchildren name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A2E88]" 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-[#E76F51] rounded-full mr-2"></div>
                      Child's Grade Applying For <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="grade"
                      onChange={handleChange}
                      value={form.grade}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A2E88] appearance-none bg-white relative"
                    >
                      <option value="" disabled>Select grade</option>
                      <option value="Pre-Kindergarten">Pre-Kindergarten</option>
                      <option value="Kindergarten">Kindergarten</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full ${loading ? 'bg-gray-400' : 'bg-[#E76F51] hover:bg-[#E76F51]/90 hover:shadow-lg hover:shadow-purple-700'} text-white py-4 px-6 rounded-full font-semibold flex items-center justify-center transition-all duration-200`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit & Get More Info
                      </>
                    )}
                  </button>
                </form>
                
                <div className="mt-6 flex items-start p-3 border-l-4 border-[#E76F51]">
                  <p className="text-[#E76F51] font-medium">
                    "Seats are filling fast! Secure your child's future today!"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;