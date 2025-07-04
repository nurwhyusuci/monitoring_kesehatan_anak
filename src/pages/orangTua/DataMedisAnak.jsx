import { useEffect, useState } from 'react';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import dataMedis from '../../data/medis.json';

const DataMedisAnak = () => {
  const [riwayat, setRiwayat] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  useEffect(() => {
    setRiwayat(dataMedis);
  }, []);

  const years = ['Semua', ...new Set(dataMedis.map(item => {
    const date = new Date(item.tanggal);
    return date.getFullYear();
  }))];

  const filteredRiwayat = riwayat.filter(item => {
    const matchesSearch =
      item.pemeriksa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ringkasan.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterYear === 'Semua') return matchesSearch;

    const itemYear = new Date(item.tanggal).getFullYear();
    return matchesSearch && itemYear.toString() === filterYear;
  });

  const totalPages = Math.ceil(filteredRiwayat.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedRiwayat = filteredRiwayat.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'sehat': return 'bg-green-100 text-green-800';
      case 'perlu perhatian': return 'bg-yellow-100 text-yellow-800';
      case 'sakit': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const resetPage = () => setCurrentPage(1);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="ml-64 mt-2 p-6 min-h-screen bg-gradient-to-b from-blue-300 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Riwayat Pemeriksaan Kesehatan</h2>

          {/* Filter Section */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow max-w-md w-full">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari pemeriksa atau ringkasan..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  resetPage();
                }}
              />
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-500" />
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={filterYear}
                onChange={(e) => {
                  setFilterYear(e.target.value);
                  resetPage();
                }}
              >
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Tanggal</th>
                    <th className="px-4 py-3 font-semibold">Pemeriksa</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">Ringkasan</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {displayedRiwayat.length > 0 ? (
                    displayedRiwayat.map((item, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition-colors border-b border-gray-200">
                        <td className="px-4 py-3 whitespace-nowrap">
                          {new Date(item.tanggal).toLocaleDateString('id-ID', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </td>
                        <td className="px-4 py-3">{item.pemeriksa}</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">{item.ringkasan}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                        Tidak ada data yang ditemukan
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filteredRiwayat.length > 0 && (
              <div className="px-4 py-3 border-t border-gray-200 flex justify-between items-center bg-gray-50">
                <div className="text-sm text-gray-600">
                  Menampilkan {startIndex + 1} - {Math.min(startIndex + itemsPerPage, filteredRiwayat.length)} dari {filteredRiwayat.length} entri
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
                  >
                    Sebelumnya
                  </button>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
                  >
                    Selanjutnya
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataMedisAnak;


