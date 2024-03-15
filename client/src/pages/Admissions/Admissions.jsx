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


const Admissions = () => {
  return (
    <div>
      <Hero
        text={"ADMISSION INFO"}
        image={image}
        description={`A warm welcome to the Mysore international School! We are excited to extend an invitation
        to students to join India;s top-rated international school and embark on an extraordinary and
        memorable educational journey. Our commitment to excellence is underscored by our
        impressive ranking in the education world. The dedicated admission team at MIS is here to
        ensure a seamless transition for prospective students, making our institution accessible to
        students from around the globe.`}
        
      />
      <BreadCrumb 
      Currentpage={"Admissions"}
      Currentlink={"admissions"}/>
      <AdmissionProcess />
      <ReasonToChoose />
      <RaiseATicket />
      
      <Enroll />
      {/* <PaperTear1 />
      {/* <Marquee /> */}
      {/* <PaperTear2 /> */} 
      <Footer />
    </div>
  );
};

export default Admissions;
