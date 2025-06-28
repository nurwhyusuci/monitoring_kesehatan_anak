import { useEffect, useState } from 'react';
import dataMedis from '../../data/medis.json';


const DataMedisAnak = () => {
  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    setRiwayat(dataMedis);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 p-8">
      <div className="bg-white shadow-xl rounded-lg p-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Riwayat pemeriksaan</h2>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3">Tanggal</th>
              <th className="px-4 py-3">Pemeriksa</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Ringkasan</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {riwayat.map((item, index) => (
              <tr key={index} className="even:bg-blue-100 odd:bg-blue-50 border-b border-blue-200">
                <td className="px-4 py-2">{item.tanggal}</td>
                <td className="px-4 py-2">{item.pemeriksa}</td>
                <td className="px-4 py-2 capitalize">{item.status}</td>
                <td className="px-4 py-2">{item.ringkasan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataMedisAnak;
