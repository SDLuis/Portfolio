import SDL from "../img/SDL.webp";
import Me from "../img/headerimg.webp"; /*"../img/Me2.png";*/
import placeholder from "../img/placeholder.webp"; /*"../img/Me2.png";*/
import Me2 from "../img/contactmeimg.webp";

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
};
