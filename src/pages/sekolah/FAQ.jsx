import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card } from '../../assets/components/UI/Card';


export const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('semua');
  const [expandedItems, setExpandedItems] = useState([]);

  const faqData = [
    {
      id: 1,
      question: "Bagaimana cara mendaftarkan siswa baru ke sistem?",
      answer: "Untuk mendaftarkan siswa baru, masuk ke menu 'Data Siswa', klik tombol 'Tambah Siswa', lalu isi semua informasi yang diperlukan seperti nama, NIK, tanggal lahir, kelas, dan data orang tua. Pastikan semua data terisi dengan benar sebelum menyimpan.",
      category: "siswa"
    },
    {
      id: 2,
      question: "Bagaimana cara menambahkan data kesehatan siswa?",
      answer: "Masuk ke menu 'Data Kesehatan Siswa', klik 'Tambah siswa', kemudian isi data antropometri seperti berat badan, tinggi badan, lingkar lengan, lingkar kepala, serta informasi kesehatan gigi dan mata. Jangan lupa mengisi deskripsi keluhan dan nama dokter pemeriksa.",
      category: "kesehatan"
    },
    {
      id: 3,
      question: "Apakah data yang sudah diinput bisa diedit?",
      answer: "Ya, semua data dapat diedit. Setiap tabel memiliki tombol 'Edit' yang memungkinkan Anda mengubah informasi yang sudah tersimpan. Klik tombol Edit pada baris data yang ingin diubah, lakukan perubahan, lalu klik 'Simpan Perubahan'.",
      category: "umum"
    },
    {
      id: 4,
      question: "Bagaimana cara menghapus data yang salah?",
      answer: "Untuk menghapus data, klik tombol 'Delete' berwarna merah pada baris data yang ingin dihapus. Sistem akan meminta konfirmasi sebelum menghapus data secara permanen. Pastikan data yang akan dihapus benar-benar tidak diperlukan lagi.",
      category: "umum"
    },
    {
      id: 5,
      question: "Bagaimana cara mendaftarkan dokter baru?",
      answer: "Masuk ke menu 'Data Dokter', klik 'Tambah Dokter', lalu isi informasi dokter seperti nama, ID dokter, asal puskesmas/rumah sakit, spesialisasi, kontak, dan informasi sejak kapan dokter bertugas. Semua field harus diisi untuk melengkapi registrasi dokter.",
      category: "dokter"
    },
    {
      id: 6,
      question: "Apakah data tersimpan secara otomatis?",
      answer: "Ya, semua data yang Anda input akan tersimpan secara otomatis di browser Anda (localStorage). Data akan tetap ada meskipun Anda menutup dan membuka kembali aplikasi. Namun, pastikan untuk tidak menghapus data browser jika ingin mempertahankan data.",
      category: "teknis"
    },
    {
      id: 7,
      question: "Bagaimana cara melihat laporan kesehatan siswa?",
      answer: "Pada menu 'Data Kesehatan Siswa', klik tombol 'View' pada data siswa yang ingin dilihat. Anda akan melihat detail lengkap data kesehatan siswa dan dapat mengunduh laporan dalam format PDF dengan mengklik tombol 'Unduh Laporan PDF'.",
      category: "kesehatan"
    },
    {
      id: 8,
      question: "Apa perbedaan akun Admin dan User biasa?",
      answer: "Akun Admin memiliki akses penuh ke semua fitur sistem dan dapat mengelola semua data. User biasa dapat menggunakan sistem untuk input dan melihat data, namun dengan beberapa batasan akses. Admin ditandai dengan badge khusus dan memiliki kode login khusus.",
      category: "akun"
    },
    {
      id: 9,
      question: "Bagaimana cara mengubah password akun?",
      answer: "Saat ini fitur ubah password belum tersedia di versi ini. Untuk keamanan akun, pastikan menggunakan password yang kuat saat mendaftar. Jika lupa password, Anda perlu membuat akun baru atau hubungi administrator sistem.",
      category: "akun"
    },
    {
      id: 10,
      question: "Bagaimana cara backup data?",
      answer: "Data tersimpan di localStorage browser. Untuk backup manual, Anda dapat mengekspor data melalui developer tools browser atau menggunakan fitur export yang akan ditambahkan di versi mendatang. Disarankan untuk mencatat data penting secara berkala.",
      category: "teknis"
    }
  ];

  const categories = [
    { id: 'semua', label: 'Semua', count: faqData.length },
    { id: 'umum', label: 'Umum', count: faqData.filter(item => item.category === 'umum').length },
    { id: 'siswa', label: 'Data Siswa', count: faqData.filter(item => item.category === 'siswa').length },
    { id: 'kesehatan', label: 'Kesehatan', count: faqData.filter(item => item.category === 'kesehatan').length },
    { id: 'dokter', label: 'Dokter', count: faqData.filter(item => item.category === 'dokter').length },
    { id: 'akun', label: 'Akun', count: faqData.filter(item => item.category === 'akun').length },
    { id: 'teknis', label: 'Teknis', count: faqData.filter(item => item.category === 'teknis').length }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'semua' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions (FAQ)</h1>
        <p className="text-gray-600">Temukan jawaban untuk pertanyaan yang sering diajukan tentang sistem OMKA</p>
      </div>

      {/* Search Bar */}
      <Card className="p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Cari pertanyaan atau jawaban..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Kategori</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.label}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-blue-400 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Contact Info */}
          <Card className="p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <HelpCircle size={20} className="mr-2 text-blue-500" />
              Butuh Bantuan?
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone size={16} className="text-blue-500" />
                <span>+62 274-123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail size={16} className="text-blue-500" />
                <span>support@omka.id</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={16} className="text-blue-500" />
                <span>Yogyakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock size={16} className="text-blue-500" />
                <span>Senin - Jumat, 08:00 - 17:00</span>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Content */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {filteredFAQ.length === 0 ? (
              <Card className="p-8 text-center">
                <HelpCircle size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Tidak ada hasil ditemukan</h3>
                <p className="text-gray-600">Coba ubah kata kunci pencarian atau pilih kategori lain</p>
              </Card>
            ) : (
              filteredFAQ.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            item.category === 'umum' ? 'bg-blue-100 text-blue-800' :
                            item.category === 'siswa' ? 'bg-green-100 text-green-800' :
                            item.category === 'kesehatan' ? 'bg-red-100 text-red-800' :
                            item.category === 'dokter' ? 'bg-purple-100 text-purple-800' :
                            item.category === 'akun' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {categories.find(cat => cat.id === item.category)?.label}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.question}</h3>
                        {expandedItems.includes(item.id) && (
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        )}
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        {expandedItems.includes(item.id) ? (
                          <ChevronUp size={20} className="text-gray-400" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>
                </Card>
              ))
            )}
          </div>

          {/* Quick Tips */}
          <Card className="p-6 mt-6 bg-gradient-to-r from-blue-50 to-cyan-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">💡 Tips Penggunaan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="text-gray-700">• Gunakan fitur pencarian untuk menemukan jawaban dengan cepat</p>
                <p className="text-gray-700">• Pastikan data yang diinput sudah benar sebelum menyimpan</p>
                <p className="text-gray-700">• Backup data secara berkala untuk keamanan</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">• Gunakan tombol View untuk melihat detail lengkap data</p>
                <p className="text-gray-700">• Manfaatkan fitur download PDF untuk laporan</p>
                <p className="text-gray-700">• Hubungi support jika mengalami kendala teknis</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};