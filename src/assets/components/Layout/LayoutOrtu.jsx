import React from 'react';
import Sidebar1 from './Sidebar1';
import Navbar from './navbar'; 

const LayoutOrtu = ({ children, activeItem, onItemClick }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar1 activeItem={activeItem} onItemClick={onItemClick} />

      {/* Konten utama */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar /> {/* Jika tidak punya, bisa dihapus */}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export { LayoutOrtu };
