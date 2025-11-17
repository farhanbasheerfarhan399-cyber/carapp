"use client";
import { useState } from "react";
import { Search, MapPin, Calendar } from "lucide-react";
import { TAMIL_NADU_CITIES } from "./Cities";

export default function SearchForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const filterCities = (input: string) =>
    TAMIL_NADU_CITIES.filter((city) =>
      city.toLowerCase().includes(input.toLowerCase())
    );

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Leaving From */}
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-600" />
          <input
            className="
              w-full 
              bg-white 
              text-black
              border border-gray-300 
              rounded-lg 
              pl-10 py-3 
              placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            placeholder="Leaving from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />

          {from && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg max-h-40 overflow-y-auto shadow">
              {filterCities(from).map((city) => (
                <li
                  key={city}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-black"
                  onClick={() => setFrom(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Going To */}
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-600" />
          <input
            className="
              w-full 
              bg-white 
              text-black 
              border border-gray-300 
              rounded-lg 
              pl-10 py-3 
              placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            placeholder="Going to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />

          {to && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg max-h-40 overflow-y-auto shadow">
              {filterCities(to).map((city) => (
                <li
                  key={city}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-black"
                  onClick={() => setTo(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Date */}
        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-600" />
          <input
            type="date"
            className="
              w-full 
              bg-white 
              text-black 
              border border-gray-300 
              rounded-lg 
              pl-10 py-3 
              placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

      </div>

      <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 text-lg hover:bg-blue-700">
        <Search size={20} /> Search
      </button>
    </div>
  );
}
