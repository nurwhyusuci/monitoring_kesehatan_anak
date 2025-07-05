import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/navbar';
import Profile from '../components/Profil'; 

import Dashboard from '../pages/orangtua/orangTua/Dashboard';
import DataMedisAnak from '../pages/orangtua/orangTua/DataMedisAnak';
import DataAnak from '../pages/orangtua/orangTua/DataAnak';
import CatatanDokter from '../pages/orangtua/orangTua/CatatanDokter';
import DetailKesehatan from '../pages/orangtua/orangTua/DetailKesehatan';

const OrangTuaRoutes = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => setShowProfile(true);
  const handleCloseProfile = () => setShowProfile(false);

  const handleLogout = () => {
    alert('Logout berhasil');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 relative">
        <Navbar onProfileClick={handleProfileClick} />

        {/* Drawer Profil */}
        {showProfile && (
          <div className="fixed top-16 right-0 h-full w-80 bg-white shadow-xl z-50 p-6 border-l border-blue-200 rounded-l-2xl animate-slide-in">
            <button
              onClick={handleCloseProfile}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              ×
            </button>
            <Profile onLogout={handleLogout} />
          </div>
        )}

        <div className="pt-16 px-4 overflow-y-auto">
          <Routes>
            {/* ✅ Redirect ke dashboard sebagai default route */}
            <Route index element={<Navigate to="dashboard" replace />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="data-medis" element={<DataMedisAnak />} />
            <Route path="data-anak" element={<DataAnak />} />
            <Route path="catatan-dokter" element={<CatatanDokter />} />
            <Route path="detail-kesehatan" element={<DetailKesehatan />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default OrangTuaRoutes;
