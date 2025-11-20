"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function OTPPage() {
  const params = useSearchParams();
  const router = useRouter();
  const email = params.get("email");

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [isResending, setIsResending] = useState(false);

  // Countdown Timer
  useEffect(() => {
    if (timer === 0) return; // stop when timer reaches 0

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Handle OTP Verify
  const handleVerify = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const result = await res.json();

      alert(result.message);

      if (res.ok && result.success) {
        router.push("/Login");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Handle Resend OTP
  const handleResendOTP = async () => {
    setIsResending(true);

    try {
      const res = await fetch("http://localhost:5000/api/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();
      alert(result.message);

      // Restart timer
      setTimer(19);
    } catch (error) {
      console.error("Resend OTP error:", error);
      alert("Failed to resend OTP. Try again.");
    }

    setIsResending(false);
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

        {/* Timer OR Resend Button */}
        {timer > 0 ? (
          <p className="text-sm text-gray-500 mb-6">
            Resend OTP in <span className="text-blue-600">{timer}s</span>
          </p>
        ) : (
          <button
            onClick={handleResendOTP}
            disabled={isResending}
            className="text-sm mb-6 text-blue-600 hover:underline"
          >
            {isResending ? "Resending..." : "Resend OTP"}
          </button>
        )}

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
