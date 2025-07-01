// src/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import doctorImage from '../assets/doctor.png';
import logo from '../assets/logo.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import appleIcon from '../assets/apple.png';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Di sini bisa ditambahkan logika validasi email dan password
    navigate('/dashboard'); // Navigasi ke halaman dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-300 to-white font-sans">
      <div className="flex w-[90%] max-w-6xl bg-white rounded-xl shadow-xl overflow-hidden">

        {/* Left Illustration */}
        <div className="w-1/2 bg-sky-100 flex flex-col items-center justify-center p-8">
          <img src={logo} alt="MKA Logo" className="w-36 mb-4" />
          <img src={doctorImage} alt="Doctor" className="w-[80%] object-contain" />
        </div>

        {/* Right Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">LOGIN</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-sky-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0v1a4 4 0 01-8 0v-1m8 0v-1a4 4 0 00-8 0v1" />
              </svg>
              <input type="email" placeholder="Email" required className="bg-transparent w-full focus:outline-none" />
            </div>

            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-sky-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c.552 0 1-.448 1-1V8a1 1 0 10-2 0v2c0 .552.448 1 1 1z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 20h12a2 2 0 002-2v-5a6 6 0 10-12 0v5a2 2 0 002 2z" />
              </svg>
              <input type="password" placeholder="Password" required className="bg-transparent w-full focus:outline-none" />
            </div>

            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <label className="flex items-center space-x-1">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:underline">Registrasi</a>
            </div>

            <button type="submit" className="w-full bg-sky-400 text-white py-2 rounded-full mt-4 hover:bg-sky-500 transition duration-300">
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">Forgot Password?</p>

          <div className="flex justify-center space-x-4 mt-4">
            <img src={googleIcon} alt="Google" className="w-6 h-6 cursor-pointer" />
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6 cursor-pointer" />
            <img src={appleIcon} alt="Apple" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
