import project1 from "../assets/projects/weather-app.webp";
import project2 from "../assets/projects/imagefix.webp";
import project3 from "../assets/projects/mernchat.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Weather-web-application",
    image: project1,
    description:"Built a geolocation-based weather application that fetches real-time weather data using the OpenWeather API. Optimized performance and data handling with React Query (TanStack) for efficient asynchronous state management. Designed a clean, responsive, and mobile-friendly user interface to ensure a smooth user experience across devices.",
    technologies: ["React", "React Query", "Tailwind CSS", "OpenWeather API"],
    link: "https://weather-app-blush-ten-23.vercel.app/"
  },
  {
    title: "Ai-image generation",
    image: project2,
    description:"Developed an AI-based image editing application with features like generative fill, object recoloring, and background removal. Leveraged Cloudinary’s powerful image generation tools by sending transformation requests directly to their API for fast, serverless processing and delivery. Designed a modern, responsive UI using ShadCN UI and Tailwind CSS to ensure a smooth user experience.",
    technologies: ["Next.js", "cloudinary", "Tailwind CSS", "MongoDB"],
    link:"https://imagefix-three.vercel.app/"
  },
  {
    title: "web-chat-application",
    image: project3,
    description:"Built a real-time chat application featuring instant messaging, JWT-based authentication, and media file sharing. Integrated Socket.IO to enable seamless bi-directional communication between users. Designed a responsive and user-friendly interface using Tailwind CSS for a consistent experience across devices.",
    technologies: ["MERN", "Socket.IO", "JWT", "Cloudinary"],
    link: "https://mern-live-chat-syncronous.vercel.app/",
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "91+ 9880043290 ",
  email: "souravmesta34@gmail.com",
};
