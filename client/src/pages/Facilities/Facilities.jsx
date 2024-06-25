import React, { useEffect } from "react";
import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import OurFacilities from "./OurFacilities";
import image from "../../assets/Images/FacilitiesImages/ivan-aleksic-PDRFeeDniCk-unsplash_1.jpg";
import BreadCrumb from "../../components/layouts/Common/BreadCrumb";
import PaperTear2 from "../../components/layouts/PaperTear2";
import FacilityCard from "../Facilities/amenities";
import PaperTear1 from "../../components/layouts/PaperTear1";
import { Helmet } from "react-helmet-async";

const Facilities = () => {
  return (
    <div className="mt-[4rem] sm:mt-0">
    <Helmet>
  <title>Facilities | Mysore International School</title>
  <meta
    name="description"
    content="Discover Mysore International School's outstanding facilities designed for academic excellence, including modern classrooms, labs, library, and sports facilities."
  />
  <link rel="cannonical" href="/Facilites" />
</Helmet>
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
      <PaperTear1 />
      <FacilityCard />
      <PaperTear2 />
      <Footer />
    </div>
    </div>
  );
};

export default Facilities;
