// File: App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Impor komponen halaman umum
import LoginPage from './pages/LoginPage';
import SekolahDashboard from './pages/sekolah/SekolahDashboard';
import OrangTuaDashboard from './pages/orangtua/orangTua/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';

// --- INI SOLUSINYA: TAMBAHKAN BLOK IMPOR INI ---
// Impor Layout dan semua halaman dokter yang akan kita gunakan
import Layout from './layout/Layout'; // <-- BARIS INI YANG MEMPERBAIKI ERROR
import DokterDashboard from './pages/dokter/Dokter/DokterDashboard';
import DataAntropometri from './pages/dokter/Dokter/DataAntropometri';
import DetailAntropometri from './pages/dokter/Dokter/DetailAntropometri';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const role = storedUser?.role;

  return (
    <Router>
      <Routes>
        {/* Rute-rute dasar */}
        <Route path="/" element={storedUser ? <Navigate to={`/dashboard/${role}`} replace /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={storedUser ? <Navigate to={`/dashboard/${role}`} replace /> : <LoginPage />} />
        
        {/* Rute-rute yang tidak menggunakan Layout utama dokter */}
        <Route path="/dashboard/sekolah" element={<ProtectedRoute allowedRole="sekolah"><SekolahDashboard /></ProtectedRoute>} />
        <Route path="/dashboard/orangtua" element={<ProtectedRoute allowedRole="orangtua"><OrangTuaDashboard /></ProtectedRoute>} />

        
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
          path="/data-antropometri"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <DataAntropometri />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/data-antropometri/:id"
          element={
            <ProtectedRoute allowedRole="dokter">
              <Layout>
                <DetailAntropometri />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="/data-antropometri/:id" element={<DetailAntropometri />} />
        
        {/* Fallback jika route tidak cocok */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;