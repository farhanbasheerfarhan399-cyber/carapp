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
      <DialogContent className="sm:max-w-md rounded-2xl border-none shadow-2xl">
        <div className="flex flex-col items-center pt-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <DialogHeader className="text-center space-y-2">
            <DialogTitle className="text-3xl font-bold text-gray-900">
              Booking Confirmed!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-500 text-base">
              Your seat{seatsBooked > 1 ? "s have" : " has"} been successfully
              booked.
            </DialogDescription>
          </DialogHeader>

          {/* Booking Ticket Stub */}
          <div className="w-full bg-slate-50 border border-slate-100 rounded-xl p-5 my-6 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Route</span>
              <span className="font-semibold text-gray-900">
                {rideData.from} <span className="text-gray-400">→</span> {rideData.to}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Time</span>
              <span className="font-semibold text-gray-900">
                {rideData.date}, {rideData.time}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Driver</span>
              <span className="font-semibold text-gray-900">
                {rideData.driver.name}
              </span>
            </div>
            <div className="border-t border-dashed border-gray-300 pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900">Total Paid</span>
                <span className="font-extrabold text-green-600 text-xl">
                  ₹{totalPrice}
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="w-full bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6">
            <div className="flex gap-3">
              <div className="bg-indigo-100 p-1.5 rounded-full h-fit">
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-sm text-indigo-900">
                <span className="font-bold block mb-1">Next Step:</span>
                {actionType === "contact"
                  ? "Please message the driver immediately to confirm the specific pickup point."
                  : "Connecting you with the driver..."}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-3 pb-2">
            {actionType === "contact" ? (
              <Button className="w-full py-6 text-lg font-medium bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all rounded-xl">
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
              <Button className="w-full py-6 text-lg font-medium bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all rounded-xl">
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
            <Button onClick={onClose} variant="ghost" className="w-full text-gray-500 hover:text-gray-900">
              Close
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
      <DialogContent className="sm:max-w-md rounded-2xl border-none shadow-2xl p-0 overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
            <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-800">Confirm Booking</DialogTitle>
            </DialogHeader>
        </div>

        <div className="p-6 space-y-6">
          {/* Trip Summary */}
          <div className="flex flex-col gap-4">
             <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">From</span>
                    <span className="text-lg font-bold text-slate-800">{rideData.from}</span>
                </div>
                <div className="flex-1 mx-4 border-t-2 border-dashed border-slate-300 relative top-1">
                    <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 bg-white px-2 text-slate-400">
                         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                </div>
                <div className="flex flex-col text-right">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">To</span>
                    <span className="text-lg font-bold text-slate-800">{rideData.to}</span>
                </div>
             </div>
             <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 p-2 rounded-lg justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {rideData.date} at {rideData.time}
             </div>
          </div>

          {/* Seat Selection */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-semibold text-slate-700">
                How many seats?
                </label>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                    {rideData.seats} available
                </span>
            </div>
            
            <div className="flex items-center justify-between gap-4">
              <Button
                variant="outline"
                className="h-10 w-10 rounded-full p-0 border-slate-300"
                onClick={() => setSeatsToBook((prev) => Math.max(1, prev - 1))}
                disabled={seatsToBook <= 1}
              >
                -
              </Button>
              <span className="text-2xl font-bold text-slate-800 w-8 text-center">
                {seatsToBook}
              </span>
              <Button
                variant="outline"
                className="h-10 w-10 rounded-full p-0 border-slate-300"
                onClick={() => setSeatsToBook((prev) => Math.min(rideData.seats, prev + 1))}
                disabled={seatsToBook >= rideData.seats}
              >
                +
              </Button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-sm text-indigo-600">Price per seat</span>
                    <span className="font-semibold text-indigo-900">{rideData.price}</span>
                </div>
                <div className="h-8 w-px bg-indigo-200"></div>
                <div className="flex flex-col items-end">
                    <span className="text-sm text-indigo-600">Total to Pay</span>
                    <span className="font-bold text-2xl text-indigo-700">
                    ₹{totalPrice}
                    </span>
                </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex gap-3 p-6 pt-2">
          <Button onClick={onClose} variant="outline" className="flex-1 py-6 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900">
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={isConfirmed}
            className="flex-1 py-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 text-lg font-medium"
          >
            {isConfirmed ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Processing
              </div>
            ) : (
              <>Confirm {actionType === "contact" ? "Message" : "Call"}</>
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Header / Back Button */}
        <div className="flex items-center mb-8">
            <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="group px-3 py-2 hover:bg-white hover:shadow-sm rounded-full transition-all duration-200"
            >
            <div className="bg-white rounded-full p-1.5 shadow-sm group-hover:shadow-md mr-2 border border-gray-100">
                <svg
                className="w-4 h-4 text-gray-600 group-hover:text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                />
                </svg>
            </div>
            <span className="text-gray-600 font-medium group-hover:text-gray-900">Back to search</span>
            </Button>
        </div>

        {/* Main Date Header */}
        <div className="mb-6 px-2">
            <h1 className="text-2xl font-bold text-gray-900">{rideData.date}</h1>
            <p className="text-gray-500">Trip details and booking</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-white ring-1 ring-gray-100 overflow-hidden relative">
            
            {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          {/* Trip Timeline Section */}
          <div className="p-8 pb-0 relative z-10">
            <div className="flex justify-between items-start">
                {/* Timeline Visual */}
                <div className="flex-1 cursor-pointer group" onClick={handleOpenRouteMap} title="View on Map">
                    <div className="relative pl-8 border-l-2 border-dashed border-indigo-200 ml-2 my-1 space-y-12">
                        {/* From Node */}
                        <div className="relative">
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white shadow-sm z-10 group-hover:scale-110 transition-transform"></div>
                            <div className="group-hover:translate-x-1 transition-transform duration-300">
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-1 block">06:00 AM</span>
                                <h2 className="text-2xl font-bold text-gray-900 leading-none">{rideData.from}</h2>
                                <p className="text-gray-400 text-sm mt-1">Pickup location</p>
                            </div>
                        </div>

                        {/* To Node */}
                        <div className="relative pb-2">
                             <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-sm border-[3px] border-indigo-600 bg-white ring-4 ring-white shadow-sm z-10 group-hover:scale-110 transition-transform"></div>
                             <div className="group-hover:translate-x-1 transition-transform duration-300">
                                <h2 className="text-2xl font-bold text-gray-900 leading-none">{rideData.to}</h2>
                                <p className="text-gray-400 text-sm mt-1">Drop-off location</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Map Icon */}
                <div onClick={handleOpenRouteMap} className="cursor-pointer p-3 bg-indigo-50 rounded-2xl text-indigo-600 hover:bg-indigo-100 hover:shadow-md transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.806-.984A10.322 10.322 0 0018 6.618c-2.275 0-4.365.543-6 1.518v10.746a9 9 0 013 1.596M15 8l5 2.5M15 8v10" /></svg>
                </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative h-px bg-gray-100 my-8 mx-8">
             <div className="absolute left-0 -top-2 -ml-10 w-4 h-4 bg-[#f9fafb] rounded-full"></div> {/* Cutout left */}
             <div className="absolute right-0 -top-2 -mr-10 w-4 h-4 bg-[#f9fafb] rounded-full"></div> {/* Cutout right */}
          </div>

          {/* Details Grid */}
          <div className="px-8 pb-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center group hover:border-indigo-200 transition-colors">
                    <div className="text-gray-500 text-sm font-medium mb-1">Total Price</div>
                    <div className="text-2xl font-bold text-indigo-600 group-hover:scale-105 transition-transform">{rideData.price}</div>
                    <div className="text-xs text-gray-400 mt-1">per passenger</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center group hover:border-indigo-200 transition-colors">
                    <div className="text-gray-500 text-sm font-medium mb-1">Available</div>
                    <div className="text-2xl font-bold text-gray-900 group-hover:scale-105 transition-transform">{rideData.seats}</div>
                    <div className="text-xs text-gray-400 mt-1">seats left</div>
                </div>
            </div>

            {/* Driver Section */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Ride with</h3>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-indigo-200 shadow-lg">
                                {rideData.driver.initial}
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
                                <div className="bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 leading-tight">{rideData.driver.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="flex items-center bg-yellow-50 px-2 py-0.5 rounded-md border border-yellow-100">
                                    <span className="text-yellow-500 text-xs mr-1">⭐</span>
                                    <span className="text-xs font-bold text-yellow-700">{rideData.driver.rating}</span>
                                </div>
                                <span className="text-xs text-gray-400">• {rideData.driver.trips} trips</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
                <div className="grid grid-cols-[1fr,auto] gap-3">
                    <Button
                    onClick={handleContactDriver}
                    className="h-14 text-lg bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all transform active:scale-[0.98]"
                    >
                    Request to Book
                    </Button>
                    
                    <Button
                    onClick={handleCallDriver}
                    className="h-14 w-14 p-0 bg-white border-2 border-green-100 hover:border-green-500 text-green-600 hover:bg-green-50 rounded-xl transition-all"
                    title="Call Driver"
                    >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </Button>
                </div>
            </div>

            {/* Safety Notice */}
            <div className="mt-6 flex items-start gap-3 bg-amber-50/50 p-3 rounded-xl">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <p className="text-xs text-amber-800 leading-relaxed">
                   <span className="font-bold">Safety Tip:</span> Always confirm your booking with the driver before making any payment.
                </p>
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