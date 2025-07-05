// src/pages/TambahCatatanDokter.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TambahCatatanDokter = () => {
  const [formData, setFormData] = useState({
    dokter: '',
    namaAnak: '',
    tanggal: '',
    catatan: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSimpan = (e) => {
    e.preventDefault();

    // Simpan logika di sini (localStorage / API / Context, dll)
    console.log('Data Disimpan:', formData);

    // Setelah simpan, kembali ke halaman sebelumnya
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-8 font-sans">
      <h1 className="text-4xl font-bold text-white mb-8">Catatan Dokter</h1>

      <div className="bg-blue-100 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Catatan</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dokter */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Dokter</label>
            <input
              type="text"
              name="dokter"
              value={formData.dokter}
              onChange={handleChange}
              placeholder="Masukan Nama Dokter"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
          </div>

          {/* Tanggal */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Tanggal</label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
          </div>

          {/* Nama Anak */}
          <div className="col-span-2">
            <label className="block font-semibold text-gray-700 mb-1">Nama Anak</label>
            <input
              type="text"
              name="namaAnak"
              value={formData.namaAnak}
              onChange={handleChange}
              placeholder="Masukkan Nama Anak"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
          </div>

          {/* Catatan */}
          <div className="col-span-2">
            <label className="block font-semibold text-gray-700 mb-1">Catatan</label>
            <textarea
              name="catatan"
              value={formData.catatan}
              onChange={handleChange}
              rows="4"
              placeholder="Tulis catatan dokter..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            ></textarea>
          </div>
        </form>

        {/* Tombol */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-400 text-white px-6 py-2 rounded-full shadow hover:bg-blue-500 transition"
          >
            Kembali
          </button>
          <button
            onClick={handleSimpan}
            className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahCatatanDokter;
