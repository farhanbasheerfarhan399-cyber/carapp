import Navbar from "@/src/layout/Navbar";
import Footer from "@/src/layout/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar children={undefined} />

      {/* Main Content */}
      <main className="pt-0 bg-gray-50 min-h-screen">

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-500 to-blue-700 py-20">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-lg mb-6">
              Your pick of rides at low prices
            </h2>

            {/* Search Box */}
            <div className="bg-white rounded-md shadow-md p-6 w-full max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Leaving from"
                  className="border px-3 py-2 rounded-md text-gray-700"
                />

                <input
                  type="text"
                  placeholder="Going to"
                  className="border px-3 py-2 rounded-md text-gray-700"
                />

                <input
                  type="date"
                  className="border px-3 py-2 rounded-md text-gray-700"
                />

                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Available Rides */}
        <section className="max-w-4xl mx-auto py-14">
          <h3 className="text-lg font-semibold mb-6">Available Rides</h3>

          <div className="space-y-4">
            {[
              { from: "Chennai", to: "Bangalore", date: "20/11/2025", time: "06:00 AM", driver: "Rajesh Kumar", price: "₹450" },
              { from: "Chennai", to: "Coimbatore", date: "20/11/2025", time: "07:30 AM", driver: "Priya Sharma", price: "₹510" },
              { from: "Mumbai", to: "Pune", date: "21/11/2025", time: "08:00 AM", driver: "Amit Patel", price: "₹300" },
            ].map((ride, index) => (
              <div
                key={index}
                className="bg-white border rounded-md p-4 shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{ride.from} ➝ {ride.to}</p>
                  <p className="text-sm text-gray-500">{ride.date} | {ride.time}</p>
                </div>

                <div className="text-right">
                  <p className="font-medium">{ride.driver}</p>
                  <p className="text-blue-600 font-semibold">{ride.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full bg-white py-16">
          <h2 className="text-center text-xl font-semibold mb-10">How it Works</h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-semibold">Search</h3>
              <p className="text-gray-600">
                Find your perfect ride across destinations and schedules.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-3">🧑‍✈️</div>
              <h3 className="font-semibold">Book</h3>
              <p className="text-gray-600">
                Book verified drivers in just a few clicks.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-semibold">Travel</h3>
              <p className="text-gray-600">
                Enjoy sharing and split travel costs easily.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
