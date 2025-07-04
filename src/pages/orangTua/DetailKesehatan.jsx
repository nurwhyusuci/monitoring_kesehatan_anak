import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import ProfileDrawer from '../../components/Profil'; // ✅ Tambah drawer profil

const DetailKesehatan = () => {
  const navigate = useNavigate();
  const pdfRef = useRef();
  const [showProfile, setShowProfile] = useState(false); // ✅ State profil drawer

  const perkembangan = [
    { bulan: 'Maret', berat: 35, tinggi: 130 },
    { bulan: 'Mei', berat: 36, tinggi: 131 },
    { bulan: 'Juli', berat: 37, tinggi: 132 },
    { bulan: 'September', berat: 38, tinggi: 133 },
  ];

  const handleDownloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('laporan-detail-kesehatan.pdf');
    });
  };

  return (
    <>
      <Sidebar />
      <Navbar onProfileClick={() => setShowProfile(true)} />
      {showProfile && (
        <ProfileDrawer
          onClose={() => setShowProfile(false)}
          onLogout={() => navigate('/')}
        />
      )}

      <div className="ml-64 mt-2 p-6 min-h-screen bg-gradient-to-b from-blue-300 to-blue-100">
        <div ref={pdfRef} className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h3 className="text-xl font-semibold">Detail Kesehatan</h3>
            <div className="flex gap-2">
              <button
                onClick={handleDownloadPDF}
                className="border border-gray-400 px-4 py-1 rounded hover:bg-gray-200"
              >
                Unduh Laporan PDF
              </button>
            </div>
          </div>

          {/* Informasi dan Ringkasan */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border p-4 rounded">
              <h4 className="font-semibold mb-1">Informasi Umum</h4>
              <p>Aisyah</p>
              <p>10 Tahun</p>
              <p>Perempuan</p>
              <p>Golongan Darah A</p>
            </div>

            <div className="border p-4 rounded">
              <h4 className="font-semibold mb-1">Ringkasan Kesehatan</h4>
              <span className="bg-green-300 px-2 py-1 rounded text-sm">Sehat</span>
              <p className="text-sm mt-2">Diperbarui: 10 Juni 2025</p>
              <p className="text-sm">Dokter: Dr. Andi</p>
              <p className="text-sm">Tidak ditemukan gejala, berat badan stabil</p>
            </div>

            <div className="border p-4 rounded">
              <h4 className="font-semibold mb-1">Riwayat Pemeriksaan</h4>
              <div className="text-sm">
                <p>9 Maret - Dr. Tirta</p>
                <p>21 Mei - Dr. Tirta</p>
              </div>
            </div>
          </div>

          {/* Grafik dan Rekomendasi */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border p-4 rounded">
              <h4 className="font-semibold mb-2">Perkembangan</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm font-semibold mb-1">Berat Badan</h5>
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={perkembangan}>
                      <XAxis dataKey="bulan" fontSize={10} />
                      <YAxis domain={[34, 40]} fontSize={10} />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Line type="monotone" dataKey="berat" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h5 className="text-sm font-semibold mb-1">Tinggi Badan</h5>
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={perkembangan}>
                      <XAxis dataKey="bulan" fontSize={10} />
                      <YAxis domain={[129, 135]} fontSize={10} />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Line type="monotone" dataKey="tinggi" stroke="#82ca9d" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="border p-4 rounded">
              <h4 className="font-semibold mb-2">Rekomendasi</h4>
              <ul className="text-sm space-y-1">
                <li>🔵 Perlu konsumsi makanan tinggi protein</li>
                <li>✅ Sudah ditindaklanjuti</li>
              </ul>
              <h5 className="font-semibold mt-4">Catatan</h5>
              <p className="text-sm">Riwayat keluhan perut sakit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailKesehatan;
