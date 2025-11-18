"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function OTPPage() {
  const [timer, setTimer] = useState(19);

  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#eaf2ff] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">

        {/* Back */}
        <button
          onClick={() => window.history.back()}
          className="text-sm text-blue-600 mb-4"
        >
          ← Back
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-1">Verify Your Phone</h2>
        <p className="text-gray-500 mb-1">We've sent a 6-digit code to</p>

        {/* Phone Number */}
 
        {/* OTP Input */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">Enter OTP</label>
          <input
            type="text"
            maxLength={6}
            className="mt-2 w-full border rounded-lg px-4 py-3 outline-none tracking-widest text-center text-lg"
            placeholder="------"
          />
        </div>

        {/* Resend Text */}
        <p className="text-sm text-gray-500 mb-6">
          Resend OTP in <span className="text-blue-600">{timer}s</span>
        </p>

        {/* Verify Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mb-4">
          Verify & Continue
        </button>

        {/* Change Number */}
        <p className="text-center text-sm text-gray-600">
          Didn't receive the code?{" "}
          <Link href="/change-number" className="text-blue-600">
            Change phone number
          </Link>
        </p>
      </div>
    </div>
  );
}
