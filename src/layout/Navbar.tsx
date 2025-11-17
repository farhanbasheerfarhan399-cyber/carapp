"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-blue-600 font-bold text-xl">RideShare</div>

        <div className="hidden md:flex gap-6 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          {/* Make sure this matches your folder name */}
          <Link
            href="/Publish"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Publish a Ride
          </Link>

          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
