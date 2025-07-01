// src/pages/DetailOrangTua.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DetailOrangTua = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const anak = location.state;

  if (!anak) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        Data tidak ditemukan.
      </div>
    );
  }

  const orangTua = anak.orangTua;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white font-sans p-8">
      <h2 className="text-4xl font-bold text-white mb-6 shadow-md">Data Orang Tua</h2>

      <div className="bg-blue-100 rounded-xl shadow-lg p-6 w-[90%] max-w-5xl mx-auto">
        {/* Header Orang Tua */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src="/assets/ibu.png" // ganti sesuai nama gambar ibu yang kamu gunakan
            alt="Foto Orang Tua"
            className="w-24 h-32 rounded-full border-4 border-white object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Nama : {orangTua.namaIbu}</h3>
            <p className="text-gray-700">Umur : {orangTua.umur} tahun</p>
            <p className="text-gray-700">Tanggal Lahir : {orangTua.tanggalLahir}</p>
            <p className="text-gray-700">Jenis Kelamin : Perempuan</p>
          </div>
        </div>

        {/* Tabel Informasi Orang Tua */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#7395AE] text-white rounded text-left">
            <tbody>
              <tr><td className="p-3 font-semibold">NIK</td><td className="p-3">{orangTua.nik}</td></tr>
              <tr><td className="p-3 font-semibold">No. Kartu Keluarga</td><td className="p-3">{orangTua.kk}</td></tr>
              <tr><td className="p-3 font-semibold">Golongan Darah</td><td className="p-3">B</td></tr>
              <tr><td className="p-3 font-semibold">Nama Anak</td><td className="p-3">{anak.nama}</td></tr>
              <tr><td className="p-3 font-semibold">Nama Suami</td><td className="p-3">{orangTua.namaAyah}</td></tr>
              <tr><td className="p-3 font-semibold">Kontak Orang Tua</td><td className="p-3">{orangTua.kontak}</td></tr>
              <tr><td className="p-3 font-semibold">Alamat</td><td className="p-3">{orangTua.alamat}</td></tr>
            </tbody>
          </table>
        </div>

        {/* Tombol Back */}
        <div className="text-right mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailOrangTua;
