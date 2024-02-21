import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import PaperTear1 from "../../components/layouts/PaperTear1";
import AdmissionInfo from "./AdmissionInfo";
import Faculty from "./Faculty";
import OurPrograms from "./OurPrograms";
import Resource from "./Resource";
import image from "../../assets/Images/AcademicsImages/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
const Academics = () => {
  return (
    <div className="">
      <Hero
        text={"Academics"}
        image={image}
        description={`Welcome to Mysore international school, where academic excellence is at the core of our mission. We are committed to providing students with a rigorous and well-rounded education that prepares them for success in a rapidly changing world. Our dedicated faculty and staff are passionate about nurturing the intellectual growth of every student, fostering critical thinking, creativity, and a love for learning.`}
      />
      <OurPrograms />
      <PaperTear1 />
      <Faculty />
      <AdmissionInfo />
      <Resource />
      <Footer />
    </div>
  );
};

export default Academics;
