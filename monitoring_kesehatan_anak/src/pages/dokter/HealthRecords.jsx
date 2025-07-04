import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Table } from '../assets/components/UI/Table';
import { Button } from '../assets/components/UI/Button';
import { Modal } from '../assets/components/UI/Modal';
import { AddHealthRecordForm } from '../assets/components/Forms/AddHealthRecordForm';
import { EditHealthRecordForm } from '../assets/components/Forms/EditHealthRecordForm';
import { HealthRecordView } from '../assets/components/Views/HealthRecordView';
import { useData } from '../contexts/DataContext';

export const HealthRecords = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const { healthRecords, addHealthRecord, updateHealthRecord, deleteHealthRecord } = useData();

  const filteredRecords = healthRecords.filter(record =>
    record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.complaint.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { key: 'studentName', label: 'Nama Anak' },
    { key: 'date', label: 'Tanggal' },
    { key: 'parentName', label: 'Orang tua' },
    { key: 'complaint', label: 'Keluhan Anak' },
  ];

  const handleEdit = (record) => {
    setSelectedRecord(record);
    setIsEditModalOpen(true);
  };

  const handleDelete = (record) => {
    deleteHealthRecord(record.id);
  };

  const handleView = (record) => {
    setSelectedRecord(record);
    setIsViewModalOpen(true);
  };

  const handleAddHealthRecord = (healthData) => {
    const newRecord = {
      id: Date.now().toString(),
      studentId: Date.now().toString(),
      studentName: 'Siswa Baru',
      date: healthData.examinationDate,
      parentName: 'Orang Tua',
      complaint: healthData.complaintDescription,
      weight: healthData.weight,
      height: healthData.height,
      armSpan: healthData.armSpan,
      headCircumference: healthData.headCircumference,
      dentalHealth: healthData.dentalHealth,
      eyeHealth: healthData.eyeHealth,
      doctor: healthData.doctor,
      patientHistory: healthData.patientHistory
    };
    
    addHealthRecord(newRecord);
    setIsModalOpen(false);
  };

  const handleEditHealthRecord = (healthData) => {
    if (selectedRecord) {
      const updatedRecord = {
        ...selectedRecord,
        date: healthData.examinationDate,
        complaint: healthData.complaintDescription,
        weight: healthData.weight,
        height: healthData.height,
        armSpan: healthData.armSpan,
        headCircumference: healthData.headCircumference,
        dentalHealth: healthData.dentalHealth,
        eyeHealth: healthData.eyeHealth,
        doctor: healthData.doctor,
        patientHistory: healthData.patientHistory
      };
      
      updateHealthRecord(selectedRecord.id, updatedRecord);
      setIsEditModalOpen(false);
      setSelectedRecord(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Data Riwayat Kesehatan Siswa</h1>
        <div className="flex space-x-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 bg-white"
            />
          </div>
          <Button 
            className="flex items-center space-x-2"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={20} />
            <span>Tambah siswa</span>
          </Button>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6">
        {filteredRecords.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Belum ada data kesehatan siswa. Klik "Tambah siswa" untuk menambahkan data.</p>
          </div>
        ) : (
          <Table
            columns={columns}
            data={filteredRecords}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Pencatatan Data Antropometri"
      >
        <AddHealthRecordForm
          onSubmit={handleAddHealthRecord}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedRecord(null);
        }}
        title="Edit Data Kesehatan"
      >
        {selectedRecord && (
          <EditHealthRecordForm
            record={selectedRecord}
            onSubmit={handleEditHealthRecord}
            onCancel={() => {
              setIsEditModalOpen(false);
              setSelectedRecord(null);
            }}
          />
        )}
      </Modal>

      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="DATA KESEHATAN SISWA"
      >
        {selectedRecord && (
          <HealthRecordView
            record={selectedRecord}
            onClose={() => setIsViewModalOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
};