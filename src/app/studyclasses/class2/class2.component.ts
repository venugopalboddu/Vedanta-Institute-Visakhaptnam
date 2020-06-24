import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class2',
  templateUrl: './class2.component.html',
  styleUrls: ['./class2.component.css']
})
export class Class2Component implements OnInit {

  constructor() { 
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

}
