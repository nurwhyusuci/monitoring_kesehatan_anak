import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DetailAntropometri() {
  const { state: data } = useLocation();
  const navigate = useNavigate();

  // Periksa jika data tidak ada
  if (!data) {
    return <p className="text-center text-red-600 mt-6">Data tidak ditemukan.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-6">
      <h1 className="text-3xl font-bold text-white drop-shadow mb-6">Detail Data Antropometri</h1>

      <div className="bg-sky-100 rounded-3xl p-6 max-w-6xl mx-auto">
        {/* Tabel Data Antropometri */}
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-[#eae9ea] text-gray-900 font-semibold">
              <th className="p-3">Nama</th>
              <th className="p-3">Kelas</th>
              <th className="p-3">Berat Badan</th>
              <th className="p-3">Lingkar Lengan</th>
              <th className="p-3">Kesehatan Gigi</th>
              <th className="p-3">Tinggi Badan</th>
              <th className="p-3">Lingkar Kepala</th>
              <th className="p-3">Kesehatan Mata</th>
              <th className="p-3">Terakhir Diperiksa</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#6a9bbd] text-white font-semibold">
              <td className="p-3">{data.nama}</td>
              <td className="p-3">{data.kelas}</td>
              <td className="p-3">{data.berat}</td>
              <td className="p-3">{data.lingkarLengan} cm</td>
              <td className="p-3">{data.gigi}</td>
              <td className="p-3">{data.tinggi} cm</td>
              <td className="p-3">{data.kepala} cm</td>
              <td className="p-3">{data.mata}</td>
              <td className="p-3">{data.tanggal}</td>
            </tr>
          </tbody>
        </table>

        {/* Tombol untuk kembali ke halaman sebelumnya */}
        <div className="mt-6 text-right">
          <button
            onClick={() => navigate(-1)} // Navigasi kembali ke halaman sebelumnya
            className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-full"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
