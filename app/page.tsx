'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { UploadDropzone } from '../components/UploadDropzone';
import { ValidationSummary } from '../components/ValidationSummary';
import { RuleBuilder } from '../components/RuleBuilder';
import { PriorityPanel } from '../components/PriorityPanel';
import { NaturalQueryBar } from '../components/NaturalQueryBar';
import { parseFile } from '../utils/parser';
import { validateAll } from '../utils/validator';

// ✅ Dynamic import to disable SSR
const DataGridView = dynamic(() => import('../components/DataGridView'), {
  ssr: false,
});



export default function HomePage() {
  const [data, setData] = useState<any>({ clients: [], workers: [], tasks: [] });
  const [errors, setErrors] = useState<string[]>([]);
  const [rules, setRules] = useState<any[]>([]);

  const handleFile = async (file: File) => {
    const parsed = await parseFile(file);
    const key = file.name.toLowerCase().includes('client')
      ? 'clients'
      : file.name.toLowerCase().includes('worker')
      ? 'workers'
      : 'tasks';
    const updated = { ...data, [key]: parsed };
    setData(updated);
    setErrors(validateAll(updated));
  };

  return (
    <div className="space-y-6">
      <UploadDropzone onDrop={handleFile} />
      {errors.length > 0 && <ValidationSummary errors={errors} />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <RuleBuilder onAddRule={(r) => setRules([...rules, r])} />
        <PriorityPanel onChange={(w) => console.log(w)} />
        <NaturalQueryBar onQuery={(q) => console.log(q)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DataGridView rowData={data.clients} columnDefs={Object.keys(data.clients[0] || {}).map(k => ({ field: k }))} />
        <DataGridView rowData={data.workers} columnDefs={Object.keys(data.workers[0] || {}).map(k => ({ field: k }))} />
        <DataGridView rowData={data.tasks} columnDefs={Object.keys(data.tasks[0] || {}).map(k => ({ field: k }))} />
      </div>
    </div>
  );
}


