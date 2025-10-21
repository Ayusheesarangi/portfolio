import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaDatabase,
  FaReact,
  FaServer,
  FaMobile,
  FaTools, 
  FaNodeJs,
  FaStripe,
  FaDownload
} from 'react-icons/fa';
import profileImg from './profile.jpeg';
import cab from './cab.jpg';
import journey from './journey.jpg';
import weather from './weather.jpg';
import cv from './Ayushee.pdf'
export const assets = {
  profileImg,
  journey,
  cab,
  weather,
  cv
};

 export const aboutInfo=[
{
    icon:FaLightbulb,
    title:'Software Developer',
    description:"I'm a web developer with a strong focus on building responsive, user-friendly interfaces using HTML, CSS, and JavaScript. I work with modern frameworks like React, Redux Toolkit, and Tailwind CSS to create scalable and efficient front-end solutions. I also have experience with MongoDB for database management and use Git and Linux for version control and development workflows. I enjoy writing clean, maintainable code and continuously improving my skills through real-world projects.",
    color:'text-purple'
}
 ];
 
export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Skilled in developing responsive and accessible user interfaces using modern frontend technologies. Experienced with HTML, CSS, and JavaScript, and proficient in frameworks and libraries like React, Redux Toolkit, Tailwind CSS, Material UI, and Bootstrap. I focus on creating clean, maintainable code and seamless user experiences across all devices.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap"
    ]
  },

  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Experienced in creating robust, scalable server-side applications and RESTful APIs using Node.js and Express. I focus on building efficient back-end systems that ensure performance, security, and seamless integration with frontend interfaces.",
    tags: [
      "Node.js",
      "Express"
    ]
  },
  {
    title: "Database Management & Data Structures",
    icon: FaDatabase,
    description:
      "Experienced in managing databases using MongoDB and applying fundamental data structures to optimize application performance and data handling. Skilled at organizing, storing, and retrieving data efficiently to support scalable backend systems.",
    tags: [
      "MongoDB",
       "Mongoose",
       "Data Structure"
    ]
  },
  {
    title: "Tools & Version Control",
    icon: FaTools,
    description:
      "Proficient in essential development tools including Git for version control and Linux for efficient command-line operations. Experienced with modern IDEs and workflows that improve productivity and collaboration.",
    tags: [
      "Git",
      "Linux",
      "VS Code"
    ]
  }

];
export const projects = [
  {
    title: "Online Cab Booking System",
    description:
      "Developed a full-stack online cab booking system using the MERN stack. Users can book rides, track drivers in real-time, and manage bookings through a responsive React frontend. The backend, built with Node.js and Express, handles ride requests, user authentication, and payment processing, with MongoDB storing user and booking data.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    image:cab,
    icons:[FaReact,FaNodeJs,FaDatabase,FaStripe]
  },
  {
    title: "Weather App",
    description:
      "Created a weather forecasting application with React for the frontend, providing users with real-time weather updates based on location. The backend Node.js/Express server fetches data from third-party weather APIs, and MongoDB is used to cache frequently accessed data to improve performance.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    image:weather,
    icons:[FaReact,FaNodeJs,FaDatabase,FaStripe]
  },
  {
    title: "Travel Journal App",
    description:
      "Created a weatheDesigned and implemented a travel journal application with full CRUD functionality, allowing users to create, view, update, and delete trip entries.r forecasting application with React for the frontend, providing users with real-time weather updates based on location. The backend Node.js/Express server fetches data from third-party weather APIs, and MongoDB is used to cache frequently accessed data to improve performance.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    image:journey,
    icons:[FaReact,FaNodeJs,FaDatabase,FaStripe]
  },
  // {
  //   title: "GDB Application",
  //   description:
  //     "Built a MERN stack application designed to manage and visualize data in a structured database. The React frontend offers an intuitive UI for data entry and reporting, while the Node.js/Express backend handles complex queries and data manipulation, with MongoDB as the primary data store.",
  //   stack: ["MongoDB", "Express", "React", "Node.js"]
  // },
  // {
  //   title: "Checkmaro",
  //   description:
  //     "Developed Checkmaro, a MERN stack web application aimed at streamlining task and checklist management. Features include user authentication, task creation, editing, and status tracking, all managed via a React frontend with backend APIs powered by Node.js and Express, and persistent data stored in MongoDB.",
  //   stack: ["MongoDB", "Express", "React", "Node.js"]
  // }
];
export const workdetails = [
  {
    position: "Software Developer",
    company: "Verifacts Services Private Limited",
    duration: "May 2024-Present",
    description: "I started my career as a Software Developer at Verifacts Services Pvt. Ltd., where I have spent 1.5 + years improving my skills in React.js, JavaScript, and modern frontend tools. This role has helped me grow as a developer by working on real-time projects, collaborating with teams, and solving technical challenges."
  }
];
