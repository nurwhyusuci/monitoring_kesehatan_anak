import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SekolahDashboard from './pages/sekolah/SekolahDashboard';
import OrangTuaDashboard from './pages/orangtua/orangTua/Dashboard';
import DokterDashboard from './pages/dokter/Dokter/DokterDashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import Layout from './layout/Layout';
import DataRiwayatAnak from './pages/dokter/Dokter/DataRiwayatAnak';
import FormSaranDokter from './pages/dokter/Dokter/FormSaranDokter';
import InformasiDokter from './pages/dokter/Dokter/InformasiDokter'; // Menambahkan import untuk InformasiDokter
import DetailDokter from './pages/dokter/Dokter/DetailDokter'; // Menambahkan import untuk DetailDokter

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
              <Layout>
                <DokterDashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/data-riwayat-anak"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <DataRiwayatAnak />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/data-riwayat-anak/:id"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <DataRiwayatAnak />
              </Layout>
            </ProtectedRoute>
          }
        />

         {/* Form Saran Dokter */}
        <Route
          path="/saran-dokter"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <FormSaranDokter />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Route untuk Informasi Dokter */}
        <Route
          path="/informasi-dokter"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <InformasiDokter />
              </Layout>
            </ProtectedRoute>
          }
        />
        {/* Route untuk Detail Dokter */}
        <Route
          path="/informasi-dokter/:id"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <DetailDokter />
              </Layout>
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
