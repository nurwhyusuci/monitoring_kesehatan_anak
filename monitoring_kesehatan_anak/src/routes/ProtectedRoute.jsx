import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRole }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const role = user?.role;

  // Jika tidak login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Jika login tapi bukan role yang sesuai
  if (role !== allowedRole) {
    // Redirect ke dashboard sesuai role-nya
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

  // Jika role cocok, izinkan akses
  return children;
};

export default ProtectedRoute;
