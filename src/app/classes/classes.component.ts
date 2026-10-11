import { Component } from '@angular/core';

interface StudyClass {
  id: string;
  image: string;
  title: string;
  day: string;
  time: string;
  address?: string;   // in-person class
  online?: boolean;   // online class (Zoom link below)
  description: string;
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  zoomUrl = 'https://us06web.zoom.us/j/7765767526?pwd=V4ifUaw2UIPSeNlDaxU9svDmTZxhHT.1';

  classes: StudyClass[] = [
    {
      id: 'content1',
      image: 'assets/img/class/c1.png',
      title: 'Vedanta Treatise',
      day: 'Every Sunday',
      time: '4.00 pm to 5.00 pm',
      address: 'Shanti Ashram, Near Vuda Park, Beside Petrol Bunk, Beach Road, Peda Waltair Junction',
      description: 'Vedanta is a manual for life and living. Living is a technique that needs to be learnt and practised. The technique provides the formula for combining dynamic action with peace and equips one with clear intellect to meet the challenges of the world.'
    },
    {
      id: 'content2',
      image: 'assets/img/class/c2.png',
      title: 'Atma Bodha',
      day: 'Every Tuesday',
      time: '6.30 pm to 7.30 pm',
      online: true,
      description: 'The text composed by Adi Shankaracharya presents a gallery of several word paintings. Each depicts a philosophical idea to help the seeker comprehend the subtle theme of the scriptures. The commentary elucidates its striking similes and metaphors taken from nature and life. Together they prepare a spiritual practitioner to gain the awareness of the supreme Reality in all walks of life, and lead him to the realisation of the supreme Self.'
    },
    {
      id: 'content3',
      image: 'assets/img/class/c3.png',
      title: 'Bhagavad Gita',
      day: 'Every Saturday',
      time: '10.00 am to 11.00 am',
      online: true,
      description: 'Bhagavad Gita is an instruction manual for life and living. Living is a technique that needs to be learnt and practised. The technique provides the formula for combining dynamic action with peace and equips one with clear intellect to meet the challenges of the world.'
    },
    {
      id: 'content4',
      image: 'assets/img/class/vedantaG.png',
      title: 'Vedanta Group Discussion',
      day: 'Every Sunday',
      time: '9.00 am to 10.15 am',
      online: true,
      description: 'Vedanta Group Discussion is a practice aimed at developing devotion and fostering spiritual growth. It involves channeling our emotions towards a higher entity, often referred to as the Lord of the heart. By engaging in bhajan, individuals can cultivate a deeper connection with the divine, allowing their emotions to be transformed into a powerful force for spiritual advancement. This practice not only enhances one\'s devotion but also helps in achieving a sense of inner peace and fulfillment. Through regular participation in bhajan, practitioners can experience a profound spiritual awakening and growth.'
    }
  ];

  constructor() {
    window.scrollTo(0, 0);
  }

  scrollToContent(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // clears the sticky navbar
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
