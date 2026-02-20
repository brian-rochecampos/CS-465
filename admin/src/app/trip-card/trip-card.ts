import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css']
})
export class TripCardComponent {

  @Input() trip!: Trip;
  @Input() index!: number;

  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<{index:number, trip:Trip}>();

  editing = false;
  editDestination = '';
  editDuration = 0;

  startEdit() {
    this.editing = true;
    this.editDestination = this.trip.destination;
    this.editDuration = this.trip.duration;
  }

  saveEdit() {
    this.update.emit({
      index: this.index,
      trip: {
        destination: this.editDestination,
        duration: this.editDuration
      }
    });
    this.editing = false;
  }

  cancelEdit() {
    this.editing = false;
  }
}
