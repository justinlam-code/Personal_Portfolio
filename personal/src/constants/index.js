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
    technologies: ["HTML", "React", "Tailwind"],
  },
  {
    title: "Glazing Gorillas Website",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "EdgeHacks",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "KFC Converter",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  email: "justin.lam@queensu.ca",
};
