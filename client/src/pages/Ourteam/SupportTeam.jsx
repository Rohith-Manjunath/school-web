import SupportTeamImg from "../../assets/Images/OutTeamImages/SupportTeam.jpg";
// import OurTeamCard from "../../components/layouts/Cards/OurTeamCard";

const SupportTeam = () => {
  return (
    <div className="mx-auto text-textSecondary w-[90%] space-y-8 mt-20">
      <h2 className="text-2xl font-semibold my-4 uppercase text-center">
        Support Team
      </h2>
      <img src={SupportTeamImg} alt="Chairman" className="mx-auto" />
    </div>
  );
};

export default SupportTeam;
