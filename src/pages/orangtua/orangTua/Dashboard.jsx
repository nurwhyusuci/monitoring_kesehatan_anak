import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrangTuaDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Hapus data login
    navigate('/login');              // Redirect ke halaman login
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Orang Tua</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default OrangTuaDashboard;
