import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import Achievements from "./Achievements";
import JoinOurTeam from "./JoinOurTeam";
import OurManagement from "./Chairman";
import OurTeamDes from "./OurTeamDes";
import OurValues from "./OurValues";
import SupportTeam from "./SupportTeam";
import PaperTear2 from "../../components/layouts/PaperTear2";
import image from "../../assets/Images/OutTeamImages/jason-goodman-Oalh2MojUuk-unsplash.jpg";
import BreadCrumb from "../../components/layouts/Common/BreadCrumb";
import Chairman from "./Chairman";
import OurManagementPeople from "./OurManagment";
import PrincipalMessage from "./PrincipalMessage";
import Coordinators from "./Coordinators";


const OurTeam = () => {
  return (
    <div className="bg-white">
      <Hero
        image={image}
        description={`Explore the dynamic and dedicated team at Mysore International School. Our educators and staff are committed to fostering a nurturing learning environment, where every student can thrive. With a passion for education, our team brings a wealth of experience and expertise to inspire and guide students on their educational journey. Get to know the individuals who make up our vibrant and collaborative community.`}
        text={`Our Team`}
        descriptionClassName="font-serif"
      />
      <BreadCrumb 
      Currentlink={"our-team"}
      Currentpage={"Our Team"}/>
      <OurTeamDes />
      <Achievements />
      <Chairman />
      <OurManagementPeople />
      <PrincipalMessage />
      <SupportTeam /> 
      <Coordinators />
      <OurValues />
      <JoinOurTeam />
      <PaperTear2 />
      <Footer />
    </div>
  );
};

export default OurTeam;
