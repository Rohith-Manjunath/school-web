import React, { useEffect } from 'react';
import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import PaperTear1 from "../../components/layouts/PaperTear1";
import PaperTear2 from "../../components/layouts/PaperTear2";
import AdmissionProcess from "./AdmissionProcess";
import Enroll from "./Enroll";
// import Marquee from "./Marquee";
import RaiseATicket from "./RaiseATicket";
import ReasonToChoose from "./ReasonToChoose";
import image from "../../assets/Images/AcademicsImages/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import BreadCrumb from "../../components/layouts/Common/BreadCrumb";
import PayNow from "./PayNow";
import AdmissionProces from "./AdmissionProces";
import Marquee from "./Marquee";
import MetaData from '../../components/MetaData';

const Admissions = () => {
  useEffect(() => {
    // Update document head with meta tags
    const metaTitle = document.createElement('meta');
    metaTitle.setAttribute('name', 'title');
    metaTitle.content = 'Admissions - Mysore International School';
    document.head.appendChild(metaTitle);

    const metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.content = 'Discover the admissions process at Mysore International School and join us in shaping a brighter future.';
    document.head.appendChild(metaDescription);

    return () => {
      // Clean up added meta tags when component unmounts
      document.head.removeChild(metaTitle);
      document.head.removeChild(metaDescription);
    };
  }, []); 
  return (
    <div className="h-[10vh]">
                <MetaData title={"Admissions"} />

      <Hero 
        text={"ADMISSION INFO"}
        image={image}
        description={`A warm welcome to the Mysore international School! We are excited to extend an invitation
        to students to join India's top-rated international school and embark on an extraordinary and
        memorable educational journey. Our commitment to excellence is underscored by our
        impressive ranking in the education world. The dedicated admission team at MIS is here to
        ensure a seamless transition for prospective students, making our institution accessible to
        students from around the globe.`} 
      />
      <BreadCrumb 
      Currentpage={"Admissions"}
      Currentlink={"admissions"}/>
      <AdmissionProcess />
      <PaperTear2 />
      <PayNow />
      <PaperTear1 />
      <ReasonToChoose />
      <PaperTear2 />
      <RaiseATicket />
      <PaperTear1 />
      <AdmissionProces />
      <PaperTear2 />
      <Enroll />
      <PaperTear1 />
      <Marquee />
      <PaperTear2 />
      <Footer />
    </div>
  );
};

export default Admissions;
