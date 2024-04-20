import chairman from "../../assets/Images/AcademicsImages/FacultyImages/chairman.jpg";
import OurTeamCard from "../../components/layouts/Cards/OurTeamCard";

const Chairman = () => {
  return (
    <div className=" text-secondary bg-secondary flex justify-center pb-10">
      <div className="w-[90%]">
        <h2 className="text-2xl font-tile font-semibold my-4 uppercase text-center">
          Founder & Chairman
        </h2>
        <OurTeamCard
          name="Dr. Joseph K Thomas"
          position={"Founder & Chairman"}
          quote={
            "An army veteran, acorporate leader, an educationist and a social entrepreneur. His journey from the battle ground to the class room has been an illustrious one. A great visionary and an educationist at heart, Mysore International School, Mysuru is the fulfilment of his dream. He is the recipient of 4 National Awards, International Awards and numerous prestigious school Awards. The most recent ones being 'Gem of India Award', 'International Achiever's Award for Educational Excellence' and 'International Leadership Innovation Excellence Award'. When you ask him which is closest to his heart he says The honours I am most proud of are the ones awarded to my school such as being ranked No.1 School in Mysore by CBSE and Education Today and also knowing that I am making a difference in the lives of school children is the greatest reward."
          }
          education={"MA., MBA., MDBA., MRICS (London) Ph.D (Management)"}
          image={chairman}
        />
      </div>
    </div>
  );
};

export default Chairman;