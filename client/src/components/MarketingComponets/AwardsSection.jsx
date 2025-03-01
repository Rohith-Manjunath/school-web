import React from 'react';
import { 
  Award,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

import award1 from "../../assets/MarketingAssets/images/Award.jpg"
import award2 from "../../assets/MarketingAssets/images/studentaward1.jpg"
import award3 from "../../assets/MarketingAssets/images/studentaward2.jpg"

import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardDescription 
} from './Card';

const AwardsSection = () => {
  const awards = [
    {
      icon: <Trophy className="w-14 h-14 text-[#F4A261]" />,
      title: "PSJA Prestigious School Jury Awards 2024",
      organization: "MIS",
      description: "Awarded for Innovative Leadership and continuous pursuit of excellence in education",
      image: award1
    },
    {
      icon: <Star className="w-14 h-14 text-[#F4A261]" />,
      title: "Ajith & Sothi Memorial Inter-School Championship",
      organization: "Mahabodhi School",
      description: "Shuttle Badminton Championship – 2024 participation and achievement",
      image: award2
    },
    {
      icon: <Award className="w-14 h-14 text-[#F4A261]" />,
      title: "CISPMAM Basketball Tournament",
      organization: "CISPMAM and MSSC",
      description: "Our students participated in interschool competitions organized by CISPMAM and MSSC, winning numerous trophies and medals, showcasing their talent and dedication.",
      image: award3
    }
  ];

  const recognitions = [
    "The Chairman Dr. Joseph K Thomas and Principal Dr. Preethi Vincent honored for making MIS the No.1 School in Mysuru",
    "MIS awarded India's Top CBSE Schools City-Wise Certificate as a leader in CBSE education in Mysuru",
    "India School Merit Awards received for outstanding achievements in the educational domain",
    "Dr. Preethi Vincent awarded Effective Principals of the Year 2024 by Education Today"
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

  return (
    <div className=" bg-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-3 bg-[#F4A261]/20"></span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#264653] relative">
                Awards & Recognition
              </h2>
            </span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating our journey of excellence in education and sports
          </p>
        </motion.div>

        {/* Major Awards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awards.map((award, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full group">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pt-6 pb-4">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#F4A261]/10 p-3 rounded-full mr-3">
                      {award.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-[#264653] group-hover:text-[#8A2E88] transition-colors">
                        {award.title}
                      </CardTitle>
                      <CardDescription className="text-[#8A2E88] font-semibold mt-1">
                        {award.organization}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Recognitions */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">

            
            <div className="bg-gradient-to-r from-[#264653] to-[#1d3842] rounded-2xl p-10 shadow-xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute right-0 top-0 w-64 h-64 bg-[#F4A261]/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute left-0 bottom-0 w-48 h-48 bg-[#8A2E88]/5 rounded-full -ml-24 -mb-24"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
                    Prestigious Accolades & Achievements
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-[#F4A261]"></span>
                  </h3>
                  <p className="text-gray-200 mt-6 text-lg leading-relaxed">
                    Mysore International School has been recognized for its exceptional contributions to education, with leadership awards for both the Chairman and Principal. These accolades highlight our commitment to educational excellence and innovative teaching methodologies.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                  <ul className="space-y-6">
                    {recognitions.map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="mr-4 mt-1">
                          <div className="w-10 h-10 rounded-full bg-[#F4A261]/20 flex items-center justify-center group-hover:bg-[#F4A261]/40 transition-all duration-300">
                            <CheckCircle className="w-5 h-5 text-[#F4A261]" />
                          </div>
                        </div>
                        <div>
                          <p className="text-white text-lg font-medium group-hover:text-[#F4A261] transition-colors duration-300">{item}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: "15+", label: "Years of Excellence" },
            { number: "50+", label: "Awards & Recognitions" },
            { number: "1000+", label: "Successful Alumni" },
            { number: "100%", label: "Parent Satisfaction" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 rounded-lg border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <p className="text-4xl font-bold text-[#8A2E88] mb-2">{stat.number}</p>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AwardsSection;