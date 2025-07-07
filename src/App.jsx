import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SekolahDashboard from './pages/sekolah/SekolahDashboard';
import OrangTuaDashboard from './pages/orangtua/orangTua/Dashboard';
import DokterDashboard from './pages/dokter/Dokter/Dashboard';
import Layout from './layout/Layout';

// Halaman tambahan
import DataAnak from './pages/dokter/Dokter/DataAnak';
import DetailAnak from './pages/dokter/Dokter/DetailAnak';
import DetailOrangTua from './pages/dokter/Dokter/DetailOrangTua';
import DataRiwayatAnak from './pages/dokter/Dokter/DataRiwayatAnak';
import Dashboard from './pages/dokter/Dokter/Dashboard';
import FormSaranDokter from './pages/dokter/Dokter/FormSaranDokter';
import InformasiDokter from './pages/dokter/Dokter/InformasiDokter'; // Menambahkan import untuk InformasiDokter
import DetailDokter from './pages/dokter/Dokter/DetailDokter'; // Menambahkan import untuk DetailDokter
import TambahAntropometri from './pages/dokter/Dokter/TambahAntropometri';
// Halaman Tambah Catatan Dokter
import TambahCatatanDokter from './pages/dokter/Dokter/TambahCatatanDokter'; // Menambahkan import untuk TambahCatatanDokter
import CatatanDokter from './pages/dokter/Dokter/CatatanDokter';

// ProtectedRoute untuk pengecekan role dan login
const ProtectedRoute = ({ allowedRole, children }) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const role = storedUser?.role;

  if (!storedUser || role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const role = user?.role;

  return (
    <Router>
      <Routes>
        {/* Root redirect ke login atau dashboard */}
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

        {/* Login Page */}
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

        {/* Dashboard Sekolah */}
        <Route
          path="/dashboard/sekolah"
          element={
            <ProtectedRoute allowedRole="sekolah">
              <Layout>
                <SekolahDashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Dashboard Orang Tua */}
        <Route
          path="/dashboard/orangtua"
          element={
            <ProtectedRoute allowedRole="orangtua">
              <Layout>
                <OrangTuaDashboard />
              </Layout>
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

        {/* Dashboard Dokter - Pengalihan ke Dashboard utama */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Data Anak (dokter) */}
        <Route
          path="/data-anak"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <DataAnak />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Detail Anak */}
        <Route
          path="/data-anak/:id"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <DetailAnak />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Detail Orang Tua */}
        <Route
          path="/detail-orang-tua/:id"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <DetailOrangTua />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Data Riwayat Anak */}
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

        {/* Data Riwayat Anak dengan ID */}
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

        {/* Route untuk Tambah Catatan Dokter */}
        <Route
          path="/catatan-dokter"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <CatatanDokter />
              </Layout>
            </ProtectedRoute>
          }
        />
         <Route
          path="/tambah-catatan-dokter"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <TambahCatatanDokter />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route 
        path="/data-antropometri/tambah" 
        element={
          <ProtectedRoute allowedRole="dokter">
            <Layout>
              <TambahAntropometri />
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
