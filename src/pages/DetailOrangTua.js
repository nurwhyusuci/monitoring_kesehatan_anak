import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ibuImage from '../assets/ibu.png';

const DetailOrangTua = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const anak = location.state;

  if (!anak || !anak.orangTua) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        Data tidak ditemukan.
      </div>
    );
  }

  const orangTua = anak.orangTua;

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Detail Orang Tua</h1>
        <div className="flex items-center gap-2">
          <img src="/assets/doctor.png" alt="Admin" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-semibold text-white">admin</p>
            <p className="text-sm text-gray-200">fauzan@kesehatan.id</p>
          </div>
        </div>
      </div>

      {/* Card Data Orang Tua */}
      <div className="bg-blue-100 rounded-xl shadow-lg p-6 w-[90%] max-w-5xl mx-auto">
        {/* Header Orang Tua */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={ibuImage}
            alt="Foto Orang Tua"
            className="w-24 h-32 rounded-full border-4 border-white object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Nama: {orangTua.namaIbu}</h3>
            <p className="text-gray-700">Umur: {orangTua.umur || '40'} tahun</p>
            <p className="text-gray-700">Tanggal Lahir: {orangTua.tanggalLahir || '12 Maret 1985'}</p>
            <p className="text-gray-700">Jenis Kelamin: Perempuan</p>
          </div>
        </div>

        {/* Tabel Informasi */}
        <div className="bg-slate-500 text-white p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
            <div><strong>NIK</strong></div>
            <div>{orangTua.nik || '3210987654321098'}</div>
            <div><strong>No. Kartu Keluarga</strong></div>
            <div>{orangTua.kk || '1234567890098765'}</div>
            <div><strong>Golongan Darah</strong></div>
            <div>{orangTua.golDarah || 'B'}</div>
            <div><strong>Nama Anak</strong></div>
            <div>{anak.nama}</div>
            <div><strong>Nama Suami</strong></div>
            <div>{orangTua.namaAyah || 'Bambang'}</div>
            <div><strong>Kontak Orang Tua</strong></div>
            <div>{orangTua.kontak || '0812-5678-9101'}</div>
            <div><strong>Alamat</strong></div>
            <div>{orangTua.alamat || 'Jl. Anggrek No. 5, Sleman'}</div>
          </div>
        </div>

        {/* Tombol Back */}
        <div className="text-right mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailOrangTua;