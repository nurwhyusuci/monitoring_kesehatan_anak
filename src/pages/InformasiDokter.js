// src/pages/InformasiDokter.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const doctors = [
  {
    id: '12989172910',
    name: 'Dr Michelle',
    specialization: 'Dokter Umum',
    image: '/images/dokter1.png',
    hospital: 'RS Citra',
    contact: '0812-9876-5432',
    since: 2015,
  },
  {
    id: '19823791823',
    name: 'Dr Nora',
    specialization: 'Dokter Anak',
    image: '/images/dokter2.png',
    hospital: 'RS Permata Ibu',
    contact: '0813-5678-9101',
    since: 2018,
  },
  {
    id: '18723982137',
    name: 'Dr Dewi',
    specialization: 'Dokter Umum',
    image: '/images/dokter3.png',
    hospital: 'Klinik Sehat',
    contact: '0812-2345-6789',
    since: 2020,
  },
];

export default function InformasiDokter() {
  const navigate = useNavigate();

  const handleDetailClick = (doctor) => {
    navigate(`/informasi-dokter/${doctor.id}`, { state: { doctor } });
  };

  return (
    <div className="p-6 bg-gradient-to-b from-sky-300 to-white min-h-screen">
      <h1 className="text-3xl font-bold text-center text-white drop-shadow-md mb-6">Informasi Dokter</h1>
      <div className="space-y-4">
        {doctors.map((doc) => (
          <div key={doc.id} className="bg-gray-200 rounded-md flex items-center justify-between px-6 py-4 shadow-md">
            <div className="flex items-center space-x-4">
              <img src={doc.image} alt={doc.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-bold text-lg">{doc.name}</p>
                <p className="text-sm capitalize">{doc.specialization}</p>
              </div>
            </div>
            <button
              onClick={() => handleDetailClick(doc)}
              className="bg-sky-300 hover:bg-sky-400 text-white px-4 py-1 rounded shadow"
            >
              Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
