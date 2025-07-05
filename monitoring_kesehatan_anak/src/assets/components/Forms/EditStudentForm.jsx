import React, { useState } from 'react';
import { Button } from '../UI/Button';

export const EditStudentForm = ({ student, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: student.name || '',
    birthDate: student.birthDate || '',
    gender: student.gender || '',
    nik: student.nik || '',
    noKK: student.noKK || '',
    class: student.class || '',
    fatherName: student.fatherName || '',
    motherName: student.motherName || '',
    parentContact: student.parentPhone || '',
    address: student.address || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Data Anak</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nama Anak</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama Lengkap Anak"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Lahir</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Kelamin</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">NIK Anak</label>
            <input
              type="text"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              placeholder="NIK Anak"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">No. KK</label>
            <input
              type="text"
              name="noKK"
              value={formData.noKK}
              onChange={handleChange}
              placeholder="Nomor Kartu Keluarga"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kelas</label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              placeholder="Kelas"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Data Orang Tua</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nama Ayah</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Nama Lengkap Ayah"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nama Ibu</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Nama Lengkap Ibu"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kontak Orang Tua</label>
            <input
              type="tel"
              name="parentContact"
              value={formData.parentContact}
              onChange={handleChange}
              placeholder="Nomor Telepon"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alamat</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Alamat Lengkap"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Batal
        </Button>
        <Button type="submit">
          Simpan Perubahan
        </Button>
      </div>
    </form>
  );
};