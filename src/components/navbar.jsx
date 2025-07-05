import { FaUserCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Navbar = ({ onProfileClick }) => {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname.includes('/dashboard')) return 'Dashboard';
    if (location.pathname.includes('/data-medis')) return 'Data Medis Anak';
    if (location.pathname.includes('/data-anak')) return 'Data Anak';
    if (location.pathname.includes('/catatan-dokter')) return 'Catatan Dokter';
    if (location.pathname.includes('/profil')) return 'profil';
    return 'Detail Kesehatan';
  };

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-blue-500 text-white flex justify-between items-center px-6 shadow z-40">
      <h2 className="text-xl font-bold">{getPageTitle()}</h2>
      <button
        onClick={onProfileClick}
        className="flex items-center gap-2 hover:opacity-80"
      >
        <FaUserCircle className="text-2xl" />
        Ahmad Yusran
      </button>
    </header>
  );
};

export default Navbar;
