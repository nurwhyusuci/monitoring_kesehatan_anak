import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Saat pertama kali load, ambil data dari localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // Admin login dengan kredensial khusus
    if (email === '12345' && password === '12345') {
      const adminUser = {
        id: 'admin',
        email: '12345',
        name: 'Admin',
        role: 'admin',
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser)); // ✅ Simpan ke localStorage
      return true;
    }

    // Cari user terdaftar
    const users = JSON.parse(localStorage.getItem('omka_users') || '[]');
    const foundUser = users.find((u) => u.email === email && u.password === password);

    if (foundUser) {
      const loggedUser = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.username,
        role: 'user',
      };
      setUser(loggedUser);
      localStorage.setItem('user', JSON.stringify(loggedUser)); // ✅ Simpan ke localStorage
      return true;
    }

    return false;
  };

  const signUp = (userData) => {
    try {
      const users = JSON.parse(localStorage.getItem('omka_users') || '[]');

      // Cek email sudah terdaftar
      if (users.find((u) => u.email === userData.email)) {
        return false;
      }

      const newUser = {
        id: Date.now().toString(),
        username: userData.username,
        email: userData.email,
        password: userData.password,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem('omka_users', JSON.stringify(users));

      // Auto login setelah signup
      const signedUser = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.username,
        role: 'user',
      };
      setUser(signedUser);
      localStorage.setItem('user', JSON.stringify(signedUser)); // ✅ Simpan ke localStorage

      return true;
    } catch (error) {
      console.error('Error during signup:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login'; // arahkan ke login
  };

  const value = {
    user,
    login,
    logout,
    signUp,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
