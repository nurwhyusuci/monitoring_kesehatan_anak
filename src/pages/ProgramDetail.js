import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dataDummy from '../dataAnak';

const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    const savedPrograms = JSON.parse(localStorage.getItem('programs') || '[]');
    const foundProgram = savedPrograms.find(p => p.id === parseInt(id));
    setProgram(foundProgram);
  }, [id]);

  if (!program) return <div className="p-6 text-red-500">Program tidak ditemukan</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">{program.nama}</h1>
      <div className="bg-white rounded-2xl shadow-md p-4">
        <p><strong>Deskripsi:</strong> {program.deskripsi}</p>
        <p><strong>Tanggal Mulai:</strong> {program.tanggalMulai}</p>
        <p><strong>Tanggal Selesai:</strong> {program.tanggalSelesai}</p>
        <p><strong>Status:</strong> {program.status}</p>
        <p><strong>Target Anak:</strong> {program.targetAnak.map(id => dataDummy.find(anak => anak.id === id)?.nama || 'Tidak ditemukan').join(', ')}</p>
        <button
          onClick={() => navigate('/program')}
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default ProgramDetail;