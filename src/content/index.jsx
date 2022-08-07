import SDL from "../img/SDL2.png";
import Me from "../img/someone.svg";
import placeholder from "../img/placeholder.png";

import GitHub from "@components/logos/githib.astro";
import Html5 from "@components/logos/html5.astro";
import JavaScript from "@components/logos/javascript.astro";
import Node from "@components/logos/node.astro";
import React from "@components/logos/react.astro";
import TypeScript from "@components/logos/typescript.astro";
import VSCode from "@components/logos/VSCode.astro";
import Sequelize from "@components/logos/sequelize.astro";
import Astro from "@components/logos/astro.astro"
import Tailwind from "@components/logos/tailwind.astro"
import CSS from "@components/logos/css.astro"

const content = {
  nav: {
    logo: SDL,
    links: [
      { text: "Work", to: "mywork" },
      { text: "Contact", to: "mycontact" },
    ],
  },
  header: {
    placeholder: placeholder,
    img: Me,
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
    techs: [
      {
        tech: "javascript",
        Icon: JavaScript,
      },
      {
        tech: "typescript",
        Icon: TypeScript,
      },
      {
        tech: "node",
        Icon: Node,
      },
      {
        tech: "Sequelize",
        Icon: Sequelize,
      },
      {
        tech: "github",
        Icon: GitHub,
      },
      {
        tech: "vscode",
        Icon: VSCode,
      },
      {
        tech: "react",
        Icon: React,
      },
      {
        tech: "",
        Icon: Astro,
      },
      {
        tech: "html5",
        Icon: Html5,
      },
      {
        tech: "tailwind",
        Icon: Tailwind,
      },
      {
        tech: "css",
        Icon: CSS,
      },
    ],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },
};

export default content;
