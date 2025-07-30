'use client';
import { useState } from 'react';

export function RuleBuilder({ onAddRule }: { onAddRule: (rule: any) => void }) {
  const [taskId, setTaskId] = useState('');
  const [type, setType] = useState('coRun');

  return (
    <div className="space-y-2">
      <input value={taskId} onChange={(e) => setTaskId(e.target.value)} placeholder="Task ID" className="border p-1" />
      <select value={type} onChange={(e) => setType(e.target.value)} className="border p-1">
        <option value="coRun">Co-Run</option>
        <option value="phaseWindow">Phase Window</option>
      </select>
      <button onClick={() => onAddRule({ type, taskId })} className="bg-blue-500 text-white px-2 py-1 rounded">
        Add Rule
      </button>
    </div>
  );
}