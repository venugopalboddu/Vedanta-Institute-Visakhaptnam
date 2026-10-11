import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageHeroComponent } from './page-hero/page-hero.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';

/** Reusable building blocks. Import this module wherever you need them. */
@NgModule({
  declarations: [NavbarComponent, FooterComponent, PageHeroComponent, BackToTopComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, PageHeroComponent, BackToTopComponent]
})
export class SharedModule { }
