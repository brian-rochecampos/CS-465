import { Injectable } from '@angular/core';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private trips: Trip[] = [
    { destination: 'Paris', duration: 7 },
    { destination: 'Tokyo', duration: 10 }
  ];

  getTrips() {
    return this.trips;
  }

  addTrip(trip: Trip) {
    this.trips.push(trip);
  }

  deleteTrip(index: number) {
    this.trips.splice(index, 1);
  }

  updateTrip(index: number, trip: Trip) {
    this.trips[index] = trip;
  }
}
