import SDL from "../img/SDL.webp"
import Me from "../img/headerimg.webp" /*"../img/Me2.png";*/
import placeholder from "../img/placeholder.webp" /*"../img/Me2.png";*/
import Me2 from "../img/contactmeimg.webp"
import jobsposter from "../img/Jobsposter.webp"
import musicplayer from "../img/musicplayer.webp";
import dashboard from "../img/dashboard.webp"
import weather from "../img/weather-app.webp"
import ecommerce from "../img/ecommerce.webp"
import soundpulse from "../img/soundpulse.jpg"
import gericht from "../img/gericht.jpg"

export const content = {
  nav: {
    desc: [
      `Welcome to my portfolio, here you can learn more about me, the technologies I use, the ones I have knowledge of, the projects I have done to date, and how to contact me.`,

      `Enjoy the tour!`,
    ],
    logo: SDL,
    links: [
      { text: "Work", to: "mywork" },
      { text: "Contact", to: "mycontact" },
    ],
  },
  header: {
    placeholder: placeholder,
    img: Me,
    img2: Me2,
    text: ["Hi!", "It's me, Luis Rincon.", "I am"],
    typical: [
      "web developer.",
      3000,
      "backend developer.",
      3000,
      "frontend developer",
      3000,
    ],
    btnText: "Discover More",
  },
  stack: {
    title: "Stack",
    desc: [
      "These are some technologies that I currently use, some in the backend like Node, Typescript, Sequelize, and others in the frontend like Html, CSS, React, Astro, Tailwind, among others.",
      "I use Git and GitHub for version control, clickUp and Trello for task tracking, and Confluence for documentation.",
    ],
  },
  info: {
    age: "22 years old",
    achievements: ["Software Development ", "Technologist (ITLA)"],
    aboutme:
      "I'm an observer, analyst, active, respectful, I maintain good communication with others, committed to the achievement of the objectives that are established.",
    country: "Dominican Republic",
  },
  projects: [
    {
      title: 'Jobs Poster',
      description: 'Website to view and post jobs. Worked with react, and backend with Node, TypeScript, Sequelize and MySql.',
      img: jobsposter,
      url: 'https://jobsposter.herokuapp.com/',
      github: 'https://github.com/SDLuis/JobsPoster'
    },
    {
      title: 'Music Player',
      description: 'Simple online music player, with music to be relaxing, Website worked with React, Astro, Tailwind, and CSS.',
      img: musicplayer,
      url: 'https://sdlmusicplayer.netlify.app',
      github: 'https://github.com/SDLuis/MusicPlayer'
    },
    {
      title: 'Dashboard',
      description: 'Dashboard responsive without functions, with online course theme, inspired by figma design. Worked with Astro and Tailwind.',
      img: dashboard,
      url: 'https://sdldashboard.netlify.app/',
      github: 'https://github.com/SDLuis/Dashboard'
    },
    {
      title: 'Weather app',
      description: 'Weather app, shows detailed weather by city, inspired by thearthurk design. Website worked with Astro, React and Tailwind.',
      img: weather,
      url: 'https://sdl-weather.netlify.app/',
      github: 'https://github.com/SDLuis/weather-website'
    },
    {
      title: 'Ecommerce',
      description: 'Ecommerce Website worked with astro, react, and backend with Node, TypeScript, Sequelize and MySql.',
      img: ecommerce,
      url: 'https://sdl-ecommerce.netlify.app/',
      github: 'https://github.com/SDLuis/ecommerce-website'
    },
    {
      title: 'Sound Pulse',
      description: 'Beautiful website maked to feel the music. Website worked with astro, react, and personalized images by a friend.',
      img: soundpulse,
      url: 'https://soundpulse.netlify.app',
      github: 'https://github.com/SDLuis/SoundPulse'
    },
    {
      title: 'Gericht Restaurant',
      description: 'Beautiful and responsive restaurant Landing page. Website worked with astro, react, and Tailwind. Inspired in Iqonic design posted on Figma.',
      img: gericht,
      url: 'https://sdl-gericht.netlify.app',
      github: 'https://github.com/SDLuis/Restaurant-Website'
    }
]
};
