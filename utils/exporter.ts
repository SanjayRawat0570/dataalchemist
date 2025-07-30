import { saveAs } from 'file-saver';

export function exportJSON(filename: string, data: any) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  saveAs(blob, filename);
}

export function exportCSV(filename: string, rows: any[]) {
  const header = Object.keys(rows[0]);
  const csv = [header.join(',')]
    .concat(rows.map((row) => header.map((field) => row[field]).join(',')))
    .join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  saveAs(blob, filename);
}