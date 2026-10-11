import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  social = [
    { name: 'Twitter', icon: 'fa-twitter', url: 'https://twitter.com/vedantaworld' },
    { name: 'Facebook', icon: 'fa-facebook', url: 'https://www.facebook.com/Vedantaworld/' },
    { name: 'YouTube', icon: 'fa-youtube', url: 'https://www.youtube.com/user/VedantaworldTV' },
    { name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/vedanta.world/' }
  ];
}
