import { useEffect, useState } from 'react';
import {
  FaEye,
  FaCheckCircle,
  FaClipboardCheck,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';
import Sidebar from '../../../components/Sidebar';
import Navbar from '../../../components/navbar';
import ProfileDrawer from '../../../components/Profil';
import catatanDokterRaw from '../../../data/medis.json';

const CatatanDokter = () => {
  const [catatan, setCatatan] = useState([]);
  const [selectedCatatan, setSelectedCatatan] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const data = catatanDokterRaw.default || catatanDokterRaw;
    setCatatan(data);
  }, []);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const toggleSelesai = (index) => {
    const actualIndex = (currentPage - 1) * itemsPerPage + index;
    const updated = [...catatan];
    updated[actualIndex].selesai = !updated[actualIndex].selesai;
    setCatatan(updated);
  };

  const totalPages = Math.ceil(catatan.length / itemsPerPage);
  const paginatedData = catatan.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Sidebar />
      <Navbar onProfileClick={() => setShowProfile(true)} />
      {showProfile && (
        <ProfileDrawer
          onClose={() => setShowProfile(false)}
          onLogout={() => (window.location.href = '/')}
        />
      )}

      <div className="ml-64 mt-2 p-6 min-h-screen bg-gradient-to-b from-blue-300 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">📋 Catatan Dokter Bulanan</h2>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3">Tanggal</th>
                  <th className="px-4 py-3">Pemeriksa</th>
                  <th className="px-4 py-3">Catatan</th>
                  <th className="px-4 py-3">Tindak Lanjut</th>
                  <th className="px-4 py-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {paginatedData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-blue-50 transition-colors"
                  >
                    <td className="px-4 py-3">{formatDate(item.tanggal)}</td>
                    <td className="px-4 py-3">{item.pemeriksa}</td>
                    <td className="px-4 py-3">{item.catatan_dokter}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => toggleSelesai(index)}
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          item.selesai
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        <FaClipboardCheck className="text-sm" />
                        {item.selesai ? 'Selesai' : 'Belum'}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => setSelectedCatatan(item)}
                        className="text-blue-600 hover:text-blue-800 mx-1"
                        title="Lihat Detail"
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center p-4 bg-gray-100 text-sm">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded ${
                  currentPage === 1
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <FaArrowLeft /> Sebelumnya
              </button>
              <span>
                Halaman {currentPage} dari {totalPages}
              </span>
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Selanjutnya <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Modal Detail */}
          {selectedCatatan && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full relative">
                <button
                  onClick={() => setSelectedCatatan(null)}
                  className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
                >
                  ✖
                </button>
                <h3 className="text-xl font-semibold mb-4">🩺 Detail Catatan Dokter</h3>
                <p><strong>Pemeriksa:</strong> {selectedCatatan.pemeriksa}</p>
                <p><strong>Tanggal:</strong> {formatDate(selectedCatatan.tanggal)}</p>
                <hr className="my-3" />
                <p><strong>Berat:</strong> {selectedCatatan.berat} kg</p>
                <p><strong>Tinggi:</strong> {selectedCatatan.tinggi} cm</p>
                <p><strong>Lingkar Kepala:</strong> {selectedCatatan.kepala} cm</p>
                <p><strong>Suhu:</strong> {selectedCatatan.suhu} °C</p>
                <p><strong>Status:</strong> {selectedCatatan.status}</p>
                <p><strong>Ringkasan:</strong> {selectedCatatan.ringkasan}</p>
                <p><strong>Catatan Dokter:</strong></p>
                <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap">
                  {selectedCatatan.catatan_dokter || '-'}
                </pre>
                <p className="mt-2"><strong>Status Tindak Lanjut:</strong> {selectedCatatan.selesai ? 'Selesai' : 'Belum'}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CatatanDokter;