import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaNotesMedical, FaChild, FaStethoscope } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      to: '/orangtua/dashboard',
      icon: <FaTachometerAlt />,
    },
    {
      label: 'Data Medis Anak',
      to: '/orangtua/data-medis',
      icon: <FaNotesMedical />,
    },
    {
      label: 'Data Anak',
      to: '/orangtua/data-anak',
      icon: <FaChild />,
    },
    {
      label: 'Catatan Dokter',
      to: '/orangtua/catatan-dokter',
      icon: <FaStethoscope />,
    },
  ];

  return (
    <div className="w-64 min-h-screen sticky top-0 bg-gradient-to-b from-blue-400 to-blue-200 p-5 text-white">
      <h1 className="text-2xl font-bold mb-8">🧑‍⚕️ MKA</h1>

      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? 'bg-white text-blue-600 font-semibold shadow'
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

export default Sidebar;
