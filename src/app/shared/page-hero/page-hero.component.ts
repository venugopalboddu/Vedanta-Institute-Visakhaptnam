import { Component, Input } from '@angular/core';

/** Banner used at the top of every inner page: <app-page-hero title="About us" quote="..."> */
@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero.component.html',
  styleUrls: ['./page-hero.component.css']
})
export class PageHeroComponent {
  @Input() title = '';
  @Input() quote = '';

  /** Optional override: <app-page-hero [tall]="true"> forces the taller banner, [tall]="false" the normal one. */
  @Input() tall?: boolean;

  /** Pages whose banner needs extra space below the text (compared case-insensitively). */
  private readonly tallTitles = ['events', 'study classes', 'publications', 'get in touch'];

  get isTall(): boolean {
    if (this.tall !== undefined) { return this.tall; }
    return this.tallTitles.includes((this.title || '').trim().toLowerCase());
  }
}
