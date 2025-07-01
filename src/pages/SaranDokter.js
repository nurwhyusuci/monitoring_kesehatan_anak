// src/pages/SaranDokter.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SaranDokter = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [namaDokter, setNamaDokter] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [saran, setSaran] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/detail-saran-dokter', {
      state: {
        nama: namaDokter,
        tanggal,
        riwayat: state,
        saran,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Saran Dokter</h1>
      <div className="bg-blue-100 rounded-xl p-8 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Dokter</label>
            <input
              type="text"
              placeholder="Masukan Nama Dokter"
              className="w-full p-2 rounded"
              value={namaDokter}
              onChange={(e) => setNamaDokter(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Tanggal</label>
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="w-full p-2 rounded"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label className="block font-semibold text-gray-700 mb-2">Riwayat Data Anak</label>
            <input
              type="text"
              value={state?.gejala || ''}
              readOnly
              className="w-full p-2 rounded bg-gray-200"
            />
          </div>
          <div className="col-span-2">
            <label className="block font-semibold text-gray-700 mb-2">Saran</label>
            <textarea
              placeholder="Masukkan saran dokter..."
              className="w-full p-2 rounded"
              value={saran}
              onChange={(e) => setSaran(e.target.value)}
              rows={4}
            />
          </div>
          <div className="col-span-2 flex justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-blue-300 px-6 py-2 rounded text-white"
            >
              Kembali
            </button>
            <button type="submit" className="bg-blue-500 px-6 py-2 rounded text-white">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SaranDokter;
