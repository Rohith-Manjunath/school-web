import React from 'react';
import HeroImage from '../../assets/Images/HomeImages/Holistic/image/5.jpg'; // Import your hero image
import Footer from "../../components/layouts/Footer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const EarlyProgram = () => {
  return (
    <div className=" w-[100%]  pt-8">
      <div className="w-full h-[500px] bg-cover bg-center mb-8">
        <img
          className="w-full h-full object-cover"
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
          {/* Learning Area Cards... */}
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2 border-2 border-secondary shadow-secondary cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">Cognitive Development</h3>
            <p className="text-gray-700">
              This includes skills like recognizing letters, numbers, basic concepts of shapes, colors and sizes and developing early math skills like counting, sorting, pattern through various play and learn methods.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2 border-2 border-secondary shadow-secondary cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">Language and Communication</h3>
            <p className="text-gray-700">
              We allow children to express their thoughts and ideas and help them develop their vocabulary and understand using the language appropriately through story time, puppet shows and interactive reading and writing sessions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2 border-2 border-secondary shadow-secondary cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">Social and Emotional Skills</h3>
            <p className="text-gray-700">
              It is inculcated at an early age, and we teach them how to interact with others, share and take turns with friends, and they also learn to manage their emotions and even learn to show empathy with others.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2 border-2 border-secondary shadow-secondary cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">Physical Development</h3>
            <p className="text-gray-700">
              This includes various indoor and outdoor activities to strengthen their fine motor skills using scissors, holding a pencil, buttoning clothes, and also their gross motor skills like running, jumping, and climbing is developed through various games.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2 border-2 border-secondary shadow-secondary cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">Self-help Skills</h3>
            <p className="text-gray-700">
              This skill is also taught to children, which involves taking care of themselves, managing personal hygiene, and basic self-care routines at school and at home are taught to them through stories and roleplay.
            </p>
          </div>
        </div>
      </section>

    
      <Footer />
    </div>
  );
};

export default EarlyProgram;