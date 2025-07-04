import React from 'react';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';

export const Header = ({ onProfileClick }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 shadow-lg">
      <div className="flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={onProfileClick}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <User size={20} className="text-blue-600" />
            </button>
            <div className="text-right">
              <div className="text-white font-semibold text-sm">{user?.name || 'User'}</div>
              <div className="text-blue-100 text-xs">{user?.email}</div>
              <div className="text-blue-200 text-xs capitalize">
                {user?.role === 'admin' ? '👑 Admin' : '👤 User'}
              </div>
            </div>
          </div>
          <button
            onClick={logout}
            className="text-white hover:text-blue-100 transition-colors p-2 rounded-lg hover:bg-white/10"
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};