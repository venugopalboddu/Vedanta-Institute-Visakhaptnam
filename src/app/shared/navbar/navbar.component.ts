import { Component } from '@angular/core';

interface NavLink {
  label: string;
  path?: string;   // internal route
  href?: string;   // external link
  cta?: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;

  // Edit the menu in one place - every page uses it.
  links: NavLink[] = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'Classes', path: '/classes' },
    { label: 'Publications', path: '/publications' },
    { label: 'E-Learning', href: 'https://elearning.vedantaworld.org/complete_course' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact', cta: true }
  ];

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
}
