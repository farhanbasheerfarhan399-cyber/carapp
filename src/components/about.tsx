import React from 'react';
import { Car, Shield, Heart, Globe, TrendingDown, Users, Leaf } from 'lucide-react';
import Navbar from "@/src/layout/Navbar";

export default function RideShareLanding() {
  return (
       <><Navbar />
       <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <div className="bg-blue-600 text-white py-16 px-4">
              <div className="max-w-4xl mx-auto text-center">
                  <div className="flex justify-center mb-6">
                      <Car className="w-16 h-16" strokeWidth={2} />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">About RideShare</h1>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                      We're on a mission to make travel more affordable, sustainable, and social by connecting
                      drivers with empty seats to passengers heading the same way.
                  </p>
              </div>
          </div>

          {/* Mission and Values Section */}
          <div className="max-w-6xl mx-auto px-4 py-16">
              <div className="grid md:grid-cols-2 gap-12">
                  {/* Our Mission */}
                  <div>
                      <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                          RideShare is India's most trusted carpooling platform, connecting millions
                          of drivers and passengers to share rides across the country. We believe in
                          making travel more accessible, affordable, and environmentally friendly.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                          Every day, thousands of cars travel the same routes with empty seats. We
                          help fill those seats, reducing costs for everyone and helping the
                          environment at the same time.
                      </p>
                  </div>

                  {/* Our Values */}
                  <div>
                      <h2 className="text-2xl font-bold mb-6">Our Values</h2>
                      <div className="space-y-6">
                          <div className="flex gap-4">
                              <div className="flex-shrink-0">
                                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                      <Shield className="w-6 h-6 text-blue-600" />
                                  </div>
                              </div>
                              <div>
                                  <h3 className="font-semibold text-lg mb-1">Safety First</h3>
                                  <p className="text-gray-600">
                                      Verified profiles and community ratings ensure safe travels for everyone.
                                  </p>
                              </div>
                          </div>

                          <div className="flex gap-4">
                              <div className="flex-shrink-0">
                                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                      <Heart className="w-6 h-6 text-blue-600" />
                                  </div>
                              </div>
                              <div>
                                  <h3 className="font-semibold text-lg mb-1">Community</h3>
                                  <p className="text-gray-600">
                                      Building a trusted network of travelers helping each other.
                                  </p>
                              </div>
                          </div>

                          <div className="flex gap-4">
                              <div className="flex-shrink-0">
                                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                      <Globe className="w-6 h-6 text-blue-600" />
                                  </div>
                              </div>
                              <div>
                                  <h3 className="font-semibold text-lg mb-1">Sustainability</h3>
                                  <p className="text-gray-600">
                                      Reducing carbon emissions by maximizing vehicle occupancy.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Our Impact Section */}
          <div className="max-w-6xl mx-auto px-4 py-12">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-center mb-12">Our Impact</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10M+</div>
                          <div className="text-gray-600 font-medium">Rides Shared</div>
                      </div>
                      <div className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5M+</div>
                          <div className="text-gray-600 font-medium">Trusted Members</div>
                      </div>
                      <div className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">₹500Cr+</div>
                          <div className="text-gray-600 font-medium">Saved by Travelers</div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Why Choose RideShare Section */}
          <div className="max-w-6xl mx-auto px-4 py-12">
              <h2 className="text-2xl font-bold text-center mb-12">Why Choose RideShare?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                  {/* Save Money */}
                  <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                          <TrendingDown className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Save Money</h3>
                      <p className="text-gray-600 leading-relaxed">
                          Share travel costs and save up to 70% compared to traveling alone or taking public transport.
                      </p>
                  </div>

                  {/* Meet New People */}
                  <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                          <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Meet New People</h3>
                      <p className="text-gray-600 leading-relaxed">
                          Travel with like-minded people, make new friends, and enjoy conversations along the way.
                      </p>
                  </div>

                  {/* Help the Planet */}
                  <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                          <Leaf className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Help the Planet</h3>
                      <p className="text-gray-600 leading-relaxed">
                          Reduce your carbon footprint by sharing rides and contributing to a cleaner environment.
                      </p>
                  </div>
              </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 text-white py-16 px-4 mt-12">
              <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                  <p className="text-lg mb-8 max-w-2xl mx-auto">
                      Join millions of travelers who trust RideShare for their daily commute and long-distance trips.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                          Find a Ride
                      </button>
                      <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white">
                          Publish a Ride
                      </button>
                  </div>
              </div>
          </div>
      </div></>
  );
}