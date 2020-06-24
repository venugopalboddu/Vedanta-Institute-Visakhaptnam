import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class1',
  templateUrl: './class1.component.html',
  styleUrls: ['./class1.component.css']
})
export class Class1Component implements OnInit {

  constructor() { 
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

}
