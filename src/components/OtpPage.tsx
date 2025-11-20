"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function OTPPage() {
  const params = useSearchParams();
  const email = params.get("email");

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(19);

  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle OTP Verify
  const handleVerify = async () => {
    const res = await fetch("http://localhost:5000/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="min-h-screen bg-[#eaf2ff] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        
        <button
          onClick={() => window.history.back()}
          className="text-sm text-blue-600 mb-4"
        >
          ← Back
        </button>

        <h2 className="text-xl font-semibold mb-1">Verify Your Email</h2>
        <p className="text-gray-500 mb-1">OTP sent to: {email}</p>

        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">Enter OTP</label>
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="mt-2 w-full border rounded-lg px-4 py-3 outline-none tracking-widest text-center text-lg"
            placeholder="------"
          />
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Resend OTP in <span className="text-blue-600">{timer}s</span>
        </p>

        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mb-4"
        >
          Verify & Continue
        </button>
      </div>
    </div>
  );
}
