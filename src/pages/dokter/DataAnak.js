import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar2 from '../../assets/components/Layout/Sidebar2';
import NavbarDokter from '../../assets/components/Layout/NavbarDokter';
import dataAnakJSON from '../../data/DataAnak.json';

const DataAnak = () => {
  const [dataAnak, setDataAnak] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setDataAnak(dataAnakJSON);
  }, []);

  const handleDetail = (anak) => {
    navigate(`/data-anak/${anak.id}`, { state: anak });
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar */}
      <Sidebar2 />

      {/* Konten Utama */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <NavbarDokter />

        {/* Konten */}
        <main className="mt-20 px-6 py-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Data Anak</h1>
          </div>

          <div className="bg-white shadow-md rounded-xl overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-blue-300 text-white">
                <tr>
                  <th className="px-6 py-3 font-semibold">Foto</th>
                  <th className="px-6 py-3 font-semibold">Nama Anak</th>
                  <th className="px-6 py-3 font-semibold">Kelas</th>
                  <th className="px-6 py-3 font-semibold">Jenis Kelamin</th>
                  <th className="px-6 py-3 font-semibold text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dataAnak.map((anak, index) => (
                  <tr
                    key={anak.id}
                    className={`${
                      index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'
                    } hover:bg-blue-300 text-gray-800 transition-colors`}
                  >
                    <td className="px-6 py-3">
                      <div className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center font-bold">
                        {anak.nama.charAt(0)}
                      </div>
                    </td>
                    <td className="px-6 py-3 font-medium">{anak.nama}</td>
                    <td className="px-6 py-3">{anak.kelas}</td>
                    <td className="px-6 py-3">{anak.jenisKelamin}</td>
                    <td className="px-6 py-3 text-center">
                      <button
                        onClick={() => handleDetail(anak)}
                        className="bg-cyan-800 hover:bg-cyan-600 text-white px-4 py-1 rounded text-sm font-medium"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataAnak;
