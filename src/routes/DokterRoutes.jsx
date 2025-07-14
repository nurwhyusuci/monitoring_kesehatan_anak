// src/routes/DokterRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DokterDashboard from '../pages/dokter/DokterDashboard';
import DataAnak from '../pages/dokter/DataAnak';
import RiwayatKesehatan from '../pages/dokter/RiwayatKesehatan';
import InformasiDokter from '../pages/dokter/InformasiDokter';
import DataAntropometri from '../pages/dokter/DataAntropometri';
import CatatanKesehatan from '../pages/dokter/CatatanKesehatan';

const DokterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="DokterDashboard" />} />
      <Route path="DokterDashboard" element={<DokterDashboard />} />
      <Route path="DataAnak" element={<DataAnak />} />
      <Route path="RiwayatKesehatan" element={<RiwayatKesehatan />} />
      <Route path="InformasiDokter" element={<InformasiDokter />} />
      <Route path="DataAntropometri" element={<DataAntropometri />} />
      <Route path="CatatanKesehatan" element={<CatatanKesehatan />} />
    </Routes>
  );
};

export default DokterRoutes;
