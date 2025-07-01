// src/pages/DetailSaranDokter.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailSaranDokter = () => {
  const { state } = useLocation();
  if (!state) return <div className="p-6">Data tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Saran Dokter</h1>
      <div className="flex gap-8 max-w-5xl mx-auto items-start">
        <img
          src="/assets/doctor.png"
          alt="dokter"
          className="w-60 h-auto rounded-[50px] object-cover"
        />
        <div className="bg-gray-200 rounded-xl p-6 flex-1 text-lg">
          <p><strong>Nama:</strong> {state.nama}</p>
          <p><strong>Riwayat Anak:</strong> {state.riwayat.gejala}</p>
          <p><strong>Saran:</strong> {state.saran}</p>
          <p className="mt-6 text-right text-sm">{state.tanggal}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailSaranDokter;
