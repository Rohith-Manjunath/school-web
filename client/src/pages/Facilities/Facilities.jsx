import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import OurFacilities from "./OurFacilities";
import image from "../../assets/Images/FacilitiesImages/ivan-aleksic-PDRFeeDniCk-unsplash_1.jpg";
import BreadCrumb from "../../components/layouts/Common/BreadCrumb";

const Facilities = () => {
  return (
    <div>
      <Hero
        image={image}
        text={`Facilities`}
        description={`Welcome to Mysore international school, where academic excellence is at the core of our mission. We are committed to providing students with a rigorous and well-rounded education that prepares them for success in a rapidly changing world. Our dedicated faculty and staff are passionate about nurturing the intellectual growth of every student, fostering critical thinking, creativity, and a love for learning.`}
      />
      <BreadCrumb
      Currentlink={"facilities"}
      Currentpage={"Facilities"}/>
      <OurFacilities />
      <Footer />
    </div>
  );
};

export default Facilities;
