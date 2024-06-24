import { FaBirthdayCake, FaEnvelope, FaGraduationCap, FaMapMarkerAlt, FaPhone, FaSchool, FaTrashAlt, FaUser } from "react-icons/fa"

const AdmissionQueriesCard = ({QueryItem,query,handleOpen}) => {
  return (
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white text-blue-500 rounded-full p-3">
              <FaUser className="text-xl" />
            </div>
            <h2 className="ml-3 text-xl font-semibold text-white">{`${query?.firstname} ${query?.lastname}`}</h2>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-white opacity-75 mr-4">{new Date(query?.createdAt).toLocaleDateString()}</span>
            <button
            onClick={()=>handleOpen(query?._id)}
              className="text-white hover:text-red-500 transition-colors duration-200"
              title="Delete query"
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <QueryItem icon={<FaEnvelope />} label="Email" value={query?.email} />
        <QueryItem icon={<FaPhone />} label="Phone" value={query?.phone} />
        <QueryItem icon={<FaPhone />} label="Alt Phone" value={query?.altPhone} />
        <QueryItem icon={<FaBirthdayCake />} label="DOB" value={new Date(query?.dob).toLocaleDateString()} />
        <QueryItem icon={<FaMapMarkerAlt />} label="Place" value={query?.place} />
        <QueryItem icon={<FaSchool />} label="Previous School" value={query?.previousSchool} />
        <QueryItem icon={<FaGraduationCap />} label="Class" value={query?.class} />
      </div>
    </div>
  )
}

export default AdmissionQueriesCard