import React from 'react';
import { Button } from '../components/UI/Button';
import { User, Calendar, Phone, MapPin, Users, CreditCard as IdCard } from 'lucide-react';

export const StudentView = ({ student, onClose }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center border-b border-gray-200 pb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <User size={40} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{student.name}</h2>
        <p className="text-gray-600">NIS: {student.nis}</p>
      </div>

      {/* Student Information */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <User className="text-blue-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Informasi Siswa</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Nama Lengkap:</span>
              <span className="text-gray-800 font-semibold">{student.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">NIS:</span>
              <span className="text-gray-800">{student.nis}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Kelas:</span>
              <span className="text-gray-800">{student.class}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Umur:</span>
              <span className="text-gray-800">{student.age} tahun</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Tanggal Lahir:</span>
              <span className="text-gray-800">{student.birthDate || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Jenis Kelamin:</span>
              <span className="text-gray-800">{student.gender || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-1 text-gray-600 font-medium">
                <IdCard size={16} className="text-blue-600" />
                NIK:
              </span>
              <span className="text-gray-800">{student.nik || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">No. KK:</span>
              <span className="text-gray-800">{student.noKK || '-'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Parent Information */}
      <div className="bg-green-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Users className="text-green-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Informasi Orang Tua</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Nama Ayah:</span>
              <span className="text-gray-800">{student.fatherName || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Nama Ibu:</span>
              <span className="text-gray-800">{student.motherName || '-'}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="flex items-center gap-1 text-gray-600 font-medium">
                <Phone size={16} className="text-green-600" />
                Kontak:
              </span>
              <span className="text-gray-800">{student.parentPhone || '-'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Address Information */}
      {student.address && (
        <div className="bg-yellow-50 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <MapPin className="text-yellow-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Alamat</h3>
          </div>
          <p className="text-gray-700">{student.address}</p>
        </div>
      )}

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Calendar size={16} />
          <span>Data terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</span>
        </div>
        <p>OMKA Health System - Sistem Manajemen Kesehatan Sekolah</p>
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
