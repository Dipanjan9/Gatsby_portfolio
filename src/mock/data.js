import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi',
  name: 'Dipanjan Ghosh',
  subtitle: 'Full Stack Developer and Python Coder',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'dp.png',
  paragraphOne:
    'Myself Dipanjan Ghosh. I currently reside in Kolkata, West Bengal, India and pursuing the final year of bachelors in the Undergraduate Programme in Computer Science and Engineering from Government College of Engineering and Textile Technology,Berhampore.',
  paragraphTwo:
    'I have a fathomless repository dedicated to geeky technophilic stuff. I love to indulge in light creative design and electronic music, and spend some time procrastinating about life, exploring new places and capturing nature beauty with my camera .',
  paragraphThree:
    'In my Sophomore year, I resorted to everything online to satisfy his hunger for exploring Python and Javascript. Competitive coding and courses on Coursera and udemy helped him a lot to get my concepts correct and try clever coding variations. He also participated in my college tech fest and there i worked on web development project with one of my yearmates. Starting my Senior year, I interned with Remote Sensing Application Center UP, Lucknow as Software Developer where Worked on 3D Visualization and Spatial data analysis of a part of Lucknow City, UP using GIS (ArcGIS, and Google Earth) and Remote Sensing Data. Built a Web application with MapBox-gl Js and Cesium Js. Displayed data of housings and roads in the form of 3D models through the web app. Currently I am working on MERN Stack and polishing my skill as a Full Stack Developer and I am searching for a good place to showcase my skill.',

  resume: 'https://drive.google.com/file/d/1JrSu8QeeH7f97c3qV67l2OP6Ctpf4ifv/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'picsado5.JPG',
    title: 'Picsado',
    info: 'A Social Media App for sharing images and stories for journeys made with MERN',
    info2:
      'Developed a Full Stack Web App where a user can post photos of traveling, follow other users, like and comment on posts, and have their own account dashboard.Implemented the Rest API using Postman and later connected with the front-end. Built JWT Authentication using middleware for protecting the routes.',
    url: '',
    repo: 'https://github.com/Dipanjan9/Picsado', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ss1.png',
    title: 'Friendly Planets - Flying in Space with VR',
    info:
      'It actually give you virtual freedom to explore the planets of Solar system. This web app combine 3D and VR interfaces to form a virtual galaxy where you can move forward and backward by clicking the + or - buttons. There are 3D models of planets and satellites with its actual surface view , size and rotation .I built this web app with React360/VR and Blender',
    info2: '',
    url: 'https://dipanjan9.github.io/',
    repo: 'https://github.com/Dipanjan9/dipanjan9.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'second_item.png',
    title: 'Recipe Book',
    info:
      'This is a recipe book contains all types of dishes with there recipes and calories. This book contains a search bar which uses api for displaying your dishes.This app is built with React JS',
    info2: '',
    url: '',
    repo: 'https://github.com/Dipanjan9/Recipe-Book', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'img1.png',
    title: 'Car Anti-Theft AI System',
    info:
      'Worked on Software-based face recognition to protect your Car from thieves or robbers using OpenCV, Python, and GUI',
    info2: '',
    url: '',
    repo: 'https://github.com/Dipanjan9/Car-Anti-Theft-AI-System', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pj.png',
    title: 'College Alternate Website',
    info:
      'This is a College Alternate Website made by me and one of my yearmates by using simple HTML CSS Bootstrap and Javascript. We presented this project in our college sophomore year.',
    info2: '',
    url: 'https://dipanjan9.github.io/GCETTB-alternate-website.github.io/',
    repo: 'https://github.com/Dipanjan9/GCETTB-alternate-website.github.io', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dipanjanghosh430@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Dipanja95399353',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/prsmicjazz/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dipanjan-g-72646211a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Dipanjan9',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UC8lKX8xQmbHFfmWdj_pF0zg',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
