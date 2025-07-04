import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaUser, FaLock } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

import users from '../data/users.json';
import backgroundImage from '../assets/images/login-side.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Ketika masuk ke halaman login, logout otomatis (hapus data user)
  useEffect(() => {
    localStorage.removeItem('user');
  }, []);

  const handleLogin = () => {
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    const user = users.find(
      (u) =>
        u.email.toLowerCase() === trimmedEmail &&
        u.password === trimmedPassword
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate(`/dashboard/${user.role}`);
    } else {
      toast.error('❌ Email atau password salah!', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Kiri: Gambar */}
      <div className="w-1/2 hidden md:block">
        <img
          src={backgroundImage}
          alt="Login Illustration"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Kanan: Form login */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            LOGIN
          </h2>

          <div className="mb-4 relative">
            <FaUser className="absolute top-3 left-4 text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full bg-[#B1D6E6] text-gray-800 placeholder-gray-700 px-4 py-2 rounded-full text-sm focus:outline-none"
            />
          </div>

          <div className="mb-6 relative">
            <FaLock className="absolute top-3 left-4 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 w-full bg-[#B1D6E6] text-gray-800 placeholder-gray-700 px-4 py-2 rounded-full text-sm focus:outline-none"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#92C4F0] hover:bg-blue-500 text-white font-semibold py-2 rounded-full transition"
          >
            Login
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Ikon Sosial Media */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="text-gray-600 hover:text-blue-600 text-xl">
              <i className="fab fa-google"></i>
            </button>
            <button className="text-gray-600 hover:text-blue-600 text-xl">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="text-gray-600 hover:text-blue-600 text-xl">
              <i className="fab fa-apple"></i>
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
