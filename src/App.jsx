import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SekolahDashboard from './pages/sekolah/SekolahDashboard';
import OrangTuaDashboard from './pages/orangtua/orangTua/OrangTuaDashboard';
import DokterDashboard from './pages/dokter/Dokter/DokterDashboard';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Logout otomatis setiap kali aplikasi pertama kali dimuat
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const role = storedUser?.role;

  return (
    <Router>
      <Routes>
        {/* Root redirect ke login atau dashboard */}
        <Route
          path="/"
          element={
            storedUser ? (
              <Navigate to={`/dashboard/${role}`} replace />
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
              <Navigate to={`/dashboard/${role}`} replace />
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

        {/* Dashboard Orang Tua */}
        <Route
          path="/dashboard/orangtua"
          element={
            <ProtectedRoute allowedRole="orangtua">
              <OrangTuaDashboard />
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

        {/* Fallback jika route tidak cocok */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
