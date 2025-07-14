import React, { useEffect, useState } from 'react';
import Sidebar2 from '../../assets/components/Layout/Sidebar2';
import NavbarDokter from '../../assets/components/Layout/NavbarDokter';
import catatanData from '../../data/catatanDokter.json';

const RiwayatKesehatan = () => {
  const [dataRiwayat, setDataRiwayat] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Salin data agar bisa dimodifikasi
    setDataRiwayat(catatanData.map((item) => ({ ...item })));
  }, []);

  // Fungsi handle klik aksi
  const handleLihatAksi = (index) => {
    setDataRiwayat((prev) => {
      const newData = [...prev];
      newData[index].selesai = true;
      return newData;
    });

    alert(`Aksi untuk ${dataRiwayat[index].nama}:\n${dataRiwayat[index].catatan_dokter}`);
  };

  const filteredData = dataRiwayat.filter((item) => {
    const keyword = search.toLowerCase();
    return (
      item.nama?.toLowerCase().includes(keyword) ||
      item.tanggal?.toLowerCase().includes(keyword) ||
      item.pemeriksa?.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar2 />
      <div className="flex-1 lg:ml-64">
        <NavbarDokter />
        <main className="p-4 sm:p-6 mt-16">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Riwayat Pemeriksaan Anak</h1>
            <input
              type="text"
              placeholder="Cari nama, tanggal, atau pemeriksa..."
              className="w-full max-w-sm px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 overflow-x-auto">
            <table className="min-w-full text-sm text-left whitespace-nowrap">
              <thead className="bg-blue-300 text-white">
                <tr>
                  <th className="px-4 py-3">Nama Anak</th>
                  <th className="px-4 py-3">Tanggal</th>
                  <th className="px-4 py-3">Pemeriksa</th>
                  <th className="px-4 py-3">Ringkasan</th>
                  <th className="px-4 py-3">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'
                    } hover:bg-blue-300 transition-colors`}
                  >
                    <td className="px-4 py-2">{item.nama}</td>
                    <td className="px-4 py-2">{item.tanggal}</td>
                    <td className="px-4 py-2">{item.pemeriksa}</td>
                    <td className="px-4 py-2">{item.ringkasan}</td>
                    <td className="px-4 py-2">
                      {item.catatan_dokter && item.catatan_dokter.trim() !== '' ? (
                        item.selesai ? (
                          <button
                            disabled
                            className="bg-gray-400 text-white px-3 py-1 rounded-lg cursor-not-allowed"
                          >
                            Sudah Dilaksanakan
                          </button>
                        ) : (
                          <button
                            onClick={() => handleLihatAksi(index)}
                            className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                          >
                            Lihat Aksi
                          </button>
                        )
                      ) : (
                        <span className="text-gray-500 italic">Tidak ada aksi</span>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-500">
                      Data tidak ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RiwayatKesehatan;
