'use client';
import React from 'react';
import DataTable from 'react-data-table-component';

type ColumnDef = {
  field: string;
};

type DataGridViewProps = {
  rowData: Record<string, unknown>[];
  columnDefs: ColumnDef[];
};

function DataGridView({ rowData, columnDefs }: DataGridViewProps) {
  if (!rowData || rowData.length === 0) {
    return <div>No data</div>;
  }

  const columns = columnDefs.map((col: ColumnDef) => ({
    name: col.field,
    selector: (row: Record<string, unknown>) => {
      const value = row[col.field];
      // Return empty string if value is undefined or null, otherwise cast to allowed types
      return value !== undefined && value !== null ? (value as string | number | boolean) : '';
    },
    sortable: true,
  }));

  return <DataTable columns={columns} data={rowData} pagination />;
}

export default DataGridView;

