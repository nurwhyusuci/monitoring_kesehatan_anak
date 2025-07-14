import React, { useState, useRef, useEffect } from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavbarDokter = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/LoginPage');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-gradient-to-r from-white via-blue-200 to-blue-00 flex justify-end items-center px-6 shadow z-40">
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 text-blue-900 hover:opacity-90"
        >
          <FaUserCircle className="text-2xl" />
          <span className="text-sm font-medium">Dokter Anak</span>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 bg-white rounded shadow text-sm w-36 z-50 border">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-2 text-left text-red-600 hover:bg-red-100 rounded"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavbarDokter;
