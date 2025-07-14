// src/pages/orangTua/Profile.jsx
import { FaUserCircle } from 'react-icons/fa';

const Profile = ({ onLogout }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 mt-4">
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

      <button
        onClick={onLogout}
        className="mt-6 w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
