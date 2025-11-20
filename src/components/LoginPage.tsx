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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        
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

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
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
