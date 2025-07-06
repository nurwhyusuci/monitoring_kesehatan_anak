import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaPlus } from 'react-icons/fa';

const dummyData = [
  { id: 1, nama: 'Aldy Putra', tanggal: '10/09/2023', orangTua: 'Bambang', keluhan: 'Tipes' },
  { id: 2, nama: 'Budi Santoso', tanggal: '12/09/2023', orangTua: 'Mulyono', keluhan: 'Demam' },
  { id: 3, nama: 'Citra Dewi', tanggal: '15/09/2023', orangTua: 'Yanti', keluhan: 'sakit gigi' },
  { id: 4, nama: 'Dewi Lestari', tanggal: '20/09/2023', orangTua: 'Siti', keluhan: 'Flu' },
  { id: 5, nama: 'Eka Saputra', tanggal: '22/09/2023', orangTua: 'Akbar', keluhan: 'Batuk' },
  { id: 6, nama: 'Eka Pratama', tanggal: '22/09/2023', orangTua: 'Faiz', keluhan: 'Pusing' },
];

const DataAntropometri = () => {
  const [data] = useState(dummyData);

  return (
    <div className="p-6 bg-gradient-to-b from-[#a6d8ef] to-[#c0deed] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Data Antropometri</h2>
        <Link
          to="/data-antropometri/tambah"
          className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          <FaPlus />
          Tambah Data
        </Link>
      </div>

      {/* Tabel Container */}
      <div className="bg-sky-100 p-6 rounded-xl border border-blue-300 shadow-md">
        {/* Header Table */}
       <div className="grid grid-cols-5 bg-pink-100 text-gray-800 font-semibold rounded-t-lg overflow-hidden">

          <div className="p-3">Nama Anak</div>
          <div className="p-3">Tanggal</div>
          <div className="p-3">Orang Tua</div>
          <div className="p-3">Keluhan Anak</div>
          <div className="p-3 text-center">Aksi</div>
        </div>

        {/* Body */}
        <div className="space-y-3 mt-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 bg-sky-300/80 rounded-lg items-center text-white px-4 py-3 hover:shadow-lg transition"
            >
              <div>{item.nama}</div>
              <div>{item.tanggal}</div>
              <div>{item.orangTua}</div>
              <div>{item.keluhan}</div>
              <div className="flex justify-center">
                <Link
                  to={`/data-antropometri/${item.id}`}
                  className="bg-white/30 hover:bg-white/50 text-gray-800 p-2 rounded-full transition"
                  title="Lihat Detail"
                >
                  <FaEye />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataAntropometri;
