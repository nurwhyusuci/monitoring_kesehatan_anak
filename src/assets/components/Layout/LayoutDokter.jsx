// src/assets/components/Layout/LayoutDokter.jsx
import React from 'react';
import Sidebar2 from './Sidebar2';
import NavbarDokter from './NavbarDokter';
import DokterRoutes from '../../../routes/DokterRoutes';

const LayoutDokter = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar2 />

      {/* Konten utama */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <NavbarDokter /> {/* Kalau tidak ada, boleh hapus */}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <DokterRoutes />
        </main>
      </div>
    </div>
  );
};

export default LayoutDokter;
