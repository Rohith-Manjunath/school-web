import { useAdmissionQueriesQuery, useDeleteAdmissionQueryMutation } from "../../Redux/adminAuth";
import AdmissionQueriesCard from "../components/AdminpanelComponents/AdminCards/AdmissionQueriesCard";
import { useAlert } from "react-alert";
import { useState } from "react";
import HomeEnrollmentDeleteModal from "../components/AdminpanelComponents/AdminModals/DeleteModalCommon";
import { motion } from "framer-motion";
import { FaExclamationCircle } from "react-icons/fa";

const AdmissionQueriesAdmin = () => {
  const { data, isLoading } = useAdmissionQueriesQuery();
  const [deleteQuery, { isLoading: deleteLoading }] = useDeleteAdmissionQueryMutation();
  const [open, setOpen] = useState(false);
  const alert = useAlert();
  const [id, setId] = useState(null);
  
  const handleDelete = async (id) => {
    try {
      const data = await deleteQuery(id).unwrap();
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
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-400">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  if (data?.queries?.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-xl">
          <FaExclamationCircle className="text-6xl text-indigo-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Data Yet</h2>
          <p className="text-gray-600">There are currently no queries available.</p>
        </div>
      </div>
    );
  }

  return (
  <>
    <div className="bg-gradient-to-br  min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Admission Queries
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.queries.map((query, index) => (
         <AdmissionQueriesCard key={query?._id} QueryItem={QueryItem} query={query} handleOpen={handleOpen}/>
          ))}
        </div>
      </div>
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
  </>

  );
};

const QueryItem = ({ icon, label, value }) => (
  <div className="flex items-center py-3 border-b border-gray-100 last:border-b-0 group hover:bg-gray-50 transition-colors duration-200 rounded-lg px-2">
    <span className="text-blue-500 mr-4 group-hover:scale-110 transition-transform duration-200">{icon}</span>
    <div className="flex flex-col">
      <span className="text-sm font-medium text-gray-500">{label}</span>
      <span className="text-gray-800 font-semibold">{value}</span>
    </div>
  </div>
);

export default AdmissionQueriesAdmin;