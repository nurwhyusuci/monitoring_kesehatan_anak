import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TambahAntropometri = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    berat: '',
    tinggi: '',
    lingkarLengan: '',
    lingkarKepala: '',
    gigi: '',
    mata: '',
    keluhan: '',
    dokter: '',
    tanggal: '',
    riwayat: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Disimpan:', form);
    // TODO: bisa tambahkan post ke backend atau penyimpanan lokal
    navigate('/data-antropometri'); // kembali ke halaman utama
  };

  return (
    <div className="p-6 bg-sky-100 min-h-screen rounded-xl">
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-6 bg-sky-200 p-6 rounded-xl shadow-lg">
        {/* Bagian 1: Data Antropometri */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Berat Badan (kg)</label>
            <input
              type="number"
              name="berat"
              value={form.berat}
              onChange={handleChange}
              placeholder="Berat Badan"
              className="w-full px-4 py-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Tinggi Badan (cm)</label>
            <input
              type="number"
              name="tinggi"
              value={form.tinggi}
              onChange={handleChange}
              placeholder="Tinggi Badan"
              className="w-full px-4 py-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Lingkar Lengan (cm)</label>
            <input
              type="number"
              name="lingkarLengan"
              value={form.lingkarLengan}
              onChange={handleChange}
              placeholder="Lingkar Lengan Atas"
              className="w-full px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Lingkar Kepala (cm)</label>
            <input
              type="number"
              name="lingkarKepala"
              value={form.lingkarKepala}
              onChange={handleChange}
              placeholder="Lingkar Kepala"
              className="w-full px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Kesehatan gigi</label>
            <input
              type="text"
              name="gigi"
              value={form.gigi}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Kesehatan mata</label>
            <input
              type="text"
              name="mata"
              value={form.mata}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md"
            />
          </div>
        </div>

        {/* Pemeriksaan */}
        <h3 className="text-xl font-bold text-gray-800 mt-6">Pemeriksaan</h3>
        <div>
          <label className="block font-semibold mb-1">Deskripsi keluhan</label>
          <textarea
            name="keluhan"
            value={form.keluhan}
            onChange={handleChange}
            placeholder="Deskripsi Keluhan"
            rows={3}
            className="w-full px-4 py-2 rounded-md"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Dokter</label>
            <input
              type="text"
              name="dokter"
              value={form.dokter}
              onChange={handleChange}
              placeholder="Masukan Nama Dokter"
              className="w-full px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Tanggal pemeriksaan</label>
            <input
              type="date"
              name="tanggal"
              value={form.tanggal}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Riwayat Data Pasien</label>
          <input
            type="text"
            name="riwayat"
            value={form.riwayat}
            onChange={handleChange}
            placeholder="Riwayat Data Pasien"
            className="w-full px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahAntropometri;