import SupportTeamImg from "../../assets/Images/OutTeamImages/Coordinators.jpg";

const Coordinators = () => {
  return (
    <div className="mx-auto text-textSecondary w-[90%] mt-20">
      <h2 className="text-xl md:text-2xl font-semibold  uppercase text-center mb-2">
        Our Coordinators Team
      </h2>
      <h2 className="text-sm md:text-xl font-description text-center  mx-auto">
        Meet the dedicated coordinators who play a pivotal role in ensuring a smooth and enriching educational experience. From curriculum planning to extracurricular activities, our coordinators work tirelessly to create a nurturing environment that fosters growth and success.
      </h2>
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

export default Coordinators;
