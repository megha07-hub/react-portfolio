import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `Creative and performance-focused Front-End Developer with over three years of experience in crafting 
high-quality, responsive web applications using JavaScript, React JS, TypeScript, and other modern technologies. Skilled in optimizing 
performance and enhancing user experience, with a proven track record of reducing page load times by 40%, boosting user engagement 
by 25%, and improving code quality by 30% through static code analysis. Adept at integrating APIs, developing unit tests, and leading 
the migration of legacy systems to cutting-edge frameworks. Awarded the 'Shining Star' for Excellence in Performance at SLK Software 
Pvt. Ltd., recognized for driving innovation and efficiency in collaborative, Agile-driven environments.`;

export const ABOUT_TEXT = `I'm a creative and results-driven Front-End Developer with a knack for transforming complex problems into elegant, 
user-friendly solutions. With over three years of hands-on experience in web development, I've honed my skills in JavaScript, React JS, TypeScript,
and a range of modern technologies to build applications that are not just functional, but delightful to use.

My passion lies in crafting digital experiences that are both visually appealing and highly performant. From reducing page load times by 40% to 
increasing user engagement by 25%, I thrive on delivering impactful results. I am proud to have been recognized with the 'Shining Star' Award for 
my performance and innovation at SLK Software Pvt. Ltd., where I contributed to enhancing operational efficiency and code quality.

Beyond coding, I'm an enthusiastic contributor to the open-source community, a badminton player, and an outdoor adventurer always looking for the 
next great hike. I believe in continuous learning, sharing knowledge, and embracing new challenges. Let's create something amazing together!`;

export const EXPERIENCES = [
  {
    year: "May 2022 - April 2023",
    role: "Software Developer",
    company: "SLK Software Pvt. Ltd, India",
    description: `Developed and implemented dynamic and responsive user interfaces using React JS and Angular, reducing page load time by 40% and
    increasing user engagement by 25%. Integrated Axios & Fetch APIs to enhance site functionality, increasing user satisfaction scores by 10%.
    Created unit test cases using Jest and React Testing Library, leading to a 20% reduction in bug occurrences.Improved code quality using 
    SonarQube for static code analysis,reducing production bugs by 30%. Collaborated with cross-functional teams to deliver features 10%
    ahead of schedule using Agile Methodologies.Led the migration of legacy codebase to modern frameworks,improving operational efficiency by 20%.`,
    technologies: ["React", "HTML", "CSS"],
  },
  {
    year: "May 2021 - May 2022",
    role: "Software Developer",
    company: "SM Netserv Technologies, India",
    description: `Implemented responsive design techniques using CSS Grid and Flexbox, resulting in a 25% increase in mobile user engagement.
    Worked closely with the UX/UI team to apply new design standards, raising user satisfaction scores by 50%.
    Participated actively in client meetings to gather requirements, reducing rework by 5%.
    Maintained clean code practices, performed code reviews, and optimized test coverage, achieving 80% code quality compliance.`,
    technologies: ["KQuery", "Javascript", "HTML", "CSS"],
  },
  {
    year: "June 2019 - November 2020",
    role: "Software Engineer",
    company: "Capgemini, India",
    description: `Developed interactive web applications using Angular, HTML5, and CSS3, improving mobile accessibility and increasing web traffic 
    by 25%.Debugged and resolved front-end issues using Chrome DevTools, reducing production bugs by 10%. Integrated RESTful API services, ensuring dynamic content 
    load and improving data accuracy by 15%. Enhanced team productivity by 25% through active participation in Agile methodologies, including 
    Sprint Planning and Daily Stand-Ups.`,
    technologies: ["Angular", "HTML5", "CSS3"],
  },
];

export const PROJECTS = [
  {
    title: "Dojo Blog",
    image: project1,
    link: 'https://blog-dojo.netlify.app',
    description:
      "I built a complete React application from scratch, mastering core React concepts such as components, state management, hooks, routing, and API integration. I also gained experience in handling asynchronous code within components, creating a functional and dynamic web app.",
    technologies: ["React", "React Hooks", "React Router", "Javascript(ES6+)", "CSS", "API Integration"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    link: 'https://nasa-planatary-apod.netlify.app',
    description:
      "Developed a personal portfolio website using React, Tailwind CSS and framer motion library, showcasing projects and code samples, optimized for performance with lazy loading and code-splitting.",
    technologies: ["React", "Tailwind CSS", "Farmer Motion Library"],
  }
];

export const CONTACT = {
  address: "Nuremberg, Germany",
  phoneNo: "+49 155 10060801 ",
  email: "meghahubli2695@gmail.com",
};
