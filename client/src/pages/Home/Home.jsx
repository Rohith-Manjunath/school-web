import Footer from "../../components/layouts/Footer";
import PaperTear1 from "../../components/layouts/PaperTear1";
import PaperTear2 from "../../components/layouts/PaperTear2";
import ReasonToPursue from "../ReasonToPursue";
import CarouselSlider from "./CarouselSlider";
import GetInTouch from "./GetInTouch";
import NewsAndEvents from "./NewsAndEvents";
import Schedule from "./Schedule";
import VirtualTour from "./VIrtualTour";
import WelcomeToMIS from "./WelcomeToMis";
import WhoWeAre from "./WhoWeAre";

const Home = () => {
  return (
    <div className="mt-20">
      <CarouselSlider />
      <WelcomeToMIS />
      <PaperTear1 />
      <WhoWeAre />
      <VirtualTour />
      <PaperTear2 />
      <ReasonToPursue />
      <NewsAndEvents />
      <Schedule />
      <GetInTouch />
      <PaperTear2 />
      <Footer />
    </div>
  );
};

export default Home;
