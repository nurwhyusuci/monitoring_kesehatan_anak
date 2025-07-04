import React, { useState, useRef } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit3, Save, X, Shield, Clock, Activity, Camera, Upload } from 'lucide-react';
import { Card } from '../assets/components/UI/Card';
import { Button } from '../assets/components/UI/Button';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';

export const Profile = () => {
  const { user } = useAuth();
  const { students, healthRecords, doctors } = useData();
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+62 812-3456-7890',
    address: 'Jl. Kesehatan No. 123, Yogyakarta',
    joinDate: '15 Januari 2024',
    bio: 'Administrator sistem kesehatan sekolah yang berpengalaman dalam mengelola data kesehatan siswa dan koordinasi dengan tenaga medis.'
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save profile image to localStorage
    if (profileImage) {
      localStorage.setItem('omka_profile_image', profileImage);
    }
    // Here you would typically save to backend/localStorage
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original data
    setProfileData({
      name: user?.name || '',
      email: user?.email || '',
      phone: '+62 812-3456-7890',
      address: 'Jl. Kesehatan No. 123, Yogyakarta',
      joinDate: '15 Januari 2024',
      bio: 'Administrator sistem kesehatan sekolah yang berpengalaman dalam mengelola data kesehatan siswa dan koordinasi dengan tenaga medis.'
    });
    // Reset profile image
    const savedImage = localStorage.getItem('omka_profile_image');
    setProfileImage(savedImage);
  };

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        setProfileImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  // Load saved profile image on component mount
  React.useEffect(() => {
    const savedImage = localStorage.getItem('omka_profile_image');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Calculate user statistics
  const userStats = {
    totalStudents: students.length,
    totalHealthRecords: healthRecords.length,
    totalDoctors: doctors.length,
    recentActivity: healthRecords.filter(record => {
      const recordDate = new Date(record.date);
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      return recordDate >= oneWeekAgo;
    }).length
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Profil Pengguna</h1>
        <p className="text-gray-600">Kelola informasi profil dan lihat aktivitas Anda</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-2">
          <Card className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={40} className="text-white" />
                    )}
                  </div>
                  {isEditing && (
                    <button
                      onClick={triggerImageUpload}
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 transition-colors"
                      title="Upload Gambar"
                    >
                      <Camera size={16} className="text-white" />
                    </button>
                  )}
                  {user?.role === 'admin' && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                      <Shield size={16} className="text-white" />
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{profileData.name}</h2>
                  <p className="text-gray-600 mb-2">{user?.role === 'admin' ? 'Administrator' : 'Pengguna'}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    Bergabung sejak {profileData.joinDate}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                {!isEditing ? (
                  <Button onClick={handleEdit} variant="secondary" className="flex items-center space-x-2">
                    <Edit3 size={16} />
                    <span>Edit Profil</span>
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button onClick={handleSave} variant="success" className="flex items-center space-x-2">
                      <Save size={16} />
                      <span>Simpan</span>
                    </Button>
                    <Button onClick={handleCancel} variant="secondary" className="flex items-center space-x-2">
                      <X size={16} />
                      <span>Batal</span>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2 text-blue-700">
                  <Upload size={16} />
                  <span className="text-sm font-medium">Upload Gambar Profil</span>
                </div>
                <p className="text-xs text-blue-600 mt-1">
                  Klik icon kamera pada foto profil untuk mengupload gambar dari perangkat Anda
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Nomor Telepon
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">{profileData.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={16} className="inline mr-2" />
                    Alamat
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={profileData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">{profileData.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">{profileData.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Statistics Card */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Activity size={20} className="mr-2 text-blue-500" />
              Statistik Aktivitas
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Total Siswa</span>
                <span className="text-lg font-bold text-blue-600">{userStats.totalStudents}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Data Kesehatan</span>
                <span className="text-lg font-bold text-green-600">{userStats.totalHealthRecords}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Dokter Terdaftar</span>
                <span className="text-lg font-bold text-purple-600">{userStats.totalDoctors}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Aktivitas Minggu Ini</span>
                <span className="text-lg font-bold text-orange-600">{userStats.recentActivity}</span>
              </div>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Clock size={20} className="mr-2 text-green-500" />
              Aktivitas Terbaru
            </h3>
            <div className="space-y-3">
              {healthRecords.slice(-3).reverse().map((record, index) => (
                <div key={record.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Pemeriksaan {record.studentName}
                    </p>
                    <p className="text-xs text-gray-500">{record.date}</p>
                  </div>
                </div>
              ))}
              {healthRecords.length === 0 && (
                <div className="text-center py-4">
                  <p className="text-gray-500 text-sm">Belum ada aktivitas terbaru</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* System Information */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Informasi Sistem</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">OMKA</div>
            <p className="text-sm text-gray-600">Sistem Manajemen Kesehatan Sekolah</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">v2.0</div>
            <p className="text-sm text-gray-600">Versi Aplikasi</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">2024</div>
            <p className="text-sm text-gray-600">Tahun Pengembangan</p>
          </div>
        </div>
      </Card>
    </div>
  );
};