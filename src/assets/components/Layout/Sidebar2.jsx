import React from 'react';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaChild,
  FaHistory,
  FaUserMd,
  FaRulerCombined,
  FaNotesMedical,
} from 'react-icons/fa';

const Sidebar2 = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      to: '/dashboard/DokterDashboard',
      icon: <FaTachometerAlt />,
    },
    {
      label: 'Data Anak',
      to: '/dashboard/DataAnak',
      icon: <FaChild />,
    },
    {
      label: 'Riwayat Kesehatan Anak',
      to: '/dashboard/RiwayatKesehatan',
      icon: <FaHistory />,
    },
    {
      label: 'Informasi Dokter',
      to: '/dashboard/InformasiDokter',
      icon: <FaUserMd />,
    },
    {
      label: 'Data Antropometri',
      to: '/dashboard/DataAntropometri',
      icon: <FaRulerCombined />,
    },
    {
      label: 'Catatan Dokter',
      to: '/dashboard/CatatanKesehatan',
      icon: <FaNotesMedical />,
    },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-cyan-900 to-blue-300 p-5 text-white shadow-lg z-50">
      <div className="flex justify-center mb-6">
        <img
          src={logo}
          alt="Logo"
          className="w-40 h-auto object-contain"
        />
      </div>

      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? 'bg-white text-blue-700 font-semibold shadow'
                  : 'hover:bg-blue-400 hover:text-white'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar2;
