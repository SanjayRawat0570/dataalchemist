'use client';
import React from 'react';
import DataTable from 'react-data-table-component';

function DataGridView({ rowData, columnDefs }: any) {
  if (!rowData || rowData.length === 0) {
    return <div>No data</div>;
  }

  const columns = columnDefs.map((col: any) => ({
    name: col.field,
    selector: (row: any) => row[col.field],
    sortable: true,
  }));

  return <DataTable columns={columns} data={rowData} pagination />;
}

export default DataGridView;

