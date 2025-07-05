import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';

import LoginPage from './pages/LoginPage';
import { SignUp } from './assets/components/Auth/SignUp';

import { Dashboard } from './pages/sekolah/Dashboard';
import OrangTuaDashboard from './pages/orangtua/OrangTuaDashboard';
import DokterDashboard from './pages/dokter/DokterDashboard';

import { Students } from './pages/sekolah/Students';
import { Parents } from './pages/orangtua/Parents';
import { Profile } from './pages/sekolah/Profile';
import { FAQ } from './pages/sekolah/FAQ';

import { Doctors } from './pages/dokter/Doctors';
import { HealthRecords } from './pages/dokter/HealthRecords';
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
            <Dashboard />
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

      {/* Sekolah internal pages */}
      <Route
        path="/sekolah/siswa"
        element={
          <ProtectedRoute allowedRole="sekolah">
            <Students />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sekolah/orangtua"
        element={
          <ProtectedRoute allowedRole="sekolah">
            <Parents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sekolah/profile"
        element={
          <ProtectedRoute allowedRole="sekolah">
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sekolah/faq"
        element={
          <ProtectedRoute allowedRole="sekolah">
            <FAQ />
          </ProtectedRoute>
        }
      />

      {/* Dokter internal pages */}
      <Route
        path="/dokter/list"
        element={
          <ProtectedRoute allowedRole="dokter">
            <Doctors />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dokter/rekam-medis"
        element={
          <ProtectedRoute allowedRole="dokter">
            <HealthRecords />
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
