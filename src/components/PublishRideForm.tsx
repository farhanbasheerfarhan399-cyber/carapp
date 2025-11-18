"use client";

import React, { useState } from "react";
import Navbar from "../layout/Navbar";

interface RideFormData {
  startingLocation: string;
  exactPickupPoint: string;
  destination: string;
  date: string;
  time: string;
  price: number;
  seats: string;
}

// Navbar Component


export const PublishRideForm: React.FC<{
  onPublish?: (data: RideFormData) => void;
}> = ({ onPublish }) => {
  const [formData, setFormData] = useState<RideFormData>({
    startingLocation: "",
    exactPickupPoint: "",
    destination: "",
    date: "",
    time: "",
    price: 0,
    seats: "1 seat",
  });

  const handleSubmit = () => {
    if (onPublish) {
      onPublish(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar - Using your exact Navbar component */}
      <Navbar />

      {/* Form Container */}
      <div className="max-w-1xl mx-auto p-8 bg-white shadow-sm rounded-lg mt-8">
        <h2 className="text-1xl font-semibold mb-6 flex items-center gap-2 text-blue-600">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
          Publish a Ride
        </h2>

        <div className="space-y-5">
          {/* Leaving From */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Leaving From</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Enter departure city"
                value={formData.startingLocation}
                onChange={(e) =>
                  setFormData({ ...formData, startingLocation: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Start Location (Exact pickup point) */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Start Location (Exact pickup point)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Bus stand, railway station, landmark..."
                value={formData.exactPickupPoint}
                onChange={(e) =>
                  setFormData({ ...formData, exactPickupPoint: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Specify the exact location where you'll pick up passengers
            </p>
          </div>

          {/* Going To */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Going To</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Enter destination city"
                value={formData.destination}
                onChange={(e) =>
                  setFormData({ ...formData, destination: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Date</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Time</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Available Seats and Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Available Seats
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="1 seat"
                  value={formData.seats}
                  onChange={(e) =>
                    setFormData({ ...formData, seats: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Price per Seat (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold">
                  ₹
                </span>
                <input
                  type="text"
                  placeholder="Enter price"
                  value={formData.price || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, price: Number(e.target.value) })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Tip Box */}
          <div className="bg-blue-50 border border-blue-200 px-4 py-3 rounded-md text-sm text-blue-700">
            💡 Tip: Set a fair price that covers your fuel and toll costs. Competitive
            pricing helps you find passengers faster!
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4 mt-6">
            <button
              type="button"
              onClick={() => console.log('Cancel clicked')}
              className="flex-1 px-6 py-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
            >
              Publish Ride
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};