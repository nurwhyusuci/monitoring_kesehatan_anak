import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import dataMedis from '../../data/medis.json';

const Dashboard = () => {
  const [latest, setLatest] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataMedis.length > 0) {
      setLatest(dataMedis[dataMedis.length - 1]);
    }
  }, []);

  const handleLogout = () => {
    // Misal mau hapus localStorage juga bisa di sini
    // localStorage.clear();
  
    navigate('/'); // 👈 arahkan ke halaman login yang benar ("/")
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 p-4 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Welcome</h2>

        {/* Tombol Profil */}
        <button
          className="flex items-center gap-2 text-white font-medium"
          onClick={() => setShowProfile(true)}
        >
          <FaUserCircle className="text-3xl" />
          Ahmad Yusran
        </button>
      </div>

      {/* Panel Profil */}
      {showProfile && (
        <div className="absolute top-0 right-0 h-full w-72 bg-gradient-to-b from-blue-200 to-blue-100 shadow-lg z-50 p-4 border border-blue-500 rounded-l-xl">
          {/* Tombol Close */}
          <div className="flex justify-end mb-4">
            <button onClick={() => setShowProfile(false)} className="text-gray-700 text-xl">
              <IoClose />
            </button>
          </div>

          {/* Konten Profil */}
          <div className="flex flex-col items-center text-center">
            <FaUserCircle className="text-6xl text-gray-600 mb-2" />
            <h3 className="font-bold text-lg mb-4">Ahmad Yusran</h3>
            <div className="text-left text-sm space-y-2">
              <p>⚫ <b>Anak</b> : Aisyah</p>
              <p>⚫ <b>Kontak</b> : 0812-1234-5678</p>
              <p>⚫ <b>Alamat</b> : <br />Jl. Merpati No. 7, Sleman</p>
            </div>
          </div>

          <hr className="my-4 border-gray-400" />
          <button
            onClick={handleLogout}
            className="w-full text-left text-black font-bold hover:text-red-600 flex items-center gap-2"
          >
            ⚫ Logout
          </button>
        </div>
      )}

      {/* Konten Utama */}
      <div className="max-w-full mx-auto">
        {/* Status Kesehatan */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-blue-100 p-6 rounded-xl shadow-md mb-6 gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold">🧒 Aisyah</h3>
            <p className="text-sm">📅 Usia 8 Tahun</p>
            <p className="text-sm">Terakhir diperbarui : 10 Juli 2026</p>
          </div>
          <div className="flex items-center gap-2 text-xl font-bold">
            <span>👍</span>
            <span>SEHAT</span>
          </div>
          <button
            onClick={() => navigate('/orangtua/detail-kesehatan')}
            className="px-4 py-2 border border-gray-600 rounded hover:bg-blue-200 transition"
          >
            Lihat Detail Kesehatan
          </button>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <p className="text-sm">Gejala Terdeteksi</p>
            <p className="text-2xl font-bold">6</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <p className="text-sm">Saran Dokter</p>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>

        {/* Riwayat Pemeriksaan */}
        <div className="bg-white rounded-xl p-4 shadow overflow-auto">
          <h4 className="text-md font-semibold mb-4 text-gray-700">Riwayat Pemeriksaan</h4>
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-400 text-white">
              <tr>
                <th className="p-3">Tanggal</th>
                <th className="p-3">Pemeriksa</th>
                <th className="p-3">Status</th>
                <th className="p-3">Ringkasan</th>
              </tr>
            </thead>
            <tbody>
              {dataMedis.map((item, index) => (
                <tr key={index} className="even:bg-blue-100">
                  <td className="p-3 border-b border-blue-200">{item.tanggal}</td>
                  <td className="p-3 border-b border-blue-200">{item.pemeriksa}</td>
                  <td className="p-3 border-b border-blue-200">{item.status}</td>
                  <td className="p-3 border-b border-blue-200">{item.ringkasan}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-right">
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded">
              Lihat Semua Riwayat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
