import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const Layout = ({ children, activeItem, onItemClick }) => {
  const handleProfileClick = () => {
    onItemClick('profile');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} onItemClick={onItemClick} />
      <div className="flex-1">
        <Header onProfileClick={handleProfileClick} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};