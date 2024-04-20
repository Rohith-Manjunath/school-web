import SupportTeamImg from "../../assets/Images/OutTeamImages/HOD.jpeg";
// import OurTeamCard from "../../components/layouts/Cards/OurTeamCard";

const HOD = () => {
  return (
    <div className="mx-auto text-textSecondary w-[90%] mt-20">
      <h2 className="text-xl md:text-2xl font-semibold  uppercase text-center mb-2">
      HOD's of various departments
      </h2>
      <h2 className="text-sm md:text-xl font-description text-center  mx-auto">Meet our dedicated HODs, leading their departments with expertise and passion. They guide our faculty and students, fostering innovation and academic excellence.</h2>
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

export default HOD;
