import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaNotesMedical,
  FaChild,
  FaStethoscope,
} from 'react-icons/fa';

import logo from '../../images/logo.png';

const Sidebar1 = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      to: '/orangtua/OrangTuaDashboard',
      icon: <FaTachometerAlt />,
    },
    {
      label: 'Data Medis Anak',
      to: '/orangtua/Data-Medis',
      icon: <FaNotesMedical />,
    },
    {
      label: 'Data Anak',
      to: '/orangtua/Data-Anak',
      icon: <FaChild />,
    },
    {
      label: 'Catatan Dokter',
      to: '/orangtua/Catatan-Dokter',
      icon: <FaStethoscope />,
    },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-cyan-900 to-blue-300 p-5 text-white shadow-lg z-50">
      <img 
        src={logo} 
        alt="Logo MKA" 
        className="w-42 h-auto mb-4" 
      />

      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? 'bg-white text-blue-800 font-semibold shadow'
                  : 'hover:bg-blue-300 hover:text-white'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar1;
