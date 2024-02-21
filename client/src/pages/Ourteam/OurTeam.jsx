import Hero from "../../components/layouts/Common/Hero";
import Footer from "../../components/layouts/Footer";
import Faculty from "../Academics/Faculty";
import Achievements from "./Achievements";
import JoinOurTeam from "./JoinOurTeam";
import OurManagement from "./OurManagement";
import OurTeamDes from "./OurTeamDes";
import OurValues from "./OurValues";
import SupportTeam from "./SupportTeam";

const OurTeam = () => {
  return (
    <div className="bg-white">
      <Hero />
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
