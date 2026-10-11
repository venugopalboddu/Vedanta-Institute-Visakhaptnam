import { Component } from '@angular/core';

interface Teacher {
  name: string;
  image: string;
  bio: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teachers: Teacher[] = [
    {
      name: 'Sushilaji',
      image: 'assets/img/sh1.png',
      bio: 'Sushilaji is a guest teacher of Vedanta in Visakhapatnam. She is a senior disciple of the internationally renowned philosopher Shri A. Parthasarathy. An MSc in Biochemistry from Mumbai University, Sushilaji was a research officer for Johnson and Johnson. During the course of her work and exposure to the teachings of Shri A. Parthasarathy, she realized that although science had tremendously improved the world in the past century, the quality of life had actually deteriorated. Sushilaji has since spent three decades in the study, research and exposition of Vedanta. She has addressed large public audiences and premier organizations on ancient spiritual texts. Sushilaji is a Trustee of the Vedanta Cultural Foundation that runs the Vedanta Academy, a unique institution of higher learning near Mumbai.'
    },
    {
      name: 'S.V. Satyanarayana',
      image: 'assets/img/sat.png',
      bio: 'Mr. S.V. Satyanarayana is a local teacher of Vedanta in Visakhapatnam. He is an engineering graduate from Andhra University. After a distinguished corporate career in India and the UK, he took to intense study and research in Vedanta Philosophy under the direct guidance of his spiritual guru A. Parthasarathy. He spent five years, full-time, from 2001 to 2006, in the Vedanta Academy, founded by the Swamiji, near Lonavla, 108 km from Mumbai. He is the resource of Vedanta Institute Visakhapatnam, a charitable trust dedicated to the development of the overall personality of human beings to gain peace and prosperity in their lives. Since 2006 he has been residing in Visakhapatnam, holding workshops for corporates on various management topics and personality development sessions for college and school students. He also conducts public discourses and study classes on the Bhagavad Gita and other scriptural texts.'
    }
  ];

  constructor() {
    window.scrollTo(0, 0);
  }
}
