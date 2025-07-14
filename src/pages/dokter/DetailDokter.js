// src/pages/InformasiDokterDetail.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar2 from '../../assets/components/Layout/Sidebar2';
import NavbarDokter from '../../assets/components/Layout/NavbarDokter';

const DetailDokter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;

  if (!doctor) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <p className="text-red-600 font-semibold">Data dokter tidak tersedia.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar2 />
      <div className="flex-1 lg:ml-64">
        <NavbarDokter />

        <main className="mt-20 px-6 py-4">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 text-blue-600 hover:underline text-sm"
            >
              ← Kembali
            </button>

            <div className="flex flex-col items-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-200 shadow"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{doctor.name}</h2>
              <p className="text-gray-600 mb-1 capitalize">{doctor.specialization}</p>
              <p className="text-sm text-gray-500">{doctor.hospital}</p>
              <p className="text-sm text-gray-500 mb-6">Bergabung sejak: {doctor.since}</p>

              <div className="w-full text-left text-gray-700 space-y-2">
                <p><strong>Email:</strong> {doctor.email || 'Tidak tersedia'}</p>
                <p><strong>No. Telepon:</strong> {doctor.phone || 'Tidak tersedia'}</p>
                <p><strong>Alamat:</strong> {doctor.address || 'Tidak tersedia'}</p>
                <p><strong>Pengalaman:</strong> {doctor.experience || 'Tidak disebutkan'}</p>
                <p><strong>Jadwal Praktek:</strong> {doctor.schedule || 'Silakan hubungi langsung'}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailDokter;
