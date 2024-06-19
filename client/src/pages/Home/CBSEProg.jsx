import React, { useEffect } from 'react';
import HeroImage from '../../assets/Images/HomeImages/Holistic/image/5.jpg'; // Import your hero image
import Footer from "../../components/layouts/Footer";

import CarouselSliderCBSE from './CarouselSliderCBSE';

const CBSEProg = () => {
  useEffect(() => {
    // Update document head with meta tags
    const metaTitle = document.createElement('meta');
    metaTitle.setAttribute('name', 'title');
    metaTitle.content = 'CBSE Program Overview - Mysore International School';
    document.head.appendChild(metaTitle);

    const metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.content = 'Explore the CBSE program overview at Mysore International School, focusing on comprehensive learning across various disciplines.';
    document.head.appendChild(metaDescription);

    return () => {
      // Clean up added meta tags when component unmounts
      document.head.removeChild(metaTitle);
      document.head.removeChild(metaDescription);
    };
  }, []); // Run this effect only once on mount

 return (
   <div className=" w-[100%] pt-8 flex  flex-col mt-[150px] md:mt-[30px] lg:mt-[100px]">
     {/* Hero Image */}

      {/* Hero Section */}
        <CarouselSliderCBSE />
      

     {/* CBSE Program Overview */}
     <section className="mb-12  mt-[2rem] text-center">
       <h2 className="text-3xl font-bold text-secondary font-tile mb-4">CBSE Program Overview</h2>
       <p className="text-lg text-secondary mb-4 px-10">
         The CBSE curriculum at Mysore International School is designed to provide a comprehensive learning experience across various disciplines.
       </p>
       <div className="grid grid-cols-1 sm:grid-cols-2 p-10 lg:grid-cols-3 gap-6">
         {/* Learning Area Cards... */}
         {/* Card 1 */}
         <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2 border-2 border-secondary shadow-secondary cursor-pointer">
           <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">Language Curriculum</h3>
           <p className="text-gray-700">
             The language curriculum focuses on developing listening, speaking, reading, and writing skills in diverse contexts, fostering confidence and adaptability.
           </p>
         </div>

         {/* Card 2 */}
         <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2 border-2 border-secondary shadow-secondary cursor-pointer ">
           <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">Social Science Curriculum</h3>
           <p className="text-gray-700">
             The social science curriculum helps students understand and evaluate social, political, economic, and environmental dimensions, enabling them to formulate arguments and engage with diverse issues.
           </p>
         </div>

         {/* Card 3 */}
         <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2 border-2 border-secondary shadow-secondary cursor-pointer">
           <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">Mathematics Curriculum</h3>
           <p className="text-gray-700">
             The mathematics curriculum enhances logical thinking, analytical ability, approximation, hypothesis formulation, and problem-solving skills.
           </p>
         </div>

         {/* Card 4 */}
         <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2 border-2 border-secondary shadow-secondary cursor-pointer">
           <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">Science and Technology Curriculum</h3>
           <p className="text-gray-700">
             The science and technology curriculum encourages curiosity, investigation, experimentation, critical observation, and the development of computational and spatial skills.
           </p>
         </div>

         {/* Card 5 */}
         <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2 border-2 border-secondary shadow-secondary cursor-pointer">
           <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">Physical Education Curriculum</h3>
           <p className="text-gray-700 mb-4">
             The physical education curriculum focuses on enhancing motor skills, sensory control through indoor and outdoor activities, and mental training through yoga and meditation.
           </p>
         </div>
       </div>
     </section>

     
     <section className='p-10'>
       <h2 className="text-3xl font-bold text-primary mb-4 text-center">5 E's of Enhanced Learning Experience at MIS</h2>
       {/* Each E Section Cards... */}
       {/* Card 1 - ENGAGE */}
       <div className="bg-white rounded-lg shadow-md p-6 mb-5 transition-transform hover:-translate-y-2 hover:border-2 hover:border-secondary cursor-pointer">
         <h3 className="text-xl font-semibold mb-2 text-secondary">ENGAGE</h3>
         <p className="text-gray-700">
           In this phase, teachers understand students' prior knowledge, foster interest, and introduce new concepts.
         </p>
       </div>

       {/* Card 2 - EXPLORE */}
       <div className="bg-white rounded-lg shadow-md p-6 mb-5 transition-transform hover:-translate-y-2 hover:border-2 hover:border-secondary cursor-pointer">
         <h3 className="text-xl font-semibold mb-2 text-secondary">EXPLORE</h3>
         <p className="text-gray-700">
           Students actively explore new concepts through hands-on experiences and peer communication.
         </p>
       </div>

       {/* Card 3 - EXPLAIN */}
       <div className="bg-white rounded-lg shadow-md p-6 mb-5 transition-transform hover:-translate-y-2 hover:border-2 hover:border-secondary cursor-pointer">
         <h3 className="text-xl font-semibold mb-2 text-secondary">EXPLAIN</h3>
         <p className="text-gray-700">
           Teachers synthesize new knowledge, clarify concepts, and facilitate deeper understanding.
         </p>
       </div>

       {/* Card 4 - ELABORATE */}
       <div className="bg-white rounded-lg shadow-md p-6 mb-5 transition-transform hover:-translate-y-2 hover:border-2 hover:border-secondary cursor-pointer">
         <h3 className="text-xl font-semibold mb-2 text-secondary">ELABORATE</h3>
         <p className="text-gray-700">
           Students apply their learning, reinforce skills, and conduct additional investigations.
         </p>
       </div>

       {/* Card 5 - EVALUATE */}
       <div className="bg-white rounded-lg shadow-md p-6 mb-5  transition-transform hover:-translate-y-2 hover:border-2 hover:border-secondary cursor-pointer">
         <h3 className="text-xl font-semibold mb-2 text-secondary">EVALUATE</h3>
         <p className="text-gray-700">
           Teachers assess students' grasp of core concepts through observations, assessments, and assignments.
         </p>
       </div>
     </section>
     <Footer />
   </div>
 );
};

export default CBSEProg;
