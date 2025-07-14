import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

export const Navbar = ({ onProfileClick }) => {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname.includes('/dashboard')) return 'Dashboard';
    if (location.pathname.includes('/data-medis')) return 'Data Medis Anak';
    if (location.pathname.includes('/data-anak')) return 'Data Anak';
    if (location.pathname.includes('/catatan-dokter')) return 'Catatan Dokter';
    if (location.pathname.includes('/profil')) return 'Profil';
    return 'Detail Kesehatan';
  };

  return (
    <header className="bg-gradient-to-r from-cyan-800 to-blue-300 px-6 py-4 shadow-lg fixed top-0 left-64 right-0 z-40">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">{getPageTitle()}</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={onProfileClick}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <FaUserCircle className="text-blue-600 text-lg" />
          </button>
          <div className="text-right">
            <div className="text-white font-semibold text-sm">Ahmad Yusran</div>
            <div className="text-blue-100 text-xs">yusran@email.com</div>
            <div className="text-blue-200 text-xs">👤 Dokter</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
