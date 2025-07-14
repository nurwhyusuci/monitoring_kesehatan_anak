import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRole }) => {
  const userData = localStorage.getItem('user');

  // ⛔ Belum login sama sekali
  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(userData);
  const role = user?.role;

  // ⛔ Sudah login tapi bukan role yang diizinkan
  if (role !== allowedRole) {
    switch (role) {
      case 'sekolah':
        return <Navigate to="/dashboard/sekolah" replace />;
      case 'orangtua':
        return <Navigate to="/dashboard/orangtua" replace />;
      case 'dokter':
        return <Navigate to="/dashboard/dokter" replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  // ✅ Role cocok, lanjutkan
  return children;
};

export default ProtectedRoute;
