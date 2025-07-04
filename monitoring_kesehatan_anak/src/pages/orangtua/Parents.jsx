import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Table } from '../assets/components/UI/Table';
import { Button } from '../assets/components/UI/Button';
import { Modal } from '../assets/components/UI/Modal';
import { AddParentForm } from '../assets/components/Forms/AddParentForm';
import { EditParentForm } from '../assets/components/Forms/EditParentForm';
import { ParentView } from '../assets/components/Views/ParentView';
import { useData } from '../contexts/DataContext';

export const Parents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedParent, setSelectedParent] = useState(null);
  const { parents, addParent, updateParent, deleteParent } = useData();

  const filteredParents = parents.filter(parent =>
    parent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    parent.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    parent.phone.includes(searchTerm)
  );

  const columns = [
    { key: 'name', label: 'Nama Orang Tua' },
    { key: 'studentName', label: 'Nama Anak' },
    { key: 'phone', label: 'Kontak' },
  ];

  const handleEdit = (parent) => {
    setSelectedParent(parent);
    setIsEditModalOpen(true);
  };

  const handleDelete = (parent) => {
    deleteParent(parent.id);
  };

  const handleView = (parent) => {
    setSelectedParent(parent);
    setIsViewModalOpen(true);
  };

  const handleAddParent = (parentData) => {
    const newParent = {
      id: Date.now().toString(),
      name: parentData.name,
      studentName: parentData.studentName,
      phone: parentData.contact,
      email: parentData.email,
      nik: parentData.nik,
      noKK: parentData.noKK,
      address: parentData.address
    };
    
    addParent(newParent);
    setIsModalOpen(false);
  };

  const handleEditParent = (parentData) => {
    if (selectedParent) {
      const updatedParent = {
        ...selectedParent,
        name: parentData.name,
        studentName: parentData.studentName,
        phone: parentData.contact,
        email: parentData.email,
        nik: parentData.nik,
        noKK: parentData.noKK,
        address: parentData.address
      };
      
      updateParent(selectedParent.id, updatedParent);
      setIsEditModalOpen(false);
      setSelectedParent(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Data Siswa & Orang tua</h1>
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
            <span>Tambah Orang Tua</span>
          </Button>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6">
        {filteredParents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Belum ada data orang tua. Klik "Tambah Orang Tua" untuk menambahkan data.</p>
          </div>
        ) : (
          <Table
            columns={columns}
            data={filteredParents}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Pencatatan Data"
      >
        <AddParentForm
          onSubmit={handleAddParent}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedParent(null);
        }}
        title="Edit Data Orang Tua"
      >
        {selectedParent && (
          <EditParentForm
            parent={selectedParent}
            onSubmit={handleEditParent}
            onCancel={() => {
              setIsEditModalOpen(false);
              setSelectedParent(null);
            }}
          />
        )}
      </Modal>

      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Data Wali"
      >
        {selectedParent && (
          <ParentView
            parent={selectedParent}
            onClose={() => setIsViewModalOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
};