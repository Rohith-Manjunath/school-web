import LearningAreaCard from "../../components/layouts/Cards/LearningAreaCard";
import LearningPhaseCard from "../../components/layouts/Cards/LearningPhaseCard";
import Footer from "../../components/layouts/Footer";

import CarouselSliderCBSE from './CarouselSliderCBSE';

const CBSEProg = () => {

  const learningAreas = [
    {
      id: 1,
      title: "Language Curriculum",
      description: "The language curriculum focuses on developing listening, speaking, reading, and writing skills in diverse contexts, fostering confidence and adaptability."
    },
    {
      id: 2,
      title: "Social Science Curriculum",
      description: "The social science curriculum helps students understand and evaluate social, political, economic, and environmental dimensions, enabling them to formulate arguments and engage with diverse issues."
    },
    {
      id: 3,
      title: "Mathematics Curriculum",
      description: "The mathematics curriculum enhances logical thinking, analytical ability, approximation, hypothesis formulation, and problem-solving skills."
    },
    {
      id: 4,
      title: "Science and Technology Curriculum",
      description: "The science and technology curriculum encourages curiosity, investigation, experimentation, critical observation, and the development of computational and spatial skills."
    },
    {
      id: 5,
      title: "Physical Education Curriculum",
      description: "The physical education curriculum focuses on enhancing motor skills, sensory control through indoor and outdoor activities, and mental training through yoga and meditation."
    }
  ];

  const learningPhases = [
    {
      id: 1,
      title: "ENGAGE",
      description: "In this phase, teachers understand students' prior knowledge, foster interest, and introduce new concepts."
    },
    {
      id: 2,
      title: "EXPLORE",
      description: "Students actively explore new concepts through hands-on experiences and peer communication."
    },
    {
      id: 3,
      title: "EXPLAIN",
      description: "Teachers synthesize new knowledge, clarify concepts, and facilitate deeper understanding."
    },
    {
      id: 4,
      title: "ELABORATE",
      description: "Students apply their learning, reinforce skills, and conduct additional investigations."
    },
    {
      id: 5,
      title: "EVALUATE",
      description: "Teachers assess students' grasp of core concepts through observations, assessments, and assignments."
    }
  ];
  

 return (
   <div className=" w-[100%] pt-8 flex  flex-col mt-[150px] md:mt-[30px] lg:mt-[100px]">
     {/* Hero Image */}

      {/* Hero Section */}
        <CarouselSliderCBSE />
      

     {/* CBSE Program Overview */}
     <section className="mb-12 mt-[2rem] text-center">
      <h2 className="text-3xl font-bold text-secondary font-tile mb-4">CBSE Program Overview</h2>
      <p className="text-lg text-secondary mb-4 px-10">
        The CBSE curriculum at Mysore International School is designed to provide a comprehensive learning experience across various disciplines.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 p-10 lg:grid-cols-3 gap-6">
        {learningAreas.map((area) => (
          <LearningAreaCard area={area} key={area.id}/>
        ))}
      </div>
    </section>
     
    <section className='p-10'>
      <h2 className="text-[20px] sm:text-[24px] md:text-center lg:text-[28px]  font-bold text-textSecondary mb-4 text-start">5 E's of Enhanced Learning Experience at MIS</h2>
      <div className="">
        {learningPhases.map((phase) => (
          <LearningPhaseCard key={phase.id} phase={phase}/>
        ))}
      </div>
    </section>
     <Footer />
   </div>
 );
};

export default CBSEProg;
