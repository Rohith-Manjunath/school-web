import React from 'react';
import { 
  PlayCircle, 
  Calendar,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Compass
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import image1 from "../../assets/MarketingAssets/images/SmartClass.png"
import image2 from "../../assets/MarketingAssets/images/ground.jpg"
import image3 from "../../assets/MarketingAssets/images/sciencelab.jpg"
import image4 from "../../assets/MarketingAssets/images/library.jpg"
import campus from "../../assets/MarketingAssets/images/virtualtour.jpg"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";

const CampusTour = () => {
  const highlights = [
    {
      icon: "🎓",
      title: "Smart Classrooms",
      description: "Experience our technology-enabled learning spaces with interactive boards",
      image: image1,
      alt: "Modern classroom with interactive technology"
    },
    {
      icon: "⚽",
      title: "Sports Complex",
      description: "Visit our FIFA-standard field and NBA-standard court",
      image: image2,
      alt: "Sports complex with courts and fields"
    },
    {
      icon: "🧪",
      title: "Science Labs",
      description: "Explore our state-of-the-art laboratories with modern equipment",
      image: image3,
      alt: "Advanced science laboratory setup"
    },
    {
      icon: "📚",
      title: "Library",
      description: "Discover our extensive collection of books and digital resources",
      image: image4,
      alt: "Modern library with study spaces"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  // Function to handle video button click
  const handleVirtualTourClick = () => {
    window.open("https://maps.app.goo.gl/wqS6UPWtzunEUpoD6", "_blank");
  };

  return (
    <div className=" bg-[#8A2E88] py-20 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Take A Tour Of Our Campus!
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Experience our world-class facilities firsthand
          </p>
        </motion.div>

        {/* Video Section - Updated with link to Google Maps */}
        <motion.div 
          className="relative aspect-video rounded-xl overflow-hidden bg-black/20 shadow-2xl mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={campus}
            alt="Campus tour video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center">
            <motion.button 
              className="bg-white hover:bg-gray-100 text-[#8A2E88] rounded-full w-24 h-24 flex items-center justify-center shadow-xl cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleVirtualTourClick}
              aria-label="View 3D virtual tour on Google Maps"
            >
              <PlayCircle className="w-16 h-16" />
            </motion.button>
          </div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Take a Virtual Walkthrough</h3>
            <p className="text-purple-100 max-w-lg">Experience our state-of-the-art campus facilities in this guided virtual tour</p>
          </div>
        </motion.div>

        {/* Campus Highlights */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-bold mb-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Campus Highlights You'll See
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 border border-white/10 h-full overflow-hidden flex flex-col">
                  <div className="relative w-full aspect-video overflow-hidden">
                    <img 
                      src={highlight.image} 
                      alt={highlight.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{highlight.icon}</span>
                      <CardTitle className="text-xl text-white">
                        {highlight.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-purple-100">
                      {highlight.description}
                    </CardDescription>
                  </CardContent>
                  {/* Regular div instead of CardFooter */}
                 
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Schedule Tour Section */}
        <motion.div 
          className="bg-white text-[#264653] rounded-xl p-10 shadow-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#264653]">Schedule Your Campus Visit</h3>
              <p className="text-gray-600 text-lg">
                Join us for a guided tour of our campus. Our admissions team will be happy to
                show you around and answer all your questions.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#8A2E88]/10 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-[#8A2E88]" />
                  </div>
                  <span className="text-gray-700">Monday to Saturday: 9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#8A2E88]/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-[#8A2E88]" />
                  </div>
                  <span className="text-gray-700">Mysore International School Campus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#8A2E88]/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-[#8A2E88]" />
                  </div>
                  <span className="text-gray-700">Call us for instant booking: 0821 2971010</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-gray-50 p-6 rounded-xl">
              <div className="text-center mb-6">
                <Compass className="w-12 h-12 text-[#8A2E88] mx-auto mb-3" />
                <h4 className="text-xl font-bold text-[#264653] mb-2">Ready to Visit?</h4>
                <p className="text-gray-600">Book your personalized campus tour today</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Personalized guided tour</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Meet faculty and students</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">See classes in action</span>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-[#8A2E88] hover:bg-[#8A2E88]/90 text-white w-full py-3 text-lg rounded-lg shadow-md"
                  onClick={() => window.location.href = '#lead-capture'}
                >
                  Schedule a Campus Tour
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>   
      </div>
    </div>
  );
};

export default CampusTour;