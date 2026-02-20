import { Component } from '@angular/core';
import { TripListComponent } from '../trip-list/trip-list';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [TripListComponent],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent {

}