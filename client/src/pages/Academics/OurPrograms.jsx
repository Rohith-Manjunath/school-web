import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import SidebarAcademics from "../../components/layouts/SidebarAcademics";
import { motion } from 'framer-motion';
import PrePrimaryImage from "../../assets/Images/AcademicsImages/PrePrimary.jpg";
import PrimaryImage from "../../assets/Images/AcademicsImages/Primary.jpg";
import MiddleSchoolImage from "../../assets/Images/AcademicsImages/Middle.jpg";
import HighSchoolImage from "../../assets/Images/AcademicsImages/HighSchool.jpg";

const OurPrograms = () => {
  const [show, setShow] = useState(false);
  const cardsRef = useRef(null);
  const cardWidth = 400; // Adjusted card width
  const cardsToShow = 3; // Number of cards to show at once

  const handleOpen = () => {
    setShow((prev) => !prev);
  };

  const handleScrollLeft = () => {
    cardsRef.current.scrollLeft -= cardWidth * cardsToShow;
  };

  const handleScrollRight = () => {
    cardsRef.current.scrollLeft += cardWidth * cardsToShow;
  };

  useEffect(() => {
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        const maxScrollLeft = cardsRef.current.scrollWidth - cardsRef.current.clientWidth;
        if (cardsRef.current.scrollLeft >= maxScrollLeft) {
          cardsRef.current.scrollLeft = 0;
        } else {
          cardsRef.current.scrollLeft += cardWidth;
        }
      }, 3000); // Adjust scroll interval as needed
    };

    const stopScrolling = () => clearInterval(scrollInterval);

    startScrolling();

    // Stop scrolling when the component unmounts or the user leaves the page
    return () => stopScrolling();
  }, []);

  const programsData = [
    {
      id: 1,
      imageUrl: PrePrimaryImage,
      title: "Pre-Primary-school",
      description: "where curiosity and joy meet in a safe, joyful space.",
      age: "4-5 years",
      schedule: " 8:00 AM - 10:00 AM",
    },
    {
      id: 2,
      imageUrl: PrimaryImage,
      title: "Primary-school",
      description: "where curiosity and joy meet in a safe, joyful space.",
      age: "4-5 years",
      schedule: " 8:00 AM - 10:00 AM",
    },
    {
      id: 3,
      imageUrl: MiddleSchoolImage,
      title: "Middle-school",
      description: "Providing a secure and engaging space for young minds.",
      age: "12-15 years",
      schedule: " 8:00 AM - 5:00 PM",
    },
    {
      id: 4,
      imageUrl: HighSchoolImage,
      title: "High-school",
      description: `Cultivating minds, fostering growth in a secure, dynamic atmosphere.`,
      age: "16-18 years",
      schedule: " 8:00 AM - 5:00 PM",
    }
  ];

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-5 p-5 bg-secondary pb-[6rem] tracking-wide py-20">
        <motion.h2 
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="font-semibold tracking-wide text-3xl sm:text-2xl md:text-5xl text-white font-title"
        >
          Our Academic Programs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }} className="text-center w-[50%] max-lg:w-[80%] text-white font-sans"
        >
          At Mysore International School, our mission is to offer affordable,
          high-quality education and childcare services across all childhood
          stages. Committed to fostering growth and success, we ensure every
          child thrives in a nurturing environment.
        </motion.p>
        <div className="relative w-full">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-l-md z-10"
            onClick={handleScrollLeft}
          >
            &lt;
          </button>
          <div
            ref={cardsRef}
            className="flex gap-8 w-full items-center h-auto overflow-x-hidden scroll-smooth scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {programsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md p-6"
                style={{ width: cardWidth, flex: `0 0 ${cardWidth}px` }}
              >
                <div className="w-full h-52 overflow-hidden rounded">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="w-full flex flex-col gap-4 p-2 border-b-2">
                    <h2 className="font-bold text-lg">{item.title}</h2>
                    <p className="text-sm">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between w-full p-2">
                    <div className="w-1/2 flex flex-col gap-2">
                      <span className="flex items-center justify-center font-semibold text-sm">
                        Age
                      </span>
                      <span className="flex items-center justify-center text-red-600 text-base">
                        {item.age}
                      </span>
                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                      <span className="flex items-center justify-center font-semibold text-sm">
                        Schedule
                      </span>
                      <span className="flex items-center justify-center text-red-600 text-base">
                        {item.schedule}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-r-md z-10"
            onClick={handleScrollRight}
          >
            &gt;
          </button>
        </div>
      </div>
      <SidebarAcademics
        open={show}
        setOpen={handleOpen}
        title={"School Enrollment form"}
      />
    </>
  );
};

export default OurPrograms;
