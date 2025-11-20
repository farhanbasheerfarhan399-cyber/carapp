'use client';
import { useRouter } from "next/navigation";




export default function Footer() {
  const router = useRouter();
  return (
    
    <footer className="bg-blue-600 text-white mt-20 py-6 text-center">
      <h2 className="text-lg mb-2">Going somewhere?</h2>
      <p>Share your ride and split the cost with passengers along your route</p>
     <a
            href="/publish">
                      Publish a Ride
          </a>



      <p className="text-sm mt-6 opacity-80">
        © {new Date().getFullYear()} RideShare. All rights reserved.
      </p>
    </footer>
  );
}
