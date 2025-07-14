import { Routes, Route } from 'react-router-dom';
import OrangTuaDashboard from '../pages/orangtua/OrangTuaDashboard';
import DataAnak from '../pages/orangtua/Data-Anak';
import DataMedisAnak from '../pages/orangtua/Data-Medis-Anak';
import CatatanDokter from '../pages/orangtua/Catatan-Dokter';
import DetailKesehatan from '../pages/orangtua/Detail-Kesehatan';
import {LayoutOrtu} from '../assets/components/Layout/LayoutOrtu';

const OrangTuaRoutes = () => {
  return (
    <LayoutOrtu>
      <Routes>
        <Route path="OrangTuaDashboard" element={<OrangTuaDashboard />} />
        <Route path="data-anak" element={<DataAnak />} />
        <Route path="data-medis" element={<DataMedisAnak />} />
        <Route path="catatan-dokter" element={<CatatanDokter />} />
        <Route path="detail-kesehatan" element={<DetailKesehatan />} />
      </Routes>
    </LayoutOrtu>
  );
};

export default OrangTuaRoutes;
