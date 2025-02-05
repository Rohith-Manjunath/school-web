import React, { useState } from 'react';
import { useDeleteParentsEnrollmentMutation, useParentsEnrollmentsQuery } from '../../Redux/adminAuth';
import { Spinner } from 'flowbite-react';
import { motion } from 'framer-motion';
import ParentEnrollmentCard from '../components/AdminpanelComponents/AdminCards/ParentEnrollmentCard';
import HomeEnrollmentDeleteModal from '../components/AdminpanelComponents/AdminModals/DeleteModalCommon';
import { useAlert } from 'react-alert';
import { FaExclamationCircle } from 'react-icons/fa';

const ParentsEnrollmentsAdmin = () => {
  const { data, isLoading } = useParentsEnrollmentsQuery();
  const [deleteParentsEnrollment, { isLoading: deleteLoading }] = useDeleteParentsEnrollmentMutation();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const alert = useAlert();

  const handleOpenModal = (id) => {
    setOpen(true);
    setId(id);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setId(null);
  };

  const handleDelete = async (id) => {
    try {
      const data = await deleteParentsEnrollment(id).unwrap();
      alert.success(data?.message);
      setOpen(false);
    } catch (e) {
      alert.error(e?.data?.err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-400">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  if (data?.data?.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 bg-white rounded-lg shadow-xl"
        >
          <FaExclamationCircle className="text-6xl text-indigo-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Data Yet</h2>
          <p className="text-gray-600">There are currently no parent enrollments available.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-12 bg-gradient-to-br min-h-screen">
      <motion.h1
        className="text-3xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Parent Enrollments
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {data?.data?.map((enrollment, index) => (
          <ParentEnrollmentCard
            key={enrollment?._id}
            enrollment={enrollment}
            index={index}
            onDelete={handleDelete}
            InfoItem={InfoItem}
            motion={motion}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </div>
      <HomeEnrollmentDeleteModal
        handleClose={handleCloseModal}
        deleteLoading={deleteLoading}
        handleDelete={handleDelete}
        id={id}
        open={open}
      />
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start space-x-3">
    <div className="text-indigo-500 mt-1">
      {React.cloneElement(icon, { className: "w-5 h-5" })}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-gray-800 font-medium uppercase">{value}</p>
    </div>
  </div>
);

export default ParentsEnrollmentsAdmin;
