// app/layout.tsx or wherever your RootLayout is
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Data Alchemist',
  description: 'AI-enabled Resource Configurator',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800">
        <main className="max-w-7xl mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4 text-blue-700">Data Alchemist</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
