import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import PaperTear1 from "../../components/layouts/PaperTear1";
import PaperTear2 from "../../components/layouts/PaperTear2";
import AdmissionProcess from "./AdmissionProcess";
import Enroll from "./Enroll";
import Marquee from "./Marquee";
import RaiseATicket from "./RaiseATicket";
import ReasonToChoose from "./ReasonToChoose";
import image from "../../assets/Images/AcademicsImages/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";

const Admissions = () => {
  return (
    <div>
      <Hero
        text={"Online Fee Payment"}
        image={image}
        description={`At Mysore International School, we prioritize a seamless and hassle-free school experience for parents. Our secure Online Fees Payments system simplifies the entire process, offering a range of benefits at your fingertips. Opt for the convenience of online transactions to make fee payments efficiently, ensuring a smoother journey for both you and your child at MIS`}
      />
      <ReasonToChoose />
      <RaiseATicket />
      <AdmissionProcess />
      <Enroll />
      <PaperTear1 />
      <Marquee />
      <PaperTear2 />
      <Footer />
    </div>
  );
};

export default Admissions;
