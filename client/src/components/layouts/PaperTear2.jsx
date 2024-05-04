import papertear2 from "../../assets/Images/Others/papertear2.svg";
import paperTear2Mob from "../../assets/Images/Others/PaperTearMob2.svg";

const Papertear2 = () => {
  return (
    <div className="mb-[-10px] md:block hidden">
      <img src={papertear2} alt="" className="" />
    </div>
  );
};

const PaperTear2Mob = () => {
  return (
    <div className="mb-[-1px] md:hidden block">
      <img src={paperTear2Mob} alt="" className="" />
    </div>
  );
};

const PaperTears = () => {
  return (
    <>
      <Papertear2 />
      <PaperTear2Mob />
    </>
  );
};

export default PaperTears;