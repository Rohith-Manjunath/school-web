import papertear from "../../assets/Images/Others/tear.svg";
import papertear2 from "../../assets/Images/Others/PaperTearMob1.svg"; 

const PaperTear1 = () => {
  return (
    <div className="mt-[-10px] md:block hidden">
      <img src={papertear} alt="" className="" />
    </div>
  );
};

const PaperTear2 = () => {
  return (
    <div className="mt-[-1px] md:hidden block">
      <img src={papertear2} alt="" className="" />
    </div>
  );
};

export default function PaperTears() {
  return (
    <>
      <PaperTear1 />
      <PaperTear2 />
    </>
  );
}