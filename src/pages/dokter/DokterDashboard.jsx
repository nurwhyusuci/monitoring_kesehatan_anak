import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar2 from '../../assets/components/Layout/Sidebar2';
import NavbarDokter from '../../assets/components/Layout/NavbarDokter';

const DokterDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDetail, setShowDetail] = useState(false);

  const statistik = [
    { label: 'Anak Terdaftar', value: 20 },
    { label: 'Gejala Terdeteksi', value: 6 },
    { label: 'Saran Dokter', value: 5 },
  ];

  const grafik = [
    { tgl: 'Apr 18', jumlah: 40, warna: 'bg-red-500' },
    { tgl: 'Apr 19', jumlah: 35, warna: 'bg-blue-500' },
    { tgl: 'Apr 25', jumlah: 28, warna: 'bg-green-500' },
    { tgl: 'Apr 27', jumlah: 20, warna: 'bg-gray-400' },
  ];

  const rekomendasi = [
    ['Oba Ila Takbir', 'Perbanyak Minum Air Putih'],
    ['Adri Ihwan Hidayat', 'Hindari Air Dingin'],
    ['Adam Bimantara', 'Gunakan Obat Sesuai Resep'],
  ];

  const daftarDokter = [
    'Dr. Michelle', 'Dr. Nora', 'Dr. Dewi', 'Dr. Rani Salsabila', 'Dr. Yoga Prasetyo',
    'Dr. Intan Maharani', 'Dr. Bima Putra', 'Dr. Aulia Lestari', 'Dr. Farhan Akbar', 'Dr. Siti Muniroh',
  ];

  const maxJumlah = Math.max(...grafik.map((d) => d.jumlah));

  return (
    <div className="flex bg-gray-50 min-h-">
      <Sidebar2 />
      <div className="flex flex-col flex-1">
        <NavbarDokter />
        <main className="flex-1 ml-64 pt-24 px-4 md:px-6 lg:px-8 xl:px-10 w-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Dashboard Dokter</h1>

          {/* Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {statistik.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded shadow text-center">
                <p className="text-sm text-gray-500">{item.label}</p>
                <h2 className="text-xl font-bold text-gray-800">{item.value}</h2>
              </div>
            ))}
          </div>

          {/* Grafik & Kalender */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-gray-700 mb-2">Grafik Anak Sakit</h3>
              <div className="h-48 flex items-end justify-around">
                {grafik.map((d, i) => (
                  <div key={i} className="flex flex-col items-center w-14">
                    <div
                      className={`w-full ${d.warna} rounded-t`}
                      style={{ height: `${(d.jumlah / maxJumlah) * 160}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">{d.tgl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-gray-700 mb-2">Kalender</h3>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd MMMM yyyy"
                inline
              />
              <p className="text-sm text-center text-gray-600 mt-2">
                Tanggal dipilih: {selectedDate.toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Rekomendasi Dokter */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-700">Rekomendasi Dokter</h3>
              <button
                onClick={() => setShowDetail(!showDetail)}
                className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                {showDetail ? 'Tutup Detail' : 'Detail Dokter'}
              </button>
            </div>
            {rekomendasi.map(([nama, saran], i) => (
              <div key={i} className="flex justify-between border p-2 rounded mb-2 text-sm text-gray-700">
                <span>{nama}</span>
                <span className="text-gray-500">{saran}</span>
              </div>
            ))}

            {showDetail && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {daftarDokter.map((nama, i) => (
                  <div key={i} className="bg-blue-50 p-3 rounded flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-300 text-white rounded-full flex items-center justify-center font-bold">
                      {nama.charAt(4)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{nama}</p>
                      <p className="text-xs text-gray-500">Dokter Anak</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DokterDashboard;
