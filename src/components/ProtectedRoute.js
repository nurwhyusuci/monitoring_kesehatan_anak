// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  // Periksa apakah pengguna sudah login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Periksa apakah peran pengguna termasuk dalam allowedRoles
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <div className="p-6 text-red-500">Akses Ditolak</div>;
  }

  // Jika lolos semua pengecekan, render children
  return children;
};

export default ProtectedRoute;