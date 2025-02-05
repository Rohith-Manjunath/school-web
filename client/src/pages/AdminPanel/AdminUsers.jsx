import { useMemo, useState } from 'react';
import { useDeleteUserMutation, useUdpateUserRoleMutation, useUsersQuery } from "../../../Redux/adminAuth";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { FaEdit, FaTrash, FaCheckCircle, FaTimesCircle, FaUsers } from 'react-icons/fa';
import HomeEnrollmentDeleteModal from '../../components/AdminpanelComponents/AdminModals/DeleteModalCommon';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useAlert } from 'react-alert';

const AdminUsers = () => {
  const { data, isLoading } = useUsersQuery();
  const [deleteUser, { isLoading: deleteLoading }] = useDeleteUserMutation();
  const [updateUser, { isLoading: updateLoading }] = useUdpateUserRoleMutation();
  const [open, setOpen] = useState(false);
  const alert = useAlert();
  const [id, setId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState('');

  const handleChange = (event) => {
    setIsAdmin(event.target.value);
  };

  const handleOpenUpdateModal = (id) => {
    setId(id);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const data = await deleteUser(id).unwrap();
      alert.success(data?.message);
      setOpen(false);
    } catch (e) {
      alert.error(e?.data?.err);
    }
  };

  const handleUpdateUser = async (id) => {
    try {
      const data = await updateUser({ isAdmin, userId: id }).unwrap();
      alert.success(data?.message);
      setIsEditModalOpen(false);
    } catch (e) {
      alert.error(e?.data?.err);
    }
  };

  const columnDefs = useMemo(() => [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellStyle: { textTransform: 'capitalize' },
      cellRenderer: (params) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
            <span className="text-secondary font-semibold">{params.value.charAt(0).toUpperCase()}</span>
          </div>
          <span className="font-semibold text-gray-700">{params.value}</span>
        </div>
      )
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1.5,
      cellRenderer: (params) => (
        <div className="flex items-center text-gray-600">
          <span className="text-sm">{params.value}</span>
        </div>
      )
    },
    {
      field: 'isAdmin',
      headerName: 'Role',
      flex: 1,
      cellRenderer: (params) => (
        <div className="flex items-center justify-center">
          {params.value ? (
            <div className="flex items-center gap-2 px-4 py-1.5 bg-secondary/10 rounded-full">
              <FaCheckCircle className="text-secondary" size={14} />
              <span className="text-sm font-medium text-secondary">Administrator</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full">
              <FaTimesCircle className="text-gray-500" size={14} />
              <span className="text-sm font-medium text-gray-500">Standard User</span>
            </div>
          )}
        </div>
      )
    },
    {
      headerName: 'Actions',
      flex: 1,
      cellRenderer: (params) => (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => handleOpenUpdateModal(params?.data?._id)}
            className="p-2 text-secondary hover:bg-secondary/10 rounded-lg transition-colors duration-200"
            title="Edit User"
          >
            <FaEdit size={16} />
          </button>
          <button
            onClick={() => handleOpen(params?.data?._id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
            title="Delete User"
          >
            <FaTrash size={16} />
          </button>
        </div>
      )
    }
  ], []);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
    minWidth: 150,
  }), []);

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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-secondary/90 to-ctcPrimaryLight">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
          <p className="text-white font-medium">Loading user data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <FaUsers className="text-secondary" />
                User Management
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Manage user accounts and administrative privileges
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-secondary">{data?.users?.length || 0}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="ag-theme-material" 
            style={{
              height: '650px',
              width: '100%',
              '--ag-header-height': '56px',
              '--ag-header-foreground-color': '#580B57',
              '--ag-header-background-color': '#ffffff',
              '--ag-header-cell-hover-background-color': '#f8f9fa',
              '--ag-row-hover-color': '#f8f9fa',
              '--ag-selected-row-background-color': '#f3e5f5',
              '--ag-odd-row-background-color': '#ffffff',
              '--ag-font-size': '14px',
              '--ag-font-family': 'Urbanist, sans-serif'
            }}
          >
            <AgGridReact
              columnDefs={columnDefs}
              rowData={data?.users}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={10}
              animateRows={true}
              domLayout="autoHeight"
              rowHeight={64}
              headerHeight={56}
              className="font-custom"
            />
          </div>
        </div>
      </div>

      <HomeEnrollmentDeleteModal
        handleClose={handleClose}
        deleteLoading={deleteLoading}
        handleDelete={handleDelete}
        id={id}
        open={open}
      />

      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            backdropFilter: 'blur(4px)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            maxWidth: '450px',
            width: '90%',
            padding: '0',
            borderRadius: '1rem',
            border: 'none',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
          }
        }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Update User Role</h2>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <IoMdClose size={24} />
            </button>
          </div>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            handleUpdateUser(id);
          }}>
            <FormControl fullWidth>
              <InputLabel id="role-label" 
                sx={{
                  color: '#580B57',
                  '&.Mui-focused': {
                    color: '#580B57',
                  }
                }}
              >
                Select Role
              </InputLabel>
              <Select
                labelId="role-label"
                value={isAdmin}
                label="Select Role"
                onChange={handleChange}
                sx={{
                  marginBottom: '1.5rem',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e5e7eb',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#580B57',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#580B57',
                  }
                }}
              >
                <MenuItem value="true">Administrator</MenuItem>
                <MenuItem value="false">Standard User</MenuItem>
              </Select>
            </FormControl>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={updateLoading}
                className="flex-1 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-ctcPrimaryLight disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {updateLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Updating...</span>
                  </div>
                ) : (
                  "Update Role"
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AdminUsers;