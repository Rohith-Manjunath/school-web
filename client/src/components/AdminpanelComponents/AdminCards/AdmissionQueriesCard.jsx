import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaCalendarAlt, FaBuilding, FaRegBuilding } from "react-icons/fa";

const AdmissionQueriesCard = ({ QueryItem, query, handleOpen }) => {
  console.log('querrry', query)
  return (
    <div className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-in-out hover:-translate-y-1 p-6">
      <div className="space-y-4">
        <QueryItem 
          icon={<FaUser className="text-secondary text-xl transform group-hover:scale-110 transition-transform duration-200" />}
          label="Name"
          value={query?.name || `${query?.firstname} ${query?.lastname}`}
        />
        
        <QueryItem 
          icon={<FaEnvelope className="text-secondary text-xl transform group-hover:scale-110 transition-transform duration-200" />}
          label="Email"
          value={query?.email}
        />
        
        <QueryItem 
          icon={<FaPhone className="text-secondary text-xl transform group-hover:scale-110 transition-transform duration-200" />}
          label="Phone"
          value={query?.phone}
        />
        
        <QueryItem 
          icon={<FaGraduationCap className="text-secondary text-xl transform group-hover:scale-110 transition-transform duration-200" />}
          label="Class"
          value={query?.class}
        />

        <QueryItem 
          icon={<FaRegBuilding className="text-secondary text-xl transform group-hover:scale-110 transition-transform duration-200" />}
          label="Place"
          value={query?.place}
        />

        <QueryItem 
          icon={<FaBuilding className="text-secondary text-xl transform group-hover:scale-110 transition-transform duration-200" />}
          label="Previous"
          value={query?.previousSchool}
        />
        
        <QueryItem 
          icon={<FaCalendarAlt className="text-secondary text-xl transform group-hover:scale-110 transition-transform duration-200" />}
          label="Date"
          value={new Date(query?.createdAt).toLocaleDateString()}
        />

        <button
          onClick={() => handleOpen(query?._id)}
          className="w-full mt-4 py-2 bg-secondary text-white rounded hover:bg-ctcPrimaryLight transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-center"
        >
          Delete Query
        </button>
      </div>
    </div>
  );
};

const QueryItem = ({ icon, label, value }) => (
  <div className="flex items-center group">
    <span className="mr-3">{icon}</span>
    <div className="flex flex-col">
      <span className="text-sm text-secondary font-medium">{label}</span>
      <span className="text-gray-700">{value}</span>
    </div>
  </div>
);

export default AdmissionQueriesCard;