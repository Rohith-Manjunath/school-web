import { useMemo, useState } from 'react';
import { useDeleteUserMutation, useUsersQuery } from "../../../Redux/adminAuth";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';
import HomeEnrollmentDeleteModal from '../../components/AdminpanelComponents/AdminModals/DeleteModalCommon';
import { Spinner } from 'flowbite-react';
import { useAlert } from 'react-alert';

const StyledGridContainer = styled.div`
  .ag-theme-material {
    --ag-header-height: 70px;
    --ag-header-foreground-color: #ffffff;
    --ag-header-background-color: #4a148c;
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
  const [open, setOpen] = useState(false);
  const alert = useAlert();
  const [id, setId] = useState(null);

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
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <Spinner size="xl" color="purple" />
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
    </>
  );
};

export default AdminUsers;