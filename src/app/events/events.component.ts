import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  itineraryUrl = 'https://vedantaworld.org/about/itinerary';

  constructor() {
    window.scrollTo(0, 0);
  }
}
