import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ganti sesuai nama file

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Data Anak', path: '/data-anak' },
    { label: 'Data Riwayat Kesehatan anak', path: '/riwayat-kesehatan' },
    { label: 'Informasi Dokter', path: '/informasi-dokter' },
    { label: 'Data Antropometri', path: '/data-antropometri' },
    { label: 'Catatan Dokter', path: '/catatan-dokter' },
  ];

  return (
    <div className="w-64 bg-blue-500 text-white p-4 min-h-screen">
      {/* Logo besar */}
      <div className="flex justify-center mb-4">
        <img
          src={logo}
          alt="Logo"
          className="w-40 object-contain"
        />
      </div>

      {/* Label menu */}
      <div className="text-left text-sm font-semibold uppercase text-white px-2 mb-4">
        MENU
      </div>

      {/* Menu Items */}
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`rounded px-3 py-2 ${
              location.pathname === item.path
                ? 'bg-blue-700 text-white font-semibold'
                : 'hover:bg-blue-600'
            }`}
          >
            <Link to={item.path} className="block w-full">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
