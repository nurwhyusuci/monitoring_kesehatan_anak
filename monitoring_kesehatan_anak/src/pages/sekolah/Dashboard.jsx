import React, { useState } from 'react';
import { Card } from '../../assets/components/UI/Card';
import { Modal } from '../../assets/components/UI/Modal';
import { Button } from '../../assets/components/UI/Button';
import { useData } from '../../contexts/DataContext';
import { Users, Heart, Stethoscope, Calendar, TrendingUp, Activity, CheckCircle, BarChart3, Search, } from 'lucide-react';

export const Dashboard = ({ onNavigate = () => {} }) => {
  const { students, healthRecords, doctors, parents } = useData();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', data: [], searchTerm: '' });


  const dashboardStats = {
    studentsCount: students.length,
    parentsCount: parents.length,
    healthRecordsCount: healthRecords.length,
    doctorsCount: doctors.length,
  };

  // Get recent health records for activity feed
  const recentHealthRecords = healthRecords.slice(-5).reverse();

  // Calculate health trends and meaningful statistics
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
      }, { demam: 0, batuk: 0, pilek: 0, sakitKepala: 0, mual: 0, diare: 0, flu: 0, pusing: 0, lainnya: 0 }),
      healthyStudents: students.length - healthRecords.length, // Students without health issues
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

  // Handle modal opening for health summary items
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

  // Filter modal data based on search
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

  // Generate weekly chart data
  const generateWeeklyData = () => {
    const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
    const diseases = ['Demam', 'Batuk', 'Pilek', 'Sakit Kepala', 'Mual', 'Diare', 'Flu', 'Pusing'];
    
    return { days, diseases };
  };

  const { days, diseases } = generateWeeklyData();

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">DASHBOARD</h1>
<<<<<<< Updated upstream
        <p className="text-gray-600">Selamat datang di Sistem Monitoring Kesehatan anak MKA</p>
=======
        <p className="text-gray-600">Selamat datang di Monitoring Kesehatan Anak MKA</p>
>>>>>>> Stashed changes
      </div>

      {/* Enhanced Stats Cards with Different Designs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 - Gradient with Icon */}
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

        {/* Card 2 - Border with Shadow */}
        <Card className="p-6 bg-white border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-medium">Siswa Sehat</p>
              <p className="text-3xl font-bold text-green-700">{healthTrends.healthyStudents}</p>
              <p className="text-green-500 text-xs mt-1">Tanpa keluhan kesehatan</p>
            </div>
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle size={28} className="text-green-600" />
            </div>
          </div>
        </Card>

        {/* Card 3 - Solid Color with Pattern */}
        <Card className="p-6 bg-red-500 text-white border-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm font-medium">Pemeriksaan Bulan Ini</p>
                <p className="text-3xl font-bold">{healthTrends.monthlyCheckups}</p>
                <p className="text-red-200 text-xs mt-1">Pemeriksaan 30 hari terakhir</p>
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                <Heart size={28} />
              </div>
            </div>
          </div>
        </Card>

        {/* Card 4 - Glass Effect */}
        <Card className="p-6 bg-gradient-to-br from-purple-400 to-purple-600 text-white border-0 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Dokter Tersedia</p>
              <p className="text-3xl font-bold">{dashboardStats.doctorsCount}</p>
              <p className="text-purple-200 text-xs mt-1">Tenaga medis terdaftar</p>
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
              <Stethoscope size={28} />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enhanced Health Chart */}
        <div className="lg:col-span-2">
          <Card className="p-6 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Statistik Keluhan Kesehatan</h3>
              <div className="flex items-center space-x-2">
                <BarChart3 className="text-blue-500" size={24} />
                <TrendingUp className="text-green-500" size={20} />
              </div>
            </div>
            
            {/* Enhanced Chart Area */}
            <div className="h-80 bg-white rounded-xl shadow-inner flex relative overflow-hidden border border-gray-100">
              {/* Y-axis labels (diseases) */}
              <div className="w-24 flex flex-col justify-around py-4 bg-gray-50 border-r border-gray-200">
                {diseases.map((disease, index) => (
                  <div key={disease} className="text-xs text-gray-600 text-right pr-2 font-medium">
                    {disease}
                  </div>
                ))}
              </div>
              
              {/* Chart content */}
              <div className="flex-1 relative">
                {/* X-axis labels (days) */}
                <div className="absolute bottom-0 left-0 right-0 h-8 flex justify-around items-center bg-gray-50 border-t border-gray-200">
                  {days.map((day) => (
                    <div key={day} className="text-xs text-gray-600 font-medium">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Chart bars area */}
                <div className="h-full pb-8 p-4 grid grid-cols-7 gap-2">
                  {days.map((day, dayIndex) => (
                    <div key={day} className="flex flex-col justify-end space-y-1">
                      {diseases.map((disease, diseaseIndex) => {
                        const height = Math.random() * 60 + 10; // Random height for demo
                        const colors = [
                          'bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400',
                          'bg-purple-400', 'bg-pink-400', 'bg-indigo-400', 'bg-orange-400'
                        ];
                        return (
                          <div
                            key={`${day}-${disease}`}
                            className={`${colors[diseaseIndex]} rounded-sm opacity-80 hover:opacity-100 transition-opacity`}
                            style={{ height: `${height}%` }}
                            title={`${disease} - ${day}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Legend */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200">
                <div className="space-y-2 text-sm">
                  {diseases.slice(0, 4).map((disease, index) => {
                    const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400'];
                    const counts = [
                      healthTrends.commonComplaints.demam,
                      healthTrends.commonComplaints.batuk,
                      healthTrends.commonComplaints.pilek,
                      healthTrends.commonComplaints.sakitKepala
                    ];
                    return (
                      <div key={disease} className="flex items-center space-x-2">
                        <div className={`w-3 h-3 ${colors[index]} rounded-full shadow-sm`}></div>
                        <span className="text-gray-800 font-medium text-xs">{disease} ({counts[index]})</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Activity Feed */}
        <div>
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Aktivitas Terbaru</h3>
              <Activity className="text-green-500" size={20} />
            </div>
            <div className="space-y-4">
              {recentHealthRecords.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="mx-auto text-gray-400 mb-2" size={32} />
                  <p className="text-gray-500 text-sm">Belum ada aktivitas terbaru</p>
                </div>
              ) : (
                recentHealthRecords.map((record, index) => (
                  <div key={record.id} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                    <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                      index === 0 ? 'bg-green-500' : 
                      index === 1 ? 'bg-blue-500' : 
                      'bg-gray-400'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Pemeriksaan {record.studentName}
                      </p>
                      <p className="text-xs text-gray-500">{record.date}</p>
                      <p className="text-xs text-gray-600 mt-1 truncate">{record.complaint}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enhanced Health Summary with clickable items */}
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Ringkasan Kesehatan</h3>
            <Users className="text-red-500" size={20} />
          </div>
          <div className="space-y-4">
            <button
              onClick={() => handleHealthSummaryClick('total')}
              className="w-full flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="text-sm font-medium text-gray-700">Total Pemeriksaan</span>
              <span className="text-xl font-bold text-purple-600">{healthTrends.totalCheckups}</span>
            </button>
            <button
              onClick={() => handleHealthSummaryClick('weekly')}
              className="w-full flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="text-sm font-medium text-gray-700">Pemeriksaan Minggu Ini</span>
              <span className="text-xl font-bold text-green-600">{healthTrends.recentCheckups}</span>
            </button>
            <button
              onClick={() => handleHealthSummaryClick('healthy')}
              className="w-full flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="text-sm font-medium text-gray-700">Siswa Sehat</span>
              <span className="text-xl font-bold text-blue-600">{healthTrends.healthyStudents}</span>
            </button>
            <button
              onClick={() => handleHealthSummaryClick('monthly')}
              className="w-full flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="text-sm font-medium text-gray-700">Pemeriksaan Bulan Ini</span>
              <span className="text-xl font-bold text-orange-600">{healthTrends.monthlyCheckups}</span>
            </button>
          </div>
        </Card>

        {/* Enhanced Student Data Preview with clickable navigation */}
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Data Siswa Terbaru</h3>
            <button
              onClick={() => onNavigate('health')}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Users className="text-blue-500" size={20} />
              <span className="text-sm font-medium">Lihat Semua</span>
            </button>
          </div>
          <div className="space-y-3">
            {students.length === 0 ? (
              <div className="text-center py-8">
                <Users className="mx-auto text-gray-400 mb-2" size={32} />
                <p className="text-gray-500 text-sm">BELUM ADA DATA SISWA</p>
              </div>
            ) : (
              students.slice(-5).reverse().map((student) => (
                <button
                  key={student.id}
                  onClick={() => onNavigate('health')}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-sm">
                      <Users size={16} className="text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-900">{student.name}</p>
                      <p className="text-xs text-gray-500">Kelas {student.class}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{student.nis}</span>
                </button>
              ))
            )}
          </div>
        </Card>
      </div>

      {/* Modal for Health Summary Details */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalData.title}
      >
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari data..."
              value={modalData.searchTerm}
              onChange={(e) => setModalData(prev => ({ ...prev, searchTerm: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          {/* Data List */}
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

          {/* Close Button */}
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
