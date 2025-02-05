import React, { useMemo } from 'react';
import { useGetAllPaymentsQuery } from "../../Redux/adminAuth";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import styled from 'styled-components';
import { CheckCircle } from 'lucide-react';

const StyledGridContainer = styled.div`
  .ag-theme-material {
    --ag-header-height: 60px;
    --ag-header-foreground-color: #1f2937;
    --ag-header-background-color: #f9fafb;
    --ag-row-hover-color: #f3f4f6;
    --ag-selected-row-background-color: #eff6ff;
    --ag-odd-row-background-color: #ffffff;
    --ag-even-row-background-color: #f9fafb;
    --ag-font-size: 14px;
    --ag-font-family: 'Inter', system-ui, -apple-system, sans-serif;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .ag-header-cell {
    padding: 0 16px;
  }

  .ag-header-cell-label {
    font-weight: 600;
    color: #1f2937;
    letter-spacing: 0.025em;
  }

  .ag-cell {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #f3f4f6;
  }

  .ag-row {
    transition: all 0.2s ease;
  }

  .ag-row-hover {
    background-color: #f3f4f6;
    transform: translateY(-1px);
  }

  .ag-paging-panel {
    font-weight: 500;
    color: #4b5563;
    background-color: #f9fafb;
    border-top: 1px solid #e5e7eb;
    padding: 12px;
  }
`;

const CardContainer = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  padding: 24px;
  margin: 24px;
`;

const AdminPayments = () => {
  const { isLoading, data } = useGetAllPaymentsQuery();

  const columnDefs = useMemo(() => [
    { 
      field: 'razorpay_order_id', 
      headerName: 'Order ID', 
      flex: 1.5,
      cellRenderer: (params) => (
        <div style={{ fontWeight: '500', color: '#111827' }}>{params?.value}</div>
      )
    },
    { 
      field: 'razorpay_payment_id', 
      headerName: 'Payment ID', 
      flex: 1.5,
      cellRenderer: (params) => (
        <div style={{ color: '#4b5563', fontFamily: 'monospace' }}>{params?.value}</div>
      )
    },
    { 
      field: 'razorpay_signature', 
      headerName: 'Signature', 
      flex: 1.5,
      cellRenderer: (params) => (
        <div style={{ 
          color: '#6b7280', 
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {params?.value}
        </div>
      )
    },
    {
      field: '_id',
      headerName: 'Transaction ID',
      flex: 1.5,
      cellRenderer: (params) => (
        <div style={{ color: '#4f46e5', fontWeight: '500' }}>{params?.value}</div>
      )
    },
    {
      headerName: 'Status',
      flex: 1,
      cellRenderer: () => (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: '#ecfdf5',
          padding: '8px',
          borderRadius: '50%'
        }}>
          <CheckCircle style={{ color: '#059669', width: '20px', height: '20px' }} />
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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
      <CardContainer>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Payment Transactions
        </h2>
        <StyledGridContainer>
          <div className="ag-theme-material" style={{ height: '650px', width: '100%' }}>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={data?.data}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={10}
              animateRows={true}
              domLayout="autoHeight"
              rowHeight={60}
              headerHeight={60}
              suppressCellFocus={true}
            />
          </div>
        </StyledGridContainer>
      </CardContainer>
    </div>
  );
};

export default AdminPayments;