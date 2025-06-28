import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../pages/orangTua/Dashboard';

console.log('Dashboard:', Dashboard);



const OrangTuaRoutes = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
         
        </Routes>
      </div>
    </div>
  );
};

export default OrangTuaRoutes;
