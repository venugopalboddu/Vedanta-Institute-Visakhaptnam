import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { ClassesComponent } from './classes/classes.component';
import { PublicationsComponent } from './publications/publications.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { StudyclassesModule } from './studyclasses/studyclasses.module';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'classes', component: ClassesComponent },
  // /class1 ... /class13 (same URLs as before)
  { path: '', loadChildren: () => import('./studyclasses/studyclasses.module').then(m => m.StudyclassesModule) },
  { path: 'publications', component: PublicationsComponent },
  { path: 'gallery', component: GalleryComponent },
  {
    path: 'contact', component: ContactComponent,
    children: [
      { path: 'donate', component: DonateComponent }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule, StudyclassesModule]
})
export class AppRoutingModule { }
