export interface StudyClass {
  slug: string;        // route: /class1 ... /class13
  area: string;        // neighbourhood shown in the page banner
  title: string;
  day: string;
  time: string;
  address: string;
  contact: string;
  conductedBy: string;
  mapUrl: string;      // Google Maps embed URL
}

/**
 * All study classes in one place. To add a class, add one entry here -
 * the route (/classN) and the page are created automatically.
 */
export const STUDY_CLASSES: StudyClass[] = [
  {
    slug: 'class1',
    area: 'Peda Waltair',
    title: 'Vedanta Treatise',
    day: 'Sunday',
    time: '03:30 pm - 04:45 pm',
    address: 'Shanti Ashram, Near Vuda Park, Beside Petrol Bunk, Beach Road, Peda Waltair Junction',
    contact: 'Viswesawara Rao | 9440335696',
    conductedBy: 'Shri S.V Satyanarayana',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15201.00025468744!2d83.3414917!3d17.7328528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9293b6652807dfda!2sSri+Shanthi+Ashramam!5e0!3m2!1sen!2sin!4v1534250986686'
  },
  {
    slug: 'class2',
    area: 'Vizianagaram',
    title: 'Bhagavad Gita (Telegu)',
    day: 'Sunday',
    time: '07:00 am - 08:15 am',
    address: 'Aurobindo Society, Kota junction, Vizianagaram',
    contact: 'D. Vijiya | 9493313199',
    conductedBy: 'Smt. Aruna',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.1355383410996!2d83.41050601445099!3d18.111531087648547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be54fbbdef99f%3A0x5c137de48e8306ec!2sKota+Junction!5e0!3m2!1sen!2sin!4v1534753239762'
  },
  {
    slug: 'class3',
    area: 'Ramnagar',
    title: 'Governing Business and Relationships',
    day: 'Sunday',
    time: '09:00 am - 10:15 am',
    address: 'F-709, MVV & MK Royal Gardens, Ramnagar,Vizag',
    contact: 'Haranadh Raju | 9399989890',
    conductedBy: 'Shri S.V Satyanarayana',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7600.995477312358!2d83.30759649074625!3d17.721171536935138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431581562b91%3A0x5d013f0dd9a54f96!2sMVV+%26+MK&#39;S+Royal+Gardens!5e0!3m2!1sen!2sin!4v1534752192373'
  },
  {
    slug: 'class4',
    area: 'Dasapalla Hills',
    title: 'Vedanta For Youth',
    day: 'Monday',
    time: '08:00 am - 09:00 am',
    address: 'Kankatala Mallik, Akshaya, # 11-2-9 , Daspalla Hills',
    contact: 'Anirudh | 9848163777',
    conductedBy: 'Smt. Aruna',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5769940268033!2d83.3127023144443!3d17.71743198788162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436b2d6a218b%3A0xafdf22cd45b2c5d!2s11-2-14%2C+Daspalla+Hills%2C+Paanduranga+Puram%2C+Visakhapatnam%2C+Andhra+Pradesh+530003!5e0!3m2!1sen!2sin!4v1534749636240'
  },
  {
    slug: 'class5',
    area: 'Lawson\'s bay colony',
    title: 'Bhaja Govindam (Telugu)',
    day: 'Monday',
    time: '10:00 am - 11:15 am',
    address: 'Sampath Vinayaka bay residency, D/no: 4-68-1, Lawson\'s bay colony.',
    contact: 'Anuradha | 9391757788',
    conductedBy: 'Smt. Aruna',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9038.839033318143!2d83.33458337015433!3d17.72749560503021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3944a7da9e8883%3A0x581a890d4371491e!2sLawsons%20Bay%20Colony%2C%20Pedda%20Waltair%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530017!5e0!3m2!1sen!2sin!4v1568026498774!5m2!1sen!2sin'
  },
  {
    slug: 'class6',
    area: 'P.M.Palem',
    title: 'Bhagavad Gita(Telugu)',
    day: 'Monday',
    time: '05:00 pm - 06:15 pm',
    address: 'P.M.Palem, Last bus stop',
    contact: 'Subba rao | 8639027531',
    conductedBy: 'Smt. Aruna',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21488.93145930567!2d83.32782047221629!3d17.803804970008354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b88f9920991%3A0xfc356c6e8a96eb6f!2sPM%20Palem%20Last%20Stop!5e0!3m2!1sen!2sin!4v1568026700038!5m2!1sen!2sin'
  },
  {
    slug: 'class7',
    area: 'Majestic Towers',
    title: 'The Holocaust of Attachment',
    day: 'Monday',
    time: '04:00 pm - 05:00 pm',
    address: 'Flat No. 601, Majestic Towers, RK Beach',
    contact: 'Dr Lalitharani | 9848130074',
    conductedBy: 'Shri. S.V Satyanarayana',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.654202202294!2d83.31662191489042!3d17.71378829797147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436c6a852dd9%3A0x403ae5e1ce81f520!2sMajestic%20Towers%2C%20Pandurangapuram%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530003!5e0!3m2!1sen!2sin!4v1568036689705!5m2!1sen!2sin'
  },
  {
    slug: 'class8',
    area: 'Vizianagaram',
    title: 'KENA Upanishad',
    day: 'Tuesday',
    time: '06:30 pm - 07:30 pm',
    address: 'Aurovilla,Balaji Nagar, Vizianagaram',
    contact: 'K. Ramakrishna | 9849839600',
    conductedBy: 'Shri. S.V Satyanarayana',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30337.705247336013!2d83.38230778606467!3d18.10794520962145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be56a580c8c65%3A0x32e7a4226e880046!2sBalaji+Nagar%2C+Vizianagaram%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1541411552273'
  },
  {
    slug: 'class9',
    area: 'Kirlampudi Layout',
    title: 'Bhagavad Gita',
    day: 'Monday',
    time: '04:00 pm - 05:15 pm',
    address: '9, The Palms,62,Kirlampudi Layout',
    contact: 'Viveka | 9397605454',
    conductedBy: 'Smt. Aruna',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60805.85011196705!2d83.29880677652423!3d17.72740309985207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394360baaaaaab%3A0xf2d2a468fa81f347!2sThe+Palms!5e0!3m2!1sen!2sin!4v1541405297185'
  },
  {
    slug: 'class10',
    area: 'Pandurangapuram',
    title: 'Bhagavad Gita(Telugu)',
    day: 'Monday',
    time: '05:30 pm - 06:45 pm',
    address: 'P. Sobhan Prakash, 7-5/144/A, Pandurangapuram, Visakhapatnam',
    contact: 'Sudha Rani | 9849499186',
    conductedBy: 'Smt. Aruna',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5889035604414!2d83.31825231444431!3d17.716869987882006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436960ba818f%3A0xdcb66ba79bbb4de!2s7-5-33%2C+Pandurangapuram%2C+Paanduranga+Puram%2C+Visakhapatnam%2C+Andhra+Pradesh+530003!5e0!3m2!1sen!2sin!4v1534749166590'
  },
  {
    slug: 'class11',
    area: 'Pandurangapuram',
    title: 'Bhagavad Gita for Youth',
    day: 'Friday',
    time: '09:00 am - 10:00 am',
    address: 'Plot no 44, Backside of Panduranga swamy temple, Panduranga puram',
    contact: 'Shanti Garu | 9849499185',
    conductedBy: 'Smt. Aruna',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.6216563721678!2d83.32107600528055!3d17.71532432366453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436ec8e157fd%3A0x254e6d28e9b4215c!2sPanduranga%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1568037129597!5m2!1sen!2sin'
  },
  {
    slug: 'class12',
    area: 'Kirlampudi Layout',
    title: 'Bhagavad Gita',
    day: 'Friday',
    time: '10:30 am - 11:45 am',
    address: 'Plot 33,Ahuja Villa, Kirlampudi Layout',
    contact: 'Bhavani | 9494484574',
    conductedBy: 'Smt. Aruna',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15202.098773802116!2d83.33210079999999!3d17.719899799999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb2960e54830d73aa!2sAhuja+Villa!5e0!3m2!1sen!2sin!4v1541411914197'
  },
  {
    slug: 'class13',
    area: 'Schindhia Junction',
    title: 'Bhagavad Gita(English)',
    day: 'Saturday',
    time: '05:30 am - 06:45 am',
    address: '7, Naval Park, Schindhia Junction',
    contact: 'Anuradha | 9757427536',
    conductedBy: 'Smt. Aruna',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7602.313304326813!2d83.26309012463327!3d17.69005840159134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394266b894994b%3A0xece9ac6445518bc9!2sNaval+Park!5e0!3m2!1sen!2sin!4v1534752629822'
  }
];
