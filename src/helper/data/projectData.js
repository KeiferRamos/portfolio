import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiJavascript } from "react-icons/si";

export default [
  {
    link: "https://youtu.be/1D5fjHeYXZw",
    applink: "https://keiferramos.github.io/Converter/",
    title: "programming calculator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo aspernatur consectetur alias consequuntur quaerat atque voluptates, corrupti quis possimus",
    tools: [<SiJavascript />, <DiHtml5 />, <DiCss3 />],
    source: {
      client: "https://github.com/KeiferRamos/Converter",
      server: null,
    },
  },
  {
    link: "https://www.youtube.com/watch?v=YVAVd6o8nvY",
    applink: null,
    title: "Mern stack ecommerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo aspernatur consectetur alias consequuntur quaerat atque voluptates, corrupti quis possimus",
    source: {
      client: "https://github.com/KeiferRamos/MernEcommerceClient",
      server: "https://github.com/KeiferRamos/MernEcommerceServer",
    },
    tools: [<DiReact />, <FaNodeJs />, <SiMongodb />, <SiExpress />],
  },
  {
    link: "https://youtu.be/fhXLrqmx10M",
    applink: "https://keiferramos.github.io/combinewords/",
    title: "Combine words game",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo aspernatur consectetur alias consequuntur quaerat atque voluptates, corrupti quis possimus",
    source: {
      client: "https://github.com/KeiferRamos/combinewords",
      server: null,
    },
    tools: [<DiReact />, <SiRedux />],
  },
  {
    link: "https://www.youtube.com/watch?v=f8tQKfCnyOo",
    applink: "https://keiferramos.github.io/QuizGame/",
    title: "Quiz game",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo aspernatur consectetur alias consequuntur quaerat atque voluptates, corrupti quis possimus",
    tools: [<DiReact />],
    source: {
      client: "https://github.com/KeiferRamos/QuizGame",
      server: null,
    },
  },
];
