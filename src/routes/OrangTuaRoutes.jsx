import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../pages/orangTua/Dashboard';
import DataMedisAnak from '../pages/orangTua/DataMedisAnak';
import DataAnak from '../pages/orangTua/DataAnak';
import CatatanDokter from '../pages/orangTua/CatatanDokter';

console.log('Dashboard:', Dashboard);
console.log('DataMedisAnak:', DataMedisAnak);
console.log('DataAnak:', DataAnak);
console.log('CatatanDokter:', CatatanDokter);


const OrangTuaRoutes = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="data-medis" element={<DataMedisAnak />} />
          <Route path="data-anak" element={<DataAnak />} />
          <Route path="catatan-dokter" element={<CatatanDokter />} />
        </Routes>
      </div>
    </div>
  );
};

export default OrangTuaRoutes;
