import { FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { DiReact, DiMongodb, DiSass } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

export const skills = [
  { name: "HTML", icon: SiHtml5, category: "Front-end" },
  { name: "CSS", icon: SiCss3, category: "Front-end" },
  { name: "Tailwind", icon: SiTailwindcss, category: "Front-end" },
  { name: "JavaScript", icon: SiJavascript, category: "Front-end" },
  { name: "React", icon: DiReact, category: "Front-end" },
  { name: "NodeJS", icon: FaNodeJs, category: "Back-end" },
  { name: "Express.js", icon: SiExpress, category: "Back-end" },
  { name: "MongoDB", icon: DiMongodb, category: "Database" },
  { name: "TypeScript", icon: SiTypescript, category: "Front-end" },
  { name: "Sass", icon: DiSass, category: "Front-end" },
  { name: "Figma", icon: FiFigma, category: "Design" },
];

export const projects = [
  {
    link: "https://moataz-hassanein.github.io/Hotel-Project/",
    name: "The Hotel",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1688995142/Moataz-Portfolio/Hotel_i287vp.jpg",
    category: "HTML&CSS",
  },
  {
    link: "https://moataz-hassanein.github.io/Photographer-Project/",
    name: "The Photographer",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1688995141/Moataz-Portfolio/Photographer_u1movq.jpg",
    category: "HTML&CSS",
  },

  {
    link: "https://expenses-175ee5.netlify.app/",
    name: "Expenses Tracker",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1688995141/Moataz-Portfolio/expenses_xdjchu.png",
    category: "React",
  },
  {
    link: "https://food-app-1bc846.netlify.app/",
    name: "Food App",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1688995143/Moataz-Portfolio/food_p244b0.png",
    category: "React",
  },

  {
    link: "https://github.com/Moataz-hassanein/Bulls-and-Cows",
    name: "Bulls and Cows",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1688995142/Moataz-Portfolio/bac_kfekeg.png",
    category: "JavaScript",
  },
  {
    link: "https://prompt-me.netlify.app/",
    name: "Prompt Me",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1700822804/Moataz-Portfolio/promptme_nz22bx.png",
    category: "FullStack",
  },
  {
    link: "https://moviespopcorn.netlify.app/",
    name: "Movies Popcorn",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1700822802/Moataz-Portfolio/moviespopcorn_ztnh1w.png",
    category: "React",
  },
  {
    link: "https://hangmanguessaword.netlify.app/",
    name: "Hang Man",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1700822801/Moataz-Portfolio/hangman_yc5odn.png",
    category: "TypeScript",
  },
  {
    link: "https://image-dalle.netlify.app/",
    name: "Dalle",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1700822804/Moataz-Portfolio/dalle_qp76kx.png",
    category: "FullStack",
  },
];
