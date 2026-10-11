import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  private readonly base = 'assets/img/gallery/';
  private build(from: number, to: number): string[] {
    const list: string[] = [];
    for (let i = from; i <= to; i++) { list.push(`${this.base}gal${i}.jpeg`); }
    return list;
  }

  bannerImage = this.base + 'ban1.jpeg';
  seminarPhotos = this.build(1, 9);
  trainingPhotos = this.build(10, 15);

  /** Photo currently opened in the full-screen viewer. */
  selected: string | null = null;

  constructor() {
    window.scrollTo(0, 0);
  }

  open(src: string) { this.selected = src; }
  close() { this.selected = null; }

  @HostListener('document:keydown.escape')
  onEscape() { this.close(); }
}
