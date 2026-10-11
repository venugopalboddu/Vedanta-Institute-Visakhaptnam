import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { STUDY_CLASSES } from './study-classes.data';

// /class1 ... /class13 are generated from the data file.
export const studyClassRoutes: Routes = STUDY_CLASSES.map(c => ({
  path: c.slug,
  component: ClassDetailComponent,
  data: { slug: c.slug }
}));

@NgModule({
  declarations: [ClassDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(studyClassRoutes)
  ]
})
export class StudyclassesModule { }
