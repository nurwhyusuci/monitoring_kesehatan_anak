// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DataAnak from './pages/DataAnak';
import DetailAnak from './pages/DetailAnak';
import DetailOrangTua from './pages/DetailOrangTua';
import DataRiwayatAnak from './pages/DataRiwayatAnak';
import FormSaranDokter from './pages/FormSaranDokter';
import DetailSaranDokter from './pages/DetailSaranDokter';
import InformasiDokter from './pages/InformasiDokter';
import DetailDokter from './pages/DetailDokter';
import DataAntropometri from './pages/DataAntropometri';
import DetailAntropometri from './pages/DetailAntropometri';
import RiwayatKesehatan from './pages/RiwayatKesehatan';
import CatatanDokter from './pages/CatatanDokter';
import TambahCatatanDokter from './pages/TambahCatatanDokter';
import Program from './pages/Program';
import ProgramDetail from './pages/ProgramDetail';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Semua halaman dibungkus oleh <Layout> */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/data-anak" element={<Layout><DataAnak /></Layout>} />
        <Route path="/data-anak/:id" element={<Layout><DetailAnak /></Layout>} />
        <Route path="/detail-orang-tua/:id" element={<Layout><DetailOrangTua /></Layout>} />
        <Route path="/data-riwayat-anak" element={<Layout><DataRiwayatAnak /></Layout>} />
        <Route path="/riwayat-kesehatan" element={<Layout><RiwayatKesehatan /></Layout>} />
        <Route path="/saran-dokter" element={<Layout><FormSaranDokter /></Layout>} />
        <Route path="/detail-saran-dokter" element={<Layout><DetailSaranDokter /></Layout>} />
        <Route path="/informasi-dokter" element={<Layout><InformasiDokter /></Layout>} />
        <Route path="/informasi-dokter/:id" element={<Layout><DetailDokter /></Layout>} />
        <Route path="/data-antropometri" element={<Layout><DataAntropometri /></Layout>} />
        <Route path="/detail-antropometri" element={<Layout><DetailAntropometri /></Layout>} />
        <Route path="/catatan-dokter" element={<Layout><CatatanDokter /></Layout>} />
        <Route path="/catatan-dokter/tambah" element={<Layout><TambahCatatanDokter /></Layout>} />

        {/* Rute baru untuk Program */}
        <Route
          path="/program"
          element={
            <ProtectedRoute allowedRoles={['admin', 'dokter']}>
              <Layout><Program /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/program/:id"
          element={
            <ProtectedRoute allowedRoles={['admin', 'dokter']}>
              <Layout><ProgramDetail /></Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;