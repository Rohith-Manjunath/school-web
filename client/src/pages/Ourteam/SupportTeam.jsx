import SupportTeamImg from "../../assets/Images/OutTeamImages/SupportTeam.jpg";
// import OurTeamCard from "../../components/layouts/Cards/OurTeamCard";

const SupportTeam = () => {
  return (
    <div className="mx-auto text-textSecondary w-[90%] mt-20">
      <h2 className="text-xl md:text-2xl font-semibold  uppercase text-center mb-2">
        Support Team
      </h2>
      <h2 className="text-sm md:text-xl font-description text-center  mx-auto">Meet our dedicated Support Team, committed to providing exceptional service and assistance to our community. Led by experienced professionals, our team is here to ensure smooth operations and address any inquiries or concerns you may have.</h2>
      <div className="flex justify-center mt-8">
        <img
          src={SupportTeamImg}
          alt="Coordinators Team"
          className="w-full md:w-[80%] rounded-xl"
        />
      </div>
    </div>
  );
};

export default SupportTeam;
