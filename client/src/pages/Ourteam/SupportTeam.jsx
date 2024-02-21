import chairman from "../../assets/Images/AcademicsImages/FacultyImages/chairman.jpg";
import OurTeamCard from "../../components/layouts/Cards/OurTeamCard";

const SupportTeam = () => {
  return (
    <div className=" mx-auto text-textSecondary w-[90%] space-y-8 mt-20 ">
      <h2 className="text-2xl font-semibold my-4 uppercase text-center">
        Support Team
      </h2>

      <div className="space-y-6">
        <OurTeamCard
          name="Dr. Joseph K Thomas"
          position={"Founder & Chairman"}
          quote={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi exercitationem modi aspernatur quia, sed error similique dolor tempore optio blanditiis, cumque corporis sit provident facilis in rerum necessitatibus praesentium."
          }
          education={"MA., MBA., MDBA., MRICS (London) Ph.D (Management)"}
          image={chairman}
        />
        <OurTeamCard
          name="Dr. Joseph K Thomas"
          position={"Founder & Chairman"}
          quote={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi exercitationem modi aspernatur quia, sed error similique dolor tempore optio blanditiis, cumque corporis sit provident facilis in rerum necessitatibus praesentium."
          }
          education={"MA., MBA., MDBA., MRICS (London) Ph.D (Management)"}
          image={chairman}
        />
      </div>
    </div>
  );
};

export default SupportTeam;
