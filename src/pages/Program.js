import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import dataDummy from '../dataAnak';

const Program = () => {
  const [programs, setPrograms] = useState([]);
  const [newProgram, setNewProgram] = useState({
    nama: '',
    deskripsi: '',
    tanggalMulai: '',
    tanggalSelesai: '',
    targetAnak: '',
  });
  const { user } = useAuth();
  const navigate = useNavigate();

  // Load programs from localStorage when component mounts
  useEffect(() => {
    const savedPrograms = JSON.parse(localStorage.getItem('programs') || '[]');
    setPrograms(savedPrograms);
  }, []);

  // Save programs to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('programs', JSON.stringify(programs));
  }, [programs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProgram({ ...newProgram, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const program = {
      id: Date.now(), // Unique ID based on timestamp
      nama: newProgram.nama,
      deskripsi: newProgram.deskripsi,
      tanggalMulai: newProgram.tanggalMulai,
      tanggalSelesai: newProgram.tanggalSelesai,
      targetAnak: newProgram.targetAnak.split(',').map(id => parseInt(id.trim())),
      status: 'Aktif',
    };
    setPrograms([...programs, program]);
    setNewProgram({ nama: '', deskripsi: '', tanggalMulai: '', tanggalSelesai: '', targetAnak: '' });
  };

  if (!user || !['admin', 'dokter'].includes(user.role)) {
    return <div className="p-6 text-red-500">Akses Ditolak</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Manajemen Program Monitoring Kesehatan</h1>

      {/* Form Tambah Program */}
      <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Tambah Program Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nama"
            placeholder="Nama Program"
            value={newProgram.nama}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
          <textarea
            name="deskripsi"
            placeholder="Deskripsi"
            value={newProgram.deskripsi}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
          <input
            type="date"
            name="tanggalMulai"
            value={newProgram.tanggalMulai}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
          <input
            type="date"
            name="tanggalSelesai"
            value={newProgram.tanggalSelesai}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
          <input
            type="text"
            name="targetAnak"
            placeholder="ID Anak (contoh: 1,2,3)"
            value={newProgram.targetAnak}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Tambah Program
          </button>
        </form>
      </div>

      {/* Daftar Program */}
      <div className="bg-white rounded-2xl shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Daftar Program</h2>
        {programs.length === 0 ? (
          <p>Tidak ada program.</p>
        ) : (
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="bg-pink-200 text-gray-800">
                <th className="px-6 py-3">Nama</th>
                <th className="px-6 py-3">Tanggal Mulai</th>
                <th className="px-6 py-3">Tanggal Selesai</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Target Anak</th>
                <th className="px-6 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr key={program.id} className="bg-blue-200 text-white hover:bg-blue-300">
                  <td className="px-6 py-3">{program.nama}</td>
                  <td className="px-6 py-3">{program.tanggalMulai}</td>
                  <td className="px-6 py-3">{program.tanggalSelesai}</td>
                  <td className="px-6 py-3">{program.status}</td>
                  <td className="px-6 py-3">
                    {program.targetAnak
                      .map(id => dataDummy.find(anak => anak.id === id)?.nama || 'Tidak ditemukan')
                      .join(', ')}
                  </td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => navigate(`/program/${program.id}`)}
                      className="bg-blue-200 hover:bg-blue-300 text-black font-semibold py-1 px-4 rounded shadow mr-2"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => {
                        setPrograms(programs.filter(p => p.id !== program.id));
                      }}
                      className="bg-red-500 text-white font-semibold py-1 px-4 rounded shadow"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Program;