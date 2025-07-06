import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Dummy data lengkap
const detailData = [
  {
    id: 1,
    nama: 'Aldy Putra',
    kelas: 3,
    berat: '58kg',
    lingkarLengan: 14,
    gigi: 'Cukup',
    tinggi: 107,
    kepala: 48,
    mata: 'Baik',
    tanggal: '10/09/2023'
  },
  {
    id: 2,
    nama: 'Budi Santoso',
    kelas: 3,
    berat: '40kg',
    lingkarLengan: 15,
    gigi: 'keropos',
    tinggi: 110,
    kepala: 50,
    mata: 'Baik',
    tanggal: '12/09/2023'
  },
  {
    id: 3,
    nama: 'Citra Dewi',
    kelas: 4,
    berat: '45kg',
    lingkarLengan: 16,
    gigi: 'Baik',
    tinggi: 121,
    kepala: 51,
    mata: 'Baik',
    tanggal: '15/09/2023'
  },
  {
    id: 4,
    nama: 'Dewi Lestari',
    kelas: 4,
    berat: '41kg',
    lingkarLengan: 15,
    gigi: 'Cukup Baik',
    tinggi: 119,
    kepala: 50,
    mata: 'Rabun Jauh',
    tanggal: '20/09/2023'
  },
  {
    id: 5,
    nama: 'Eka Saputra',
    kelas: 5,
    berat: '40kg',
    lingkarLengan: 14,
    gigi: 'Baik',
    tinggi: 125,
    kepala: 51,
    mata: 'Baik',
    tanggal: '22/09/2023'
  },
  {
    id: 6,
    nama: 'Eka Pratama',
    kelas: 5,
    berat: '42kg',
    lingkarLengan: 14,
    gigi: 'Baik',
    tinggi: 124,
    kepala: 50,
    mata: 'Cukup Baik',
    tanggal: '22/09/2023'
  },
];

const DetailAntropometri = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = detailData.find((item) => item.id === parseInt(id));

  if (!data) {
    return <div className="p-6 text-red-600">Data tidak ditemukan</div>;
  }

  return (
    <div className="p-6 bg-gradient-to-b from-[#a6d8ef] to-[#c0deed] min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-6">Data Antopometri</h2>

      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-full mb-4 float-right hover:bg-blue-600 transition"
      >
        Kembali
      </button>

      <div className="clear-both mt-4 bg-sky-100 rounded-xl p-6 shadow-lg">
        {/* Header */}
        <div className="grid grid-cols-9 bg-pink-100 rounded-t-lg font-semibold text-center py-3 text-gray-700">
          <div>Nama</div>
          <div>Kelas</div>
          <div>Berat Badan</div>
          <div>Lingkar Lengan</div>
          <div>Kesehatan Gigi</div>
          <div>Tinggi Badan</div>
          <div>Lingkar Kepala</div>
          <div>Kesehatan Mata</div>
          <div>Terakhir Diperiksa</div>
        </div>

        {/* Data */}
        <div className="grid grid-cols-9 bg-sky-300/80 text-white text-center py-3 rounded-b-lg mt-2">
          <div>{data.nama}</div>
          <div>{data.kelas}</div>
          <div>{data.berat}</div>
          <div>{data.lingkarLengan}</div>
          <div>{data.gigi}</div>
          <div>{data.tinggi}</div>
          <div>{data.kepala}</div>
          <div>{data.mata}</div>
          <div>{data.tanggal}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailAntropometri;
