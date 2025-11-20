"use client";

import React, { useState } from "react";
import Link from "next/link"; // <--- 1. Added Import

// --- Types ---
interface Ride {
  id: number;
  origin: string;
  destination: string;
  date: string;
  time: string;
  price: string;
  status: "Confirmed" | "Pending" | "Completed" | "Cancelled";
  partnerName: string;
  avatarColor: string;
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"bookings" | "published">("bookings");

  // --- MOCK DATA ---
  const bookedRides: Ride[] = [
    {
      id: 1,
      origin: "San Francisco, CA",
      destination: "Palo Alto, CA",
      date: "Nov 24, 2023",
      time: "08:30 AM",
      price: "$15.00",
      status: "Confirmed",
      partnerName: "Alex Johnson",
      avatarColor: "bg-blue-500",
    },
    {
      id: 2,
      origin: "San Jose, CA",
      destination: "Santa Cruz, CA",
      date: "Nov 28, 2023",
      time: "05:15 PM",
      price: "$22.50",
      status: "Pending",
      partnerName: "Maria Garcia",
      avatarColor: "bg-purple-500",
    },
  ];

  const publishedRides: Ride[] = [
    {
      id: 101,
      origin: "Los Angeles, CA",
      destination: "San Diego, CA",
      date: "Dec 01, 2023",
      time: "09:00 AM",
      price: "$45.00",
      status: "Completed",
      partnerName: "David Kim",
      avatarColor: "bg-green-500",
    },
  ];

  // --- ICONS ---
  const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  );
  const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  );
  // New Back Arrow Icon
  const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
  );

  // --- COMPONENT: Status Badge ---
  const StatusBadge = ({ status }: { status: string }) => {
    const styles = {
      Confirmed: "bg-green-100 text-green-700 border-green-200",
      Pending: "bg-amber-100 text-amber-700 border-amber-200",
      Completed: "bg-gray-100 text-gray-600 border-gray-200",
      Cancelled: "bg-red-100 text-red-700 border-red-200",
    };
    // @ts-ignore
    const currentStyle = styles[status] || styles.Completed;

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${currentStyle}`}>
        {status}
      </span>
    );
  };

  // --- COMPONENT: Ride Card ---
  const RideCard = ({ ride, type }: { ride: Ride; type: "bookings" | "published" }) => (
    <div className="group bg-white rounded-xl border border-gray-200 p-6 mb-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center mt-1">
            <div className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-50"></div>
            <div className="w-0.5 h-10 bg-gray-300 my-1"></div>
            <div className="w-3 h-3 rounded-full border-2 border-gray-400 bg-white"></div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{ride.origin}</h3>
            <div className="h-6"></div>
            <h3 className="text-lg font-medium text-gray-600">{ride.destination}</h3>
            
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
              <div className="flex items-center"><CalendarIcon /> {ride.date}</div>
              <div className="flex items-center"><ClockIcon /> {ride.time}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row md:flex-col justify-between items-end gap-2 pl-7 md:pl-0">
          <StatusBadge status={ride.status} />
          <span className="text-2xl font-bold text-gray-900 mt-2">{ride.price}</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${ride.avatarColor}`}>
            {ride.partnerName.charAt(0)}
          </div>
          <div className="text-sm">
            <p className="text-gray-500 text-xs">{type === 'bookings' ? 'Driver' : 'Passenger'}</p>
            <p className="font-medium text-gray-800">{ride.partnerName}</p>
          </div>
        </div>

        <div className="flex gap-3">
            <button className="px-4 py-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                Details
            </button>
            {type === 'published' && ride.status !== 'Completed' && (
                 <button className="px-4 py-2 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-medium transition-colors">
                 Cancel
             </button>
            )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-500 border-b border-gray-200 pt-6 pb-8 px-6">
        <div className="max-w-5xl mx-auto">
            
            {/* 2. ADDED BACK BUTTON HERE */}
            <Link href="/" className="inline-flex items-center text-white hover:text-black transition-colors mb-6">
                <ArrowLeftIcon />
                <span className="ml-2 font-medium">Back to Home</span>
            </Link>

            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-white mt-1">Manage your journeys and published rides.</p>
            
            <div className="flex gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 w-40">
                    <p className="text-xs text-blue-600 font-semibold uppercase">Total Bookings</p>
                    <p className="text-2xl font-bold text-blue-900">{bookedRides.length}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 w-40">
                    <p className="text-xs text-purple-600 font-semibold uppercase">Published</p>
                    <p className="text-2xl font-bold text-purple-900">{publishedRides.length}</p>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Tab Switcher */}
        <div className="bg-gray-200 p-1 rounded-xl inline-flex mb-8">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "bookings"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Booked Rides
          </button>
          <button
            onClick={() => setActiveTab("published")}
            className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "published"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Published Rides
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === "bookings" && (
            <div className="animate-fade-in-up">
               <h2 className="text-xl font-bold text-gray-800 mb-4">Your Bookings</h2>
              {bookedRides.map((ride) => (
                <RideCard key={ride.id} ride={ride} type="bookings" />
              ))}
            </div>
          )}

          {activeTab === "published" && (
            <div className="animate-fade-in-up">
               <h2 className="text-xl font-bold text-gray-800 mb-4">Your Published Rides</h2>
              {publishedRides.map((ride) => (
                <RideCard key={ride.id} ride={ride} type="published" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}