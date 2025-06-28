import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaApple,
} from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import backgroundImage from '../assets/images/login-side.png'; // Gambar background full
import users from '../data/users.json';

const LoginOrangTua = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password && u.role === 'orangtua'
    );

    if (user) {
      navigate('/orangtua/dashboard');
    } else {
      toast.error('❌ Email atau password salah. Coba lagi ya!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-end px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Wrapper form login */}
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 transition-transform duration-300 hover:scale-[1.02] mr-0 md:mr-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-5">LOGIN</h2>

        {/* Email */}
        <div className="mb-3 relative">
          <FaEnvelope className="absolute top-3 left-4 text-gray-600 text-sm" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 w-full bg-blue-200 border-none px-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="mb-3 relative">
          <FaLock className="absolute top-3 left-4 text-gray-600 text-sm" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 w-full bg-blue-200 border-none px-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-3">
          <input type="checkbox" id="remember" className="mr-2 scale-90" />
          <label htmlFor="remember" className="text-xs text-gray-600">
            Remember me
          </label>
        </div>

        {/* Tombol Login */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 text-sm rounded-full font-semibold transition"
        >
          Login
        </button>

        {/* Lupa Password */}
        <p className="text-center text-xs text-gray-600 mt-3 cursor-pointer hover:underline">
          Forgot Password?
        </p>

        {/* Login dengan Google/Facebook/Apple */}
        <div className="flex justify-center mt-4 space-x-4">
          <FaGoogle className="text-lg cursor-pointer text-gray-600 hover:text-black" />
          <FaFacebookF className="text-lg cursor-pointer text-gray-600 hover:text-black" />
          <FaApple className="text-lg cursor-pointer text-gray-600 hover:text-black" />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginOrangTua;
