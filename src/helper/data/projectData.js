import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiJavascript } from "react-icons/si";

export default [
  {
    link: "https://youtu.be/1D5fjHeYXZw",
    applink: "https://keiferramos.github.io/Converter/",
    title: "programming calculator",
    description:
      "This is a converter for binary numbers. Multiple binary numbers can be converted, for example, from binary to hexadecimal, decimal to octal, and so on.",
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
      "This is a fully responsive ecommerce website that was built from the scratch. Look through a wide range of different gadgets and brands.",
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
      "This is a game in which you must combine two images. To solve the mystery word, choose a character from the list.",
    source: {
      client: "https://github.com/KeiferRamos/combinewords",
      server: null,
    },
    tools: [<DiReact />, <SiRedux />],
  },
  {
    link: "https://youtu.be/WOTwnEVl0f4",
    applink: "https://keiferramos.github.io/react-recipe-app/",
    title: "Recipe App",
    description:
      "Spoonacular Api was used to make this. Look through a variety of various recipes and save your favorites.",
    tools: [<DiReact />, <SiRedux />],
    source: {
      client: "https://github.com/KeiferRamos/react-recipe-app",
      server: null,
    },
  },
];
