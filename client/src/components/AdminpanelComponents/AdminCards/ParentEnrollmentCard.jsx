import { FaComment, FaEnvelope, FaPhone, FaTrashAlt, FaUser, FaUserCircle } from "react-icons/fa";

const ParentEnrollmentCard = ({ enrollment, index, onDelete,InfoItem,motion,handleOpenModal }) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
      >
        <div className="p-6 space-y-6">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full p-2">
                <FaUserCircle className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{enrollment?.parentname}</h2>
                <span className="text-sm font-medium text-indigo-500 bg-indigo-100 px-3 py-1 rounded-full">
                  Parent
                </span>
              </div>
            </div>
            <button
              onClick={()=>{handleOpenModal(enrollment?._id)}}
              className="text-red-500 hover:text-red-700 transition-colors duration-200"
            >
              <FaTrashAlt className="w-5 h-5" />
            </button>
          </div>
          <InfoItem icon={<FaUser />} label="Name" value={enrollment?.parentname} />
          <InfoItem icon={<FaEnvelope />} label="Email" value={enrollment?.email} />
          <InfoItem icon={<FaPhone />} label="Phone" value={enrollment?.phone} />
          <InfoItem icon={<FaComment />} label="Message" value={enrollment?.message} />
        </div>
      </motion.div>
    );

export default ParentEnrollmentCard