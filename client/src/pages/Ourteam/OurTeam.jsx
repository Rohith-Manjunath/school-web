import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import Faculty from "../Academics/Faculty";
import Achievements from "./Achievements";
import JoinOurTeam from "./JoinOurTeam";
import OurManagement from "./OurManagement";
import OurTeamDes from "./OurTeamDes";
import OurValues from "./OurValues";
import SupportTeam from "./SupportTeam";
import image from "../../assets/Images/OutTeamImages/jason-goodman-Oalh2MojUuk-unsplash.jpg";
import BreadCrumb from "../../components/layouts/Common/BreadCrumb";

const OurTeam = () => {
  return (
    <div className="bg-white">
      <Hero
        image={image}
        description={`Welcome to Mysore international school, where academic excellence is at the core of our mission. We are committed to providing students with a rigorous and well-rounded education that prepares them for success in a rapidly changing world. Our dedicated faculty and staff are passionate about nurturing the intellectual growth of every student, fostering critical thinking, creativity, and a love for learning.`}
        text={`OurTeam`}
      />
      <BreadCrumb 
      Currentlink={"our-team"}
      Currentpage={"Our Team"}/>
      <OurTeamDes />
      <OurManagement />
      <Achievements />
      <Faculty />
      <SupportTeam />
      <OurValues />
      <JoinOurTeam />
      <Footer />
    </div>
  );
};

export default OurTeam;
