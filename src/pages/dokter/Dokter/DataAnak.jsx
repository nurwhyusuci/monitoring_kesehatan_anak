import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import dataAnak from '../../../dataAnak'; // ✅ PERBAIKAN
import anakImage from '../../../assets/images/anak.png'; // ✅ PERBAIKAN

const DataAnak = () => {
  const [data] = useState(dataAnak);
  const navigate = useNavigate();

  const handleDetail = (anak) => {
    navigate(`/data-anak/${anak.id}`, { state: anak });
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Data Anak</h1>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md p-4 max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full text-left rounded overflow-hidden">
          <thead>
            <tr className="bg-pink-200 text-gray-800">
              <th className="px-6 py-3 font-semibold">Foto</th>
              <th className="px-6 py-3 font-semibold">Nama Anak</th>
              <th className="px-6 py-3 font-semibold">Kelas</th>
              <th className="px-6 py-3 font-semibold">Jenis Kelamin</th>
              <th className="px-6 py-3 font-semibold text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((anak, index) => (
              <tr
                key={anak.id}
                className={`${
                  index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-300'
                } text-white hover:bg-blue-400 transition-all duration-200`}
              >
                <td className="px-6 py-3">
                  <img
                    src={anakImage}
                    alt={`Foto ${anak.nama}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-3 font-bold">{anak.nama}</td>
                <td className="px-6 py-3 text-center font-semibold">{anak.kelas}</td>
                <td className="px-6 py-3 font-semibold">{anak.jenisKelamin}</td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => handleDetail(anak)}
                    className="bg-white hover:bg-gray-100 text-blue-700 font-semibold py-1 px-4 rounded shadow transition"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataAnak;
