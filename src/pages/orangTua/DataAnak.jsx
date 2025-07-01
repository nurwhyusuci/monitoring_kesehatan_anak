import { FaChild, FaPhone, FaHome, FaIdCard, FaUsers, FaTint } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import dataAnak from '../../data/anak.json';

const DataAnak = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
       

        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header with child info */}
          <div className="bg-blue-500 p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="bg-white rounded-full p-4 shadow-md">
              <FaChild className="text-4xl text-blue-500" />
            </div>
            <div className="text-center md:text-left text-white">
              <h2 className="text-2xl font-bold">{dataAnak.nama}</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                <span className="flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-full">
                  <span>Umur:</span>
                  <span className="font-medium">{dataAnak.umur} tahun</span>
                </span>
                <span className="flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-full">
                  <span>Lahir:</span>
                  <span className="font-medium">
                    {new Date(dataAnak.tanggal_lahir).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </span>
                <span className="flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-full">
                  <span>Jenis Kelamin:</span>
                  <span className="font-medium">{dataAnak.jenis_kelamin}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Information grid */}
          <div className="divide-y divide-blue-100">
            {/* Row with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <FaIdCard className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">NIK</p>
                  <p className="font-medium text-gray-800 break-all">{dataAnak.nik}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <FaIdCard className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">No. Kartu Keluarga</p>
                  <p className="font-medium text-gray-800 break-all">{dataAnak.no_kk}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <FaTint className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Golongan Darah</p>
                  <p className="font-medium text-gray-800">{dataAnak.gol_darah || '-'}</p>
                </div>
              </div>
            </div>

            {/* Parents info */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaUsers className="text-blue-500" />
                <span>Informasi Orang Tua</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-sm text-gray-600">Nama Ayah</p>
                  <p className="font-medium text-gray-800">{dataAnak.nama_ayah}</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-sm text-gray-600">Nama Ibu</p>
                  <p className="font-medium text-gray-800">{dataAnak.nama_ibu}</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 md:col-span-2">
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <FaPhone className="text-blue-500" />
                    <span>Kontak Orang Tua</span>
                  </p>
                  <p className="font-medium text-gray-800 break-all">{dataAnak.kontak_ortu}</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <FaHome className="text-blue-500" />
                <span>Alamat</span>
              </h3>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="font-medium text-gray-800">{dataAnak.alamat}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnak;