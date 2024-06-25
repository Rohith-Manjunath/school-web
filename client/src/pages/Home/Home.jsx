import Footer from "../../components/layouts/Footer";
import PaperTear1 from "../../components/layouts/PaperTear1";
import PaperTear2 from "../../components/layouts/PaperTear2";
import CardListComponent from "./CardListComponent";
import CarouselSlider from "./CarouselSlider";
import Gallery from "./Gallery";
import GetInTouch from "./GetInTouch";
import JoinOurFramerwork from "./JoinOurFramework";
import NewsAndEvents from "./NewsAndEvents";
import ReasonToPursue from "./ReasonToPursue";
import Schedule from "./Schedule";
import VirtualTour from "./VIrtualTour";
import WelcomeModal from "./WelcomeModal";
import WelcomeToMIS from "./WelcomeToMis";
import WhoWeAre from "./WhoWeAre";
import JoinCbse from "./joincbse";
import Marquee from "./marquee2";

const Home = () => {

  return (

    <div className="mt-36 md:mt-8 lg:mt-20">
      <WelcomeModal />
      <CarouselSlider />
      <WelcomeToMIS />
      <PaperTear1 />
      <Marquee />
      <CardListComponent />
      <WhoWeAre />
      <PaperTear2 />
      <Gallery />
      <PaperTear1 />
      <VirtualTour />
      <PaperTear2 />
      <JoinOurFramerwork />
      <PaperTear1 />
      <JoinCbse />
      <PaperTear2 />
      <ReasonToPursue />
      <PaperTear1 />
      <NewsAndEvents />
      <Schedule />
      <GetInTouch />
      <PaperTear2 />
      <Footer />
    </div>
  );
};

export default Home;
