import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SekolahDashboard from './pages/sekolah/SekolahDashboard';
import OrangTuaRoutes from './routes/OrangTuaRoutes';
import DokterDashboard from './pages/dokter/Dokter/DokterDashboard';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Reset user saat app pertama kali dijalankan (opsional, bisa dihapus kalau tidak perlu logout otomatis)
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const role = storedUser?.role;

  // Menentukan redirect berdasarkan role
  const getDashboardRedirect = () => {
    if (!role) return '/login';

    if (role === 'orangtua') return '/dashboard/orangtua/dashboard';
    if (role === 'sekolah') return '/dashboard/sekolah';
    if (role === 'dokter') return '/dashboard/dokter';

    return '/login';
  };

  return (
    <Router>
      <Routes>
        {/* Redirect root "/" */}
        <Route
          path="/"
          element={
            storedUser ? (
              <Navigate to={getDashboardRedirect()} replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={
            storedUser ? (
              <Navigate to={getDashboardRedirect()} replace />
            ) : (
              <LoginPage />
            )
          }
        />

        {/* Dashboard Sekolah */}
        <Route
          path="/dashboard/sekolah"
          element={
            <ProtectedRoute allowedRole="sekolah">
              <SekolahDashboard />
            </ProtectedRoute>
          }
        />

        {/* Dashboard Orang Tua (pakai wildcard) */}
        <Route
          path="/dashboard/orangtua/*"
          element={
            <ProtectedRoute allowedRole="orangtua">
              <OrangTuaRoutes />
            </ProtectedRoute>
          }
        />

        {/* Dashboard Dokter */}
        <Route
          path="/dashboard/dokter"
          element={
            <ProtectedRoute allowedRole="dokter">
              <DokterDashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
