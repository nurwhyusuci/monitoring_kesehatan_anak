import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDetail, setShowDetail] = useState(false);

  const statistikData = [
    ['Anak Terdaftar', 20],
    ['Gejala Terdeteksi', 6],
    ['Saran Dokter', 5],
  ];

  const grafikData = [
    { tanggal: 'Apr 18', jumlah: 40, warna: 'bg-red-500' },
    { tanggal: 'Apr 19', jumlah: 35, warna: 'bg-blue-500' },
    { tanggal: 'Apr 25', jumlah: 28, warna: 'bg-green-500' },
    { tanggal: 'Apr 27', jumlah: 20, warna: 'bg-gray-400' },
  ];

  const rekomendasiDokter = [
    ['Oba Ila Takbir', 'Perbanyak Minum Air Putih'],
    ['Adri Ihwan Hidayat', 'Hindari Air Dingin'],
    ['Adam Bimantara', 'Gunakan Obat Sesuai Resep'],
  ];

  const daftarNamaDokter = [
    'Dr. Michelle',
    'Dr. Nora',
    'Dr. Dewi',
    'Dr. Rani Salsabila',
    'Dr. Yoga Prasetyo',
    'Dr. Intan Maharani',
    'Dr. Bima Putra',
    'Dr. Aulia Lestari',
    'Dr. Farhan Akbar',
    'Dr. Siti Muniroh',
  ];

  const maxJumlah = Math.max(...grafikData.map((d) => d.jumlah));
  const maxHeightPx = 160;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Kesehatan</h1>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {statistikData.map(([label, value], index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-4 text-center transition transform hover:scale-105 hover:shadow-lg"
          >
            <p className="text-sm text-gray-600">{label}</p>
            <h2 className="text-2xl font-bold">{value}</h2>
          </div>
        ))}
      </div>

      {/* Grafik & Kalender */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {/* Grafik */}
        <div className="flex-1 bg-white rounded shadow p-4 transition hover:scale-105 hover:shadow-lg">
          <h3 className="text-lg font-semibold">Data Anak Harian</h3>
          <p className="text-sm text-gray-500">Jumlah Anak Sakit</p>
          <div className="mt-6 h-48 flex items-end justify-around">
            {grafikData.map((data, i) => {
              const tinggiPx = (data.jumlah / maxJumlah) * maxHeightPx;
              return (
                <div key={i} className="flex flex-col items-center w-14">
                  <div
                    className={`w-full ${data.warna} rounded-t`}
                    style={{ height: `${tinggiPx}px` }}
                  ></div>
                  <span className="text-xs text-gray-600 mt-2">{data.tanggal}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Kalender */}
        <div className="flex-1 bg-white rounded shadow p-4 transition hover:scale-105 hover:shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Kalender</h3>
          <div className="w-full">
         
          
            <p className="mt-2 text-sm text-gray-600 text-center">
              Tanggal dipilih: {selectedDate.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Rekomendasi Dokter */}
      <div className="bg-white rounded shadow p-4 relative transition hover:scale-105 hover:shadow-lg">
        {/* Judul dan tombol kanan atas */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Rekomendasi Dokter</h3>
          <button
            onClick={() => setShowDetail(!showDetail)}
            className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            {showDetail ? 'Tutup Detail' : 'Detail Dokter'}
          </button>
        </div>

        {/* Rekomendasi 3 Dokter */}
        {rekomendasiDokter.map(([dokter, saran], index) => (
          <div
            key={index}
            className="flex justify-between border p-2 rounded mb-2 hover:bg-gray-100 transition"
          >
            <span className="font-medium">{dokter}</span>
            <span className="text-sm text-gray-600">{saran}</span>
          </div>
        ))}

        {/* Daftar 10 Dokter - Versi Menarik */}
        {showDetail && (
          <div className="mt-4 border-t pt-4">
            <h4 className="text-base font-semibold text-gray-700 mb-3">Daftar Dokter Terkait:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {daftarNamaDokter.map((nama, index) => (
                <div
                  key={index}
                  className="flex items-center bg-blue-50 p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-100 transition duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-white font-bold">
                    {nama.charAt(4)}
                  </div>
                  <div className="ml-3 text-sm">
                    <p className="font-medium text-gray-800">{nama}</p>
                    <p className="text-gray-500 text-xs">Dokter Anak</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
