'use client';
import { useDropzone } from 'react-dropzone';

export function UploadDropzone({ onDrop }: { onDrop: (file: File) => void }) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles[0]),
    multiple: false,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'text/csv': ['.csv'],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="p-6 border-2 border-dashed border-blue-400 rounded-lg bg-blue-50 text-blue-800 text-center cursor-pointer hover:bg-blue-100 transition-colors"
    >
      <input {...getInputProps()} />
      <p className="text-lg font-medium">📁 Drag & drop a file here, or click to select</p>
    </div>
  );
}
