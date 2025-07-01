import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Data Medis Anak', path: '/data-medis-anak' },
    { label: 'Data Anak', path: '/data-anak' },
    { label: 'Data Riwayat Kesehatan', path: '/riwayat-kesehatan' },
    { label: 'Informasi Dokter', path: '/informasi-dokter' },
    { label: 'Data Antropometri', path: '/data-antropometri' },
    { label: 'Catatan Dokter', path: '/catatan-dokter' },
  ];

  return (
    <div className="w-64 bg-blue-500 text-white rounded-lg p-4 min-h-screen">
      <div className="text-center text-2xl font-bold mb-6">MENU</div>
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`rounded px-3 py-2 ${
              location.pathname === item.path ? 'bg-blue-700' : 'hover:bg-blue-600'
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
