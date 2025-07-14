import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import users from '../data/users.json';
import bgImage from '../assets/images/login-side.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-end px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Menu Informasi - Kanan Atas */}
      <div className="absolute top-8 right-36 hidden md:flex gap-14 text-sm text-white font-medium z-50">
        <span className="cursor-pointer hover:underline hover:text-blue-200">Tentang Aplikasi</span>
        <span className="cursor-pointer hover:underline hover:text-blue-200">Fitur</span>
        <span className="cursor-pointer hover:underline hover:text-blue-200">Hubungi Kami</span>
      </div>

      {/* Kartu Login */}
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-8 shadow-2xl mr-0 md:mr-16">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          LOGIN
        </h2>

        {/* Email */}
        <div className="relative mb-4">
          <FaUser className="absolute top-3 left-4 text-gray-500" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-blue-100 text-sm text-gray-800 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="relative mb-4">
          <FaLock className="absolute top-3 left-4 text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-blue-100 text-sm text-gray-800 focus:outline-none"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-xs text-gray-600">
            Remember me
          </label>
        </div>

        {/* Tombol Login */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full font-semibold transition"
        >
          Login
        </button>

        {/* Lupa Password */}
        <p className="text-center text-sm text-gray-500 mt-3 cursor-pointer hover:underline">
          Forgot Password?
        </p>

        {/* Ikon Sosial Media */}
        <div className="flex justify-center gap-4 mt-4 text-xl text-gray-700">
          <FcGoogle className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer text-blue-600" />
          <FaApple className="cursor-pointer" />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
