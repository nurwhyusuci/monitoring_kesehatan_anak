import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../pages/orangTua/Dashboard';
import DataMedisAnak from '../pages/orangTua/DataMedisAnak';
import DataAnak from '../pages/orangTua/DataAnak';

console.log('Dashboard:', Dashboard);
console.log('DataMedisAnak:', DataMedisAnak);
console.log('DataAnak:', DataAnak);


const OrangTuaRoutes = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="data-medis" element={<DataMedisAnak />} />
          <Route path="data-anak" element={<DataAnak />} />
        </Routes>
      </div>
    </div>
  );
};

export default OrangTuaRoutes;
