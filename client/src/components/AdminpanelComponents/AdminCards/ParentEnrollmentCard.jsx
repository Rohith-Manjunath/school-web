import React from 'react';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaComment
} from 'react-icons/fa';

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start space-y-1 mb-4">
    <div className="text-[#4A0057] w-6 h-6 mt-1">
      {icon}
    </div>
    <div className="ml-3 flex-1">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-gray-800 font-medium">{value}</p>
    </div>
  </div>
);

const ParentEnrollmentCard = ({ enrollment, handleOpenModal }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="space-y-2">
      <InfoItem
        icon={<FaUser />}
        label="Name"
        value={enrollment?.parentname}
      />
      
      <InfoItem
        icon={<FaEnvelope />}
        label="Email"
        value={enrollment?.email}
      />
      
      <InfoItem
        icon={<FaPhone />}
        label="Phone"
        value={enrollment?.phone}
      />
      
      <InfoItem
        icon={<FaComment />}
        label="Message"
        value={enrollment?.message}
      />
    </div>
    
    <button 
      onClick={() => handleOpenModal(enrollment?._id)}
      className="w-full mt-6 bg-[#4A0057] hover:bg-[#3A0044] text-white py-3 px-4 rounded-md transition-colors duration-200"
    >
      Delete Query
    </button>
  </div>
);

export default ParentEnrollmentCard;