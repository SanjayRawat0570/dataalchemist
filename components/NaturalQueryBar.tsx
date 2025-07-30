'use client';
import { useState } from 'react';

export function NaturalQueryBar({ onQuery }: { onQuery: (query: string) => void }) {
  const [query, setQuery] = useState('');
  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 flex-grow"
        placeholder="Ask: Show tasks with duration > 2 and phase 2"
      />
      <button onClick={() => onQuery(query)} className="bg-green-500 text-white px-3 py-1 rounded">
        Go
      </button>
    </div>
  );
}
