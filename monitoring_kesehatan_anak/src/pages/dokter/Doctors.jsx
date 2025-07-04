import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Card } from '../../assets/components/UI/Card';
import { Button } from '../assets/components/UI/Button';
import { Modal } from '../assets/components/UI/Modal';
import { AddDoctorForm } from '../assets/components/Forms/AddDoctorForm';
import { EditDoctorForm } from '../assets/components/Forms/EditDoctorForm';
import { DoctorView } from '../assets/components/Views/DoctorView';
import { useData } from '../assets/contexts/DataContext';

export const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const { doctors, addDoctor, updateDoctor, deleteDoctor } = useData();

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDoctor = (doctorData) => {
    const newDoctor = {
      id: Date.now().toString(),
      name: doctorData.name,
      specialization: doctorData.specialization,
      phone: doctorData.contact,
      schedule: doctorData.since,
      doctorId: doctorData.doctorId,
      clinicOrigin: doctorData.clinicOrigin
    };
    
    addDoctor(newDoctor);
    setIsModalOpen(false);
  };

  const handleEdit = (doctor) => {
    setSelectedDoctor(doctor);
    setIsEditModalOpen(true);
  };

  const handleEditDoctor = (doctorData) => {
    if (selectedDoctor) {
      const updatedDoctor = {
        ...selectedDoctor,
        name: doctorData.name,
        specialization: doctorData.specialization,
        phone: doctorData.contact,
        schedule: doctorData.since,
        doctorId: doctorData.doctorId,
        clinicOrigin: doctorData.clinicOrigin
      };
      
      updateDoctor(selectedDoctor.id, updatedDoctor);
      setIsEditModalOpen(false);
      setSelectedDoctor(null);
    }
  };

  const handleDelete = (doctorId) => {
    deleteDoctor(doctorId);
  };

  const handleView = (doctor) => {
    setSelectedDoctor(doctor);
    setIsViewModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Data Dokter</h1>
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
            <span>Tambah Dokter</span>
          </Button>
        </div>
      </div>

      {filteredDoctors.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Belum ada data dokter. Klik "Tambah Dokter" untuk menambahkan data.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{doctor.specialization}</p>
                  <p className="text-sm text-gray-500 mb-2">{doctor.phone}</p>
                  <p className="text-xs text-gray-400">{doctor.schedule}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="flex-1"
                  onClick={() => handleEdit(doctor)}
                >
                  Edit
                </Button>
                <Button 
                  size="sm" 
                  variant="danger" 
                  className="flex-1"
                  onClick={() => handleDelete(doctor.id)}
                >
                  Delete
                </Button>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="flex-1 bg-gray-600 text-white hover:bg-gray-700"
                  onClick={() => handleView(doctor)}
                >
                  View
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Identitas dokter"
      >
        <AddDoctorForm
          onSubmit={handleAddDoctor}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedDoctor(null);
        }}
        title="Edit Data Dokter"
      >
        {selectedDoctor && (
          <EditDoctorForm
            doctor={selectedDoctor}
            onSubmit={handleEditDoctor}
            onCancel={() => {
              setIsEditModalOpen(false);
              setSelectedDoctor(null);
            }}
          />
        )}
      </Modal>

      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Data dokter"
      >
        {selectedDoctor && (
          <DoctorView
            doctor={selectedDoctor}
            onClose={() => setIsViewModalOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
};