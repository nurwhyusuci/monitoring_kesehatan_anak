// src/pages/InformasiDokter.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar2 from '../../assets/components/Layout/Sidebar2';
import NavbarDokter from '../../assets/components/Layout/NavbarDokter';
import doctors from '../../data/informasiDokter.json';

const InformasiDokter = () => {
  const navigate = useNavigate();

  const handleDetailClick = (doctor) => {
    navigate(`/informasi-dokter/${doctor.id}`, { state: { doctor } });
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar2 />
      <div className="flex-1 lg:ml-64">
        <NavbarDokter />

        <main className="p-4 sm:p-6 mt-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
            Informasi Dokter
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-md hover:shadow-lg transition"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-24 h-24 rounded-full object-cover object-top border-4 border-white shadow mb-3"
                />
                <div className="text-center">
                  <p className="font-bold text-lg text-gray-800">{doc.name}</p>
                  <p className="text-sm capitalize text-gray-600">{doc.specialization}</p>
                  <p className="text-xs text-gray-500">{doc.hospital}</p>
                  <p className="text-xs text-gray-500">Sejak: {doc.since}</p>
                </div>
                <button
                  onClick={() => handleDetailClick(doc)}
                  className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded shadow text-sm w-full"
                >
                  Detail
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default InformasiDokter;
