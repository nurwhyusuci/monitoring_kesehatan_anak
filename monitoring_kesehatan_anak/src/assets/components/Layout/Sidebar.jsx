import React from 'react';
import { Home, Users, UserCheck, Heart, Stethoscope, HelpCircle } from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'students', label: 'Data Siswa', icon: Users },
  { id: 'parents', label: 'Data Orang tua', icon: UserCheck },
  { id: 'health', label: 'Data Kesehatan Siswa', icon: Heart },
  { id: 'doctors', label: 'Data Dokter', icon: Stethoscope },
  { id: 'faq', label: 'FaQ', icon: HelpCircle },
];

export const Sidebar = ({ activeItem, onItemClick }) => {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-800 to-blue-900 min-h-screen p-4 shadow-xl">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">O</span>
          </div>
          <div>
            <span className="text-green-400 font-bold text-2xl">M</span>
            <span className="text-yellow-400 font-bold text-2xl">K</span>
            <span className="text-green-400 font-bold text-2xl">A</span>
          </div>
        </div>
        <div className="text-white text-sm opacity-80 font-medium">MENU</div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                  : 'text-blue-200 hover:bg-blue-700/50 hover:text-white hover:transform hover:scale-105'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-8 p-4 bg-blue-700/30 rounded-xl">
        <div className="text-blue-200 text-xs text-center">
          <p className="font-medium mb-1">OMKA Health System</p>
          <p>Sistem Manajemen Kesehatan Sekolah</p>
        </div>
      </div>
    </div>
  );
};