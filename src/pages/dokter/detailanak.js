import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar2 from '../../assets/components/Layout/Sidebar2';
import NavbarDokter from '../../assets/components/Layout/NavbarDokter';

const DetailAnak = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-10 text-center">
        <p>Data anak tidak ditemukan.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Kembali
        </button>
      </div>
    );
  }

  const anak = state;

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar2 />
      <div className="flex-1 lg:ml-64">
        <NavbarDokter />

        <main className="mt-20 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Detail Data Anak</h1>

          <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><strong>Nama:</strong> {anak.nama}</div>
              <div><strong>Jenis Kelamin:</strong> {anak.jenisKelamin}</div>
              <div><strong>Tanggal Lahir:</strong> {anak.tanggal_lahir}</div>
              <div><strong>Umur:</strong> {anak.umur} tahun</div>
              <div><strong>NIK:</strong> {anak.nik}</div>
              <div><strong>No. KK:</strong> {anak.no_kk}</div>
              <div><strong>Golongan Darah:</strong> {anak.gol_darah}</div>
              <div><strong>Nama Ayah:</strong> {anak.nama_ayah}</div>
              <div><strong>Nama Ibu:</strong> {anak.nama_ibu}</div>
              <div><strong>Kontak Orang Tua:</strong> {anak.kontak_ortu}</div>
              <div className="md:col-span-2"><strong>Alamat:</strong> {anak.alamat}</div>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Kembali
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailAnak;
