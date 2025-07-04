import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataMedis from '../../data/medis.json';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import ProfileDrawer from '../../components/Profil'; 

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
    <>
      <Sidebar />
      <Navbar onProfileClick={() => setShowProfile(true)}/>
      {showProfile && (
        <ProfileDrawer onClose={() => setShowProfile(false)} onLogout={handleLogout} />
      )}

      <div className="ml-64 mt-2 p-6 min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 relative">
        {/* Konten Utama */}
        <main className="space-y-6 w-full max-w-7xl mx-auto">
          {/* Header Section */}
          <section className="flex flex-col lg:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-md gap-6">
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

          {/* Statistik */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <p className="text-sm text-gray-600">Gejala Terdeteksi</p>
              <p className="text-2xl font-bold text-blue-600">6</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <p className="text-sm text-gray-600">Saran Dokter</p>
              <p className="text-2xl font-bold text-blue-600">5</p>
            </div>
          </section>

         {/* Ringkasan Riwayat Pemeriksaan */}
          <section className="bg-white rounded-xl shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h4 className="text-lg font-semibold text-gray-800">Ringkasan Riwayat Pemeriksaan</h4>
              <button
                onClick={() => navigate('/orangtua/riwayat-lengkap')}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-blue-100 text-blue-800">
                  <tr>
                    <th className="p-3 font-semibold">Tanggal</th>
                    <th className="p-3 font-semibold">Status</th>
                    <th className="p-3 font-semibold">Ringkasan</th>
                  </tr>
                </thead>
                <tbody>
                  {[...dataMedis.slice(-5)].reverse().map((item, index) => (
                    <tr
                      key={index}
                      className={`$${
                        index % 2 === 0 ? 'bg-blue-50' : 'bg-white'
                      } hover:bg-blue-100 transition`}
                    >
                      <td className="p-3 border-b border-gray-100 whitespace-nowrap">{item.tanggal}</td>
                      <td className="p-3 border-b border-gray-100">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium $${
                            item.status === 'Sehat'
                              ? 'bg-green-100 text-green-800'
                              : item.status === 'Perlu Perhatian'
                              ? 'bg-yellow-100 text-yellow-800'
                              : item.status === 'Gizi Kurang'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3 border-b border-gray-100">{item.ringkasan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Dashboard;