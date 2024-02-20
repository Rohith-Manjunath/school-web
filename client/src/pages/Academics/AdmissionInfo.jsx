import { Accordion } from "flowbite-react";

const AdmissionInfo = () => {
  const schoolFAQ = [
    {
      question: "How do I apply for admission to Mysore International School?",
      answer:
        "To apply for admission to Mysore International School, please visit our Admissions page and follow the step-by-step application process outlined there. You'll find all the necessary forms and instructions to get started.",
    },
    {
      question:
        "What are the admission requirements for Mysore International School?",
      answer:
        "Admission requirements may vary depending on the grade level and program you're interested in. Typically, we consider factors such as academic performance, standardized test scores, recommendations, and an admissions interview. Specific requirements can be found on our Admissions Requirements page.",
    },
    {
      question: "Is there an application deadline for admissions?",
      answer:
        "Yes, we have specific application deadlines for each academic year. Please check our Admissions Deadlines page to ensure you submit your application on time. Late applications may be considered on a case-by-case basis.",
    },
    {
      question:
        "Are there any entrance exams for admission to Mysore International School?",
      answer:
        "Yes, some programs and grade levels may require standardized entrance exams. Details about required exams and their formats can be found on our Entrance Exams page.",
    },
    {
      question: "What is the tuition fee for Mysore International School?",
      answer:
        "Tuition fees vary depending on the grade level and program. Our Tuition and Fees page provides a detailed breakdown of tuition costs, fees, and any available financial aid or scholarships.",
    },
    {
      question: "Do you offer financial aid or scholarships for students?",
      answer:
        "Yes, we are committed to providing access to quality education. Information about financial aid, scholarships, and how to apply for them is available on our Financial Aid and Scholarships page.",
    },
    {
      question:
        "Can I schedule a tour or visit Mysore International School before applying for admission?",
      answer:
        "Absolutely! We encourage prospective parents and students to visit our campus and take a tour. Visit our Campus Tours and Visits page to schedule a tour and learn about upcoming open house events.",
    },
    {
      question:
        "How can I check the status of my child's application to Mysore International School?",
      answer:
        "You can track the status of your child's application through our online application portal. Once you've submitted the application, you'll receive login information to access your application status.",
    },
    {
      question:
        "What is the enrollment process after admission is offered at Mysore International School?",
      answer:
        "After admission is offered, we will provide detailed instructions on the enrollment process, including deadlines for accepting the offer, submitting required documents, and paying the enrollment deposit. You can find more information on our Enrollment Procedures page.",
    },
    {
      question:
        "Is transportation available for students who live outside the immediate area of Mysore International School?",
      answer:
        "Yes, we offer transportation services for students who live outside the immediate vicinity of Mysore International School. Details on transportation routes, schedules, and fees can be found on our Transportation Services page.",
    },
  ];

  return (
    <div className="w-[90%] mx-auto border border-slate-300 rounded-md p-10  bg-white my-10 text-textSecondary">
      <div>
        <h2 className="text-center font-semibold text-2xl lg:text-3xl mb-8">
          Admission Info
        </h2>
        <p className="text-slate-800">
          Interested in joining our academic community? Explore our admissions
          page for details on the application process, admission criteria, and
          important deadlines. We're here to assist with any inquiries and
          eagerly anticipate the opportunity to embrace new students into our
          school.
        </p>
        <p className="my-4">Frequently asked questions(FAQ's)</p>
      </div>
      <Accordion className="border border-slate-300">
        {schoolFAQ.map((q) => (
          <Accordion.Panel key={q.question} className="mt-2">
            <Accordion.Title className="font-semibold text-black ">
              {q.question}
            </Accordion.Title>
            <Accordion.Content className="text-slate-600 ">
              <p className="mb-2 dark:text-gray-400">{q.answer}</p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default AdmissionInfo;
