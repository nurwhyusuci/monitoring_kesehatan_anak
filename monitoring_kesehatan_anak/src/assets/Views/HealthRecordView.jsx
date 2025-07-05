import React from 'react';
import { Button } from '../components/UI/Button';
import { Download, User, Calendar, Stethoscope, Heart, Users } from 'lucide-react';
import jsPDF from 'jspdf';

export const HealthRecordView = ({ record, onClose }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(20);
    doc.text('LAPORAN KESEHATAN SISWA', 20, 30);
    
    doc.setFontSize(16);
    doc.text('OMKA Health System', 20, 45);
    
    // Student Info
    doc.setFontSize(14);
    doc.text('DATA SISWA', 20, 65);
    doc.setFontSize(12);
    doc.text(`Nama: ${record.studentName}`, 20, 80);
    doc.text(`Tanggal Pemeriksaan: ${record.date}`, 20, 95);
    doc.text(`Orang Tua: ${record.parentName}`, 20, 110);
    
    // Health Data
    doc.setFontSize(14);
    doc.text('DATA ANTROPOMETRI', 20, 130);
    doc.setFontSize(12);
    doc.text(`Berat Badan: ${record.weight || '-'} kg`, 20, 145);
    doc.text(`Tinggi Badan: ${record.height || '-'} cm`, 20, 160);
    doc.text(`Lingkar Lengan: ${record.armSpan || '-'} cm`, 20, 175);
    doc.text(`Lingkar Kepala: ${record.headCircumference || '-'} cm`, 20, 190);
    
    // Health Status
    doc.setFontSize(14);
    doc.text('STATUS KESEHATAN', 20, 210);
    doc.setFontSize(12);
    doc.text(`Kesehatan Gigi: ${record.dentalHealth || '-'}`, 20, 225);
    doc.text(`Kesehatan Mata: ${record.eyeHealth || '-'}`, 20, 240);
    
    // Examination
    doc.setFontSize(14);
    doc.text('PEMERIKSAAN', 20, 260);
    doc.setFontSize(12);
    doc.text(`Keluhan: ${record.complaint || '-'}`, 20, 275);
    doc.text(`Dokter: ${record.doctor || '-'}`, 20, 290);
    
    doc.save(`laporan-kesehatan-${record.studentName}.pdf`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center border-b border-gray-200 pb-6">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">O</span>
          </div>
          <div>
            <span className="text-green-500 font-bold text-2xl">M</span>
            <span className="text-yellow-500 font-bold text-2xl">K</span>
            <span className="text-green-500 font-bold text-2xl">A</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">LAPORAN KESEHATAN SISWA</h2>
        <p className="text-gray-600">Sistem Manajemen Kesehatan Sekolah</p>
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
              <span className="text-gray-600 font-medium">Nama Siswa:</span>
              <span className="text-gray-800 font-semibold">{record.studentName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Tanggal Pemeriksaan:</span>
              <span className="text-gray-800">{record.date}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Orang Tua:</span>
              <span className="text-gray-800">{record.parentName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Dokter Pemeriksa:</span>
              <span className="text-gray-800">{record.doctor || '-'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Anthropometric Data */}
      <div className="bg-green-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Heart className="text-green-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Data Antropometri</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-1">{record.weight || '-'}</div>
            <div className="text-sm text-gray-600">Berat Badan (kg)</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-1">{record.height || '-'}</div>
            <div className="text-sm text-gray-600">Tinggi Badan (cm)</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-purple-600 mb-1">{record.armSpan || '-'}</div>
            <div className="text-sm text-gray-600">Lingkar Lengan (cm)</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-orange-600 mb-1">{record.headCircumference || '-'}</div>
            <div className="text-sm text-gray-600">Lingkar Kepala (cm)</div>
          </div>
        </div>
      </div>

      {/* Health Status */}
      <div className="bg-yellow-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Users className="text-yellow-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Status Kesehatan</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <Users className="text-blue-600 mt-1" size={20} />
            <div>
              <div className="font-medium text-gray-800 mb-1">Kesehatan Gigi</div>
              <div className="text-gray-600">{record.dentalHealth || 'Tidak ada data'}</div>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <Users className="text-green-600 mt-1" size={20} />
            <div>
              <div className="font-medium text-gray-800 mb-1">Kesehatan Mata</div>
              <div className="text-gray-600">{record.eyeHealth || 'Tidak ada data'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Examination Details */}
      <div className="bg-red-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Stethoscope className="text-red-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Detail Pemeriksaan</h3>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-medium text-gray-800 mb-2">Keluhan Utama</div>
            <div className="text-gray-600">{record.complaint || 'Tidak ada keluhan'}</div>
          </div>
          {record.patientHistory && (
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-medium text-gray-800 mb-2">Riwayat Pasien</div>
              <div className="text-gray-600">{record.patientHistory}</div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Calendar size={16} />
          <span>Dicetak pada: {new Date().toLocaleDateString('id-ID')}</span>
        </div>
        <p>OMKA Health System - Sistem Manajemen Kesehatan Sekolah</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
        <Button
          onClick={generatePDF}
          className="flex items-center space-x-2 bg-green-500 hover:bg-green-600"
        >
          <Download size={16} />
          <span>Unduh Laporan PDF</span>
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Tutup
        </Button>
      </div>
    </div>
  );
};