import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countDownDate = new Date("dec 7, 2023 18:30:00").getTime();
  days:any
  hours:any
  minutes:any
  seconds:any
  timeup:any
  constructor() { 
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  } 
  
  x = setInterval(()=>{
    var now = new Date().getTime();
    var distance = this.countDownDate - now;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(distance < 0){
      clearInterval(this.x)
      this.timeup = 'Event Closed'
      this.days = 0
      this.hours = 0
      this.minutes = 0
      this.seconds = 0
    }
  })

 
}
