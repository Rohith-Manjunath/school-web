import React from "react";
import heroimg from "../../assets/Images/HomeImages/Holistic/image/5.jpg";
import pdf from "../../assets/Images/HomeImages/Curriculum/CbseBooks.pdf"
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
const SportsAndHolisticGrowth = () => {
  // Function to handle download button click
  const handleDownload = () => {
    window.open(pdf, "_blank");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-15 mt-0 md:mt-4 lg:mt-16">
      {/* Hero Section */}
      <div className="w-full h-[500px] bg-cover bg-center mb-8">
        <img
          className="w-full h-full object-cover"
          src={heroimg}
          alt="Hero Section Image"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
         
          <Link
            underline="hover"
            color="text.primary"
            href="/HolisticEdu"
            aria-current="page"
          >
            Holistic Education
          </Link>
        </Breadcrumbs>
      </div>
      {/* Main Content */}
      <div className="max-w w-full bg-white p-8 rounded-lg mx-4">
        <div className="flex justify-center items-center mb-2">
          <h2 className="text-3xl font-bold text-secondary font-title text-center">
            The role of sports in holistic growth
          </h2>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-l md:text-m font-bold font-description tracking-wide text-secondary mb-10 text-center">
            Sports play a vital role in the holistic growth of students, contributing to their physical, mental, emotional, and social development.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Component 1 */}
            <div className="bg-white rounded-lg shadow-lg py-10 border-2 border-secondary shadow-secondary overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-secondary mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700">
                  Physical Development
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4">
                Regular participation in sports can help students develop better physical health and fitness. Sports require students to engage in physical activity, which helps improve their strength, endurance, agility, and flexibility.
              </p>
            </div>

            {/* Card Component 2 */}
            <div className="bg-white rounded-lg py-10 border-2 border-secondary shadow-secondary shadow-lg overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="h-8 w-8 text-secondary mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700">
                  Mental Development
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4 md:p-6">
                Sports can also contribute to the mental development of students. Through sports, students learn important skills such as discipline, focus, teamwork, and goal-setting. These skills can translate into other areas of their lives, such as academics and personal relationships.
              </p>
            </div>

            <div className="bg-white rounded-lg py-10 shadow-lg border-2 border-secondary shadow-secondary overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="h-8 w-8 text-secondary mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700">
                  Emotional Development
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4 md:p-6">
                Sports can also help students develop emotionally. By participating in sports, students can learn how to deal with success and failure, develop resilience and coping skills, and manage their emotions in a healthy way.
              </p>
            </div>
            <div className="bg-white rounded-lg py-10 shadow-lg border-2 border-secondary shadow-secondary overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="h-8 w-8 text-secondary mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700">
                  Social Development
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4 md:p-6">
                Sports provide an excellent opportunity for students to develop social skills and build relationships with their peers. Through sports, students learn how to work together as a team, communicate effectively, and develop empathy and respect for others.
              </p>
            </div>
            <div className="bg-white rounded-lg py-10 shadow-lg border-2 border-secondary shadow-secondary overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="h-8 w-8 text-secondary mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700">
                  Leadership Development
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4 md:p-6">
                Sports can also help students develop leadership skills. By taking on leadership roles such as team captain or coach, students can learn how to motivate and inspire others, make decisions under pressure, and take responsibility for their actions.
              </p>
            </div>
            <div className="bg-white rounded-lg py-10 shadow-lg border-2 border-secondary shadow-secondary overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center mb-4">
              <svg
  className="h-8 w-8 text-secondary mr-2"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

                <h3 className="text-xl font-semibold text-gray-700">
                No Bag Days
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4 md:p-6">
              At MIS, we regularly conduct No Bag Days which are celebrated with early morning sports events. Students actively participate and cherish these days.
  </p>
              
            </div>
          </div>
          
        </div>
      </div>

      {/* Download Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-10">
        <div className="flex justify-center items-center">
          <p className="text-lg font-semibold text-secondary mr-4">
            To know more about our sports facilities and programs, download our brochure:
          </p>
          <button
            className="bg-secondary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg shadow-md"
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportsAndHolisticGrowth;