export interface Ride {
  id: string;
  driverId: string;
  driver: string;
  from: string;
  to: string;
  pickupLocation: string;
  destination: string;
  date: string;
  time: string;
  price: number;
  seatsAvailable: number;
  totalSeats: number;
  carId: string;
  car: string;
  rating: number;
  status: string;
}

export interface SearchParams {
  from: string;
  to: string;
  date: string;
  seats: number;
}
