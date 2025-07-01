// src/pages/FormSaranDokter.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FormSaranDokter = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    dokter: '',
    tanggal: '',
    riwayat: state?.gejala || '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-10">
      <h1 className="text-4xl font-bold text-white mb-8">Saran Dokter</h1>

      <div className="bg-blue-100 p-6 rounded-xl max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Dokter</label>
            <input type="text" name="dokter" placeholder="Masukan Nama Dokter"
              value={form.dokter} onChange={handleChange}
              className="w-full p-2 rounded" />
          </div>
          <div>
            <label className="block font-semibold mb-2">Tanggal</label>
            <input type="date" name="tanggal"
              value={form.tanggal} onChange={handleChange}
              className="w-full p-2 rounded" />
          </div>
        </div>
        <div className="mt-4">
          <label className="block font-semibold mb-2">Riwayat Data Anak</label>
          <input type="text" name="riwayat" value={form.riwayat}
            onChange={handleChange} className="w-full p-2 rounded" />
        </div>

        <div className="mt-6 flex justify-between">
          <button onClick={() => navigate(-1)} className="bg-blue-400 px-6 py-2 rounded text-white">Kembali</button>
          <button className="bg-blue-500 px-6 py-2 rounded text-white">Simpan</button>
        </div>
      </div>
    </div>
  );
};

export default FormSaranDokter;
