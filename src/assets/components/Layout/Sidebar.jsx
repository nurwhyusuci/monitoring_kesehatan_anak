import React from 'react';
import { Home, Users, UserCheck, Heart, Stethoscope, HelpCircle } from 'lucide-react';
import logo from '../../images/logo.png';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'students', label: 'Data Siswa', icon: Users },
  { id: 'parents', label: 'Data Orang Tua', icon: UserCheck },
  { id: 'health', label: 'Data Kesehatan Siswa', icon: Heart },
  { id: 'doctors', label: 'Data Dokter', icon: Stethoscope },
  { id: 'faq', label: 'FaQ', icon: HelpCircle },
];

export const Sidebar = ({ activeItem, onItemClick }) => {
  return (
    <div className="w-64 bg-gradient-to-b from-cyan-800 to-blue-100 min-h-screen p-4 shadow-xl flex flex-col">
      
      {/* Logo dan Judul Menu */}
      <div className="mb-8">
  <div className="flex justify-left mb-8">
    <img
      src={logo}
      alt="Logo"
      className="w-auto h-20 object-contain"
    />
  </div>
  <div className="text-white text-sm opacity-80 font-medium">MENU</div></div>

      {/* Menu Items */}
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
                  ? 'bg-gradient-to-r from-gray-400 to-blue-400 text-white shadow-lg transform scale-105'
                  : 'text-blue-200 hover:bg-blue-700/50 hover:text-white hover:transform hover:scale-105'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 bg-blue-700/30 rounded-xl">
        <div className="text-blue-200 text-xs text-center">
          <p className="font-medium mb-1">OMKA Health System</p>
          <p>Sistem Manajemen Kesehatan Sekolah</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
