import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripService } from '../services/trip';
import { Trip } from '../models/trip';
import { TripCardComponent } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TripCardComponent],
  templateUrl: './trip-list.html',
  styleUrls: ['./trip-list.css']
})
export class TripListComponent {

  trips: Trip[] = [];

  newDestination = '';
  newDuration = 0;

  constructor(private tripService: TripService) {
    this.trips = this.tripService.getTrips();
  }

  addTrip() {
    if (!this.newDestination || !this.newDuration) return;

    this.tripService.addTrip({
      destination: this.newDestination,
      duration: this.newDuration
    });

    this.newDestination = '';
    this.newDuration = 0;
  }

  deleteTrip(index: number) {
    this.tripService.deleteTrip(index);
  }

  updateTrip(event: {index:number, trip:Trip}) {
    this.tripService.updateTrip(event.index, event.trip);
  }
}
