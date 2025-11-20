import React from 'react';
import { Car, Shield, Heart, Globe, TrendingDown, Users, Leaf, ArrowRight } from 'lucide-react';
import Navbar from "@/src/layout/Navbar";

export default function RideShareLanding() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-200">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
             <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-purple-400 blur-3xl"></div>
          </div>

          <div className="relative z-10 py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full ring-4 ring-white/20 shadow-xl">
                    <Car className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                About <span className="text-blue-200">RideShare</span>
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-blue-50 font-medium">
                We're on a mission to make travel more affordable, sustainable, and social by connecting
                drivers with empty seats to passengers heading the same way.
              </p>
            </div>
          </div>
          
          {/* Curve Divider */}
          <div className="absolute bottom-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-12 md:h-24 text-gray-50" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        {/* Mission and Values Section */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Our Mission */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-2">
                  Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Driven by a mission to connect India.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                RideShare is India's most trusted carpooling platform, connecting millions
                of drivers and passengers to share rides across the country. We believe in
                making travel more accessible, affordable, and environmentally friendly.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-blue-500 pl-4">
                Every day, thousands of cars travel the same routes with empty seats. We
                help fill those seats, reducing costs for everyone and helping the
                environment at the same time.
              </p>
            </div>

            {/* Our Values */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform rotate-2"></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Core Values</h2>
                    
                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                          <Shield className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-1 text-gray-800">Safety First</h3>
                        <p className="text-gray-600">
                          Verified profiles and community ratings ensure safe travels for everyone.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                          <Heart className="w-7 h-7 text-red-500 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-1 text-gray-800">Community</h3>
                        <p className="text-gray-600">
                          Building a trusted network of travelers helping each other.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                          <Globe className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-1 text-gray-800">Sustainability</h3>
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
          <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 overflow-hidden border border-gray-100">
             <div className="p-8 md:p-16 relative">
                {/* Decorative dots */}
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <div className="w-24 h-24 border-4 border-blue-200 rounded-full"></div>
                </div>

                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Impact Numbers</h2>
                <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  <div className="text-center pt-4 md:pt-0">
                    <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">10M+</div>
                    <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">Rides Shared</div>
                  </div>
                  <div className="text-center pt-8 md:pt-0">
                    <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">5M+</div>
                    <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">Trusted Members</div>
                  </div>
                  <div className="text-center pt-8 md:pt-0">
                    <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">₹500Cr+</div>
                    <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">Saved by Travelers</div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Why Choose RideShare Section */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Why Choose RideShare?</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
              Experience the future of travel with features designed for your comfort and wallet.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Save Money */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                <TrendingDown className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Save Money</h3>
              <p className="text-gray-600 leading-relaxed">
                Share travel costs and save up to 70% compared to traveling alone or taking public transport.
              </p>
            </div>

            {/* Meet New People */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors duration-300">
                <Users className="w-8 h-8 text-pink-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Meet New People</h3>
              <p className="text-gray-600 leading-relaxed">
                Travel with like-minded people, make new friends, and enjoy conversations along the way.
              </p>
            </div>

            {/* Help the Planet */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors duration-300">
                <Leaf className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Help the Planet</h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce your carbon footprint by sharing rides and contributing to a cleaner environment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pb-16 px-4">
            <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white py-16 px-8 md:px-16 shadow-2xl relative overflow-hidden">
                {/* Abstract circles overlay */}
                <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 w-64 h-64 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-2xl mx-auto font-light">
                        Join millions of travelers who trust RideShare for their daily commute and long-distance trips.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                            Find a Ride <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="bg-blue-800/30 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-blue-800/50 transition-all">
                            Publish a Ride
                        </button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  );
}