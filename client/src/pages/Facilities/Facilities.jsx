import React, { useEffect } from "react";
import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import OurFacilities from "./OurFacilities";
import image from "../../assets/Images/FacilitiesImages/ivan-aleksic-PDRFeeDniCk-unsplash_1.jpg";
import BreadCrumb from "../../components/layouts/Common/BreadCrumb";
import PaperTear2 from "../../components/layouts/PaperTear2";
import FacilityCard from "../Facilities/amenities";

const Facilities = () => {
  useEffect(() => {
    // Update document head with meta tags
    const metaTitle = document.createElement('meta');
    metaTitle.setAttribute('name', 'title');
    metaTitle.content = 'Facilities - Mysore International School';
    document.head.appendChild(metaTitle);

    const metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.content = 'Explore the state-of-the-art facilities offered at Mysore International School, providing an enriching environment for holistic development.';
    document.head.appendChild(metaDescription);

    return () => {
      // Clean up added meta tags when component unmounts
      document.head.removeChild(metaTitle);
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div>
      <Hero
        image={image}
        text={`Facilities`}
        description={`Discover the outstanding facilities at Mysore International School designed to enhance the overall learning experience. Our state-of-the-art infrastructure includes modern classrooms, well-equipped laboratories, a library, sports facilities, and more. We are committed to providing a conducive environment that supports academic excellence, creativity, and holistic development. Explore how our facilities contribute to fostering a vibrant and engaging educational journey for our students.`}
      />
      <BreadCrumb
        Currentlink={"facilities"}
        Currentpage={"Facilities"}
      />
      <OurFacilities />
      <FacilityCard />
      <PaperTear2 />
      <Footer />
    </div>
  );
};

export default Facilities;
