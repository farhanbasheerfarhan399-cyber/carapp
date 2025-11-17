import { MapPin, Calendar, User } from "lucide-react";

export default function RideCard({
  from,
  to,
  date,
  time,
  driver,
  rating,
  trips,
  seats,
  price,
}: any) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm flex justify-between items-center">
      <div>
        <div className="flex items-center gap-2 text-gray-700">
          <MapPin /> {from} → {to}
        </div>

        <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
          <Calendar /> {date} • {time}
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold">{driver}</p>
        <p className="text-yellow-600 text-sm">
          ⭐ {rating} · {trips} trips
        </p>
      </div>

      <div className="text-right">
        <p className="text-gray-600 flex items-center gap-1">
          <User size={16} /> {seats} seats
        </p>
        <p className="text-blue-600 text-lg font-bold">₹{price}</p>
      </div>
    </div>
  );
}
