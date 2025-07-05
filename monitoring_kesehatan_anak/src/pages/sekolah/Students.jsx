import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Table } from '../../assets/components/UI/Table';
import { Button } from '../../assets/components/UI/Button';
import { Modal } from '../../assets/components/UI/Modal';
import { AddStudentForm } from '../../assets/components/Forms/AddStudentForm';
import { EditStudentForm } from '../../assets/components/Forms/EditStudentForm';
import { StudentView } from '../../assets/Views/StudentView';
import { useData } from '../../contexts/DataContext';

export const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const { students, addStudent, updateStudent, deleteStudent } = useData();

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.nis.includes(searchTerm) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { key: 'name', label: 'Nama Anak' },
    { key: 'class', label: 'Kelas' },
    { key: 'parentName', label: 'Orang tua' },
  ];

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setIsEditModalOpen(true);
  };

  const handleDelete = (student) => {
    deleteStudent(student.id);
  };

  const handleView = (student) => {
    setSelectedStudent(student);
    setIsViewModalOpen(true);
  };

  const handleAddStudent = (studentData) => {
    const newStudent = {
      id: Date.now().toString(),
      name: studentData.name,
      nis: `23${String(students.length + 1).padStart(4, '0')}`,
      class: studentData.class,
      age: new Date().getFullYear() - new Date(studentData.birthDate).getFullYear(),
      parentName: studentData.fatherName,
      parentPhone: studentData.parentContact,
      birthDate: studentData.birthDate,
      gender: studentData.gender,
      nik: studentData.nik,
      noKK: studentData.noKK,
      fatherName: studentData.fatherName,
      motherName: studentData.motherName,
      address: studentData.address
    };
    
    addStudent(newStudent);
    setIsModalOpen(false);
  };

  const handleEditStudent = (studentData) => {
    if (selectedStudent) {
      const updatedStudent = {
        ...selectedStudent,
        name: studentData.name,
        class: studentData.class,
        age: new Date().getFullYear() - new Date(studentData.birthDate).getFullYear(),
        parentName: studentData.fatherName,
        parentPhone: studentData.parentContact,
        birthDate: studentData.birthDate,
        gender: studentData.gender,
        nik: studentData.nik,
        noKK: studentData.noKK,
        fatherName: studentData.fatherName,
        motherName: studentData.motherName,
        address: studentData.address
      };
      
      updateStudent(selectedStudent.id, updatedStudent);
      setIsEditModalOpen(false);
      setSelectedStudent(null);
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
            <span>Tambah siswa</span>
          </Button>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6">
        {filteredStudents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Belum ada data siswa. Klik "Tambah siswa" untuk menambahkan data.</p>
          </div>
        ) : (
          <Table
            columns={columns}
            data={filteredStudents}
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
        <AddStudentForm
          onSubmit={handleAddStudent}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedStudent(null);
        }}
        title="Edit Data Siswa"
      >
        {selectedStudent && (
          <EditStudentForm
            student={selectedStudent}
            onSubmit={handleEditStudent}
            onCancel={() => {
              setIsEditModalOpen(false);
              setSelectedStudent(null);
            }}
          />
        )}
      </Modal>

      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Data Anak"
      >
        {selectedStudent && (
          <StudentView
            student={selectedStudent}
            onClose={() => setIsViewModalOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
};