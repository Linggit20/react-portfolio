import ProjectOne from "../assets/ProjectOne.png"
import ProjectTwo from "../assets/ProjectTwo.png"
import ProjectFour from "../assets/ProjectFour.png"
import ProjectFive from "../assets/ProjectFive.png"

interface Technologies {
  id: number,
  name: string
}

interface Github {
  name: string,
  link: string
}

interface Live {
  name: string,
  link: string
}


export interface ProjectInterface {
  id: number,
  duration: string,
  easing: string,
  right:string,
  left:string,
  delay?:string,
  image: string,
  title: string,
  description: string,
  technologies: Technologies[],
  github: Github,
  live: Live,
}

export const projects: ProjectInterface[] = [
  { 
    id: 1,
    duration: "500",
    easing: 'ease-in-out',
    right:'fade-right',
    left: 'fade-left',
    delay: "100",
    image: ProjectOne,
    title: "FoodTrip",
    description: "Static e-commerce food website",
    technologies: [
      {
        id: 1,
        name: "Bootstrap"
      },
      {
        id: 2,
        name: "Github Pages"
      }
    ],
    github: 
      { 
        name: "Github",
        link: "https://github.com/Linggit20/mini-project-1",
      },
    live: 
      {
        name: "Live",
        link: "https://linggit20.github.io/mini-project-1/index.html"
      },
  },
  {
    id: 2,
    duration: "500",
    easing: 'ease-in-out',
    right:'fade-right',
    left: 'fade-left',
    delay: "100",
    image: ProjectTwo,
    title: "PokeWorld", 
    description: "The website enables users to search for and explore Pokémon, providing details on their characteristics and abilities.",
    technologies: [
      {
        id: 1,
        name: "React"
      },
      {
        id: 2,
        name: "Bootstrap"
      },
      {
        id: 3,
        name: "External Api"
      }
    ],
    github: 
      { 
        name: "Github",
        link: "https://github.com/myke023/miniproject2paul-albertoWD45",
      },
    live: 
      {
        name: "Live",
        link: "https://mini-project-2-pokemon.onrender.com/"
      }
  },
  { 
    id: 4,
    duration: "500",
    easing: 'ease-in-out',
    right:'fade-right',
    left: 'fade-left',
    delay: "100",
    image: ProjectFour,
    title: "ManwhaKi Admin", 
    description: "Effortlessly manage manga with my MERN stack app, simplifying content creation, updates, while curating your collection with ease",
    technologies: [
      {
        id: 1,
        name: "Material-Tailwind"
      },
      {
        id: 2,
        name: "MongoDb"
      },
      {
        id: 3,
        name: "Express"
      },
      {
        id: 4,
         name: "React"
      },
      {
        id: 5,
        name: "Node Js"
      }
    ],
    github: 
      { 
        name: "Github",
        link: "https://github.com/Linggit20/MERN_Full-Stack-ManwhaKi",
      },
    live: 
      {
        name: "Live",
        link: "https://manwhaki-admin.netlify.app"
      }
  },
  { 
    id: 5,
    duration: "500",
    easing: 'ease-in-out',
    right:'fade-right',
    left: 'fade-left',
    image: ProjectFive,
    title: "ManwhaKi - Comics", 
    description: "Immerse yourself in the world of webtoon manga through this project, where you can explore a diverse collection of captivating stories brought to life with stunning artistry.",
    technologies: [
      {
        id: 1,
        name: "Material-Tailwind"
      },
      {
        id: 2,
        name: "MongoDb"
      },
      {
        id: 3,
        name: "Express"
      },
      {
        id: 4,
         name: "React"
      },
      {
        id: 5,
        name: "Node Js"
      }
    ],
    github: 
      { 
        name: "Github",
        link: "https://github.com/Linggit20/MERN_Full-Stack-ManwhaKi",
      },
    live: 
      {
        name: "Live",
        link: "https://manwhaki.netlify.app/"
      }
  },
]