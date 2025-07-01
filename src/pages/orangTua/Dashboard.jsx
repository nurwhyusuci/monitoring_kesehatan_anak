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
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 p-4 md:p-6 relative">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">Welcome</h2>
        
        {/* Profile Button */}
        <button
          className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition-opacity"
          onClick={() => setShowProfile(true)}
          aria-label="Open profile"
        >
          <FaUserCircle className="text-3xl" />
          <span className="hidden sm:inline">Ahmad Yusran</span>
        </button>
      </header>

      {/* Profile Panel */}
      {showProfile && (
        <div className="absolute top-0 right-0 h-full w-72 bg-gradient-to-b from-blue-200 to-blue-100 shadow-xl z-50 p-4 border-l border-blue-300 rounded-l-xl animate-slide-in">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button 
              onClick={() => setShowProfile(false)} 
              className="text-gray-700 hover:text-gray-900 transition-colors text-xl"
              aria-label="Close profile"
            >
              <IoClose />
            </button>
          </div>

          {/* Profile Content */}
          <div className="flex flex-col items-center text-center">
            <FaUserCircle className="text-6xl text-gray-600 mb-3" />
            <h3 className="font-bold text-lg mb-4 text-gray-800">Ahmad Yusran</h3>
            <div className="text-left text-sm space-y-3 w-full px-4">
              <p className="flex items-start">
                <span className="mr-2">⚫</span>
                <span><b>Anak</b>: Aisyah</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">⚫</span>
                <span><b>Kontak</b>: 0812-1234-5678</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">⚫</span>
                <span><b>Alamat</b>: <br className="md:hidden" />Jl. Merpati No. 7, Sleman</span>
              </p>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full text-left text-gray-800 font-bold hover:text-red-600 transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <span>⚫</span>
            <span>Logout</span>
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto space-y-6">
        {/* Health Status Card */}
        <section className="flex flex-col lg:flex-row justify-between items-center bg-white bg-opacity-90 p-6 rounded-xl shadow-md gap-6">
          <div className="text-center lg:text-left space-y-1">
            <h3 className="text-xl font-bold text-gray-800">🧒 Aisyah</h3>
            <p className="text-sm text-gray-600">📅 Usia 8 Tahun</p>
            <p className="text-xs text-gray-500">Terakhir diperbarui: 10 Juli 2026</p>
          </div>
          
          <div className="flex items-center gap-3 bg-green-100 px-4 py-2 rounded-full">
            <span className="text-2xl">👍</span>
            <span className="font-bold text-green-800">SEHAT</span>
          </div>
          
          <button
            onClick={() => navigate('/orangtua/detail-kesehatan')}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-sm"
          >
            Lihat Detail Kesehatan
          </button>
        </section>

        {/* Statistics Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow text-center hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-600">Gejala Terdeteksi</p>
            <p className="text-2xl font-bold text-blue-600">6</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-600">Saran Dokter</p>
            <p className="text-2xl font-bold text-blue-600">5</p>
          </div>
          {/* Add more statistic cards if needed */}
        </section>

        {/* Medical History Section */}
        <section className="bg-white rounded-xl shadow overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800">Riwayat Pemeriksaan</h4>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="p-3 font-medium">Tanggal</th>
                  <th className="p-3 font-medium">Pemeriksa</th>
                  <th className="p-3 font-medium">Status</th>
                  <th className="p-3 font-medium">Ringkasan</th>
                </tr>
              </thead>
              <tbody>
                {dataMedis.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`hover:bg-blue-50 ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}
                  >
                    <td className="p-3 border-b border-gray-100">{item.tanggal}</td>
                    <td className="p-3 border-b border-gray-100">{item.pemeriksa}</td>
                    <td className="p-3 border-b border-gray-100">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'Sehat' ? 'bg-green-100 text-green-800' : 
                        item.status === 'Perlu Perhatian' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 border-b border-gray-100">{item.ringkasan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 flex justify-end border-t border-gray-200">
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
              onClick={() => navigate('/orangtua/riwayat-lengkap')}
            >
              Lihat Semua Riwayat
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;