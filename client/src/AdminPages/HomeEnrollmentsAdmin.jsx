import { useAlert } from "react-alert";
import { useDeleteEnrollmentMutation, useEnrollmentsQuery } from "../../Redux/adminAuth";
import HomeEnrollmentsCard from "../components/AdminpanelComponents/AdminCards/HomeEnrollmentsCard";
import HomeEnrollmentDeleteModal from "../components/AdminpanelComponents/AdminModals/DeleteModalCommon";
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { Spinner } from "flowbite-react";
import { motion } from 'framer-motion';

const HomeEnrollmentsAdmin = () => {
  const { isLoading, data } = useEnrollmentsQuery();
  const [deleteEnrollment, { isLoading: deleteLoading }] = useDeleteEnrollmentMutation();
  const [open, setOpen] = useState(false);
  const alert = useAlert();
  const [id, setId] = useState(null);

  const handleDelete = async (id) => {
    try {
      const data = await deleteEnrollment(id).unwrap();
      alert.success(data?.message);
      setOpen(false);
      return;
    } catch (e) {
      alert.error(e?.data?.err);
      return;
    }
  };

  const handleClose = () => {
    setOpen(false);
    setId(null);
  };

  const handleOpen = (id) => {
    setOpen(true);
    setId(id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <Spinner size="xl" color="purple" />
      </div>
    );
  }

  if (data?.data?.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-xl">
          <FaExclamationCircle className="text-6xl text-indigo-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Data Yet</h2>
          <p className="text-gray-600">There are currently no parent enrollments available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6 lg:p-12">
      <motion.h1
        className="text-3xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Parent Enrollments
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 w-full">
        {data?.data?.map((user) => (
          <HomeEnrollmentsCard  key={user?._id} user={user} handleOpen={handleOpen} handleClose={handleClose} />
        ))}
      </div>
      <HomeEnrollmentDeleteModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        deleteLoading={deleteLoading}
        handleDelete={handleDelete}
        id={id}
        open={open}
        motion={motion}
      />
    </div>
  );
};

export default HomeEnrollmentsAdmin;
