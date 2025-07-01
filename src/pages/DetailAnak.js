// src/pages/DetailAnak.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DetailAnak = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const anak = state;
  if (!anak) return <div className="p-6">Data tidak ditemukan.</div>;

  const orangTua = anak.orangTua;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white font-sans p-8">
      <h2 className="text-4xl font-bold text-white mb-6 shadow-md">Detail Anak</h2>

      <div className="bg-blue-100 rounded-xl shadow-lg p-6 w-[90%] max-w-5xl mx-auto">
        {/* Header Anak */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src="/assets/doctor.png"
            alt="Anak"
            className="w-20 h-20 rounded-full border-2 border-white shadow"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">{anak.nama}</h3>
            <p className="text-gray-700">Umur: {orangTua.umur} tahun</p>
            <p className="text-gray-700">Tanggal Lahir: {orangTua.tanggalLahir}</p>
            <p className="text-gray-700">Jenis Kelamin: {anak.jenisKelamin}</p>
          </div>
        </div>

        {/* Tabel Informasi Anak */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#7395AE] text-white rounded">
            <tbody>
              <tr><td className="p-3 font-semibold">NIK</td><td className="p-3">{orangTua.nik}</td></tr>
              <tr><td className="p-3 font-semibold">No. Kartu Keluarga</td><td className="p-3">{orangTua.kk}</td></tr>
              <tr><td className="p-3 font-semibold">Kelas</td><td className="p-3">{anak.kelas}</td></tr>
              <tr><td className="p-3 font-semibold">Nama Ayah</td><td className="p-3">{orangTua.namaAyah}</td></tr>
              <tr><td className="p-3 font-semibold">Nama Ibu</td><td className="p-3">{orangTua.namaIbu}</td></tr>
              <tr><td className="p-3 font-semibold">Kontak Orang Tua</td><td className="p-3">{orangTua.kontak}</td></tr>
              <tr><td className="p-3 font-semibold">Alamat</td><td className="p-3">{orangTua.alamat}</td></tr>
            </tbody>
          </table>
        </div>

        {/* Tombol Navigasi */}
        <div className="text-right mt-4 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-400 text-white px-6 py-2 rounded shadow hover:bg-gray-600 transition"
          >
            Kembali
          </button>
          <button
            onClick={() => navigate(`/detail-orang-tua/${anak.id}`, { state: anak })}
            className="bg-blue-400 text-white px-6 py-2 rounded shadow hover:bg-blue-500 transition"
          >
            Detail Orang Tua
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailAnak;
