// src/components/ProfileDrawer.jsx
import { FaUserCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const ProfileDrawer = ({ onClose, onLogout }) => {
  return (
    <div className="fixed top-16 right-0 h-full w-80 bg-white shadow-xl z-50 p-6 border-l border-blue-200 rounded-l-2xl animate-slide-in">
      <div className="flex justify-end mb-4">
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-blue-500 text-2xl"
          aria-label="Close"
        >
          <IoClose />
        </button>
      </div>

      <div className="flex flex-col items-center text-center space-y-4">
        <FaUserCircle className="text-6xl text-gray-600" />
        <h3 className="text-xl font-bold text-gray-800">Ahmad Yusran</h3>
        <p className="text-sm text-gray-500">Orang Tua dari Aisyah</p>

        <div className="text-left text-sm w-full space-y-3 mt-4 text-gray-700">
          <p><strong>Email:</strong> ahmad@example.com</p>
          <p><strong>Telepon:</strong> 0812-1234-5678</p>
          <p><strong>Alamat:</strong> Jl. Merpati No. 7, Sleman</p>
          <p><strong>Peran:</strong> Orang Tua</p>
          <p><strong>Terdaftar:</strong> 1 Januari 2025</p>
        </div>
      </div>

      <button
        onClick={onLogout}
        className="mt-6 w-full px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileDrawer;