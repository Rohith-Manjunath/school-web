import HeroImage from '../../assets/Images/HomeImages/Holistic/image/5.jpg'; // Import your hero image
import EarlyProgramCard from '../../components/layouts/Cards/EarlyProgramCard';
import Footer from "../../components/layouts/Footer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const EarlyProgram = () => {

  const earlyProgramAreas = [
    {
      id: 1,
      title: "Cognitive Development",
      description: "This includes skills like recognizing letters, numbers, basic concepts of shapes, colors and sizes and developing early math skills like counting, sorting, pattern through various play and learn methods."
    },
    {
      id: 2,
      title: "Language and Communication",
      description: "We allow children to express their thoughts and ideas and help them develop their vocabulary and understand using the language appropriately through story time, puppet shows and interactive reading and writing sessions."
    },
    {
      id: 3,
      title: "Social and Emotional Skills",
      description: "It is inculcated at an early age, and we teach them how to interact with others, share and take turns with friends, and they also learn to manage their emotions and even learn to show empathy with others."
    },
    {
      id: 4,
      title: "Physical Development",
      description: "This includes various indoor and outdoor activities to strengthen their fine motor skills using scissors, holding a pencil, buttoning clothes, and also their gross motor skills like running, jumping, and climbing is developed through various games."
    },
    {
      id: 5,
      title: "Self-help Skills",
      description: "This skill is also taught to children, which involves taking care of themselves, managing personal hygiene, and basic self-care routines at school and at home are taught to them through stories and roleplay."
    }
  ];
  

  return (
    <div className=" w-[100%]   pt-8 mt-16">
      <div className="w-[80%] max-w-[900px] mx-auto h-auto bg-cover bg-center mb-8">
        <img
          className="w-full h-full rounded-lg border border-textSecondary"
          src={HeroImage}
          alt="Hero Section Image"
        />
      </div>
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mb-8">
      <Breadcrumbs aria-label="breadcrumb">
  <Link
    underline="hover"
    color="inherit"
    href="/"
    className="hover:text-secondary transition-colors duration-300 hover:font-bold "
  >
    Home
  </Link>
  <Link
    underline="hover"
    color="text.primary"
    href="/EarlyProgram"
    aria-current="page"
    className="hover:text-secondary transition-colors duration-300 hover:font-bold "
  >
    Early Program
  </Link>
</Breadcrumbs>
</div>
      {/* Early Program Overview */}
   
      <section className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-secondary font-tile mb-4">Early Program Overview</h2>
      <p className="text-lg text-secondary mb-4 px-10">
        At our school, we focus on early childhood progress for kindergarten readiness on several key areas of Development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 p-10 lg:grid-cols-3 gap-6">
        {earlyProgramAreas.map((area) => (
          
          <EarlyProgramCard key={area.id} area={area}/>
        ))}
      </div>
    </section>
    
      <Footer />
    </div>
  );
};

export default EarlyProgram;