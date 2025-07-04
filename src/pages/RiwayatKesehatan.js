import React from 'react';
import { useNavigate } from 'react-router-dom';

const riwayatData = [
  { nama: 'Aldy Putra', tanggal: '10/09/2023', gejala: 'Demam dan Tipes' },
  { nama: 'Budi Santoso', tanggal: '12/09/2023', gejala: 'Sakit Kepala dan Demam' },
  { nama: 'Citra Dewi', tanggal: '15/09/2023', gejala: 'Sakit Gigi dan Panas' },
  { nama: 'Dewi Lestari', tanggal: '20/09/2023', gejala: 'Flu dan Batuk' },
  { nama: 'Eka Saputra', tanggal: '22/09/2023', gejala: 'Batuk Ringan' },
  { nama: 'Eka Pratama', tanggal: '22/09/2023', gejala: 'Pusing dan Mata Lelah' },
];

const RiwayatKesehatan = () => {
  const navigate = useNavigate();

  const handleSaran = (data) => {
    navigate('/saran-dokter', { state: data });
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-b from-sky-300 to-white">
      <h1 className="text-3xl font-bold text-white mb-6 drop-shadow">DATA RIWAYAT KESEHATAN ANAK</h1>

      <div className="bg-blue-100 rounded-xl shadow-md p-4 max-w-6xl mx-auto">
        <table className="w-full text-left">
          <thead className="bg-pink-200 text-gray-800">
            <tr>
              <th className="p-3">Nama Anak</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Gejala</th>
              <th className="p-3">Dokter</th>
            </tr>
          </thead>
          <tbody>
            {riwayatData.map((data, i) => (
              <tr key={i} className="bg-[#7395ae] border-b text-white">
                <td className="p-3">{data.nama}</td>
                <td className="p-3">{data.tanggal}</td>
                <td className="p-3">{data.gejala}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleSaran(data)}
                    className="bg-blue-200 text-black px-4 py-1 rounded hover:bg-blue-300 transition"
                  >
                    Saran
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiwayatKesehatan;
