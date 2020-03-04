import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Samson | Software Developer ', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Samson',
  subtitle: 'Software Developer / Test Analyst',
  cta: 'find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'mypic.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Robot Friends',
    info: 'A clean, beautiful and responsive portfolio template for Developers!',
    info2:
      'This project was highlighted in one of the highest valorated courses on Udemy, called Zero To Mastery.',
    url: 'https://devella.github.io/robot-friends/',
    repo: 'https://github.com/devella/robot-friends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'face.jpg',
    title: 'facial-detection-app',
    info: 'This project was bootstrapped with Create React App.',
    info2:
      'Create-React-App, Tachyons, react-tilt, particles.js, Bcrypt, Postgresql, knex, body parser, cors express.',
    url: 'https://face-detection-game.herokuapp.com/',
    repo: 'https://github.com/devella/facial-detection-app', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'portemp.png',
    title: 'Portfolio-Template',
    info: 'A clean, beautiful and responsive portfolio template for Developers!',
    info2:
      'This project was highlighted in one of the highest valorated courses on Udemy, called Zero To Mastery.',
    url: 'https://portfolio-template212.netlify.com/',
    repo: 'https://github.com/devella/Portfolio-Template', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to ture to set the GitHub stars/fork buttons
};
