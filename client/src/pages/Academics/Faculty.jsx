import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import FacultyCard from '../../components/layouts/Cards/FacultyCard';
import fac1 from '../../assets/Images/AcademicsImages/FacultyImages/fac1.jpg';
import chairman from '../../assets/Images/AcademicsImages/FacultyImages/chairman.jpg';
import trustee from '../../assets/Images/AcademicsImages/FacultyImages/trustee.jpg';

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
      socialMedia: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/mlzs_mysore/",
          icon: <FaInstagram className="text-4xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md instagram-icon" />,
        },
        {
          platform: "Facebook",
          link: "https://www.facebook.com/mlzsmys/",
          icon: <FaFacebook className="text-4xl hover:cursor-pointer hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md" />,
        },
        /* Add more social media objects here if needed */
      ],
    },
    {
      name: "Helena Joseph",
      designation: "Trustee/Secretary",
      education: "",
      img: trustee,
      quote:
        "Education is not learning of facts but training of the mind to think",
      contact: "rohith@test.com",
      socialMedia: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/mlzs_mysore/",
          icon: <FaInstagram className="text-4xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md instagram-icon" />,
        },
        {
          platform: "Facebook",
          link: "https://www.facebook.com/mlzsmys/",
          icon: <FaFacebook className="text-4xl hover:cursor-pointer hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md" />,
        },
        /* Add more social media objects here if needed */
      ],
    },
    {
      name: "Dr. PREETHI VINCENT",
      designation: "Principal",
      education: " M.A, B.Ed, M.Phil, Ph.D",
      img: fac1,
      quote:
        "Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations",
      contact: "rohith@test.com",
      socialMedia: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/mlzs_mysore/",
          icon: <FaInstagram className="text-4xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md instagram-icon" />,
        },
        {
          platform: "Facebook",
          link: "https://www.facebook.com/mlzsmys/",
          icon: <FaFacebook className="text-4xl hover:cursor-pointer hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md" />,
        },
        /* Add more social media objects here if needed */
      ],
    },
  ];

  return (
    <div className="mt-[-55px] pt-[100px] pb-[100px] bg-white my-[-59px] py-10 p-6 space-y-4  text-textSecondary">
      <motion.h2 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      className="text-start font-semibold font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase lg:text-center ">
        Faculty and staff
      </motion.h2>
      <motion.p
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
       className="text-start lg:text-center pb-10 py-5">
        Meet the passionate educators and staff who are the heart of Mysore
        international school. Our experienced and dedicated professionals are
        committed to providing a nurturing and supportive learning environment
        for every student.
      </motion.p>

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
              socialMedia={card.socialMedia}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Faculty;
