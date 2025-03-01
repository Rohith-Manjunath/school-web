import React, { useEffect, useState } from 'react';
import { CheckCircle, Calendar, ArrowRight, Phone, Mail, Home } from 'lucide-react';
import Button from './Button';
import { useLocation, Navigate } from 'react-router-dom';

// Simple Confetti Component
const Confetti = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Create confetti particles
    const colors = ['#E76F51', '#F4A261', '#2A9D8F', '#FFFFFF', '#FFD700'];
    const particleCount = 100;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: -20 - Math.random() * 100,
        size: 5 + Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        speed: 2 + Math.random() * 6
      });
    }
    
    setParticles(newParticles);
    
    // Animation loop for confetti
    let animationFrameId;
    let start = null;
    
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y + particle.speed,
          rotation: particle.rotation + 1
        })).filter(particle => particle.y < 120) // Remove particles that fall out of view
      );
      
      if (progress < 5000) { // Run animation for 5 seconds
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            opacity: Math.random() * 0.8 + 0.2
          }}
        />
      ))}
    </div>
  );
};

const ThankYou = () => {
  // Get the location object to access state passed from previous component
  const location = useLocation();
  
  // Get reference number from location state or session storage
  const [referenceNumber, setReferenceNumber] = useState('');
  
  // Check if user has a valid reference number
  useEffect(() => {
    // If reference number is in location state
    if (location.state && location.state.referenceNumber) {
      // Save reference number to session storage for persistence
      sessionStorage.setItem('referenceNumber', location.state.referenceNumber);
      setReferenceNumber(location.state.referenceNumber);
    } 
    // If no reference number in location state, try to get from session storage
    else {
      const storedRefNumber = sessionStorage.getItem('referenceNumber');
      if (storedRefNumber) {
        setReferenceNumber(storedRefNumber);
      }
    }
  }, [location]);
  
  // If no reference number is available, redirect to homepage
  if (!referenceNumber && !location.state?.referenceNumber && !sessionStorage.getItem('referenceNumber')) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="min-h-screen bg-[#8A2E88] flex flex-col items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full"></div>
      </div>
      
      {/* Confetti animation */}
      <Confetti />
      
      {/* Main content card */}
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-3xl w-full z-10 mx-4">
        {/* Success icon with glow effect */}
        <div className="mb-8 flex justify-center relative">
          <div className="absolute inset-0 bg-[#8A2E88]/20 rounded-full blur-xl transform scale-150"></div>
          <div className="relative bg-gradient-to-br from-[#8A2E88] to-[#8A2E88]/70 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>
        </div>
        
        {/* Thank You Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#264653] mb-4 leading-tight">
            Thank You for Your Interest!
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're excited to welcome your family to the Mysore International School community. 
            Our admissions team will contact you shortly.
          </p>
        </div>
        
        {/* Reference Number with animated border */}
        <div className="relative p-1 mb-8 mx-auto max-w-xs">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A2E88] via-[#E76F51] to-[#8A2E88] rounded-lg animate-gradient-x"></div>
          <div className="bg-white rounded-lg p-4 relative">
            <p className="text-sm text-gray-500">Your Reference Number</p>
            <p className="text-xl font-bold text-[#264653]">
              {referenceNumber}
            </p>
          </div>
        </div>
        
        {/* Next Steps */}
        <div className="bg-[#F8F1F1] rounded-xl p-6 text-left mb-8">
          <h3 className="text-xl font-bold text-[#264653] mb-4 flex items-center">
            <Calendar className="mr-2 w-5 h-5 text-[#8A2E88]" />
            Next Steps
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="bg-[#8A2E88]/10 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-[#8A2E88]" />
              </div>
              <h4 className="font-medium text-[#264653] mb-1">Email Confirmation</h4>
              <p className="text-sm text-gray-600">Check your inbox for details about your application.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="bg-[#8A2E88]/10 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-[#8A2E88]" />
              </div>
              <h4 className="font-medium text-[#264653] mb-1">Admissions Call</h4>
              <p className="text-sm text-gray-600">Expect a call within 24 hours to discuss next steps.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="bg-[#8A2E88]/10 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5 text-[#8A2E88]" />
              </div>
              <h4 className="font-medium text-[#264653] mb-1">Campus Visit</h4>
              <p className="text-sm text-gray-600">Schedule a tour to experience our facilities firsthand.</p>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Button 
            className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white py-3 flex items-center justify-center gap-2"
            onClick={() => {
              // Clear the reference number from session storage when returning to homepage
              sessionStorage.removeItem('referenceNumber');
              window.location.href = '/';
            }}
          >
            <Home className="w-4 h-4" /> Return to Homepage
          </Button>
          <Button 
            className="bg-[#8A2E88] hover:bg-[#8A2E88]/90 text-white py-3 flex items-center justify-center gap-2"
            onClick={() => window.location.href = 'https://maps.app.goo.gl/wqS6UPWtzunEUpoD6'}
          >
            Take Virtual Tour <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Additional Information */}
        <div className="bg-gradient-to-r from-[#8A2E88]/10 to-[#E76F51]/10 rounded-xl p-5 text-center">
          <h4 className="font-semibold text-[#264653] mb-3">Have Questions?</h4>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+910000000000" className="flex items-center gap-2 text-[#264653] hover:text-[#8A2E88] transition-colors">
              <Phone className="w-4 h-4" /> +91 8884 300 400
            </a>
            <a href="mailto:admissions@mis.edu" className="flex items-center gap-2 text-[#264653] hover:text-[#8A2E88] transition-colors">
              <Mail className="w-4 h-4" /> admissions@mysoreinternationalschool.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;