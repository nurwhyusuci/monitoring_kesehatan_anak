import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export const SignUp = ({ onSignUp, onBackToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Semua field harus diisi');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Password dan konfirmasi password tidak sama');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password minimal 6 karakter');
      return;
    }

    onSignUp(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex">
          {/* Left side - Illustration */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-cyan-400 to-blue-500 items-center justify-center p-12">
            <div className="relative">
              {/* OMKA Logo */}
              <div className="absolute top-0 left-0 flex items-center space-x-2 mb-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">O</span>
                </div>
                <div>
                  <span className="text-green-300 font-bold text-3xl">M</span>
                  <span className="text-yellow-300 font-bold text-3xl">K</span>
                  <span className="text-green-300 font-bold text-3xl">A</span>
                </div>
              </div>

              {/* Medical Illustration */}
              <div className="mt-24 relative">
                <div className="w-96 h-96 relative">
                  {/* Background elements */}
                  <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                  
                  {/* Medical cross symbols */}
                  <div className="absolute top-8 left-8 w-8 h-8 text-white opacity-60">
                    <div className="w-full h-1 bg-white absolute top-1/2 transform -translate-y-1/2"></div>
                    <div className="h-full w-1 bg-white absolute left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  <div className="absolute top-16 right-12 w-6 h-6 text-white opacity-40">
                    <div className="w-full h-0.5 bg-white absolute top-1/2 transform -translate-y-1/2"></div>
                    <div className="h-full w-0.5 bg-white absolute left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  <div className="absolute bottom-12 left-16 w-10 h-10 text-white opacity-50">
                    <div className="w-full h-1 bg-white absolute top-1/2 transform -translate-y-1/2"></div>
                    <div className="h-full w-1 bg-white absolute left-1/2 transform -translate-x-1/2"></div>
                  </div>

                  {/* Doctor illustration */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-40 bg-white rounded-t-full relative">
                      {/* Doctor figure */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-300 rounded-full"></div>
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-teal-500 rounded-lg"></div>
                      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-blue-600 rounded-b-lg"></div>
                    </div>
                  </div>

                  {/* Medical symbols */}
                  <div className="absolute top-1/3 left-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 text-white">
                      <div className="w-full h-1 bg-white absolute top-1/2 transform -translate-y-1/2"></div>
                      <div className="h-full w-1 bg-white absolute left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>

                  {/* Heart symbol */}
                  <div className="absolute bottom-1/4 left-8 w-8 h-8 bg-red-400 rounded-t-full transform rotate-45 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-red-400 rounded-full"></div>
                    <div className="absolute -top-2 left-0 w-4 h-4 bg-red-400 rounded-full"></div>
                  </div>

                  {/* Pills */}
                  <div className="absolute bottom-8 right-8 w-16 h-8 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Sign Up Form */}
          <div className="w-full lg:w-1/2 p-12 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <button
                  onClick={onBackToLogin}
                  className="flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-colors"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Kembali ke Login
                </button>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">SIGN UP</h1>
                <p className="text-gray-600">Buat akun baru untuk OMKA Health System</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-4 bg-cyan-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-4 bg-cyan-100 border-2 border-blue-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-4 bg-cyan-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-4 bg-cyan-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-colors"
                >
                  Sign Up
                </button>

                <div className="text-center">
                  <p className="text-gray-600">
                    Sudah punya akun?{' '}
                    <button
                      type="button"
                      onClick={onBackToLogin}
                      className="text-blue-600 hover:text-blue-500 font-medium"
                    >
                      Login di sini
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};