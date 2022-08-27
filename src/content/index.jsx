import SDL from "../img/SDL2.png";
import Me from "../img/Me3.png" /*"../img/Me2.png";*/
import placeholder from "../img/placeholder.png" /*"../img/Me2.png";*/
import Me2 from  "src/img/Me2.jpeg"

export const content = {
  nav: {
    desc: [`Welcome to my portfolio, here you can learn more about me, the technologies I use, the ones I have knowledge of, the projects I have done to date, and how to contact me.`,
    
    `Enjoy the tour!`],
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
    text: ["Hi!", "It's me, Luis Rincon.", "I am "],
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
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },
};


