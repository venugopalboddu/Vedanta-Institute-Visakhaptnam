import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { STUDY_CLASSES, StudyClass } from '../study-classes.data';

/** One template for every /classN page. */
@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent {
  studyClass?: StudyClass;
  mapUrl?: SafeResourceUrl;

  constructor(route: ActivatedRoute, sanitizer: DomSanitizer) {
    window.scrollTo(0, 0);
    const slug = route.snapshot.data['slug'];
    this.studyClass = STUDY_CLASSES.find(c => c.slug === slug);
    if (this.studyClass) {
      this.mapUrl = sanitizer.bypassSecurityTrustResourceUrl(this.studyClass.mapUrl);
    }
  }
}
