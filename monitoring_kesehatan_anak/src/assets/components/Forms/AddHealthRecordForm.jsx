import React, { useState } from 'react';
import { Button } from '../UI/Button';

export const AddHealthRecordForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    armSpan: '',
    headCircumference: '',
    dentalHealth: '',
    eyeHealth: '',
    complaintDescription: '',
    doctor: '',
    examinationDate: '',
    patientHistory: ''
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
          <label className="block text-sm font-medium text-gray-700 mb-2">Berat Badan (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Berat Badan"
            className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tinggi Badan (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Tinggi Badan"
            className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Lingkar Lengan (cm)</label>
          <input
            type="number"
            name="armSpan"
            value={formData.armSpan}
            onChange={handleChange}
            placeholder="Lingkar Lengan Atas"
            className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Lingkar Kepala (cm)</label>
          <input
            type="number"
            name="headCircumference"
            value={formData.headCircumference}
            onChange={handleChange}
            placeholder="Lingkar Kepala"
            className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Kesehatan gigi</label>
          <input
            type="text"
            name="dentalHealth"
            value={formData.dentalHealth}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Kesehatan mata</label>
          <input
            type="text"
            name="eyeHealth"
            value={formData.eyeHealth}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Pemeriksaan</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi keluhan</label>
            <textarea
              name="complaintDescription"
              value={formData.complaintDescription}
              onChange={handleChange}
              placeholder="Deskripsi Keluhan"
              rows={3}
              className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dokter</label>
              <input
                type="text"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                placeholder="Masukan Nama Dokter"
                className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal pemeriksaan</label>
              <input
                type="date"
                name="examinationDate"
                value={formData.examinationDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Riwayat Data Pasien</label>
            <input
              type="text"
              name="patientHistory"
              value={formData.patientHistory}
              onChange={handleChange}
              placeholder="Riwayat Data Pasien"
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
          Simpan
        </Button>
      </div>
    </form>
  );
};