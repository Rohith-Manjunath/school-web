// SportsFacilitiesSection.jsx
import React from 'react';
import football from "../../assets/MarketingAssets/images/FootballGround.jpg";
import basketball from "../../assets/MarketingAssets/images/basketball.jpg";
import tennies from "../../assets/MarketingAssets/images/tennies.jpg";
import running from "../../assets/MarketingAssets/images/running.jpg";
import cricket from "../../assets/MarketingAssets/images/cricket.jpg";



import { ChevronRight } from 'lucide-react';

const SportsFacilitiesSection = () => {
  const sportsFacilities = [
    {
      icon: "⚽",
      title: "FIFA-Standard Football Field",
      description: "State-of-the-art artificial turf with spectator gallery",
      features: ["Professional coaching", "Regular tournaments", "Advanced training equipment"],
      bgColor: "bg-[#8A2E88]",
      textColor: "text-white",
      imageSrc: football // Fixed: Remove the curly braces
    },
    {
      icon: "🏀",
      title: "NBA-Standard Basketball Court",
      description: "Outdoor court with premium synthetic flooring and modern amenities",
      features: ["Height-adjustable hoops", "Professional scoring system", "Weather-resistant surface"],
      bgColor: "bg-[#264653]",
      textColor: "text-white",
      imageSrc: basketball // Replace with actual image path
    },
    {
      icon: "🎾",
      title: "ITF-Approved Tennis Courts",
      description: "A professional-grade tennis court with synthetic flooring",
      features: ["Weather synthetic courts", "Tournament ready", "Professional coaching"],
      bgColor: "bg-[#E76F51]",
      textColor: "text-white",
      imageSrc: tennies// Replace with actual image path
    },
    {
      icon: "🏏",
      title: "Professional Cricket Nets",
      description: "Multiple practice nets with bowling machines",
      features: ["Bowling machines", "Video analysis", "Professional equipment"],
      bgColor: "bg-[#2A9D8F]",
      textColor: "text-white",
      imageSrc: cricket // Replace with actual image path
    },
    {
      icon: "🏃",
      title: "5-Lane Professional Running Track",
      description: "IAAF standard synthetic track for athletics",
      features: ["Professional timing system", "Multiple lanes", "Syntactic flooring"],
      bgColor: "bg-[#F4A261]",
      textColor: "text-gray-800",
      imageSrc: running
    }
  ];

  return (
    <section className="py-16 bg-white w-[100vw] lg:py-20 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8A2E88]/10 rounded-full"></div>
        <div className="absolute top-1/2 -left-24 w-32 h-32 bg-[#264653]/10 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-[#E76F51]/10 rounded-full"></div>
        
        <div className="text-center relative mb-16">
          <div className="inline-block">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-3 bg-[#8A2E88]/20"></span>
              <h2 className="text-4xl font-bold text-[#264653] sm:text-5xl relative">
                World-Class Sports Facilities
              </h2>
            </span>
          </div>
          <p className="mt-4 text-xl text-[#8A2E88] max-w-3xl mx-auto">
            Nurturing Champions with Professional Equipment and Coaching
          </p>
        </div>

        {/* Sports Facilities Cards - Redesigned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsFacilities.map((facility, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300 h-full flex flex-col`}
            >
              {/* Image Area */}
              <div className={`${facility.bgColor} relative min-h-[200px] overflow-hidden`}>
                <img 
                  src={facility.imageSrc} 
                  alt={`${facility.title}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">{facility.icon}</span>
                </div>
              </div>
              
              {/* Content Area */}
              <div className={`${facility.bgColor} pt-2 pb-6 px-6`}>
                <h3 className={`text-xl font-bold ${facility.textColor}`}>
                  {facility.title}
                </h3>
                <p className={`mt-2 text-sm ${facility.textColor} opacity-90`}>
                  {facility.description}
                </p>
              </div>
              
              {/* Features */}
              <div className="bg-white p-6 flex-grow">
                <ul className="space-y-3">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`w-2 h-2 ${facility.bgColor} rounded-full mt-1.5 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Sports Achievements Section */}
        <div className="mt-24 p-8 bg-[#F9F5FA] rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-8">
            <h3 className="text-2xl font-bold text-[#264653]">
              Our Sports Achievements
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Regional Champions",
                detail: "Inter-School Football Tournament 2023",
                icon: "🏆"
              },
              {
                title: "State Finalists",
                detail: "Basketball Tournament 2023",
                icon: "🥈"
              },
              {
                title: "Tournament Winners",
                detail: "Multiple Tennis Tournaments",
                icon: "🏅"
              },
              {
                title: "District Champions",
                detail: "Cricket Championship 2023",
                icon: "🏏"
              }
            ].map((achievement, index) => (
              <div key={index} className="p-6 rounded-lg bg-white shadow-md">
                <div className="flex justify-center mb-4">
                  <span className="text-5xl">{achievement.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-[#264653] text-center">
                  {achievement.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {achievement.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsFacilitiesSection;