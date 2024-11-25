import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiPhpLine,
  RiBootstrapLine,
  
} from "@remixicon/react";
import {
  RiCodeSSlashLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
  
];

export const PROFILE = {
  name: "Sathish P",
  role: "Frontend Developer",
  subheading:
    "Passionate coder with 1+ year of experience in web/app development and robotics kits. Freelance developer, focused on delivering innovative solutions, constantly learning and improving to tackle new challenges.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Service Company Website",
    description:
      "A website that offers innovative solutions, focusing on user-friendly design and responsive functionality to enhance user experiences and meet modern needs.",
    techStack: ["HTML", "Tailwind CSS"],
    imgSrc: project1,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["React", "Tailwind CSS","Javascript"],
    imgSrc: project2,
  },
  {
    id: 3,
    title: "Class Resource Website",
    description:
      "A resource website for my department, designed to provide students with easy access to educational materials, important updates, and helpful resource",
    techStack: ["HTML", "Tailwind CSS"],
    imgSrc: project3,
  },
 
  
];

export const SKILLS = [
  {
    name: "HTML",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },

  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "PHP",
    icon: <RiPhpLine className="text-pink-500" />,
  },
  {
    name: "Bootstrap",
    icon: <RiBootstrapLine className="text-indigo-500" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2024 - Present",
    role: "Founder & Developer",
    company: "THE FIXERS",
    description:
      "At The Fixers, I work as a Frontend Developer, handling client-based projects by creating responsive and visually appealing websites to meet client needs and enhance user experience.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB","HTML", "CSS", "MySQL"],
  },
  {
    yearRange: "2024 - Present",
    role: "Frontend Developer",
    company: "SU-PSG TECH",
    description:
      "I worked as a Frontend Developer in the Students Union Web Development Team, focusing on creating responsive and user-friendly websites to enhance the student experience.",
    techStack: ["HTML", "CSS","Javascript", "React.js", "Next.js"],
  },
  
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Engineering(Production)",
    institution: "PSG College of Technology",
    duration: "2022 - 2026",
    description:
      "I am a student at PSG College of Technology, currently pursuing a non-technical department. Despite my background, I have a strong passion for programming and specialize in web and app development.",
  },
  
];

export const TESTIMONIAL = {
  name: "Athish",
  title: "Student",
  quote:
    "Collaborating with Sathish was a game-changer for our team. His frontend development expertise helped streamline the process, and his commitment to quality ensured our product exceeded expectations.",
  image: personImage,
};
