import React, { useMemo } from 'react';
import { useGetAllPaymentsQuery } from "../../Redux/adminAuth";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

const StyledGridContainer = styled.div`
  .ag-theme-material {
    --ag-header-height: 70px;
    --ag-header-foreground-color: #ffffff;
    --ag-header-background-color: #4a0e4a;
    --ag-row-hover-color: #f0e6f0;
    --ag-selected-row-background-color: #e0c6e0;
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
    color: #8a2be2;
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
    background-color: #f0e6f0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .ag-paging-panel {
    font-weight: 600;
    color: #4a0e4a;
    background-color: #f0e6f0;
    border-top: 2px solid #4a0e4a;
  }

  @media (max-width: 768px) {
    .ag-theme-material {
      --ag-header-height: 60px;
      --ag-cell-horizontal-padding: 12px;
      --ag-font-size: 14px;
    }
  }
`;

const AdminPayments = () => {
  const { isLoading, data } = useGetAllPaymentsQuery();

  const columnDefs = useMemo(() => [
    { 
      field: 'razorpay_order_id', 
      headerName: 'Order ID', 
      flex: 1.5,
      cellRenderer: (params) => (
        <div style={{ fontWeight: '600', color: '#4a0e4a' }}>{params?.value}</div>
      )
    },
    { 
      field: 'razorpay_payment_id', 
      headerName: 'Payment ID', 
      flex: 1.5,
      cellRenderer: (params) => (
        <div style={{ color: '#555', fontStyle: 'italic' }}>{params?.value}</div>
      )
    },
   { 
  field: 'razorpay_signature', 
  headerName: 'Signature', 
  flex: 1.5,
  cellRenderer: (params) => (
    <div style={{ 
      color: '#777', 
      fontSize: '0.9em', 
      whiteSpace: 'nowrap', 
      overflow: 'hidden', 
      textOverflow: 'ellipsis' 
    }}>
      {params?.value}
    </div>
  )
}
,
    {
      field: '_id',
      headerName: 'Transaction ID',
      flex: 1.5,
      cellRenderer: (params) => (
        <div style={{ color: '#4a0e4a', fontWeight: '600' }}>{params?.value}</div>
      )
    },
    {
      headerName: 'Status',
      flex: 1,
      cellRenderer: () => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FaCheckCircle style={{ color: '#4caf50', fontSize: '24px' }} />
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <StyledGridContainer>
      <div className="ag-theme-material" style={{ height: '650px', width: '100%', margin: '20px 0' }}>
        <h2 className='font-semibold tracking-wide text-3xl text-center my-4 text-purple-800 uppercase'>Payment Transactions</h2>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={data?.data}
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
  );
};

export default AdminPayments;