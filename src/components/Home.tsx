"use client";

import React, { useState } from "react";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full">
        <div className="flex justify-between items-center px-6 py-4">
          <a href="/" className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
            🚗 RideShare
          </a>

          <div className="flex gap-6 text-gray-700 items-center">
            <a href="/" className="hover:text-gray-900">Home</a>
            <a href="/about" className="hover:text-gray-900">About</a>
            <a
              href="/Publish"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Publish a Ride
            </a>
            <a href="/Login" className="flex items-center gap-1 hover:text-gray-900">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Sample ride data
const sampleRides = [
  {
    from: "Chennai",
    to: "Bangalore",
    date: "20/11/2025",
    time: "05:00 AM",
    driver: "Rajan Kumar",
    rating: 4.8,
    trips: 124,
    seats: 3,
    price: "₹450"
  },
  {
    from: "Chennai",
    to: "Coimbatore",
    date: "20/11/2025",
    time: "07:30 AM",
    driver: "Priya Sharma",
    rating: 4.9,
    trips: 89,
    seats: 2,
    price: "₹350"
  },
  {
    from: "Mumbai",
    to: "Pune",
    date: "21/11/2025",
    time: "08:00 AM",
    driver: "Amit Patel",
    rating: 4.7,
    trips: 156,
    seats: 4,
    price: "₹200"
  },
  {
    from: "Delhi",
    to: "Jaipur",
    date: "22/11/2025",
    time: "09:00 AM",
    driver: "Vikram Singh",
    rating: 4.6,
    trips: 203,
    seats: 2,
    price: "₹300"
  },
  {
    from: "Bangalore",
    to: "Chennai",
    date: "23/11/2025",
    time: "05:00 AM",
    driver: "Deepak Reddy",
    rating: 4.8,
    trips: 167,
    seats: 3,
    price: "₹420"
  },
  {
    from: "Madurai",
    to: "Chennai",
    date: "24/11/2025",
    time: "06:00 AM",
    driver: "Suresh Kumar",
    rating: 4.9,
    trips: 99,
    seats: 2,
    price: "₹400"
  },
   {
    from: "Madurai",
    to: "Chennai",
    date: "24/11/2025",
    time: "06:00 AM",
    driver: "Suresh Kumar",
    rating: 4.9,
    trips: 99,
    seats: 2,
    price: "₹400"
  }
];

export const RideShareHomepage = () => {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: ""
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-white text-2xl font-semibold text-center mb-8">
            Your pick of rides at low prices
          </h1>

          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Leaving From */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Leaving from"
                  value={searchData.from}
                  onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>

              {/* Going To */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Going to"
                  value={searchData.to}
                  onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>

              {/* Date */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="date"
                  value={searchData.date}
                  onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Available Rides Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Rides</h2>

        <div className="space-y-4">
          {sampleRides.map((ride, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                {/* Route Info */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="8" />
                      </svg>
                      <span className="font-medium text-gray-800">{ride.from}</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="font-medium text-gray-800">{ride.to}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 ml-8">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{ride.date}</span>
                    <span className="text-sm ml-2">{ride.time}</span>
                  </div>
                </div>

                {/* Driver Info */}
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="font-medium text-gray-800">{ride.driver}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span>{ride.rating}</span>
                      </div>
                      <span>·</span>
                      <span>{ride.trips} trips</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-sm">{ride.seats} seats</span>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">{ride.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Search</h3>
              <p className="text-gray-600 text-sm">
                Find your perfect ride from our wide range of destinations and schedules
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Book</h3>
              <p className="text-gray-600 text-sm">
                Connect with verified drivers and book your seat in just a few clicks
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ride</h3>
              <p className="text-gray-600 text-sm">
                Enjoy your ride and split the cost of travel with fellow passengers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Going somewhere?
          </h2>
          <p className="text-blue-100 mb-8">
            Share your ride and split the cost with passengers along your route
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 font-medium">
            Publish a Ride
          </button>
        </div>
      </div>
    </div>
  );
};
export default RideShareHomepage