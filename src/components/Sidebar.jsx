import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Ganti sesuai nama file

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Data Anak', path: '/data-anak' },
    { label: 'Data Riwayat Kesehatan Anak', path: '/data-riwayat-anak' },
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
            className="rounded px-3 py-2"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block w-full px-3 py-2 rounded ${
                  isActive
                    ? 'bg-blue-700 text-white font-semibold'
                    : 'hover:bg-blue-600 text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
