import React from 'react';
import { Button } from '../UI/Button';
import { Users, Phone, Mail, MapPin, CreditCard as IdCard, Calendar } from 'lucide-react';

export const ParentView = ({ parent, onClose }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center border-b border-gray-200 pb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Users size={40} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{parent.name}</h2>
        <p className="text-gray-600">Orang Tua dari {parent.studentName}</p>
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
              <span className="text-gray-600 font-medium">Nama Lengkap:</span>
              <span className="text-gray-800 font-semibold">{parent.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Nama Anak:</span>
              <span className="text-gray-800">{parent.studentName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">NIK:</span>
              <span className="text-gray-800">{parent.nik || '-'}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">No. KK:</span>
              <span className="text-gray-800">{parent.noKK || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Nomor Telepon:</span>
              <span className="text-gray-800">{parent.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Email:</span>
              <span className="text-gray-800">{parent.email || '-'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Phone className="text-blue-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Informasi Kontak</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <Phone className="text-blue-600" size={20} />
            <div>
              <div className="font-medium text-gray-800">Nomor Telepon</div>
              <div className="text-gray-600">{parent.phone}</div>
            </div>
          </div>
          {parent.email && (
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <Mail className="text-green-600" size={20} />
              <div>
                <div className="font-medium text-gray-800">Email</div>
                <div className="text-gray-600">{parent.email}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Address Information */}
      {parent.address && (
        <div className="bg-yellow-50 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <MapPin className="text-yellow-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Alamat</h3>
          </div>
          <p className="text-gray-700">{parent.address}</p>
        </div>
      )}

      {/* Identity Information */}
      <div className="bg-purple-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <IdCard className="text-purple-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Identitas</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-medium text-gray-800 mb-1">NIK</div>
            <div className="text-gray-600">{parent.nik || 'Tidak tersedia'}</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-medium text-gray-800 mb-1">No. Kartu Keluarga</div>
            <div className="text-gray-600">{parent.noKK || 'Tidak tersedia'}</div>
          </div>
        </div>
      </div>

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