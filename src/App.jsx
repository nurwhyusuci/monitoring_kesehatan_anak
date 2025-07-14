// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';

import LoginPage from './pages/LoginPage';
import { SignUp } from './assets/components/Auth/SignUp';

import SekolahDashboard from './pages/sekolah/SekolahDashboard';
import { Students } from './pages/sekolah/Students';
import { Parents } from './pages/orangtua/Parents';
import { Profile } from './pages/sekolah/Profile';
import { FAQ } from './pages/sekolah/FAQ';

import OrangTuaDashboard from './pages/orangtua/OrangTuaDashboard';
import DokterDashboard from './pages/dokter/DokterDashboard';
import DetailDokter from './pages/dokter/DetailDokter';
import DetailAnak from './pages/dokter/detailanak';
import { Doctors } from './pages/dokter/Doctors';
import { HealthRecords } from './pages/dokter/HealthRecords';

import ProtectedRoute from './routes/ProtectedRoute';
import OrangTuaRoutes from './routes/OrangTuaRoutes';
import LayoutDokter from './assets/components/Layout/LayoutDokter';
import { Layout } from './assets/components/Layout/Layouts';

function SekolahRoutes() {
  const [activeItem, setActiveItem] = React.useState('dashboard');

  const renderComponent = () => {
    switch (activeItem) {
      case 'students': return <Students />;
      case 'parents': return <Parents />;
      case 'profile': return <Profile />;
      case 'faq': return <FAQ />;
      case 'health': return <HealthRecords />;
      case 'doctors': return <Doctors />;
      default: return <SekolahDashboard onNavigate={setActiveItem} />;
    }
  };

  return (
    <Layout activeItem={activeItem} onItemClick={setActiveItem}>
      {renderComponent()}
    </Layout>
  );
}

function AuthRoutesWrapper() {
  const [showSignUp, setShowSignUp] = React.useState(false);
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
    const users = JSON.parse(localStorage.getItem('omka_users') || '[]');
    if (users.find((u) => u.email === userData.email)) {
      return false;
    }
    const newUser = {
      id: Date.now().toString(),
      username: userData.username,
      email: userData.email,
      password: userData.password,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    localStorage.setItem('omka_users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify({
      id: newUser.id,
      email: newUser.email,
      name: newUser.username,
      role: 'user',
    }));
    window.location.reload();
    return true;
  };

  return (
    <Routes>
      {/* Login / SignUp */}
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to={`/dashboard/${role}`} replace />
          ) : showSignUp ? (
            <SignUp onSignUp={handleSignUp} onBackToLogin={() => setShowSignUp(false)} />
          ) : (
            <LoginPage onShowSignUp={() => setShowSignUp(true)} />
          )
        }
      />

      {/* Redirect root to dashboard */}
      <Route
        path="/"
        element={<Navigate to={user ? `/dashboard/${role}` : "/login"} replace />}
      />

      {/* Sekolah */}
      <Route
        path="/dashboard/sekolah"
        element={
          <ProtectedRoute allowedRole="sekolah">
            <SekolahRoutes />
          </ProtectedRoute>
        }
      />

      {/* Orang Tua */}
      <Route
        path="/dashboard/orangtua"
        element={
          <ProtectedRoute allowedRole="orangtua">
            <OrangTuaDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orangtua/*"
        element={
          <ProtectedRoute allowedRole="orangtua">
            <OrangTuaRoutes />
          </ProtectedRoute>
        }
      />

      {/* Dokter */}
      <Route
        path="/dashboard/dokter"
        element={<Navigate to="/dashboard/DokterDashboard" replace />}
      />
      <Route path="/informasi-dokter/:id" element={<DetailDokter />} />
<Route path="/data-anak/:id" element={<DetailAnak />} />

      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute allowedRole="dokter">
            <LayoutDokter /> 
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
