"use client";

import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login details:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow">
            🚗
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Login to your RideShare account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <label className="text-gray-700 text-sm font-medium">Email</label>
            <div className="relative mt-1">
              <FiMail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 text-sm font-medium">Password</label>
            <div className="relative mt-1">
              <FiLock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full border py-2.5 rounded-lg flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition"
          >
            <span className="text-xl">🌐</span>
            Continue with Google
          </button>

          {/* Facebook Login */}
          <button
            type="button"
            className="w-full border py-2.5 rounded-lg flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition"
          >
            <span className="text-xl">📘</span>
            Continue with Facebook
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/Signup" className="text-blue-600 font-medium hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
