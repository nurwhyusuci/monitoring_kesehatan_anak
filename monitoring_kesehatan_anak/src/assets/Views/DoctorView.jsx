import React from 'react';
import { Button } from '../components/UI/Button';
import { Stethoscope, Phone, MapPin, Calendar, CreditCard as IdCard, Award } from 'lucide-react';

export const DoctorView = ({ doctor, onClose }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center border-b border-gray-200 pb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Stethoscope size={40} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Dr. {doctor.name}</h2>
        <p className="text-gray-600">{doctor.specialization}</p>
      </div>

      {/* Doctor Information */}
      <div className="bg-purple-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Stethoscope className="text-purple-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Informasi Dokter</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Nama Lengkap:</span>
              <span className="text-gray-800 font-semibold">Dr. {doctor.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">ID Dokter:</span>
              <span className="text-gray-800">{doctor.doctorId || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Spesialisasi:</span>
              <span className="text-gray-800">{doctor.specialization}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Asal Klinik:</span>
              <span className="text-gray-800">{doctor.clinicOrigin || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Nomor Telepon:</span>
              <span className="text-gray-800">{doctor.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Bertugas Sejak:</span>
              <span className="text-gray-800">{doctor.schedule}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specialization */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Award className="text-blue-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Spesialisasi</h3>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">{doctor.specialization}</div>
            <div className="text-gray-600">Bidang Keahlian</div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-green-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Phone className="text-green-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Informasi Kontak</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <Phone className="text-green-600" size={20} />
            <div>
              <div className="font-medium text-gray-800">Nomor Telepon</div>
              <div className="text-gray-600">{doctor.phone}</div>
            </div>
          </div>
          {doctor.clinicOrigin && (
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <MapPin className="text-blue-600" size={20} />
              <div>
                <div className="font-medium text-gray-800">Asal Puskesmas/RS</div>
                <div className="text-gray-600">{doctor.clinicOrigin}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Professional Information */}
      <div className="bg-yellow-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <IdCard className="text-yellow-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Informasi Profesional</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-medium text-gray-800 mb-1">ID Dokter</div>
            <div className="text-gray-600">{doctor.doctorId || 'Tidak tersedia'}</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-medium text-gray-800 mb-1">Masa Tugas</div>
            <div className="text-gray-600">Sejak {doctor.schedule}</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Calendar size={16} />
          <span>Data terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</span>
        </div>
        <p>MKA Health System - Sistem Manajemen Kesehatan Anak</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
        <Button variant="secondary" onClick={onClose}>
          Tutup
        </Button>
      </div>
    </div>
  );
};