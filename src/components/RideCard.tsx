"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

// Type definitions
interface Driver {
  name: string;
  initial: string;
  rating: number;
  trips: number;
}

interface RideData {
  from: string;
  to: string;
  date: string;
  time: string;
  driver: Driver;
  seats: number;
  price: string;
}

interface BookingDetails {
  seatsBooked: number;
  totalPrice: number;
  actionType: "contact" | "call";
}

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  seatsBooked: number;
  totalPrice: number;
  actionType: "contact" | "call";
  rideData: RideData;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  rideData: RideData;
  actionType: "contact" | "call";
  onBookingComplete: (
    seatsBooked: number,
    actionType: "contact" | "call"
  ) => void;
}

// Navbar Component
const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="w-full">
        <div className="flex justify-between items-center px-6 py-4">
          <a
            href="/"
            className="flex items-center gap-2 text-blue-600 font-semibold text-lg"
          >
            🚗 RideShare
          </a>

          <div className="flex gap-6 text-gray-700 items-center">
            <a href="/" className="hover:text-gray-900">
              Home
            </a>
            <a href="/about" className="hover:text-gray-900">
              About
            </a>
            <a
              href="/Publish"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Publish a Ride
            </a>
            <a
              href="/Login"
              className="flex items-center gap-1 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Success Confirmation Dialog
const SuccessDialog: React.FC<SuccessDialogProps> = ({
  isOpen,
  onClose,
  seatsBooked,
  totalPrice,
  actionType,
  rideData,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {/* Success Icon */}
        <div className="flex flex-col items-center pt-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold">
              Booking Confirmed!
            </DialogTitle>
            <DialogDescription className="text-center pt-2">
              Your seat{seatsBooked > 1 ? "s have" : " has"} been successfully
              booked.
            </DialogDescription>
          </DialogHeader>

          {/* Booking Details */}
          <div className="w-full bg-gray-50 rounded-lg p-4 my-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Route:</span>
              <span className="font-medium text-gray-900">
                {rideData.from} → {rideData.to}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Date & Time:</span>
              <span className="font-medium text-gray-900">
                {rideData.date}, {rideData.time}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Seats Booked:</span>
              <span className="font-medium text-gray-900">
                {seatsBooked}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Driver:</span>
              <span className="font-medium text-gray-900">
                {rideData.driver.name}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">
                  Total Amount:
                </span>
                <span className="font-bold text-green-600 text-lg">
                  ₹{totalPrice}
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex gap-2">
              <svg
                className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-sm text-blue-800">
                <span className="font-semibold">Next Step:</span>{" "}
                {actionType === "contact"
                  ? "You can now message the driver to confirm pickup details."
                  : "Connecting you with the driver..."}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-3 pb-2">
            {actionType === "contact" ? (
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Message Driver
              </Button>
            ) : (
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Driver Now
              </Button>
            )}
            <Button onClick={onClose} variant="outline" className="w-full">
              Done
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Booking Confirmation Modal
const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  rideData,
  actionType,
  onBookingComplete,
}) => {
  const [seatsToBook, setSeatsToBook] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
    // Simulate booking process
    setTimeout(() => {
      setIsConfirmed(false);
      onClose();
      onBookingComplete(seatsToBook, actionType);
    }, 1500);
  };

  const totalPrice =
    seatsToBook * parseInt(rideData.price.replace("₹", ""), 10);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Your Booking</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Trip Summary */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-600 font-semibold">{rideData.from}</div>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <div className="text-blue-600 font-semibold">{rideData.to}</div>
            </div>
            <div className="text-sm text-gray-600">{rideData.date}</div>
            <div className="text-sm text-gray-600">{rideData.time}</div>
          </div>

          {/* Driver Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              {rideData.driver.initial}
            </div>
            <div>
              <div className="font-medium text-gray-900">
                {rideData.driver.name}
              </div>
              <div className="text-sm text-gray-600">
                ⭐ {rideData.driver.rating} · {rideData.driver.trips} trips
              </div>
            </div>
          </div>

          {/* Seat Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Seats
            </label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setSeatsToBook((prev) => Math.max(1, prev - 1))
                }
                disabled={seatsToBook <= 1}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </Button>
              <Input
                type="number"
                min="1"
                max={rideData.seats}
                value={seatsToBook}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = parseInt(e.target.value || "1", 10);
                  const safeValue = isNaN(value) ? 1 : value;
                  setSeatsToBook(
                    Math.min(
                      rideData.seats,
                      Math.max(1, safeValue)
                    )
                  );
                }}
                className="w-20 text-center"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setSeatsToBook((prev) =>
                    Math.min(rideData.seats, prev + 1)
                  )
                }
                disabled={seatsToBook >= rideData.seats}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </Button>
              <span className="text-sm text-gray-600">
                of {rideData.seats} available
              </span>
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-blue-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Price per seat:</span>
              <span className="font-medium">{rideData.price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Number of seats:</span>
              <span className="font-medium">{seatsToBook}</span>
            </div>
            <div className="border-t border-blue-200 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">
                  Total Amount:
                </span>
                <span className="font-bold text-blue-600 text-lg">
                  ₹{totalPrice}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex gap-3 pt-4">
          <Button onClick={onClose} variant="outline" className="flex-1">
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={isConfirmed}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            {isConfirmed ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Confirming...
              </>
            ) : (
              <>Confirm & {actionType === "contact" ? "Contact" : "Call"}</>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const RideDetailsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState<"contact" | "call">("contact");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );

  // Sample ride data
  const rideData: RideData = {
    from: "Chennai",
    to: "Bangalore",
    date: "Thursday 20 November, 2025",
    time: "06:00 AM",
    driver: {
      name: "Rajesh Kumar",
      initial: "R",
      rating: 4.8,
      trips: 124,
    },
    seats: 3,
    price: "₹450",
  };

  // NEW: Function to open Google Maps with the route
  const handleOpenRouteMap = () => {
    const origin = encodeURIComponent(rideData.from);
    const destination = encodeURIComponent(rideData.to);
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
    window.open(url, "_blank");
  };

  const handleContactDriver = () => {
    setActionType("contact");
    setIsModalOpen(true);
  };

  const handleCallDriver = () => {
    setActionType("call");
    setIsModalOpen(true);
  };

  const handleBookingComplete = (
    seatsBooked: number,
    actionType: "contact" | "call"
  ) => {
    const totalPrice =
      seatsBooked * parseInt(rideData.price.replace("₹", ""), 10);
    setBookingDetails({ seatsBooked, totalPrice, actionType });
    setShowSuccessDialog(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="mb-6 px-0 hover:bg-transparent"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to rides
        </Button>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Blue Header Section */}
          <div className="bg-blue-600 p-8 text-white">
            <div className="flex justify-between items-center mb-6">
              {/* From Section - Added onClick and cursor styling */}
              <div 
                className="flex-1 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={handleOpenRouteMap}
                title="View route on Google Maps"
              >
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">From</span>
                </div>
                <h2 className="text-xl font-semibold">{rideData.from}</h2>
              </div>

              {/* Divider Line */}
              <div className="flex-1 flex justify-center px-8">
                <div className="w-full max-w-xs border-t-2 border-white opacity-30 mt-6"></div>
              </div>

              {/* To Section - Added onClick and cursor styling */}
              <div 
                className="flex-1 text-right cursor-pointer hover:opacity-90 transition-opacity"
                onClick={handleOpenRouteMap}
                title="View route on Google Maps"
              >
                <div className="flex items-center justify-end gap-2 mb-1">
                  <span className="text-sm">To</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">{rideData.to}</h2>
              </div>
            </div>

            {/* Date and Time */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">{rideData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm">{rideData.time}</span>
              </div>
            </div>
          </div>

          {/* Driver Information Section */}
          <div className="p-8">
            <h3 className="text-base font-semibold text-gray-800 mb-6">
              Driver Information
            </h3>

            <div className="flex items-center gap-4 mb-8">
              {/* Driver Avatar */}
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                {rideData.driver.initial}
              </div>

              {/* Driver Details */}
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  {rideData.driver.name}
                </h4>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span>{rideData.driver.rating}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
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
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Available Seats</span>
                </div>
                <p className="text-base text-gray-800">
                  {rideData.seats} seats available
                </p>
              </div>

              <div>
                <div className="text-gray-700 mb-2">
                  <span className="text-sm font-medium">Price per Seat</span>
                </div>
                <p className="text-2xl font-bold text-blue-600">
                  {rideData.price}
                </p>
              </div>
            </div>

            {/* Book this ride */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-4">
                Book this ride
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Contact Driver Button */}
                <Button
                  onClick={handleContactDriver}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Contact Driver
                </Button>

                {/* Call Driver Button */}
                <Button
                  onClick={handleCallDriver}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Driver
                </Button>
              </div>

              {/* Warning Message */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-sm text-yellow-800">
                  <span className="font-semibold">Important:</span> Please
                  confirm your booking with the driver before making any
                  payment. Always meet in a public place for safety.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rideData={rideData}
        actionType={actionType}
        onBookingComplete={handleBookingComplete}
      />

      {/* Success Dialog */}
      {bookingDetails && (
        <SuccessDialog
          isOpen={showSuccessDialog}
          onClose={() => setShowSuccessDialog(false)}
          seatsBooked={bookingDetails.seatsBooked}
          totalPrice={bookingDetails.totalPrice}
          actionType={bookingDetails.actionType}
          rideData={rideData}
        />
      )}
    </div>
  );
};

export default RideDetailsPage;