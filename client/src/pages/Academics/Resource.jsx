import { Accordion } from "flowbite-react";
import File1 from "../../assets/Files/List_of_Prescribed_NCERT_Books (1).pdf";
import File2 from "../../assets/Files/Facilty.pdf";
import File3 from "../../assets/Files/Student_Enrollment.pdf";
import File4 from "../../assets/Files/Mandatory_Disclosure_Details.pdf";
import File5 from "../../assets/Files/GENERAL INFORMATION.pdf";
import File6 from "../../assets/Files/Affiliation_0.pdf";
import File7 from "../../assets/Files/Trust Registration.pdf";
import File8 from "../../assets/Files/NOC.pdf";
import File9 from "../../assets/Files/RTE Recognition_MLZS.pdf";
import File10 from "../../assets/Files/Building_MLZS.pdf";
import File11 from "../../assets/Files/Fire_Safety.pdf";
import File12 from "../../assets/Files/Self certificate - MLZS.pdf";
import File13 from "../../assets/Files/Water.pdf";

import { FaCloudDownloadAlt } from "react-icons/fa";

const Resource = () => {
  const schoolFAQ = [
    {
      question: "Book Info",
      answer:
        "Explore the application process for admission to Mysore International School on our Admissions page. Find all necessary forms and instructions to start your journey with us.",
      file: File1,
    },
    {
      question: "Mandatory Public Disclosure",
      answer:
        "Learn about our commitment to transparency, aimed at keeping parents well-informed and building trust in our educational institution.",
      file: File4,
    },
    {
      question: "General Information",
      answer:
        "Discover more about our institution's commitment to transparency, keeping parents informed, and building trust. We believe in fostering a strong partnership between the school and parents for the betterment of our students.",
      file: File5,
    },
    {
      question: "Copy Of Affiliation",
      answer:
        "Get insights into our affiliation details, showcasing our commitment to transparency, keeping parents informed, and building trust.",
      file: File6,
    },
    {
      question: "Copy Of Trust",
      answer:
        "Understand the principles of our trust, our commitment to transparency, keeping parents informed, and building trust for the betterment of our students.",
      file: File7,
    },
    {
      question: "Copy Of NOC",
      answer:
        "Access information regarding our NOC, reflecting our commitment to transparency, keeping parents informed, and building trust.",
      file: File8,
    },
    {
      question: "COPY OF RECOGNITION CERTIFICATE UNDER RTE ACT",
      answer:
        "Find details about our recognition certificate under RTE Act, showcasing our commitment to transparency, keeping parents informed, and building trust.",
      file: File9,
    },
    {
      question: "COPY OF BUILDING SAFETY CERTIFICATE",
      answer:
        "Explore our building safety certificate, reflecting our commitment to providing a secure and conducive learning environment.",
      file: File10,
    },
    {
      question: "COPY OF FIRE SAFETY",
      answer:
        "Learn about our fire safety measures, reflecting our commitment to the safety and well-being of our students.",
      file: File11,
    },
    {
      question: "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION",
      answer:
        "Access the self-certification submitted by the school for affiliation/upgradation/extension, reflecting our commitment to transparency, keeping parents informed, and building trust.",
      file: File12,
    },
    {
      question: "COPY OF THE WATER, HEALTH AND SANITATION CERTIFICATE",
      answer:
        "Explore our water, health, and sanitation certificate, reflecting our commitment to providing a healthy and hygienic environment.",
      file: File13,
    },
    {
      question: "Facility",
      answer:
        "Welcome to our NCERT Textbook Information section, where you can find details about the NCERT textbooks recommended for various classes. NCERT textbooks are widely recognized for their quality and alignment with the national curriculum.",
      file: File2,
    },
    {
      question: "Student Enrollment",
      answer:
        "Welcome to our Student Information section, where you can find details about the number of students in each class at our school. We believe in maintaining manageable class sizes to ensure personalized attention and a conducive learning environment.",
      file: File3,
    },
  ];

  return (
    <div className="w-[90%] text-textSecondary mx-auto border border-slate-300 rounded-md p-10 my-10 bg-white">
      <div>
        <h2 className="text-center font-semibold text-2xl mb-8 lg:text-3xl">
          Resources
        </h2>
        <p className="text-slate-800">
          Gain access to a wealth of essential resources and documents within
          our expansive Resources and Downloads section. Here, you can find a
          comprehensive array of materials, including student handbooks,
          academic policies, and various forms to meet your informational needs.
        </p>
        <p className="my-4">Frequently asked questions(FAQ's)</p>
      </div>
      <Accordion className="">
        {schoolFAQ.map((q) => (
          <Accordion.Panel key={q.question} className="mt-2">
            <Accordion.Title className="font-semibold text-black">
              {q.question}
            </Accordion.Title>
            <Accordion.Content className="text-black">
              <p className="mb-2 dark:text-gray-400">{q.answer}</p>
              <button>
                <a
                  href={q.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start gap-2 bg-blue-500  py-2 px-2 rounded-md hover:bg-blue-400 transition-all duration-300 text-white"
                >
                  <FaCloudDownloadAlt />
                  <span>Open</span>
                </a>
              </button>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default Resource;
