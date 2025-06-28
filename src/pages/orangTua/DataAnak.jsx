import dataAnak from '../../data/anak.json';

const DataAnak = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
        {/* Bagian Header */}
        <div className="bg-blue-100 rounded-t-2xl p-6 flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="text-6xl text-center md:text-left">😊</div>
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h2 className="text-xl font-bold">{dataAnak.nama}</h2>
            <p className="text-sm">Umur: {dataAnak.umur} tahun</p>
            <p className="text-sm">Tanggal Lahir: {dataAnak.tanggal_lahir}</p>
            <p className="text-sm">Jenis Kelamin: {dataAnak.jenis_kelamin}</p>
          </div>
        </div>

        {/* Bagian Informasi */}
        <div className="bg-blue-500 text-white rounded-b-2xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="p-3 border-b border-white font-semibold">NIK</div>
            <div className="p-3 border-b border-white sm:col-span-1 md:col-span-3 break-words">{dataAnak.nik}</div>

            <div className="p-3 border-b border-white font-semibold">No. Kartu Keluarga</div>
            <div className="p-3 border-b border-white sm:col-span-1 md:col-span-3 break-words">{dataAnak.no_kk}</div>

            <div className="p-3 border-b border-white font-semibold">Golongan Darah</div>
            <div className="p-3 border-b border-white sm:col-span-1 md:col-span-3">{dataAnak.gol_darah}</div>

            <div className="p-3 border-b border-white font-semibold">Nama Ayah</div>
            <div className="p-3 border-b border-white sm:col-span-1 md:col-span-3">{dataAnak.nama_ayah}</div>

            <div className="p-3 border-b border-white font-semibold">Nama Ibu</div>
            <div className="p-3 border-b border-white sm:col-span-1 md:col-span-3">{dataAnak.nama_ibu}</div>

            <div className="p-3 border-b border-white font-semibold">Kontak Orang Tua</div>
            <div className="p-3 border-b border-white sm:col-span-1 md:col-span-3 break-words">{dataAnak.kontak_ortu}</div>

            <div className="p-3 font-semibold">Alamat</div>
            <div className="p-3 sm:col-span-1 md:col-span-3 break-words">{dataAnak.alamat}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnak;
