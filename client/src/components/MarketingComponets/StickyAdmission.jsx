// StickyAdmission.jsx
import React, { useState, useEffect } from 'react';
import { Clock, X, AlertCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const StickyAdmission = () => {
  // Set a specific deadline date (e.g., 15 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [isVisible, setIsVisible] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);

  // Format date for display
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 15);
  const formattedDeadline = deadline.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  useEffect(() => {
    // Timer countdown logic
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds };
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 };
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 };
        
        const newDays = prev.days - 1;
        if (newDays >= 0) return { ...prev, days: newDays, hours: 23, minutes: 59, seconds: 59 };
        
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    // Blinking effect for urgency
    const blinkTimer = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 800);
    
    return () => {
      clearInterval(timer);
      clearInterval(blinkTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#8A2E88] to-[#6A1B67] text-white py-4 z-50 shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: isBlinking ? 1.1 : 1, color: isBlinking ? '#FFD700' : '#FFFFFF' }}
                  transition={{ duration: 0.4 }}
                >
                  <AlertCircle className="w-6 h-6" />
                </motion.div>
                <h3 className="font-bold text-lg md:text-xl tracking-tight">
                  Admissions Closing Soon!
                </h3>
              </div>
              
              <p className="text-sm md:text-base text-yellow-100 md:pl-2">
                Secure your spot before <span className="font-semibold">{formattedDeadline}</span>
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 mt-3 md:mt-0">
              <div className="grid grid-flow-col gap-3 text-center auto-cols-max bg-black/20 rounded-lg px-4 py-2">
                <div className="flex flex-col">
                  <span className="countdown font-mono text-xl md:text-2xl font-bold">
                    {timeLeft.days.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs opacity-80">days</span>
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-xl md:text-2xl font-bold">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs opacity-80">hours</span>
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-xl md:text-2xl font-bold">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs opacity-80">min</span>
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-xl md:text-2xl font-bold">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs opacity-80">sec</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold px-6 py-2.5 rounded-md flex items-center gap-2"
                    onClick={() => window.location.href = '#lead-capture'}
                  >
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </motion.div>
                
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white hover:text-gray-200 bg-white/10 p-1.5 rounded-full"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyAdmission;