import { useEffect, useState } from 'react';
import catatanDokterRaw from '../../data/dokter.json';

const CatatanDokter = () => {
  const [catatan, setCatatan] = useState([]);

  useEffect(() => {
    setCatatan(catatanDokterRaw.default || catatanDokterRaw);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-300 to-blue-100 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-screen-xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600">Catatan Dokter</h2>

        {catatan.map((item, index) => (
          <div key={index} className="space-y-5">
            <div className="text-base md:text-lg text-gray-700">
              <p><span className="font-semibold">Tanggal Pemeriksaan:</span> {item.tanggal}</p>
              <p><span className="font-semibold">Dokter:</span> {item.dokter}</p>
              <p><span className="font-semibold">Lokasi:</span> {item.lokasi}</p>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <p className="font-bold mb-2">Hasil Pemeriksaan Fisik</p>
                <p>Berat badan : {item.berat}</p>
                <p>Tinggi badan : {item.tinggi}</p>
                <p>Suhu tubuh : {item.suhu}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <p className="font-bold mb-2">Kondisi Umum Anak</p>
                <p>{item.kondisi_umum || '-'}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <p className="font-bold mb-2">Diagnosis Sementara</p>
                <p>{item.diagnosa || 'Tidak ada'}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <p className="font-bold mb-2">Saran & Rekomendasi</p>
                <p>{item.anjuran}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <p className="font-bold mb-2">Resep / Pengobatan</p>
                <p>{item.resep || 'Tidak ada'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatatanDokter;
