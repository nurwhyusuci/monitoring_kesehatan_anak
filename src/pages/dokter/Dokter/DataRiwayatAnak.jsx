// src/pages/DataRiwayatAnak.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const dataRiwayat = [
  { id: 1, nama: 'Aldy Putra', tanggal: '10/09/2023', gejala: 'Demam' },
  { id: 2, nama: 'Budi Santoso', tanggal: '12/09/2023', gejala: 'Sakit Kepala' },
  { id: 3, nama: 'Citra Dewi', tanggal: '15/09/2023', gejala: 'Batuk' },
  { id: 4, nama: 'Dewi Lestari', tanggal: '20/09/2023', gejala: 'Demam' },
  { id: 5, nama: 'Eka Saputra', tanggal: '22/09/2023', gejala: 'Sakit Kepala' },
  { id: 6, nama: 'Eka Pratama', tanggal: '22/09/2023', gejala: 'Gapunya Uang' },
];

const DataRiwayatAnak = () => {
  const navigate = useNavigate();

  const handleSaran = (data) => {
    navigate(`/saran-dokter`, { state: data });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-6">
      <h1 className="text-3xl font-bold text-white mb-6">DATA RIWAYAT KESEHATAN ANAK</h1>
      <div className="bg-[#c1e3f5] rounded-xl p-6 w-[90%] max-w-5xl mx-auto">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-pink-200 text-gray-800">
              <th className="p-3">Nama Anak</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Gejala</th>
              <th className="p-3">Dokter</th>
            </tr>
          </thead>
          <tbody>
            {dataRiwayat.map((item) => (
              <tr key={item.id} className="bg-[#7395ae] text-white border rounded">
                <td className="p-3">{item.nama}</td>
                <td className="p-3">{item.tanggal}</td>
                <td className="p-3">{item.gejala}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleSaran(item)}
                    className="bg-[#bdd5ea] text-black font-semibold px-4 py-1 rounded"
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

export default DataRiwayatAnak;
