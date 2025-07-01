// src/pages/RiwayatKesehatan.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const riwayatData = [
  { nama: 'Aldy Putra', tanggal: '10/09/2023', gejala: 'Demam' },
  { nama: 'Budi Santosa', tanggal: '12/09/2023', gejala: 'Sakit Kepala' },
  // ... data lainnya
];

const RiwayatKesehatan = () => {
  const navigate = useNavigate();

  const handleSaran = (data) => {
    navigate('/saran-dokter', { state: data });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-8">
      <h1 className="text-3xl font-bold text-white mb-6">DATA RIWAYAT KESEHATAN ANAK</h1>

      <div className="bg-blue-100 rounded-xl shadow-md p-4 max-w-6xl mx-auto">
        <table className="w-full text-left">
          <thead className="bg-pink-200">
            <tr>
              <th className="p-3">Nama Anak</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Gejala</th>
              <th className="p-3">Dokter</th>
            </tr>
          </thead>
          <tbody>
            {riwayatData.map((data, i) => (
              <tr key={i} className="bg-blue-300 border-b text-white">
                <td className="p-3">{data.nama}</td>
                <td className="p-3">{data.tanggal}</td>
                <td className="p-3">{data.gejala}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleSaran(data)}
                    className="bg-blue-200 text-black px-4 py-1 rounded"
                  >
                    Saran
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiwayatKesehatan;
