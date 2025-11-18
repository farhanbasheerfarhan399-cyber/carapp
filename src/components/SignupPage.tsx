"use client";

import { useState } from "react";
import { FiMail, FiLock, FiUser, FiPhone } from "react-icons/fi";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#eaf2ff] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-600 text-white p-4 rounded-full">
            🚗
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold">Create Account</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Join RideShare today
        </p>

        {/* Form Fields */}
        <form className="space-y-4">

          {/* Full Name */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiMail className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none"
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiPhone className="text-gray-400 mr-2" />
            <input
              type="text"
              maxLength={10}
              placeholder="Enter 10-digit phone number"
              className="w-full outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Create a password"
              className="w-full outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full outline-none"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" />
            <p>
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer">Terms & Conditions</span> and{" "}
              <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
            </p>
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
            <a href="/Otp">
            Sign Up
         </a>
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <span className="flex-grow h-px bg-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <span className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Google Button */}
        <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-2 mb-3">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
          Continue with Google
        </button>

        {/* Facebook Button */}
        <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-2">
          <img src="https://www.svgrepo.com/show/448224/facebook.svg" className="w-5 h-5" />
          Continue with Facebook
        </button>

        {/* Login */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/Login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
