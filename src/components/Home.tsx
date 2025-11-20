"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";

const sampleRides = [
  { from: "Chennai", to: "Bangalore", date: "20/11/2025", time: "05:00 AM", driver: "Rajan Kumar", rating: 4.8, trips: 124, seats: 3, price: "₹450" },
  { from: "Chennai", to: "Coimbatore", date: "20/11/2025", time: "07:30 AM", driver: "Priya Sharma", rating: 4.9, trips: 89, seats: 2, price: "₹350" },
  { from: "Mumbai", to: "Pune", date: "21/11/2025", time: "08:00 AM", driver: "Amit Patel", rating: 4.7, trips: 156, seats: 4, price: "₹200" },
  { from: "Delhi", to: "Jaipur", date: "22/11/2025", time: "09:00 AM", driver: "Vikram Singh", rating: 4.6, trips: 203, seats: 2, price: "₹300" },
  { from: "Bangalore", to: "Chennai", date: "23/11/2025", time: "05:00 AM", driver: "Deepak Reddy", rating: 4.8, trips: 167, seats: 3, price: "₹420" },
  { from: "Madurai", to: "Chennai", date: "24/11/2025", time: "06:00 AM", driver: "Suresh Kumar", rating: 4.9, trips: 99, seats: 2, price: "₹400" }
];

const RideShareHomepage = () => {
  const [searchData, setSearchData] = useState({ from: "", to: "", date: "" });
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Ensure client-side rendering for hydration safety
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent SSR mismatch

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-white text-2xl font-semibold mb-8">Your pick of rides at low prices</h1>

          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Leaving from"
                value={searchData.from}
                onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
                className="w-full pl-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Going to"
                value={searchData.to}
                onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                className="w-full pl-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                value={searchData.date}
                onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                className="w-full pl-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>

          {/* Publish Ride CTA */}
          <button
            onClick={() => router.push("/Publish")}
            className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 font-medium"
          >
            Publish a Ride
          </button>
        </div>
      </div>

      {/* Available Rides */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Available Rides</h2>
        <div className="space-y-4">
          {sampleRides.map((ride, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md cursor-pointer"
              onClick={() => router.push("/ridecard")}
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{ride.from} → {ride.to}</p>
                  <p className="text-sm text-gray-600">{ride.date} · {ride.time}</p>
                </div>
                <p className="text-blue-600 font-bold text-lg">{ride.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RideShareHomepage;
