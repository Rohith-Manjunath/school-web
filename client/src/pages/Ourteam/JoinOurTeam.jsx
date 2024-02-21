const JoinOurTeam = () => {
  return (
    <div className=" my-10 flex flex-col gap-5 items-start justify-center text-textSecondary w-[90%] mx-auto">
      <h2 className="text-2xl font-semibold my-6 self-center">Join Our Team</h2>
      <table className="w-full border-collapse border ">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-slate-300 p-4">Position</th>
            <th className="border border-slate-300 p-4">Qualifications</th>
            <th className="border border-slate-300 p-4">Requirements</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100 ">
            <td className="border border-slate-300 p-4">
              PRIMARY & MIDDLE SCHOOL TEACHERS
            </td>
            <td className="border border-slate-300 p-4">
              Bachelors / Masters in the relevant subject with a Diploma /
              Degree / Masters in Education. Excellent depth in the subject,
              vision, creativity, and originality of approach are necessary
              along with excellent communication.
              <br />
              <br />
              Experience in a similar position is an advantage.
            </td>
            <td className="border border-slate-300 p-4">
              <ul className="">
                <li>
                  Teaching subjects including Maths, Physics, Chemistry,
                  Biology, General Science, Social Science, Computer Science,
                  English Literature, Hindi, Sanskrit, French, and Kannada.
                </li>
                <br />
                <li>
                  Provide a high-quality education to primary and middle school
                  students.
                </li>
                <br />
                <li>Foster a creative and engaging learning environment.</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="border border-slate-300 p-4">
              MONTESSORI & KINDERGARTEN
            </td>
            <td className="border border-slate-300 p-4">
              Degree / Diploma / PG Certification in Early Childhood Education,
              Montessori Training, Teachers Training, or Nursery Training. Keen
              interest and enthusiasm to develop a visually rich environment &
              activity-based curriculum, which enriches the Kindergarten classes
              with Art, Craft, Music, and Drama.
              <br />
              <br />
              Candidates should have a passion for teaching toddlers.
            </td>
            <td className="border border-slate-300 p-4">
              <ul className="">
                <li>
                  Develop a visually rich and activity-based curriculum for
                  Kindergarten.
                </li>
                <br />
                <li>
                  Create an environment that fosters artistic and creative
                  expression.
                </li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-slate-300 p-4">
              PHYSICAL EDUCATION TEACHER (Male & Female)
            </td>
            <td className="border border-slate-300 p-4">
              Graduates with experience in a reputed educational institution.
              Should have a passion for sports and evoke interest & enthusiasm
              among students.
              <br />
              <br />
              Swimming coaches also required.
            </td>
            <td className="border border-slate-300 p-4">
              <ul className="">
                <li>Teach physical education to students.</li>
                <br />
                <li>Promote sports and fitness among students.</li>
                <br />
                <li>
                  Swimming coaches should have expertise in swimming and
                  coaching.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col items-start justify-center gap-4 mt-4">
        <h2 className="text-2xl font-semibold">How to Apply</h2>
        <p>Mail your latest Resume / CV to zeeschoolmysore@gmail.com</p>
        <p>Clearly mention the position you are applying for.</p>
      </div>
    </div>
  );
};

export default JoinOurTeam;
