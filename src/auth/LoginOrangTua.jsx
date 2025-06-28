import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaApple,
} from 'react-icons/fa';

import loginImage from '../assets/images/login-side.png';

const LoginOrangTua = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === '123456' && password === '123456') {
      navigate('/orangtua/dashboard');
    } else {
      alert('Email atau password salah!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* KIRI: Gambar dokter */}
      <div className="w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-b from-blue-400 to-blue-700 relative">
        <img
          src={loginImage}
          alt="Ilustrasi"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* KANAN: Form Login */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white py-10 px-4">
        <div className="w-full max-w-md px-6 md:px-10 py-10 md:py-12 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">LOGIN</h2>

          {/* Username */}
          <div className="mb-5 relative">
            <FaUser className="absolute top-3.5 left-4 text-gray-600" />
            <input
              type="text"
              placeholder="Username"
              className="pl-10 w-full bg-blue-200 border-none px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="mb-5 relative">
            <FaEnvelope className="absolute top-3.5 left-4 text-gray-600" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full bg-blue-200 border-none px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="mb-5 relative">
            <FaLock className="absolute top-3.5 left-4 text-gray-600" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 w-full bg-blue-200 border-none px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>

          {/* Tombol Login */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-full font-semibold transition"
          >
            Login
          </button>

          {/* Lupa Password */}
          <p className="text-center text-sm text-gray-600 mt-4 cursor-pointer hover:underline">
            Forgot Password?
          </p>

          {/* Login dengan Google/Facebook/Apple */}
          <div className="flex justify-center mt-6 space-x-6">
            <FaGoogle className="text-2xl cursor-pointer text-gray-600 hover:text-black" />
            <FaFacebookF className="text-2xl cursor-pointer text-gray-600 hover:text-black" />
            <FaApple className="text-2xl cursor-pointer text-gray-600 hover:text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOrangTua;
