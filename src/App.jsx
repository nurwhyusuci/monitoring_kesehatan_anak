import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SekolahDashboard from './pages/sekolah/SekolahDashboard';
import DokterDashboard from './pages/dokter/Dokter/DokterDashboard';

import OrangTuaDashboard from './pages/orangtua/orangTua/Dashboard';
import DetailKesehatan from './pages/orangtua/orangTua/DetailKesehatan';
import CatatanDokter from './pages/orangtua/orangTua/CatatanDokter';
import DataMedisAnak from './pages/orangtua/orangTua/DataMedisAnak';
import DataAnak from './pages/orangtua/orangTua/DataAnak';

import OrangTuaLayout from './layouts/OrangTuaLayout';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const role = storedUser?.role;

  return (
    <Router>
      <Routes>
        {/* Redirect root ke dashboard atau login */}
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

        {/* Login */}
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

        {/* Dashboard Dokter */}
        <Route
          path="/dashboard/dokter"
          element={
            <ProtectedRoute allowedRole="dokter">
              <DokterDashboard />
            </ProtectedRoute>
          }
        />

        {/* Layout & Route Orang Tua */}
        <Route
          path="/dashboard/orangtua"
          element={
            <ProtectedRoute allowedRole="orangtua">
              <OrangTuaLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<OrangTuaDashboard />} />
          <Route path="detail-kesehatan" element={<DetailKesehatan />} />
          <Route path="data-medis-anak" element={<DataMedisAnak />} />
          <Route path="data-anak" element={<DataAnak />} />
          <Route path="catatan-dokter" element={<CatatanDokter />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
