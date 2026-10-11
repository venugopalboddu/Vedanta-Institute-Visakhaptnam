import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  template: `
    <button type="button" class="vi-top" *ngIf="visible" (click)="toTop()" aria-label="Back to top">
      <i class="fa fa-angle-up" aria-hidden="true"></i>
    </button>`,
  styles: [`
    .vi-top {
      position: fixed; right: 18px; bottom: 18px; z-index: 40;
      width: 46px; height: 46px; border-radius: 50%;
      border: 0; cursor: pointer;
      background: var(--saffron); color: var(--ink);
      font-size: 1.8rem; line-height: 1;
      box-shadow: 0 8px 20px rgba(21, 24, 59, 0.3);
      transition: transform 0.15s, background 0.2s;
    }
    .vi-top:hover { background: #ffbb4d; transform: translateY(-2px); }
  `]
})
export class BackToTopComponent {
  visible = false;

  @HostListener('window:scroll')
  onScroll() {
    this.visible = window.scrollY > 300;
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
