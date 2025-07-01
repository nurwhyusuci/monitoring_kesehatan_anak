// src/pages/DetailAntropometri.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DetailAntropometri() {
  const { state: data } = useLocation();
  const navigate = useNavigate();

  if (!data) {
    return <p className="text-center text-red-600 mt-6">Data tidak ditemukan.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-6">
      <h1 className="text-3xl font-bold text-white drop-shadow mb-6">Data Antopometri</h1>

      <div className="bg-sky-100 rounded-3xl p-6 max-w-6xl mx-auto">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-[#eae9ea] text-gray-900 font-semibold">
              <th className="p-3">Nama</th>
              <th>Kelas</th>
              <th>Berat Badan</th>
              <th>Lingkar Lengan</th>
              <th>Kesehatan Gigi</th>
              <th>Tinggi Badan</th>
              <th>Lingkar Kepala</th>
              <th>Kesehatan Mata</th>
              <th>Terakhir Diperiksa</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#6a9bbd] text-white font-semibold">
              <td className="p-3">{data.nama}</td>
              <td>{data.kelas}</td>
              <td>{data.berat}</td>
              <td>{data.lingkarLengan}</td>
              <td>{data.gigi}</td>
              <td>{data.tinggi}</td>
              <td>{data.kepala}</td>
              <td>{data.mata}</td>
              <td>{data.tanggal}</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6 text-right">
          <button
            onClick={() => navigate(-1)}
            className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-full"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
