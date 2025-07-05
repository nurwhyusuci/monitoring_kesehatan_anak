import React, { useState } from 'react';
import { Button } from '../UI/Button';

export const AddParentForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    studentName: '',
    contact: '',
    email: '',
    nik: '',
    noKK: '',
    address: ''
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
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Data Orang Tua</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nama Orang Tua</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama Lengkap Orang Tua"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nama Anak</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Nama Anak"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kontak</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Nomor Telepon"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">NIK</label>
            <input
              type="text"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              placeholder="NIK Orang Tua"
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
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Alamat</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Alamat Lengkap"
            rows={3}
            className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Batal
        </Button>
        <Button type="submit">
          Simpan
        </Button>
      </div>
    </form>
  );
};