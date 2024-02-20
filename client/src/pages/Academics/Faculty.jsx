import fac1 from "../../assets/Images/AcademicsImages/FacultyImages/fac1.jpg";
import vicePrincipal from "../../assets/Images/AcademicsImages/FacultyImages/vice_principal.jpg";
import chairman from "../../assets/Images/AcademicsImages/FacultyImages/chairman.jpg";
import trustee from "../../assets/Images/AcademicsImages/FacultyImages/trustee.jpg";
import FacultyCard from "../../components/layouts/Cards/FacultyCard";

const Faculty = () => {
  const data = [
    {
      name: "Dr. Joseph K Thomas",
      designation: "Founder & Chairman",
      education: "MA., MBA., MDBA., MRICS (London) Ph.D (Management)",
      img: chairman,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi exercitationem modi aspernatur quia, sed error similique dolor tempore optio blanditiis, cumque corporis sit provident facilis in rerum necessitatibus praesentium.",
      contact: "rohith@test.com",
    },

    {
      name: "Helena Joseph",
      designation: "TRUSTEE / SECRETARY",
      education: "",
      img: trustee,
      quote:
        "Education is not learning of facts but training of the mind to think",
      contact: "rohith@test.com",
    },

    {
      name: "Dr. PREETHI VINCENT",
      designation: "Principal",
      education: " M.A, B.Ed, M.Phil, Ph.D",
      img: fac1,
      quote:
        "Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations",
      contact: "rohith@test.com",
    },

    {
      name: "Dr. Joseph K Thomas",
      designation: "Vice-Principal",
      education: "MA., MBA., MDBA., MRICS (London) Ph.D (Management)",
      img: vicePrincipal,
      quote:
        "Education is not learning of facts but training of the mind to think",
      contact: "rohith@test.com",
    },
  ];

  return (
    <div className="mt-[-55px] pt-[100px] pb-[100px] bg-white py-10 p-6 space-y-4  text-textSecondary">
      <h2 className="text-start font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase lg:text-center ">
        Faculty and staff
      </h2>
      <p className="text-start lg:text-center pb-10">
        Meet the passionate educators and staff who are the heart of Mysore
        international school. Our experienced and dedicated professionals are
        committed to providing a nurturing and supportive learning environment
        for every student.
      </p>

      <div className="w-full md:grid grid-cols-2 mx-auto space-y-6 md:space-y-0 md:gap-10 xl:gap-24 lg:px-8">
        {data.map((card) => {
          return (
            <FacultyCard
              key={card.name}
              name={card.name}
              designation={card.designation}
              img={card.img}
              quote={card.quote}
              education={card.education}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Faculty;
