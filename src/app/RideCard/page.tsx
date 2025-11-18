import Navbar from "@/src/layout/Navbar";
import Footer from "@/src/layout/Footer";
import { RideDetailsPage } from "@/src/components/RideCard";

export default function RideDetails({ params }: { params: { id: string } }) {
  return (
    <>
      <Navbar />

      <main className="max-w-2xl mx-auto py-12">
        <h1 className="text-2xl font-semibold mb-6">
          Ride Details — ID: {params.id}
        </h1>
<RideDetailsPage/>
        <div className="bg-white p-6 shadow rounded-md">
          <p className="text-gray-700">
            This is a demo ride details page for ride ID: {params.id}.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
