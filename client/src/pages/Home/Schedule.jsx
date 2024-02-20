import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div className="flex-col mt-10 md:flex-row text-center py-10 bg-secondary text-white tracking-wide flex items-start pl-4 md:pl-0 justify-center gap-8 font-semibold shadow-2xl shadow-secondary">
      <h4 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl">
        Schedule a visit at Mysore International School
      </h4>
      <div className="hover:translate-x-4 transition-all ease-in-out duration-800 ">
        <Link
          to={"academics/facilities"}
          className="bg-ctcSecondary text-ctcPrimary px-8 py-4 rounded-sm font-semibold tracking-wide "
        >
          Schedule a visit
        </Link>
      </div>
    </div>
  );
};

export default Schedule;
