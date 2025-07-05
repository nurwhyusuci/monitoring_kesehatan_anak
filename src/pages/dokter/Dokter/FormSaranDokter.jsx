import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FormSaranDokter = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    dokter: '',
    tanggal: '',
    riwayat: state?.gejala || '',
    saran: '',
  });

  const [catatanDokter, setCatatanDokter] = useState([]);

  useEffect(() => {
    // Mengambil data saran dokter yang sudah disimpan di LocalStorage
    const storedSaranDokter = JSON.parse(localStorage.getItem('saranDokter')) || [];
    setCatatanDokter(storedSaranDokter);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Menyimpan data ke localStorage
    const saranDokterData = {
      dokter: form.dokter,
      tanggal: form.tanggal,
      riwayat: form.riwayat,
      saran: form.saran,
    };

    const storedSaranDokter = JSON.parse(localStorage.getItem('saranDokter')) || [];
    storedSaranDokter.push(saranDokterData);
    localStorage.setItem('saranDokter', JSON.stringify(storedSaranDokter));

    // Menyimpan data saran dokter ke state agar langsung ditampilkan di bawah form
    setCatatanDokter([...storedSaranDokter, saranDokterData]);

    // Tampilkan alert sukses
    alert('Saran dokter berhasil disimpan!');

    // Menavigasi ke halaman riwayat-kesehatan atau halaman lain jika diperlukan
    navigate('/riwayat-kesehatan');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white p-10">
      <h1 className="text-4xl font-bold text-white mb-8">Saran Dokter</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-blue-100 p-6 rounded-xl max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Dokter</label>
            <input
              type="text"
              name="dokter"
              placeholder="Masukkan Nama Dokter"
              value={form.dokter}
              onChange={handleChange}
              className="w-full p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Tanggal</label>
            <input
              type="date"
              name="tanggal"
              value={form.tanggal}
              onChange={handleChange}
              className="w-full p-2 rounded"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block font-semibold mb-2">Riwayat Data Anak</label>
          <input
            type="text"
            name="riwayat"
            value={form.riwayat}
            onChange={handleChange}
            className="w-full p-2 rounded"
            readOnly
          />
        </div>

        <div className="mt-4">
          <label className="block font-semibold mb-2">Saran Dokter</label>
          <textarea
            name="saran"
            rows="4"
            placeholder="Masukkan saran atau tips dari dokter..."
            value={form.saran}
            onChange={handleChange}
            className="w-full p-2 rounded resize-none"
            required
          ></textarea>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-blue-400 px-6 py-2 rounded text-white hover:bg-blue-500 transition"
          >
            Kembali
          </button>
          <button
            type="submit"
            className="bg-blue-500 px-6 py-2 rounded text-white hover:bg-blue-600 transition"
          >
            Simpan
          </button>
        </div>
      </form>

      {/* Menampilkan data yang telah disimpan di bawah formulir */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-white">Saran Dokter yang Telah Disimpan:</h2>
        <div className="space-y-4 mt-6">
          {catatanDokter.length > 0 ? (
            catatanDokter.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-600">{item.dokter}</h3>
                <p className="text-sm text-gray-600">{item.tanggal}</p>
                <p className="mt-2 text-gray-800">{item.saran}</p>
                <div className="mt-2 flex justify-end">
                  <span className="text-sm text-gray-500 italic">{item.riwayat}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">Belum ada saran yang disimpan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSaranDokter;
