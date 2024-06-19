import React, { useEffect } from 'react';
import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import PaperTear1 from "../../components/layouts/PaperTear1";
import AdmissionInfo from "./AdmissionInfo";
// import Faculty from "./Faculty";
import OurPrograms from "./OurPrograms";
// import Resource from "./Resource";
import image from "../../assets/Images/AcademicsImages/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import BreadCrumb from "../../components/layouts/Common/BreadCrumb";
import PaperTear2 from "../../components/layouts/PaperTear2";
import OurVision from "./OurVision";
import Testimonials from "./Testimonials";
import Timelines  from "./Timelines";
import { Helmet } from 'react-helmet-async';

const Academics = () => {
 
  return (
    <div className='mt-20 sm:mt-0'>
<Helmet>
  <title>Academics | Mysore International School</title>
  <meta
    name="description"
    content="Discover the exceptional academic programs at Mysore International School, designed to foster intellectual growth and excellence." />
      <link rel="cannonical" href="/Academics" />

</Helmet>
      <Hero
        text={"Academics"}
        image={image}
        description={`Welcome to Mysore international school, where academic excellence is at the core of our mission. We are committed to providing students with a rigorous and well-rounded education that prepares them for success in a rapidly changing world. Our dedicated faculty and staff are passionate about nurturing the intellectual growth of every student, fostering critical thinking, creativity, and a love for learning.`}
      />
      <BreadCrumb 
      Currentlink={"academics"}
      Currentpage={"Academics"}/>
      <OurPrograms />
      <PaperTear1 />
      <Testimonials />
      {/* <Faculty /> */}
      <PaperTear2 />
      <PaperTear1 />
      <Timelines />
      <PaperTear2 />
      {/* <OurVision /> */}
      <PaperTear1 />
      <AdmissionInfo />
      {/* <Resource /> */}
      <PaperTear2 />
      <Footer />
    </div>
  );
};

export default Academics;
