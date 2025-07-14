import React, { useState } from 'react';
import { Eye, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar2 from '../../assets/components/Layout/Sidebar2';
import NavbarDokter from '../../assets/components/Layout/NavbarDokter';
import initialData from '../../data/Antropometri.json';

const DataAntropometri = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    tanggal: '',
    orangTua: '',
    kelas: '',
    berat: '',
    tinggi: '',
    kepala: '',
    lingkarLengan: ''
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTambahData = () => {
    const newEntry = {
      id: data.length + 1,
      ...formData
    };
    setData([...data, newEntry]);
    setFormData({
      nama: '',
      tanggal: '',
      orangTua: '',
      kelas: '',
      berat: '',
      tinggi: '',
      kepala: '',
      lingkarLengan: ''
    });
    setShowForm(false);
  };

  const handleView = (anak) => {
    navigate('/detail-antropometri', { state: anak });
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar2 />
      <div className="flex-1 lg:ml-64">
        <NavbarDokter />
        <main className="p-4 sm:p-6 mt-16">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Data Antropometri Anak</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow"
            >
              <PlusCircle size={18} />
              {showForm ? 'Tutup' : 'Tambah Data'}
            </button>
          </div>

          {/* Form Tambah Data */}
          {showForm && (
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  placeholder="Nama Anak"
                  className="p-2 border rounded"
                />
                <input
                  name="tanggal"
                  type="date"
                  value={formData.tanggal}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                />
                <input
                  name="orangTua"
                  value={formData.orangTua}
                  onChange={handleInputChange}
                  placeholder="Nama Orang Tua"
                  className="p-2 border rounded"
                />
                <input
                  name="kelas"
                  value={formData.kelas}
                  onChange={handleInputChange}
                  placeholder="Kelas"
                  className="p-2 border rounded"
                />
                <input
                  name="berat"
                  value={formData.berat}
                  onChange={handleInputChange}
                  placeholder="Berat (kg)"
                  className="p-2 border rounded"
                />
                <input
                  name="tinggi"
                  value={formData.tinggi}
                  onChange={handleInputChange}
                  placeholder="Tinggi (cm)"
                  className="p-2 border rounded"
                />
                <input
                  name="kepala"
                  value={formData.kepala}
                  onChange={handleInputChange}
                  placeholder="Lingkar Kepala (cm)"
                  className="p-2 border rounded"
                />
                <input
                  name="lingkarLengan"
                  value={formData.lingkarLengan}
                  onChange={handleInputChange}
                  placeholder="Lingkar Lengan (cm)"
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleTambahData}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Simpan Data
                </button>
              </div>
            </div>
          )}

          {/* Tabel Data */}
          <div className="bg-white rounded-2xl shadow-md p-4 overflow-x-auto">
            <table className="min-w-full text-sm text-left whitespace-nowrap">
              <thead className="bg-blue-300 text-white">
                <tr>
                  <th className="px-4 py-3">Nama Anak</th>
                  <th className="px-4 py-3">Tanggal</th>
                  <th className="px-4 py-3">Orang Tua</th>
                  <th className="px-4 py-3">Kelas</th>
                  <th className="px-4 py-3">Berat</th>
                  <th className="px-4 py-3">Tinggi</th>
                  <th className="px-4 py-3">Lingkar Lengan</th>
                  <th className="px-4 py-3">Lingkar Kepala</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {data.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${
                      index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'
                    } hover:bg-blue-300 transition-colors`}
                  >
                    <td className="px-4 py-2">{item.nama}</td>
                    <td className="px-4 py-2">{item.tanggal}</td>
                    <td className="px-4 py-2">{item.orangTua}</td>
                    <td className="px-4 py-2 text-center">{item.kelas}</td>
                    <td className="px-4 py-2">{item.berat}</td>
                    <td className="px-4 py-2">{item.tinggi} cm</td>
                    <td className="px-4 py-2">{item.lingkarLengan || '-'}</td>
                    <td className="px-4 py-2">{item.kepala} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataAntropometri;
