import React from 'react';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    id: 1,
    nama: 'Aldy Putra',
    tanggal: '10/09/2023',
    orangTua: 'Bambang',
    keluhan: 'Tipes',
    kelas: 3,
    berat: '58kg',
    lingkarLengan: 14,
    gigi: 'Cukup',
    tinggi: 107,
    kepala: 48,
    mata: 'Baik'
  },
  {
    id: 2,
    nama: 'Budi Santoso',
    tanggal: '12/09/2023',
    orangTua: 'Mulyono',
    keluhan: 'Demam',
    kelas: 3,
    berat: '40kg',
    lingkarLengan: 15,
    gigi: 'Keropos',
    tinggi: 110,
    kepala: 50,
    mata: 'Baik'
  },
  {
    id: 3,
    nama: 'Citra Dewi',
    tanggal: '15/09/2023',
    orangTua: 'Yanti',
    keluhan: 'Sakit gigi',
    kelas: 4,
    berat: '45kg',
    lingkarLengan: 16,
    gigi: 'Baik',
    tinggi: 121,
    kepala: 51,
    mata: 'Baik'
  },
  {
    id: 4,
    nama: 'Dewi Lestari',
    tanggal: '20/09/2023',
    orangTua: 'Siti',
    keluhan: 'Flu',
    kelas: 4,
    berat: '41kg',
    lingkarLengan: 15,
    gigi: 'Cukup Baik',
    tinggi: 119,
    kepala: 50,
    mata: 'Rabun Jauh'
  },
  {
    id: 5,
    nama: 'Eka Saputra',
    tanggal: '22/9/2023',
    orangTua: 'Akbar',
    keluhan: 'Batuk',
    kelas: 5,
    berat: '40kg',
    lingkarLengan: 14,
    gigi: 'Baik',
    tinggi: 125,
    kepala: 51,
    mata: 'Baik'
  },
  {
    id: 6,
    nama: 'Eka Pratama',
    tanggal: '22/09/2023',
    orangTua: 'Faiz',
    keluhan: 'Pusing',
    kelas: 5,
    berat: '42kg',
    lingkarLengan: 14,
    gigi: 'Baik',
    tinggi: 124,
    kepala: 50,
    mata: 'Cukup Baik'
  },
];

export default function DataAntropometri() {
  const navigate = useNavigate();

  const handleView = (anak) => {
    navigate('/detail-antropometri', { state: anak });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-6">
      <h1 className="text-3xl font-bold text-white drop-shadow mb-6">Data Antropometri</h1>

      <div className="bg-sky-100 rounded-xl p-6 w-[95%] max-w-6xl mx-auto">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-pink-200 text-gray-800">
              <th className="p-3">Nama Anak</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Orang tua</th>
              <th className="p-3">Keluhan Anak</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-[#6a9bbd] text-white border-b border-white">
                <td className="p-3">{item.nama}</td>
                <td className="p-3">{item.tanggal}</td>
                <td className="p-3">{item.orangTua}</td>
                <td className="p-3">{item.keluhan}</td>
                <td className="p-3">
                  {/* Ganti Eye Icon dengan tombol Detail */}
                  <button
                    onClick={() => handleView(item)}
                    className="bg-sky-300 hover:bg-sky-400 text-white px-4 py-1 rounded shadow"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
