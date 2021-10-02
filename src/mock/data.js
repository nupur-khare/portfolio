import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nupur Khare',
  subtitle: 'and I am a Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'nupurr.jpg',
  paragraphOne: 'Hey! I am a tech enthusiast and I love learning new technologies.',
  paragraphTwo: 'I create websites, web-app and analyze data to make precise decisions. Solving algorithms and data structures is also one of my thing.',
  paragraphThree: 'I am a Student of Bharati Vidyapeeth University. Want to know more? Hit the button below!!',
  resume: 'https://drive.google.com/file/d/1WJpWTpuZBYT6XrwInZqr0DxZbhVs7fea/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'WA.jpeg',
    title: 'Analyzer-15',
    info: 'This is a whatsapp chat analyzer which analyzes the chats between people or among people in groups and provide statistics.',
    info2: 'Technologies used are- Python, streamlit, Data Analysis and visualization and deployment is done on heroku.',
    url: 'https://analyzer-15.herokuapp.com/',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TA.jpg',
    title: 'Toogle Advisor',
    info: 'This a mini version of google maps called TOOGLE which will help you to find hotels, restaurants and attractions of the city.',
    info2: 'Technologies used are- ReactJs, Rapid APIs, Javascript. ',
    url: '',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: 'Lets Talk',
  email: 'nupur15june@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/NupurKhare7',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/khare.nupur_/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nupur-k-972112135/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nupur-khare',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
