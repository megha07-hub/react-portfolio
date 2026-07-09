import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/Project-3.png";

export const HERO_CONTENT = `I’m a Front-End Developer who loves turning ideas into elegant, intuitive digital experiences. Outside of 
coding, you’ll find me on the badminton court, exploring hiking trails, or contributing to open-source projects. Curious, creative, and
always learning, I enjoy experimenting with new frameworks, improving user experiences, and sharing knowledge with the community. Let’s 
create something amazing together!`;

export const ABOUT_TEXT = `Creative and results-driven Front-End Developer with 3+ years of experience building high-performance, 
user-friendly web applications using JavaScript, React JS, and TypeScript. I specialize in performance optimization, responsive design,
and enhancing user engagement—reducing page load times by 40% and boosting engagement by 25%. Awarded the 'Shining Star' at SLK Software
Pvt. Ltd. for innovation and impact, I thrive on improving code quality, integrating APIs, and modernizing legacy systems in Agile, 
collaborative environments.`;

export const EXPERIENCES = [
  {
    year: "May 2022 - April 2023",
    role: "Software Developer",
    company: "SLK Software Pvt. Ltd, India",
    description: `Developed dynamic, responsive user interfaces using React JS and Angular, reducing page load times by 40% and boosting user engagement by 25%.
    Integrated Axios and Fetch APIs, enhancing site functionality and improving user satisfaction by 10%.
    Implemented unit tests with Jest and React Testing Library, cutting bug occurrences by 20%.
    Improved code quality using SonarQube, reducing production bugs by 30%.
    Led migration of legacy codebases to modern frameworks, increasing operational efficiency by 20%.
    Collaborated in cross-functional Agile teams to deliver features ahead of schedule.`,
    technologies: ["React", "HTML", "CSS"],
  },
  {
    year: "May 2021 - May 2022",
    role: "Software Developer",
    company: "SM Netserv Technologies, India",
    description: `Implemented responsive designs using CSS Grid and Flexbox, boosting mobile user engagement by 25%.
    Collaborated with UX/UI team to apply new design standards, increasing user satisfaction scores by 50%.
    Streamlined requirements gathering with clients, reducing project rework by 5%.
    Maintained clean code practices, conducted code reviews, and optimized test coverage, achieving 80% code quality compliance.`,
    technologies: ["KQuery", "Javascript", "HTML", "CSS"],
  },
  {
    year: "June 2019 - November 2020",
    role: "Software Engineer",
    company: "Capgemini, India",
    description: `Developed interactive web applications using Angular, HTML5, and CSS3, improving mobile accessibility and increasing web traffic by 25%.
    Debugged and resolved front-end issues using Chrome DevTools, reducing production bugs by 10%.
    Integrated RESTful APIs for dynamic content, improving data accuracy by 15%.
    Enhanced team productivity by 25% through active participation in Agile processes, including Sprint Planning and Daily Stand-Ups.`,
    technologies: ["Angular", "HTML5", "CSS3"],
  },
];

export const PROJECTS = [
  {
    title: "AI Chat Assistant (Groq + LLaMA 3)",
    image: project1,
    link: 'https://ai-chat-app-alpha-sand.vercel.app/',
    description:
      "A modern full-stack AI chatbot application built using Next.js and Groq’s LLaMA 3 API. The application provides a ChatGPT-like experience with real-time responses, smooth UI animations, and a clean responsive design.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "Groq SDK", "Vercel"],
  },

  {
    title: "Technician Work Orders",
    image: project2,
    link: 'https://work-orders-ashen.vercel.app/work-orders',
    description:
      "A full-stack work order management app built with Next.js App Router and TypeScript. Supports create, edit, delete, and detail views with server-side Zod validation, file-based JSON persistence, and title search — plus unit and component tests.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Vitest", "React Testing Library"],
  },

  {
    title: "Portfolio Website",
    image: project3,
    link: 'https://react-portfolio-lilac-one.vercel.app/',
    description:
      "Developed a personal portfolio website using React, Tailwind CSS and framer motion library, showcasing projects and code samples, optimized for performance with lazy loading and code-splitting.",
    technologies: ["React", "Tailwind CSS", "Farmer Motion Library"],
  }
];

export const CONTACT = {
  address: "Nuremberg, Germany",
  email: "meghahubli2695@gmail.com",
};
