import React, { useEffect, useState } from 'react';
import Sidebar2 from '../../assets/components/Layout/Sidebar2';
import NavbarDokter from '../../assets/components/Layout/NavbarDokter';
import catatanData from '../../data/catatanDokter.json';

const CatatanKesehatan = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [formData, setFormData] = useState({
    nama: '',
    tanggal: '',
    pemeriksa: '',
    suhu: '',
    berat: '',
    tinggi: '',
    ringkasan: '',
    catatan_dokter: '',
    selesai: false
  });

  useEffect(() => {
    setData(catatanData);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTambah = () => {
    setData([...data, formData]);
    setFormData({
      nama: '',
      tanggal: '',
      pemeriksa: '',
      suhu: '',
      berat: '',
      tinggi: '',
      ringkasan: '',
      catatan_dokter: '',
      selesai: false
    });
    setShowForm(false);
  };

  // Filter berdasarkan pencarian
  const filteredData = data.filter((item) => {
    const keyword = search.toLowerCase();
    return (
      item.nama.toLowerCase().includes(keyword) ||
      item.tanggal.toLowerCase().includes(keyword) ||
      item.pemeriksa.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar2 />
      <div className="flex-1 lg:ml-64">
        <NavbarDokter />
        <main className="p-4 sm:p-6 mt-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Catatan Kesehatan Anak</h1>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Cari nama, tanggal, pemeriksa..."
                className="px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
              >
                + Tambah Catatan
              </button>
            </div>
          </div>

          {showForm && (
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="nama" placeholder="Nama Anak" value={formData.nama} onChange={handleInputChange} className="p-2 border rounded" />
                <input name="tanggal" type="date" value={formData.tanggal} onChange={handleInputChange} className="p-2 border rounded" />
                <input name="pemeriksa" placeholder="Pemeriksa" value={formData.pemeriksa} onChange={handleInputChange} className="p-2 border rounded" />
                <input name="suhu" placeholder="Suhu" value={formData.suhu} onChange={handleInputChange} className="p-2 border rounded" />
                <input name="berat" placeholder="Berat" value={formData.berat} onChange={handleInputChange} className="p-2 border rounded" />
                <input name="tinggi" placeholder="Tinggi" value={formData.tinggi} onChange={handleInputChange} className="p-2 border rounded" />
                <input name="ringkasan" placeholder="Ringkasan Kesehatan" value={formData.ringkasan} onChange={handleInputChange} className="p-2 border rounded col-span-2" />
                <textarea name="catatan_dokter" placeholder="Catatan Dokter" value={formData.catatan_dokter} onChange={handleInputChange} className="p-2 border rounded col-span-2" />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button onClick={() => setShowForm(false)} className="bg-gray-400 text-white px-4 py-2 rounded">Batal</button>
                <button onClick={handleTambah} className="bg-blue-600 text-white px-4 py-2 rounded">Simpan</button>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-blue-300 text-white">
                <tr>
                  <th className="px-4 py-3">Nama Anak</th>
                  <th className="px-4 py-3">Tanggal</th>
                  <th className="px-4 py-3">Pemeriksa</th>
                  <th className="px-4 py-3">Suhu</th>
                  <th className="px-4 py-3">Berat</th>
                  <th className="px-4 py-3">Tinggi</th>
                  <th className="px-4 py-3">Ringkasan</th>
                  <th className="px-4 py-3">Catatan Dokter</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {filteredData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}>
                    <td className="px-4 py-2">{item.nama}</td>
                    <td className="px-4 py-2">{item.tanggal}</td>
                    <td className="px-4 py-2">{item.pemeriksa}</td>
                    <td className="px-4 py-2">{item.suhu} °C</td>
                    <td className="px-4 py-2">{item.berat} kg</td>
                    <td className="px-4 py-2">{item.tinggi} cm</td>
                    <td className="px-4 py-2">{item.ringkasan}</td>
                    <td className="px-4 py-2">{item.catatan_dokter}</td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center py-4 text-gray-500">Data tidak ditemukan.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CatatanKesehatan;
