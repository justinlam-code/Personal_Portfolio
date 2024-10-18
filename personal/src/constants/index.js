import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `and a passionate engineering student at Queen's University. `;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Web Dev",
    company: "Glazing Gorilla Games.",
    description: `Developed and deployed a dynamic website for Glazing Gorilla Games, a game acquisition company reaching 8+ million players globally. Built using React, JavaScript, and Tailwind CSS to create a modern, responsive user experience.`,
    technologies: ["Javascript", "React.js", "Tailwind", "html"],
  },
  {
    year: "2020 - 2021",
    role: "Freelance Creative",
    company: "Fiverr",
    description: `Independent video editor specializing in content creation. Delivered custom videos and thumbnails using Sony Vegas Pro, Adobe Premiere, and Photoshop for a global client base through Fiverr.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Personal Portfolio",
    image: project1,
    description:
      "Responsive Portfolio",
    technologies: ["Vite", "React", "Tailwind", "React.JS"],
    link: "",
  },
  {
    title: "Glazing Gorillas",
    image: project2,
    description:
      "Responsive Website for Glazing Gorilla Games, a aquissition company with over 8+ million total visits and 70+ million media views.",
    technologies: ["Vite", "React", "Tailwind"],
    link: "https://glazinggorillagames.com/",
  },
  {
    title: "EdgeHacks",
    image: project3,
    description:
      "Dynamic website for EdgeHacks, a Hackathon with over 200+ participants.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://edgehacks.xyz/",
  },
  {
    title: "EdgeHacks",
    image: project3,
    description:
      "Dynamic website for EdgeHacks, a Hackathon with over 200+ participants.",
    technologies: ["HTML", "CSS",],
    link: "https://edgehacks.xyz/",
  },


];

export const CONTACT = {
  email: "justin.lam@queensu.ca",
};
