import { Accordion } from "flowbite-react";
import File1 from "../../assets/Files/List_of_Prescribed_NCERT_Books (1).pdf";
import File2 from "../../assets/Files/Facilty.pdf";
import File3 from "../../assets/Files/Student_Enrollment.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Resource = () => {
  const schoolFAQ = [
    {
      question: "Book Info",
      answer:
        "To apply for admission to Mysore International School, please visit our Admissions page and follow the step-by-step application process outlined there. You'll find all the necessary forms and instructions to get started.",
      file: File1,
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
            <Accordion.Content className=" text-black">
              <p className="mb-2 dark:text-gray-400">{q.answer}</p>
              <button>
                <a
                  href=""
                  download={q.file}
                  className="flex items-center justify-start gap-2 bg-blue-500  py-2 px-2 rounded-md hover:bg-blue-400 transition-all duration-300 text-white"
                >
                  <FaCloudDownloadAlt />
                  <span>Download</span>
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
