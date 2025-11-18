"use client";

import React from "react";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
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

export const RideDetailsPage = () => {
  // Sample ride data
  const rideData = {
    from: "Chennai",
    to: "Bangalore",
    date: "Thursday 20 November, 2025",
    time: "06:00 AM",
    driver: {
      name: "Rajesh Kumar",
      initial: "R",
      rating: 4.8,
      trips: 124
    },
    seats: 3,
    price: "₹450"
  };

  return (
    <div className="min-h-screen bg-gray-50">
    

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">Back to rides</span>
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Blue Header Section */}
          <div className="bg-blue-600 p-8 text-white">
            <div className="flex justify-between items-center mb-6">
              {/* From Section */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">From</span>
                </div>
                <h2 className="text-xl font-semibold">{rideData.from}</h2>
              </div>

              {/* Divider Line */}
              <div className="flex-1 flex justify-center px-8">
                <div className="w-full max-w-xs border-t-2 border-white opacity-30 mt-6"></div>
              </div>

              {/* To Section */}
              <div className="flex-1 text-right">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <span className="text-sm">To</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">{rideData.to}</h2>
              </div>
            </div>

            {/* Date and Time */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">{rideData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">{rideData.time}</span>
              </div>
            </div>
          </div>

          {/* Driver Information Section */}
          <div className="p-8">
            <h3 className="text-base font-semibold text-gray-800 mb-6">Driver Information</h3>

            <div className="flex items-center gap-4 mb-8">
              {/* Driver Avatar */}
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                {rideData.driver.initial}
              </div>

              {/* Driver Details */}
              <div>
                <h4 className="text-base font-semibold text-gray-900">{rideData.driver.name}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span>{rideData.driver.rating}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{rideData.driver.trips} trips completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Seats and Price */}
            <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-200">
              <div>
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm font-medium">Available Seats</span>
                </div>
                <p className="text-base text-gray-800">{rideData.seats} seats available</p>
              </div>

              <div>
                <div className="text-gray-700 mb-2">
                  <span className="text-sm font-medium">Price per Seat</span>
                </div>
                <p className="text-2xl font-bold text-blue-600">{rideData.price}</p>
              </div>
            </div>

            {/* Book this ride */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-4">Book this ride</h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Contact Driver Button */}
                <button className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Driver
                </button>

                {/* Call Driver Button */}
                <button className="bg-green-600 text-white py-3 rounded-md hover:bg-green-700 font-medium flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Driver
                </button>
              </div>

              {/* Warning Message */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm text-yellow-800">
                  <span className="font-semibold">Important:</span> Please confirm your booking with the driver before making any payment. Always meet in a public place for safety.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};