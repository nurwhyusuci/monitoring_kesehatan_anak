// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DataAnak from './pages/DataAnak';
import DetailAnak from './pages/DetailAnak';
import DetailOrangTua from './pages/DetailOrangTua';

import DataRiwayatAnak from './pages/DataRiwayatAnak';
import SaranDokter from './pages/SaranDokter';
import DetailSaranDokter from './pages/DetailSaranDokter';
import InformasiDokter from './pages/InformasiDokter';
import DetailDokter from './pages/DetailDokter';

import DataAntropometri from './pages/DataAntropometri';         
import DetailAntropometri from './pages/DetailAntropometri';   
import RiwayatKesehatan from './pages/RiwayatKesehatan';
import FormSaranDokter from './pages/FormSaranDokter';
import CatatanDokter from './pages/CatatanDokter';
import TambahCatatanDokter from './pages/TambahCatatanDokter';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data-anak" element={<DataAnak />} />
        <Route path="/data-anak/:id" element={<DetailAnak />} />
        <Route path="/detail-orang-tua/:id" element={<DetailOrangTua />} />
        <Route path="/data-riwayat-anak" element={<DataRiwayatAnak />} />
        <Route path="/riwayat-kesehatan" element={<DataRiwayatAnak />} />
        <Route path="/saran-dokter" element={<SaranDokter />} />
        <Route path="/detail-saran-dokter" element={<DetailSaranDokter />} />
        <Route path="/informasi-dokter" element={<InformasiDokter />} />
        <Route path="/informasi-dokter/:id" element={<DetailDokter />} />
        <Route path="/catatan-dokter/tambah" element={<TambahCatatanDokter />} />
        
        <Route path="/data-antropometri" element={<DataAntropometri />} />
        <Route path="/detail-antropometri" element={<DetailAntropometri />} />
        <Route path="/riwayat-kesehatan" element={<RiwayatKesehatan />} />
        <Route path="/saran-dokter" element={<FormSaranDokter />} />
        <Route path="/catatan-dokter" element={<CatatanDokter />} />
      </Routes>
    </Router>
  );
};

export default App;
