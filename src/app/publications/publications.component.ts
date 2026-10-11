import { Component } from '@angular/core';

interface Publication {
  title: string;
  image: string;
  text: string;
  url: string;
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  publications: Publication[] = [
    {
      title: 'Thesis on God',
      image: 'assets/img/blog/l-news/Thesis on God Leather Book Cover pub.png',
      text: 'An exhaustive thesis on the nature of God for your study and reflection. The human race has accepted the word God unquestionably from time immemorial.',
      url: 'https://www.vedantaworld.org/books-and-media/12-books/176-thesis-on-god'
    },
    {
      title: 'Bhaja Govindam',
      image: 'assets/img/blog/l-news/Bhaja Govindam Vintage Book Cover.png',
      text: "A composition of Adi Shankaracharya. Swamiji's commentary highlights two main human motivations viz. kanchana, wealth, and kamini, woman.",
      url: 'https://www.vedantaworld.org/books-and-media/12-books/83-bhaja-govindam-atmabodha'
    },
    {
      title: 'Bhagavad Gita',
      image: 'assets/img/blog/l-news/Leather-Bound Bhagavad Gita Cover.png',
      text: 'The Gita brings to light the positive and negative tendencies that lie within. They represent your higher aspirations and lower desires in life that affect your evolution.',
      url: 'https://www.vedantaworld.org/books-and-media/12-books/82-bhagavad-gita'
    }
  ];

  constructor() {
    window.scrollTo(0, 0);
  }
}
