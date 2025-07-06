import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaNotesMedical,
  FaChild,
  FaStethoscope,
} from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      to: '/dashboard/orangtua',
      icon: <FaTachometerAlt />,
    },
    {
      label: 'Data Medis Anak',
      to: '/dashboard/orangtua/data-medis',
      icon: <FaNotesMedical />,
    },
    {
      label: 'Data Anak',
      to: '/dashboard/orangtua/data-anak',
      icon: <FaChild />,
    },
    {
      label: 'Catatan Dokter',
      to: '/dashboard/orangtua/catatan-dokter',
      icon: <FaStethoscope />,
    },
  ];

  return (
    <div className="w-64 min-h-screen sticky top-0 bg-gradient-to-b from-blue-500 to-blue-300 p-6 text-white">
      <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
        🧑‍⚕️ MKA
      </h1>

      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-white/20 text-white font-semibold' // ✅ transparan, tidak putih solid
                  : 'hover:bg-white/10'
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

export default Sidebar;
