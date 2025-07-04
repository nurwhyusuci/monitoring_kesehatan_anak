import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SekolahDashboard from './pages/sekolah/SekolahDashboard';
import OrangTuaDashboard from './pages/orangtua/OrangTuaDashboard';
import DokterDashboard from './pages/dokter/DokterDashboard';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  // Pastikan localStorage hanya dipakai di browser
  let user = null;
  let role = null;

  if (typeof window !== 'undefined') {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        user = JSON.parse(storedUser);
        role = user?.role;
      }
    } catch (error) {
      console.error('Gagal membaca localStorage:', error);
      localStorage.removeItem('user');
    }
  }

  return (
    <Router>
      <Routes>
        {/* Root ("/") diarahkan ke login atau dashboard */}
        <Route
          path="/"
          element={
            user ? (
              <Navigate to={`/dashboard/${role}`} replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Halaman login */}
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to={`/dashboard/${role}`} replace />
            ) : (
              <LoginPage />
            )
          }
        />

        {/* Dashboard sekolah */}
        <Route
          path="/dashboard/sekolah"
          element={
            <ProtectedRoute allowedRole="sekolah">
              <SekolahDashboard />
            </ProtectedRoute>
          }
        />

        {/* Dashboard orang tua */}
        <Route
          path="/dashboard/orangtua"
          element={
            <ProtectedRoute allowedRole="orangtua">
              <OrangTuaDashboard />
            </ProtectedRoute>
          }
        />

        {/* Dashboard dokter */}
        <Route
          path="/dashboard/dokter"
          element={
            <ProtectedRoute allowedRole="dokter">
              <DokterDashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback jika route tidak cocok */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
