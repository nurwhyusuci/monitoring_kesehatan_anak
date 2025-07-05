import React, { useState } from 'react';
import { Button } from '../UI/Button';

export const EditDoctorForm = ({ doctor, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: doctor.name || '',
    doctorId: doctor.doctorId || '',
    clinicOrigin: doctor.clinicOrigin || '',
    specialization: doctor.specialization || '',
    contact: doctor.phone || '',
    since: doctor.schedule || ''
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nama Dokter</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukan Nama Dokter"
            className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ID Dokter</label>
          <input
            type="text"
            name="doctorId"
            value={formData.doctorId}
            onChange={handleChange}
            placeholder="ID Dokter"
            className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Asal Puskesmas/RS</label>
          <input
            type="text"
            name="clinicOrigin"
            value={formData.clinicOrigin}
            onChange={handleChange}
            placeholder="Asal Puskesmas/RS"
            className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Spesialisasi</label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            placeholder="Spesialisasi"
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
          <label className="block text-sm font-medium text-gray-700 mb-2">Sejak</label>
          <input
            type="text"
            name="since"
            value={formData.since}
            onChange={handleChange}
            placeholder="Sejak kapan bertugas"
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
          Simpan Perubahan
        </Button>
      </div>
    </form>
  );
};