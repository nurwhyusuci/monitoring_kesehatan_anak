// src/pages/DataAnak.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataDummy from '../dataAnak';

const DataAnak = () => {
  const [dataAnak, setDataAnak] = useState(dataDummy);
  const navigate = useNavigate();

  const handleDetail = (anak) => {
    navigate(`/data-anak/${anak.id}`, { state: anak });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-white font-sans p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Data Anak</h1>
        <div className="flex items-center gap-2">
          <img src="/assets/doctor.png" alt="Admin" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-semibold text-white">admin</p>
            <p className="text-sm text-gray-200">admin@bytelogic.id</p>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-md p-4 max-w-6xl mx-auto">
        <table className="w-full table-auto text-left rounded overflow-hidden">
          <thead>
            <tr className="bg-pink-200 text-gray-800">
              <th className="px-6 py-3 font-semibold">Nama Anak</th>
              <th className="px-6 py-3 font-semibold">Kelas</th>
              <th className="px-6 py-3 font-semibold">Jenis Kelamin</th>
              <th className="px-6 py-3 font-semibold text-center">Infomasi anak dan orang tua</th>
            </tr>
          </thead>
          <tbody>
            {dataAnak.map((anak, index) => (
              <tr
                key={anak.id}
                className={`${
                  index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-300'
                } text-white hover:bg-blue-400 transition-all duration-200`}
              >
                <td className="px-6 py-3 font-bold">{anak.nama}</td>
                <td className="px-6 py-3 text-center font-semibold">{anak.kelas}</td>
                <td className="px-6 py-3 font-semibold">{anak.jenisKelamin}</td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => handleDetail(anak)}
                    className="bg-blue-200 hover:bg-blue-300 text-black font-semibold py-1 px-4 rounded shadow"
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
};

export default DataAnak;
