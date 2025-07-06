import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  FaUserMd,
  FaNotesMedical,
  FaChild,
  FaTachometerAlt,
} from 'react-icons/fa';

const OrangTuaLayout = () => {
  return (
    <div className="flex min-h-screen bg-blue-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-500 to-blue-400 text-white p-6 flex flex-col gap-6">
        <div className="text-2xl font-bold flex items-center gap-2 mb-4">
          <span role="img" aria-label="doctor">🧑‍⚕️</span> MKA
        </div>

        <nav className="flex flex-col gap-2">
          <NavLink
            to="/dashboard/orangtua"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg ${
                isActive ? 'bg-white text-blue-600 font-semibold' : 'hover:bg-white/20'
              }`
            }
          >
            <FaTachometerAlt /> Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/orangtua/data-medis-anak"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg ${
                isActive ? 'bg-white text-blue-600 font-semibold' : 'hover:bg-white/20'
              }`
            }
          >
            <FaNotesMedical /> Data Medis Anak
          </NavLink>

          <NavLink
            to="/dashboard/orangtua/data-anak"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg ${
                isActive ? 'bg-white text-blue-600 font-semibold' : 'hover:bg-white/20'
              }`
            }
          >
            <FaChild /> Data Anak
          </NavLink>

          <NavLink
            to="/dashboard/orangtua/catatan-dokter"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg ${
                isActive ? 'bg-white text-blue-600 font-semibold' : 'hover:bg-white/20'
              }`
            }
          >
            <FaUserMd /> Catatan Dokter
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default OrangTuaLayout;
