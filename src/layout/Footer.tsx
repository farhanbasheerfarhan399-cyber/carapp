export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-20 py-6 text-center">
      <h2 className="text-lg mb-2">Going somewhere?</h2>
      <p>Share your ride and split the cost with passengers along your route</p>

      <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-md font-medium">
        Publish a Ride
      </button>

      <p className="text-sm mt-6 opacity-80">
        © {new Date().getFullYear()} RideShare. All rights reserved.
      </p>
    </footer>
  );
}
