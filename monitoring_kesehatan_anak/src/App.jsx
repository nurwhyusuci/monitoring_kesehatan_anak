import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';

import LoginPage from './pages/LoginPage';
import { SignUp } from './assets/components/Auth/SignUp';



import SekolahDashboard from './pages/sekolah/SekolahDashboard';
import OrangTuaDashboard from './pages/orangtua/OrangTuaDashboard';
import DokterDashboard from './pages/dokter/DokterDashboard';

import ProtectedRoute from './routes/ProtectedRoute';

function AuthRoutesWrapper() {
  const { isAuthenticated, signUp } = useAuth();
  const [showSignUp, setShowSignUp] = useState(false);
  let user = null;
  let role = null;

  if (typeof window !== 'undefined') {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        user = JSON.parse(storedUser);
        role = user?.role;
      }
    } catch (error) {
      console.error('Gagal membaca localStorage:', error);
      localStorage.removeItem('user');
    }
  }

  const handleSignUp = (userData) => {
    const success = signUp(userData);
    if (success) {
      setShowSignUp(false);
    } else {
      alert('Email sudah terdaftar atau terjadi kesalahan');
    }
  };

  return (
    <Routes>
      {/* Login / Signup */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to={`/dashboard/${role}`} replace />
          ) : showSignUp ? (
            <SignUp onSignUp={handleSignUp} onBackToLogin={() => setShowSignUp(false)} />
          ) : (
            <LoginPage onShowSignUp={() => setShowSignUp(true)} />
          )
        }
      />

      {/* Redirect root */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to={`/dashboard/${role}`} replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Role-based Dashboard Routes */}
      <Route
        path="/dashboard/sekolah"
        element={
          <ProtectedRoute allowedRole="sekolah">
            <SekolahDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/orangtua"
        element={
          <ProtectedRoute allowedRole="orangtua">
            <OrangTuaDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/dokter"
        element={
          <ProtectedRoute allowedRole="dokter">
            <DokterDashboard />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <AuthRoutesWrapper />
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
