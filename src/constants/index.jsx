import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
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
  role: "Developer",
  subheading:
    "Passionate coder with 1+ year of experience in web/app development and robotics kits. Freelance developer, focused on delivering innovative solutions, constantly learning and improving to tackle new challenges.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Service Company Platform",
    description:
      "Developed a comprehensive website for a service company, implementing innovative solutions with a focus on user-centric design. The platform features responsive layouts and intuitive functionality, significantly enhancing user experience and engagement.",
    techStack: ["HTML", "Tailwind CSS"],
    imgSrc: project1,
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "Designed and implemented a personal portfolio website to showcase professional projects and skills. The site is fully responsive, optimized for performance, and features a clean, modern design that effectively highlights my work and capabilities.",
    techStack: ["React", "Tailwind CSS", "Javascript"],
    imgSrc: project2,
  },
  {
    id: 3,
    title: "Class Resource Platform",
    description:
      "Created a dedicated resource website for my academic department, streamlining access to educational materials, course updates, and supplementary resources. This platform enhances the learning experience by providing a centralized hub for students to access critical information.",
    techStack: ["HTML", "Tailwind CSS"],
    imgSrc: project3,
  },
  {
    id: 4,
    title: "Department Fest Platform",
    description:
      "Solely designed and developed the official website for 'Prodothon'25', our department's annual technical festival. The platform showcases event details, facilitates registration, and serves as the primary information hub for participants and sponsors, enhancing the overall event experience.",
    techStack: ["HTML", "React JS", "Tailwind CSS"],
    imgSrc: project4,
  },
  {
    id: 5,
    title: "College Fest Platform",
    description:
      "Engineered an engaging countdown page for 'Kriya 25', our college's flagship technical symposium. The dynamic and interactive design builds anticipation and effectively communicates key event information, contributing to increased participant engagement and event awareness.",
    techStack: ["HTML", "Angular JS", "Tailwind CSS"],
    imgSrc: project5,
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
    name: "Bootstrap",
    icon: <RiBootstrapLine className="text-indigo-500" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2024 - Present",
    role: "Developer",
    company: "THE FIXERS",
    description:
      "At The Fixers, I work as a Frontend Developer, handling client-based projects by creating responsive and visually appealing websites to meet client needs and enhance user experience.",
    techStack: ["Javascript", "React.js", "Next.js",,"HTML", "CSS","Angular" , "Tailwind CSS" ],
  },
  {
    yearRange: "2024 - Present",
    role: "Frontend Developer",
    company: "SU-PSG TECH",
    description:
      "I worked as a Frontend Developer in the Students Union Web Development Team, focusing on creating responsive and user-friendly websites to enhance the student experience.",
      techStack: ["Javascript", "React.js", "Next.js",,"HTML", "CSS","Angular" , "Tailwind CSS" ],
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
