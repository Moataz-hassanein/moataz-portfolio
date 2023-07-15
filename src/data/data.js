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
    link: "https://moataz-hassanein.github.io/Social-Project/",
    name: "Social App",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1689196002/Social_iiw4dd.png",
    category: "HTML&CSS",
  },
  {
    link: "https://moataz-hassanein.github.io/The-Office-Project/",
    name: "The Office",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1688995141/Moataz-Portfolio/office_tc3bw5.jpg",
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
    link: "https://todo-todones-app.netlify.app/",
    name: "Todo App",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1688995141/Moataz-Portfolio/todo_htpbvs.png",
    category: "React",
  },
  {
    link: "https://github.com/Moataz-hassanein/Bulls-and-Cows",
    name: "Bulls and Cows",
    image:
      "https://res.cloudinary.com/dqnef0x7y/image/upload/v1688995142/Moataz-Portfolio/bac_kfekeg.png",
    category: "JavaScript",
  },
];
