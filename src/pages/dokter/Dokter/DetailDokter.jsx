// src/pages/DetailDokter.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DetailDokter() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const doctor = state?.doctor;

  if (!doctor) {
    return <div className="p-6">Data dokter tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-6">
      <h1 className="text-3xl font-bold text-white mb-4 drop-shadow">Informasi Dokter</h1>
      <div className="bg-sky-100 p-6 rounded-3xl shadow-lg max-w-3xl mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full object-cover" />
          <div>
            <h2 className="text-xl font-bold">{doctor.name}</h2>
            <p className="capitalize">{doctor.specialization}</p>
          </div>
        </div>
        <div className="bg-sky-300 rounded-lg p-4 text-white font-semibold space-y-2">
          <p><span className="inline-block w-40">ID Dokter</span>: {doctor.id}</p>
          <p><span className="inline-block w-40">Asal RS</span>: {doctor.hospital}</p>
          <p><span className="inline-block w-40">Spesialis</span>: {doctor.specialization}</p>
          <p><span className="inline-block w-40">Kontak</span>: {doctor.contact}</p>
          <p><span className="inline-block w-40">Sejak</span>: {doctor.since}</p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-full shadow-md"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
