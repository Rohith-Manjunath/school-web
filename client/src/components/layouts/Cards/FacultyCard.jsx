const FacultyCard = ({ name, img, designation, quote, education, contact }) => {
  return (
    <div className="lg:grid grid-cols-2 border border-slate-300 p-5 rounded-lg hover:outline hover:outline-slate-300 hover:cursor-pointer hover:scale-105 transition-all  duration-300 hover:outline-offset-1">
      <div>
        <img src={img} alt="" className="w-full rounded-md " />
      </div>
      <div className="px-4 space-y-4 flex items-start justify-start flex-col font-bold mt-6 lg:mt-0">
        <h2>Name : {name}</h2>
        <h3>Designation : {designation}</h3>
      </div>
    </div>
  );
};

export default FacultyCard;
