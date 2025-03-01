import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  Play,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from "../../assets/MarketingAssets/images/student.jpg"
// Assuming Button and Card components are imported elsewhere
const Button = ({ children, className, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="p-6">{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const CardDescription = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const testimonials = [
    {
      text: "We wanted more than just good grades for our child. Mysore International School provided the perfect balance of academics, sports, and leadership training. Now, my son is excelling in studies and sports!",
      author: "Dr. Ananya Sharma",
      role: "Parent",
      rating: 5
    },
    {
      text: "The best decision we made! The school's world-class sports facilities and innovative learning approach truly prepare kids for real-world success.",
      author: "Ravi Menon",
      role: "IT Professional & Parent",
      rating: 5
    },
    {
      text: "The leadership programs and sports facilities have transformed my daughter into a confident young athlete. The academic support is outstanding!",
      author: "Priya Kumar",
      role: "Parent",
      rating: 5
    }
  ];

  const videoTestimonials = [
    {
      thumbnail: "/api/placeholder/640/360",
      title: "Student Success Stories",
      subtitle: "Watch our journey of excellence"
    },
    {
      thumbnail: "/api/placeholder/640/360",
      title: "Parent Testimonial - The Kumar Family",
      subtitle: "Three years of growth and excellence"
    },
    {
      thumbnail: "/api/placeholder/640/360",
      title: "From Shy to Confident - Maya's Story",
      subtitle: "A transformation journey"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  return (
    <div className=" bg-[#8A2E88]  py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 space-y-16 relative z-10">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Parents Say About Us
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Hear from our community of satisfied parents who've seen their children thrive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Written Testimonials */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">Parent Testimonials</h3>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            <div className="relative h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Card className="bg-white rounded-xl shadow-2xl h-full">
                    <CardHeader>
                      <div className="flex gap-1">
                        {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <Quote className="w-10 h-10 text-[#8A2E88]/20" />
                      <CardDescription className="text-xl text-gray-700 font-medium">
                        "{testimonials[currentSlide].text}"
                      </CardDescription>
                      <div>
                        <p className="font-bold text-[#264653] text-lg">
                          {testimonials[currentSlide].author}
                        </p>
                        <p className="text-gray-600">{testimonials[currentSlide].role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 mx-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* Video Testimonials (Using Images for now) */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">Video Testimonials</h3>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevVideo}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextVideo}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
            
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVideoIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative aspect-video bg-black/20 rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={image1}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.button 
                        className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-10 h-10" />
                      </motion.button>
                    </motion.div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-bold">{videoTestimonials[currentVideoIndex].title}</p>
                      <p className="text-sm opacity-80">{videoTestimonials[currentVideoIndex].subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-2">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 mx-2 rounded-full transition-colors ${
                    index === currentVideoIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentVideoIndex(index)}
                />
              ))}
            </div>
            
            <p className="text-center text-purple-200 text-lg mt-2">
              Watch inspiring stories from our school community
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialsSection;