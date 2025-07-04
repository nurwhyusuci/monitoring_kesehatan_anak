import React, { createContext, useContext, useState } from 'react';

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

  const login = (email, password) => {
    // Admin login with special codes
    if (email === '12345' && password === '12345') {
      setUser({
        id: 'admin',
        email: '12345',
        name: 'Admin',
        role: 'admin',
      });
      return true;
    }

    // Check registered users
    const users = JSON.parse(localStorage.getItem('omka_users') || '[]');
    const foundUser = users.find((u) => u.email === email && u.password === password);
    
    if (foundUser) {
      setUser({
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.username,
        role: 'user',
      });
      return true;
    }

    return false;
  };

  const signUp = (userData) => {
    try {
      const users = JSON.parse(localStorage.getItem('omka_users') || '[]');
      
      // Check if email already exists
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
      
      // Auto login after signup
      setUser({
        id: newUser.id,
        email: newUser.email,
        name: newUser.username,
        role: 'user',
      });

      return true;
    } catch (error) {
      console.error('Error during signup:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    signUp,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};