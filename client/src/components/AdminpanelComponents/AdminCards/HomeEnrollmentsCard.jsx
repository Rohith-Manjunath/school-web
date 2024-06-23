import React from 'react';
import { FaBirthdayCake, FaPhone, FaMapMarkerAlt, FaIdCard, FaTrashAlt } from 'react-icons/fa';

const HomeEnrollmentsCard = ({ user , handleOpen}) => {

  
  const getInitials = (name) => {
    return name
      ?.split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  

  return (
    <div className="relative hover:cursor-pointer bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-xl p-4 sm:p-6 m-2 sm:m-4 w-full max-w-sm mx-auto hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      
        <FaTrashAlt         className="w-10 h-10 absolute top-2 right-2 p-2 text-red-500 hover:text-red-700 hover:scale-105 transition-all hover:cursor-pointer duration-200"
 onClick={(e) => {
          e.stopPropagation();
          handleOpen(user?._id);
        }}  />
 
      <div className="text-center mb-4 sm:mb-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-md">
          <span className="text-2xl sm:text-3xl font-bold text-white">
            {getInitials(user?.name)}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{user?.name}</h3>
        <p className="text-gray-500 mt-1 bg-gray-200 rounded-full px-3 py-1 text-xs sm:text-sm inline-block">{user?.category}</p>
      </div>
      <div className="space-y-3 sm:space-y-4">
        <InfoItem icon={<FaIdCard className="text-purple-500" />} label="ID" value={user?._id} />
        <InfoItem icon={<FaBirthdayCake className="text-blue-500" />} label="DOB" value={new Date(user?.dob).toLocaleDateString()} />
        <InfoItem icon={<FaPhone className="text-green-500" />} label="Phone" value={user?.phone} />
        <InfoItem icon={<FaPhone className="text-yellow-500" />} label="Alt Phone" value={user?.altPhone} />
        <InfoItem icon={<FaMapMarkerAlt className="text-indigo-500" />} label="Address" value={user?.address} />
      </div>
    </div>
  );
}

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center text-gray-700 bg-white p-2 sm:p-3 rounded-lg shadow-sm">
    <div className="bg-gray-100 rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
      {React.cloneElement(icon, { className: `w-4 h-4 sm:w-5 sm:h-5 ${icon.props.className}` })}
    </div>
    <div className="flex-grow min-w-0">
      <span className="font-medium text-gray-500 text-xs sm:text-sm">{label}:</span>
      <p className="text-gray-800 text-sm sm:text-base break-words uppercase">{value || 'N/A'}</p>
    </div>
  </div>
);

export default HomeEnrollmentsCard;