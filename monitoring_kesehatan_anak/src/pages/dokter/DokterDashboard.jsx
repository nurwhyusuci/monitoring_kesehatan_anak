import React from 'react';
import { useNavigate } from 'react-router-dom';

const DokterDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Dokter</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </main>
  );
};

export default DokterDashboard;
