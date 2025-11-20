"use client";

import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // ✅ important: store cookie from backend
      });

      const data = await res.json();
      console.log("LOGIN RES:", data);

      if (!res.ok) {
        setErrorMsg(data.message || "Login failed!");
        setLoading(false);
        return;
      }

      // Optional: also store token in localStorage for frontend use
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // Redirect to home page
      router.push("/Home");
    } catch (error) {
      setErrorMsg("Something went wrong. Try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    // 1. Background upgraded to a rich angular gradient
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-4 sm:px-6 lg:px-8">
      
      {/* 2. Card container with glass effect hint and better shadow */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
        
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow">
            🚗
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm">Login to your RideShare account</p>
        </div>

        {errorMsg && (
          <p className="mt-4 text-red-500 text-center text-sm">{errorMsg}</p>
        )}

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
        {/* Top Decorative Bar */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 w-full"></div>

        <div className="p-8 sm:p-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center shadow-inner mb-4 group">
              {/* Added a subtle animation to the car on hover */}
              <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                🚗
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-2">Login to continue your journey</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="mt-8 space-y-6">

            {/* Email Input */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <div className="relative transition-all duration-300">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
            {/* Password Input */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <div className="relative transition-all duration-300">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Login Button - Added gradient and shadow glow */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <span className="relative bg-white px-4 text-sm text-gray-500 font-medium">Or continue with</span>
            </div>

            {/* Social Buttons Grid */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">🌐</span>
                <span className="text-sm font-medium text-gray-700">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 group"
              >
                <span className="text-xl text-blue-600 group-hover:scale-110 transition-transform">📘</span>
                <span className="text-sm font-medium text-gray-700">Facebook</span>
              </button>
            </div>

            {/* Signup Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{" "}
              <a href="/Signup" className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors">
                Sign up now
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}