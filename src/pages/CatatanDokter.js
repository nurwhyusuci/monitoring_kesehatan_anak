import React, { useState } from 'react';

const CatatanDokter = () => {
  const [catatanList, setCatatanList] = useState([
    {
      nama: 'Aldy Putra',
      dokter: 'Dr Vino',
      tanggal: '24 April 2024',
      catatan: 'Tumbuh kembang anak baik, kecepatan pertambahan berat badan cukup.'
    },
    {
      nama: 'Budi Santosa',
      dokter: 'Dr Vino',
      tanggal: '08 April 2024',
      catatan: 'Anak sedang dalam pemulihan dari infeksi saluran pernapasan.'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    dokter: '',
    tanggal: '',
    catatan: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSimpan = () => {
    setCatatanList([...catatanList, formData]);
    setFormData({ nama: '', dokter: '', tanggal: '', catatan: '' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Catatan Dokter</h1>

      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-200 text-black px-6 py-2 rounded mb-6 font-semibold"
      >
        + Tambah
      </button>

      {showForm && (
        <div className="bg-blue-100 p-6 rounded-xl shadow-md max-w-4xl mx-auto mb-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="nama"
              placeholder="Nama Anak"
              value={formData.nama}
              onChange={handleInputChange}
              className="p-2 rounded"
            />
            <input
              type="text"
              name="dokter"
              placeholder="Nama Dokter"
              value={formData.dokter}
              onChange={handleInputChange}
              className="p-2 rounded"
            />
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleInputChange}
              className="p-2 rounded"
            />
            <input
              type="text"
              name="catatan"
              placeholder="Catatan"
              value={formData.catatan}
              onChange={handleInputChange}
              className="col-span-2 p-2 rounded"
            />
          </div>

          <div className="mt-4 flex justify-end gap-4">
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-400 text-white px-6 py-2 rounded"
            >
              Batal
            </button>
            <button
              onClick={handleSimpan}
              className="bg-blue-500 text-white px-6 py-2 rounded"
            >
              Simpan
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {catatanList.map((item, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">{item.nama}</h3>
              <p className="text-sm">{item.dokter}</p>
              <p className="text-gray-600">{item.catatan}</p>
            </div>
            <p className="text-sm text-gray-600">{item.tanggal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatatanDokter;
