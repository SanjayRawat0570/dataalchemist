'use client';
import { useState } from 'react';

export function PriorityPanel({ onChange }: { onChange: (weights: any) => void }) {
  const [priorityLevel, setPriorityLevel] = useState(5);
  return (
    <div className="space-y-2">
      <label className="block font-bold">Priority Level Weight: {priorityLevel}</label>
      <input
        type="range"
        min={1}
        max={10}
        value={priorityLevel}
        onChange={(e) => {
          const val = Number(e.target.value);
          setPriorityLevel(val);
          onChange({ priorityLevel: val });
        }}
      />
    </div>
  );
}