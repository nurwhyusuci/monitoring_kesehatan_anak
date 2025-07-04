import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/navbar';
import Profile from '../components/Profil'; 

import Dashboard from '../pages/orangTua/Dashboard';
import DataMedisAnak from '../pages/orangTua/DataMedisAnak';
import DataAnak from '../pages/orangTua/DataAnak';
import CatatanDokter from '../pages/orangTua/CatatanDokter';
import DetailKesehatan from '../pages/orangTua/DetailKesehatan';

console.log('Dashboard:', Dashboard);
console.log('DataMedisAnak:', DataMedisAnak);
console.log('DataAnak:', DataAnak);
console.log('CatatanDokter:', CatatanDokter);
console.log('DetailKesehatan:', DetailKesehatan);

const OrangTuaRoutes = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    console.log('Klik profil: drawer dibuka');
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    console.log('Drawer profil ditutup');
    setShowProfile(false);
  };

  const handleLogout = () => {
    console.log('Logout dipanggil');
    alert('Logout berhasil');
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
