import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import OurFacilities from "./OurFacilities";
import image from "../../assets/Images/FacilitiesImages/ivan-aleksic-PDRFeeDniCk-unsplash_1.jpg";
import BreadCrumb from "../../components/layouts/Common/BreadCrumb";
import PaperTear2 from "../../components/layouts/PaperTear2";
import FacilityCard from "../Facilities/amenities";

const Facilities = () => {
  return (
    <div>
      <Hero
        image={image}
        text={`Facilities`}
        description={`Discover the outstanding facilities at Mysore International School designed to enhance the overall learning experience. Our state-of-the-art infrastructure includes modern classrooms, well-equipped laboratories, a library, sports facilities, and more. We are committed to providing a conducive environment that supports academic excellence, creativity, and holistic development. Explore how our facilities contribute to fostering a vibrant and engaging educational journey for our students.`}
      />
      <BreadCrumb
      Currentlink={"facilities"}
      Currentpage={"Facilities"}/>
      <OurFacilities />
      <FacilityCard />
      <PaperTear2 />
      <Footer />
    </div>
  );
};

export default Facilities;
