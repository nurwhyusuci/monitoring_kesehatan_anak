// File: src/layout/Layout.jsx

import React, { useState } from 'react';
// --- PERBAIKAN DI SINI ---
// Nama file diimpor dengan huruf kecil 's' agar sesuai dengan nama file di disk.
import Sidebar from '../components/sidebar'; 
import doctorImage from '../assets/images/doctor.png'; // Pastikan path & nama file ini benar
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Sebaiknya hapus juga item 'user' yang kita gunakan di App.jsx
    localStorage.removeItem('user'); 
    localStorage.removeItem('isLoggedIn'); // Tetap hapus ini jika masih digunakan
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-b from-sky-400 to-white p-6">
        {/* Header Admin */}
        <div className="flex justify-end mb-6">
          <div className="relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src={doctorImage} alt="Admin" className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-semibold text-white">admin</p>
                <p className="text-sm text-gray-200">fauzan@kesehatan.id</p>
              </div>
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded shadow z-10">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Halaman konten */}
        {children}
      </main>
    </div>
  );
};

export default Layout;