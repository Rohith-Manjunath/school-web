import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Home, Send, ArrowRight } from 'lucide-react';

const ThankYou = () => {
  const location = useLocation();
  const referenceNumber = location.state?.referenceNumber || 'MIS-XXXXXX';

  // Clean up any Appointio iframes on mount
  useEffect(() => {
    const cleanupAppointioIframes = () => {
      // Find and remove any standalone Appointio iframes
      const appointioIframes = document.querySelectorAll('iframe[src*="appointio.co"]:not([data-managed="true"])');
      appointioIframes.forEach(iframe => {
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }
      });
    };

    // Clean on mount and again after a short delay
    cleanupAppointioIframes();
    const timeoutId = setTimeout(cleanupAppointioIframes, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="bg-secondary py-16 sm:py-24 lg:py-32 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-[#E76F51] opacity-20"></div>
      <div className="absolute top-32 right-20 w-20 h-20 rounded-full bg-yellow-300 opacity-10"></div>
      <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-[#8A2E88] opacity-15"></div>
      <div className="absolute bottom-20 right-1/3 w-12 h-12 rounded-full bg-white opacity-10"></div>

      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-xl p-8 sm:p-12 text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100">
              <Award className="w-10 h-10 text-[#E76F51]" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#8A2E88] mb-4">
            Thank You for Your Admission Enquiry!
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Your application has been successfully submitted. Our admissions team will contact you shortly.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 inline-block">
            <p className="text-gray-500 mb-2">Your Reference Number:</p>
            <p className="text-2xl font-bold text-[#E76F51]">{referenceNumber}</p>
            <p className="text-sm text-gray-500 mt-2">
              Please save this reference number for future communications.
            </p>
          </div>

          <div className="text-left mb-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-blue-800 mb-3">What happens next?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Our admissions team will review your application.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>You will receive a call within 24-48 hours to schedule a school visit.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>During your visit, we will share more information about our curriculum and admission process.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="flex items-center justify-center gap-2 bg-[#8A2E88] text-white py-3 px-6 rounded-full font-medium hover:bg-[#8A2E88]/90 transition-all"
            >
              <Home className="w-5 h-5" />
              Return to Home
            </Link>
            <a 
              href="tel:+918884300400" 
              className="flex items-center justify-center gap-2 bg-[#E76F51] text-white py-3 px-6 rounded-full font-medium hover:bg-[#E76F51]/90 transition-all"
            >
              <Send className="w-5 h-5" />
              Contact Admissions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;