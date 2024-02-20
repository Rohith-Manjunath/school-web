import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import PaperTear1 from "../../components/layouts/PaperTear1";
import AdmissionInfo from "./AdmissionInfo";
import Faculty from "./Faculty";
import OurPrograms from "./OurPrograms";
import Resource from "./Resource";

const Academics = () => {
  return (
    <div>
      <Hero />
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
