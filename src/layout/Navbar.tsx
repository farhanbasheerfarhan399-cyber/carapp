"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">RideShare</h1>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>

          <Link
            href="/Publish"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
          >
            Publish a Ride
          </Link>

          <Link
            href="/Login"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
