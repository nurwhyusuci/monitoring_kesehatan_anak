import { useEffect, useState } from 'react';
import { FaUserMd, FaCalendarAlt, FaMapMarkerAlt, FaWeight, FaRulerVertical, FaThermometerHalf, FaNotesMedical, FaPrescriptionBottleAlt, FaClipboardList } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import catatanDokterRaw from '../../data/dokter.json';

const CatatanDokter = () => {
  const [catatan, setCatatan] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCatatan(catatanDokterRaw.default || catatanDokterRaw);
  }, []);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-300 to-blue-100 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Header with back button */}
        <div className="flex items-center mb-6">
         
          <h2 className="text-2xl md:text-3xl font-bold text-white">Catatan Dokter</h2>
        </div>

        {/* Main content */}
        <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
          {catatan.length > 0 ? (
            catatan.map((item, index) => (
              <div key={index} className="p-6 sm:p-8 border-b border-blue-200/50 last:border-b-0">
                {/* Examination header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/10 p-3 rounded-full text-blue-600">
                      <FaUserMd className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{item.dokter}</h3>
                      <div className="flex items-center gap-1 text-blue-600">
                        <FaMapMarkerAlt className="text-sm" />
                        <span className="text-sm">{item.lokasi}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full text-blue-700">
                    <FaCalendarAlt />
                    <span className="font-medium">{formatDate(item.tanggal)}</span>
                  </div>
                </div>

                {/* Examination details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Physical examination */}
                  <div className="bg-white p-5 rounded-lg border border-blue-200/50 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 text-blue-600">
                      <FaClipboardList />
                      <h4 className="font-bold">Pemeriksaan Fisik</h4>
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center gap-3">
                        <FaWeight className="text-blue-500/70" />
                        <span>Berat: <span className="font-medium">{item.berat} kg</span></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaRulerVertical className="text-blue-500/70" />
                        <span>Tinggi: <span className="font-medium">{item.tinggi} cm</span></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaThermometerHalf className="text-blue-500/70" />
                        <span>Suhu: <span className="font-medium">{item.suhu} °C</span></span>
                      </div>
                    </div>
                  </div>

                  {/* General condition */}
                  <div className="bg-white p-5 rounded-lg border border-blue-200/50 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 text-blue-600">
                      <FaNotesMedical />
                      <h4 className="font-bold">Kondisi Umum</h4>
                    </div>
                    <p className="text-gray-700">{item.kondisi_umum || 'Tidak ada catatan khusus'}</p>
                  </div>

                  {/* Diagnosis */}
                  <div className="bg-white p-5 rounded-lg border border-blue-200/50 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 text-blue-600">
                      <FaNotesMedical />
                      <h4 className="font-bold">Diagnosis</h4>
                    </div>
                    <p className="text-gray-700">{item.diagnosa || 'Tidak ada diagnosis spesifik'}</p>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-white p-5 rounded-lg border border-blue-200/50 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 text-blue-600">
                      <FaClipboardList />
                      <h4 className="font-bold">Rekomendasi</h4>
                    </div>
                    <p className="text-gray-700">{item.anjuran || 'Tidak ada rekomendasi khusus'}</p>
                  </div>

                  {/* Prescription */}
                  <div className="bg-white p-5 rounded-lg border border-blue-200/50 shadow-sm lg:col-span-2">
                    <div className="flex items-center gap-2 mb-3 text-blue-600">
                      <FaPrescriptionBottleAlt />
                      <h4 className="font-bold">Resep Obat</h4>
                    </div>
                    {item.resep ? (
                      <div className="bg-blue-50/50 p-4 rounded border border-blue-200/30">
                        <pre className="whitespace-pre-wrap font-sans text-gray-700">{item.resep}</pre>
                      </div>
                    ) : (
                      <p className="text-gray-500">Tidak ada resep obat</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-600">
              Tidak ada catatan dokter tersedia
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatatanDokter;