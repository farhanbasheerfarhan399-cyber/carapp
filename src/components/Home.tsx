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
    price: "₹450",
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
    price: "₹350",
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
    price: "₹200",
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
    price: "₹300",
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
    price: "₹420",
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
    price: "₹400",
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
    price: "₹400",
  },
];

export const RideShareHomepage = () => {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
  });

  // Initialize with all rides
  const [filteredRides, setFilteredRides] = useState(sampleRides);
  const router = useRouter();

  // --- UPDATED SEARCH FUNCTION ---
  const handleSearch = () => {
    const filtered = sampleRides.filter((ride) => {
      // Clean up inputs: Convert to lowercase and remove extra spaces
      const searchFrom = searchData.from.toLowerCase().trim();
      const searchTo = searchData.to.toLowerCase().trim();
      const rideFrom = ride.from.toLowerCase();
      const rideTo = ride.to.toLowerCase();

      // 1. Check 'From' (Partial match & Case Insensitive)
      const matchFrom = searchFrom === "" || rideFrom.includes(searchFrom);

      // 2. Check 'To' (Partial match & Case Insensitive)
      const matchTo = searchTo === "" || rideTo.includes(searchTo);

      // 3. Check Date (Format conversion required)
      let matchDate = true;
      if (searchData.date) {
        // Input comes as YYYY-MM-DD, Data is DD/MM/YYYY
        const [year, month, day] = searchData.date.split("-");
        const formattedInputDate = `${day}/${month}/${year}`;
        matchDate = ride.date === formattedInputDate;
      }

      return matchFrom && matchTo && matchDate;
    });

    setFilteredRides(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
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
      {/* --- Hero Section with Stylish Background --- */}
      <div className="relative bg-blue-400 py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern/Image Placeholder */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md tracking-tight">
            Your pick of rides at <span className="text-blue-300">low prices</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Travel comfortably, share costs, and meet new people. Where do you want to go today?
          </p>

          {/* --- Stylish Search Box --- */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Leaving From */}
              <div className="md:col-span-4 relative group">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Leaving from..."
                  value={searchData.from}
                  onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition-all font-medium text-gray-700"
                />
              </div>

              {/* Going To */}
              <div className="md:col-span-4 relative group">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Going to..."
                  value={searchData.to}
                  onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition-all font-medium text-gray-700"
                />
              </div>

              {/* Date */}
              <div className="md:col-span-3 relative group">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="date"
                  value={searchData.date}
                  onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition-all font-medium text-gray-700 cursor-pointer"
                />
              </div>

              {/* Search Button */}
              <div className="md:col-span-1">
                <button
                  onClick={handleSearch}
                  className="w-full h-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
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
      {/* --- Available Rides Section --- */}
      <div className="max-w-5xl mx-auto px-6 py-16 -mt-8 relative z-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
             {filteredRides.length} {filteredRides.length === 1 ? "Ride" : "Rides"} Available
          </h2>
          <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border">Sorted by date</span>
        </div>

        <div className="space-y-5" onClick={() => router.push("/ridecard")}>
          {filteredRides.length > 0 ? (
            filteredRides.map((ride, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-0 hover:shadow-xl hover:border-blue-100 transition-all duration-300 cursor-pointer overflow-hidden relative"
              >
                {/* Hover accent line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="p-6 flex flex-col md:flex-row justify-between md:items-center gap-6">
                  {/* Route Visualization */}
                  <div className="flex-1">
                    <div className="relative pl-8 border-l-2 border-dashed border-gray-200 space-y-8">
                        {/* From */}
                        <div className="relative">
                             <div className="absolute -left-[37px] top-0 w-5 h-5 rounded-full border-4 border-white bg-blue-600 ring-2 ring-blue-100"></div>
                             <div className="flex flex-col">
                                 <span className="text-lg font-bold text-gray-900">{ride.time}</span>
                                 <span className="text-gray-600 font-medium">{ride.from}</span>
                             </div>
                        </div>
                        {/* To */}
                        <div className="relative">
                            <div className="absolute -left-[37px] top-0 w-5 h-5 rounded-full border-4 border-white bg-green-600 ring-2 ring-green-100"></div>
                            <div className="flex flex-col">
                                 {/* Using a mock arrival time or just showing destination for style */}
                                 <span className="text-sm text-gray-400 mb-0.5">Arrival</span>
                                 <span className="text-gray-600 font-medium">{ride.to}</span>
                            </div>
                        </div>
                    </div>
                     <div className="mt-4 flex items-center gap-3 pl-2">
                          <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold uppercase tracking-wider">
                             {ride.date}
                          </div>
                     </div>
                  </div>

                  {/* Driver & Price Info */}
                  <div className="flex flex-row md:flex-col justify-between items-center md:items-end gap-4 md:gap-1 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0 pl-0 md:pl-6 md:border-l md:border-gray-100 min-w-[200px]">
                    
                    {/* Price */}
                    <div className="text-right order-2 md:order-1">
                       <span className="block text-3xl font-extrabold text-blue-600 tracking-tight">{ride.price}</span>
                       <span className="text-xs text-gray-400">per passenger</span>
                    </div>

                    {/* Driver Info */}
                    <div className="flex items-center gap-3 order-1 md:order-2 mt-2">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm">
                            {ride.driver.charAt(0)}
                        </div>
                        <div className="text-left md:text-right">
                             <p className="font-semibold text-gray-800 text-sm">{ride.driver}</p>
                             <div className="flex items-center gap-1 text-xs text-gray-500">
                                <span className="text-yellow-400">★</span> {ride.rating} <span className="mx-1">•</span> {ride.seats} seats left
                             </div>
                        </div>
                    </div>
                  </div>
                </div>
                <p className="text-blue-600 font-bold text-lg">{ride.price}</p>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 text-gray-500">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg font-medium">No rides found.</p>
              <p className="text-sm">Try changing your date or location.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RideShareHomepage;

      {/* --- How It Works Section --- */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple, Fast & Safe</h2>
               <p className="text-gray-500 max-w-xl mx-auto">Getting where you need to go hasn't been this easy since, well, ever.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300 text-center border border-transparent hover:border-blue-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-md mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Enter your destination and date. Browse through thousands of trusted rides.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300 text-center border border-transparent hover:border-blue-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-md mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Book</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose the perfect ride. Check driver ratings and book your seat instantly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300 text-center border border-transparent hover:border-blue-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-md mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Travel</h3>
              <p className="text-gray-600 leading-relaxed">
                Meet your driver, enjoy the journey, and save money while making friends.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Call to Action Section --- */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 relative overflow-hidden">
         {/* Decorative circles */}
         <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
         <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Driving somewhere soon?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Don't drive with empty seats. Share your ride, split the costs, and help reduce the carbon footprint.
          </p>
          <button className="bg-white text-blue-700 px-10 py-4 rounded-xl hover:bg-gray-100 font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <a href="/publish">Publish a Ride</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default RideShareHomepage;
