"use client";

import { useState } from "react";
import { FiMail, FiLock, FiUser, FiPhone, FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function SignupPage() {
  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Submit handler (Logic Unchanged)
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      fullName,
      email,
      phone,
      password,
    };

    const res = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    // ✅ REDIRECT TO OTP PAGE IF SIGNUP SUCCESS + OTP SENT
    if (result.message == "Signup successful. OTP sent to email.") {
      window.location.href = `/Otp?email=${email}`;
      return;
    }

    // Other responses
    alert(result.message);
  };

  return (
    // 1. Matching Gradient Background
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-4 sm:px-6 lg:px-8 py-8">
      
      {/* 2. Card Container */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.005] duration-300">
        
        {/* Top Decorative Bar */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 w-full"></div>

        <div className="p-8 sm:p-10">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center shadow-inner mb-4 group">
              <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                🚗
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Create Account</h2>
            <p className="text-gray-500 text-sm mt-2">
              Join <span className="font-bold text-blue-600">RideShare</span> and start moving
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Full Name Input */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <div className="relative transition-all duration-300">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <div className="relative transition-all duration-300">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <div className="relative transition-all duration-300">
                <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={10}
                  placeholder="1234567890"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <div className="relative transition-all duration-300">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
              <div className="relative transition-all duration-300">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 pt-1">
              <div className="relative flex items-center mt-1">
                <input 
                  type="checkbox" 
                  required 
                  className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <FiCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-xs" />
              </div>
              <p className="text-sm text-gray-500 leading-tight">
                I agree to the{" "}
                <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-blue-600 font-medium cursor-pointer hover:underline">Privacy Policy</span>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Create Account
            </button>
            
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center py-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="relative bg-white px-4 text-sm text-gray-500 font-medium">Or register with</span>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {/* Google */}
            <button type="button" className="flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                alt="Google"
              />
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>

            {/* Facebook */}
            <button type="button" className="flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 group">
              <img
                src="https://www.svgrepo.com/show/448224/facebook.svg"
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                alt="Facebook"
              />
              <span className="text-sm font-medium text-gray-700">Facebook</span>
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/Login" className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}