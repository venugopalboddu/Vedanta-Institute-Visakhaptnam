import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Class1Component } from './class1/class1.component';
import { Class2Component } from './class2/class2.component';
import { Class3Component } from './class3/class3.component';
import { Class4Component } from './class4/class4.component';
import { Class5Component } from './class5/class5.component';
import { Class6Component } from './class6/class6.component';
import { Class7Component } from './class7/class7.component';
import { Class8Component } from './class8/class8.component';
import { Class9Component } from './class9/class9.component';
import { Class10Component } from './class10/class10.component';
import { Class11Component } from './class11/class11.component';
import { Class12Component } from './class12/class12.component';
import { Class13Component } from './class13/class13.component';
import { RouterModule } from '@angular/router';

const routes = [
 {path: 'class1', component: Class1Component},
 {path: 'class2', component: Class2Component},
 {path: 'class3', component: Class3Component},
 {path: 'class4', component: Class4Component},
 {path: 'class5', component: Class5Component},
 {path: 'class6', component: Class6Component},
 {path: 'class7', component: Class7Component},
 {path: 'class8', component: Class8Component},
 {path: 'class9', component: Class9Component},
 {path: 'class10', component: Class10Component},
 {path: 'class11', component: Class11Component},
 {path: 'class12', component: Class12Component},
 {path: 'class13', component: Class13Component}
];

@NgModule({
  declarations: [Class1Component, Class2Component, Class3Component, Class4Component, Class5Component, Class6Component, Class7Component, Class8Component, Class9Component, Class10Component, Class11Component, Class12Component, Class13Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudyclassesModule { }
