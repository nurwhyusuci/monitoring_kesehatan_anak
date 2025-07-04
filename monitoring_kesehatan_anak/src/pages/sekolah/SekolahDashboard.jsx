import React, { useState } from 'react';
import { Card } from '../../assets/components/UI/Card';
import { Modal } from '../../assets/components/UI/Modal';
import { Button } from '../../assets/components/UI/Button';
import { useData } from '../../contexts/DataContext';
import {
  Users, Heart, Stethoscope, Calendar, TrendingUp, Activity,
  CheckCircle, BarChart3, Search
} from 'lucide-react';

const SekolahDashboard = ({ onNavigate }) => {
  const { students, healthRecords, doctors, parents } = useData();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', data: [], searchTerm: '' });

  const dashboardStats = {
    studentsCount: students.length,
    parentsCount: parents.length,
    healthRecordsCount: healthRecords.length,
    doctorsCount: doctors.length,
  };

  const recentHealthRecords = healthRecords.slice(-5).reverse();

  const getHealthTrends = () => {
    const trends = {
      totalCheckups: healthRecords.length,
      recentCheckups: healthRecords.filter(record => {
        const recordDate = new Date(record.date);
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return recordDate >= oneWeekAgo;
      }).length,
      commonComplaints: healthRecords.reduce((acc, record) => {
        const complaint = record.complaint?.toLowerCase() || '';
        if (complaint.includes('demam')) acc.demam++;
        else if (complaint.includes('batuk')) acc.batuk++;
        else if (complaint.includes('pilek')) acc.pilek++;
        else if (complaint.includes('sakit kepala')) acc.sakitKepala++;
        else if (complaint.includes('mual')) acc.mual++;
        else if (complaint.includes('diare')) acc.diare++;
        else if (complaint.includes('flu')) acc.flu++;
        else if (complaint.includes('pusing')) acc.pusing++;
        else acc.lainnya++;
        return acc;
      }, {
        demam: 0, batuk: 0, pilek: 0, sakitKepala: 0,
        mual: 0, diare: 0, flu: 0, pusing: 0, lainnya: 0
      }),
      healthyStudents: students.length - healthRecords.length,
      monthlyCheckups: healthRecords.filter(record => {
        const recordDate = new Date(record.date);
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        return recordDate >= oneMonthAgo;
      }).length
    };
    return trends;
  };

  const healthTrends = getHealthTrends();

  const handleHealthSummaryClick = (type) => {
    let title = '';
    let data = [];

    switch (type) {
      case 'total':
        title = 'Total Pemeriksaan';
        data = healthRecords;
        break;
      case 'weekly':
        title = 'Pemeriksaan Minggu Ini';
        data = healthRecords.filter(record => {
          const recordDate = new Date(record.date);
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          return recordDate >= oneWeekAgo;
        });
        break;
      case 'healthy':
        title = 'Siswa Sehat';
        data = students.filter(student =>
          !healthRecords.some(record => record.studentName === student.name)
        );
        break;
      case 'monthly':
        title = 'Pemeriksaan Bulan Ini';
        data = healthRecords.filter(record => {
          const recordDate = new Date(record.date);
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
          return recordDate >= oneMonthAgo;
        });
        break;
      default:
        return;
    }

    setModalData({ title, data, searchTerm: '' });
    setShowModal(true);
  };

  const filteredModalData = modalData.data.filter(item => {
    if (modalData.title === 'Siswa Sehat') {
      return item.name?.toLowerCase().includes(modalData.searchTerm.toLowerCase()) ||
        item.class?.toLowerCase().includes(modalData.searchTerm.toLowerCase());
    } else {
      return item.studentName?.toLowerCase().includes(modalData.searchTerm.toLowerCase()) ||
        item.complaint?.toLowerCase().includes(modalData.searchTerm.toLowerCase()) ||
        item.date?.includes(modalData.searchTerm);
    }
  });

  const generateWeeklyData = () => {
    const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
    const diseases = ['Demam', 'Batuk', 'Pilek', 'Sakit Kepala', 'Mual', 'Diare', 'Flu', 'Pusing'];
    return { days, diseases };
  };

  const { days, diseases } = generateWeeklyData();

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Selamat datang di Sistem Manajemen Kesehatan Sekolah OMKA</p>
      </div>

      {/* 📊 Kartu Statistik Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Siswa Terdaftar</p>
              <p className="text-3xl font-bold">{dashboardStats.studentsCount}</p>
              <p className="text-blue-200 text-xs mt-1">Total siswa aktif</p>
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Users size={28} />
            </div>
          </div>
        </Card>
        {/* ... kartu lainnya (tetap sama seperti versi kamu sebelumnya) */}
      </div>

      {/* 💬 Modal Ringkasan */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalData.title}
      >
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari data..."
              value={modalData.searchTerm}
              onChange={(e) =>
                setModalData(prev => ({ ...prev, searchTerm: e.target.value }))
              }
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div className="max-h-96 overflow-y-auto space-y-2">
            {filteredModalData.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Tidak ada data ditemukan</p>
              </div>
            ) : (
              filteredModalData.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  {modalData.title === 'Siswa Sehat' ? (
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-600">Kelas {item.class}</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Sehat</span>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">{item.studentName}</p>
                        <p className="text-sm text-gray-600">{item.complaint}</p>
                      </div>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Tutup
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SekolahDashboard;
