"use client";

import React, { useState } from 'react';



interface RideFormData {
  startingLocation: string;
  destination: string;
  date: string;
  time: string;
  price: number;
  seats: number;
  carDetails: string;
}

interface PublishRideFormProps {
  onPublish: (data: RideFormData) => void;
}

export const PublishRideForm: React.FC<PublishRideFormProps> = ({ onPublish }) => {
  const [formData, setFormData] = useState<RideFormData>({
    startingLocation: '',
    destination: '',
    date: '',
    time: '',
    price: 0,
    seats: 1,
    carDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPublish(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Publish a Ride</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Starting Location</label>
          <input
            type="text"
            placeholder="e.g., T Nagar, Chennai"
            value={formData.startingLocation}
            onChange={(e) => setFormData({...formData, startingLocation: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
          <input
            type="text"
            placeholder="e.g., MG Road, Bangalore"
            value={formData.destination}
            onChange={(e) => setFormData({...formData, destination: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price per Seat (₹)</label>
            <input
              type="number"
              placeholder="450"
              value={formData.price || ''}
              onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Available Seats</label>
            <select 
              value={formData.seats}
              onChange={(e) => setFormData({...formData, seats: Number(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Car Details</label>
          <input
            type="text"
            placeholder="e.g., Honda City, White, TN-01-AB-1234"
            value={formData.carDetails}
            onChange={(e) => setFormData({...formData, carDetails: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Publish Ride
        </button>
      </form>
    </div>
  );
};

export default  PublishRideForm;