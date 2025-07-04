// src/pages/Dashboard.js
import React from 'react';
import doctorImage from '../assets/doctor.png';

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Kesehatan</h1>
        <div className="flex items-center gap-2">
          
         
        </div>
      </div>

      {/* Statistic Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-sm text-gray-600">Anak Terdaftar</p>
          <h2 className="text-2xl font-bold">20</h2>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-sm text-gray-600">Gejala Terdeteksi</p>
          <h2 className="text-2xl font-bold">6</h2>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-sm text-gray-600">Saran Dokter</p>
          <h2 className="text-2xl font-bold">5</h2>
        </div>
      </div>

      {/* Grafik dan Kalender */}
      <div className="flex gap-4 mb-6">
        {/* Grafik Bar */}
        <div className="flex-1 bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold">Data Anak Harian</h3>
          <p className="text-sm text-gray-500">Jumlah Anak Sakit</p>
          <div className="flex items-end gap-4 h-40 mt-4">
            <div className="w-8 h-32 bg-red-500 rounded-t"></div>
            <div className="w-8 h-28 bg-blue-500 rounded-t"></div>
            <div className="w-8 h-24 bg-green-500 rounded-t"></div>
            <div className="w-8 h-16 bg-gray-400 rounded-t"></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500 px-1">
            <span>Apr 18</span>
            <span>Apr 19</span>
            <span>Apr 25</span>
            <span>Apr 27</span>
          </div>
        </div>

        {/* Kalender */}
        <div className="w-1/3 bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold">Kalender</h3>
          <div className="grid grid-cols-7 gap-2 text-center mt-4 text-sm text-gray-600">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className={`p-2 rounded ${i === 1 ? 'bg-red-500 text-white' : ''}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rekomendasi Dokter */}
      <div className="bg-white rounded shadow p-4">
        <h3 className="text-lg font-semibold mb-3">Rekomendasi Dokter</h3>
        <div className="space-y-2">
          <div className="flex justify-between border p-2 rounded">
            <span>Oba Ila Takbir</span>
            <span className="text-sm text-gray-600">Perbanyak Minum Air Putih</span>
          </div>
          <div className="flex justify-between border p-2 rounded">
            <span>Adri Ihwan Hidayat</span>
            <span className="text-sm text-gray-600">Hindari Air Dingin</span>
          </div>
          <div className="flex justify-between border p-2 rounded">
            <span>Adam Bimantara</span>
            <span className="text-sm text-gray-600">Gunakan Obat Sesuai Resep</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
  