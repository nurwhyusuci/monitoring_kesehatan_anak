// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    // Simulasi login tanpa backend
    const mockUser = { role: 'admin' }; // Ubah role sesuai kebutuhan (admin, dokter, dll.)
    if (credentials.username && credentials.password) {
      localStorage.setItem('token', 'dummy-token');
      setUser(mockUser);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);