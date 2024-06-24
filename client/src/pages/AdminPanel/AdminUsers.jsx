import { useMemo, useState } from 'react';
import { useDeleteUserMutation, useUdpateUserRoleMutation, useUsersQuery } from "../../../Redux/adminAuth";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';
import HomeEnrollmentDeleteModal from '../../components/AdminpanelComponents/AdminModals/DeleteModalCommon';
import { Spinner } from 'flowbite-react';
import { useAlert } from 'react-alert';
import Modal from 'react-modal'
import { IoMdClose } from 'react-icons/io';
import { Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';


const StyledGridContainer = styled.div`
  .ag-theme-material {
    --ag-header-height: 70px;
    --ag-header-foreground-color: #ffffff;
    --ag-header-background-color: #580B57;
    --ag-row-hover-color: #f3e5f5;
    --ag-selected-row-background-color: #e1bee7;
    --ag-odd-row-background-color: #fafafa;
    --ag-even-row-background-color: #ffffff;
    --ag-font-size: 16px;
    --ag-font-family: 'Montserrat', sans-serif;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .ag-header-cell {
    padding: 0 16px;
    transition: color 0.3s ease;
  }

  .ag-header-cell:hover .ag-header-cell-text {
    color: #580B57;
  }

  .ag-header-cell-label {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    transition: color 0.3s ease;
  }

  .ag-cell {
    display: flex;
    align-items: center;
    padding: 16px;
    transition: all 0.3s ease;
    border-bottom: 1px solid #e0e0e0;
  }

  .ag-row {
    transition: all 0.3s ease;
  }

  .ag-row-hover {
    background-color: #f3e5f5;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .action-button {
    background: none;
    border: none;
    cursor: pointer;
    margin: 0 5px;
    transition: all 0.3s ease;
    padding: 8px;
    border-radius: 50%;

    &:hover {
      transform: scale(1.15);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }

  .edit-button {
    color: #4a148c;
    background-color: #e1bee7;
  }

  .delete-button {
    color: #d32f2f;
    background-color: #ffcdd2;
  }

  .ag-paging-panel {
    font-weight: 600;
    color: #4a148c;
    background-color: #f3e5f5;
    border-top: 2px solid #4a148c;
  }

  @media (max-width: 768px) {
    .ag-theme-material {
      --ag-header-height: 60px;
      --ag-cell-horizontal-padding: 12px;
      --ag-font-size: 14px;
    }
  }
`;

const AdminUsers = () => {
  const { data, isLoading } = useUsersQuery();

  const [deleteUser, { isLoading: deleteLoading }] = useDeleteUserMutation();
  const [updateUser, { isLoading: updateLoading }] = useUdpateUserRoleMutation();
  const [open, setOpen] = useState(false);
  const alert = useAlert();
  const [id, setId] = useState(null);
  const [isEditModalOpen,setIsEditModalOpen]=useState(false)
  const [isAdmin, setIsAdmin] = useState('');

  const handleChange = (event) => {
    setIsAdmin(event.target.value);
  };

  const handleOpenUpdateModal=(id)=>{

    setId(id)
    setIsEditModalOpen(true)

  }

  const handleDelete = async (id) => {
    try {
      const data = await deleteUser(id).unwrap();
      alert.success(data?.message);
      setOpen(false);
      return;
    } catch (e) {
      alert.error(e?.data?.err);
      return;
    }
  };

  const handleUpdateUser = async (id) => {
    try {
      const data = await updateUser({isAdmin,userId:id}).unwrap();
      alert.success(data?.message);
      setIsEditModalOpen(false);
      return;
    } catch (e) {
      alert.error(e?.data?.err);
      return;
    }
  };

  const columnDefs = useMemo(() => [
    { 
      field: 'name', 
      headerName: 'Name', 
      flex: 1,
      cellStyle: { textTransform: 'capitalize' },
      cellRenderer: (params) => (
        <div style={{ fontWeight: '600', color: '#4a148c' }}>{params.value}</div>
      )
    },
    { 
      field: 'email', 
      headerName: 'Email', 
      flex: 1.5,
      cellStyle:{fontWeight:"bold"},
      cellRenderer: (params) => (
        <div style={{ color: '#555', fontStyle: 'italic' }}>{params.value}</div>
      )
    },
    { 
      field: 'isAdmin', 
      headerName: 'Admin', 
      flex: 1,
      cellRenderer: (params) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {params.value ? 
            <FaCheckCircle style={{ color: '#4caf50', fontSize: '24px' }} /> : 
            <FaTimesCircle style={{ color: '#f44336', fontSize: '24px' }} />}
        </div>
      )
    },
    {
      headerName: 'Actions',
      flex: 1,
      cellRenderer: (params) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            className="action-button edit-button"
            title="Edit user"
            onClick={()=>handleOpenUpdateModal(params?.data?._id)}
          >
            <FaEdit size={20} />
          </button>
          <button 
            onClick={() => handleOpen(params?.data?._id)} 
            className="action-button delete-button"
            title="Delete user"
          >
            <FaTrash size={20} />
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
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-400">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <>
      <StyledGridContainer>
        <div className="ag-theme-material" style={{ height: '650px', width: '100%', margin: '20px 0' }}>
          <h2 className='font-semibold tracking-wide text-3xl text-center my-4 text-textSecondary uppercase'>Users</h2>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={data?.users}
            defaultColDef={defaultColDef}
            pagination={true}
            paginationPageSize={10}
            animateRows={true}
            domLayout="autoHeight"
            rowHeight={70}
            headerHeight={70}
            rowClass={'custom-row'}
          />
        </div>
      </StyledGridContainer>
      <HomeEnrollmentDeleteModal 
        handleClose={handleClose} 
        deleteLoading={deleteLoading} 
        handleDelete={handleDelete} 
        id={id} 
        open={open}
      />



<Modal
  isOpen={isEditModalOpen}
  shouldCloseOnOverlayClick={true}
  className=""
  style={{
    overlay: {
      zIndex: 98,
      backgroundColor: `rgba(0, 0, 0, 0.5)`,
    },
    content: {
      width: '90%', // Adjust the width for small screens
      maxWidth: '600px',
      height: '50vh', // Set height to auto for responsiveness
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      flexDirection: 'column',
      color: '#580B57',
      overflowY: 'auto', // Enable vertical scrolling
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      border: 'none',
      outline: 'none',
    },
  }}
>
    <button
    className="absolute top-5 right-5 cursor-pointer font-semibold text-3xl"
    onClick={() => setIsEditModalOpen(false)}
  >
    <IoMdClose />
  </button>
  <h2 className=" mb-5 md:mt-0 mt-[12rem] text-center font-semibold capitalize text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] tracking-wide ">
     Update User
  </h2>



  <form
      className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6 w-full"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdateUser(id);
      }}
    >
      <FormControl fullWidth className="col-span-2 ">
      <InputLabel
        sx={{
          color: '#580B57', // Set the desired color
          '&.Mui-focused': {
            color: '#580B57', // Ensure the color remains the same when focused
          },
        }}
        id="isAdmin-label"
      >
        Is Admin
      </InputLabel>
        <Select
  labelId="isAdmin-label"
  id="isAdmin"
  value={isAdmin}
  label="Is Admin"
  onChange={handleChange}
  sx={{
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#580B57',
      borderWidth: '2px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#580B57',
    },
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: '#580B57',
    },
  }}
>
  <MenuItem value="true">True</MenuItem>
  <MenuItem value="false">False</MenuItem>
</Select>
      </FormControl>

      <div className="col-span-2 text-center">
      <button
      disabled={updateLoading}
        type="submit"
        className="w-full bg-ctcPrimary text-white px-4 py-2 rounded-full font-semibold tracking-wide transition-all ease-in-out duration-800"
      >
       {updateLoading ? "Updating...":"Update"}
      </button>
    </div>
    </form>
</Modal>


    </>
  );
};

export default AdminUsers;