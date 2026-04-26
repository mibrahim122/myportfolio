const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "./images/ideas.svg" },
  { text: "Concepts", imgPath: "./images/concepts.svg" },
  { text: "Designs", imgPath: "./images/designs.svg" },
  { text: "Code", imgPath: "./images/code.svg" },
  { text: "Ideas", imgPath: "./images/ideas.svg" },
  { text: "Concepts", imgPath: "./images/concepts.svg" },
  { text: "Designs", imgPath: "./images/designs.svg" },
  { text: "Code", imgPath: "./images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Year of Experience" },
  { value: 7, suffix: "+", label: "Satisfied Clients" },
  { value: 11, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "./images/logos/company-logo-1.png",
  },
  {
    imgPath: "./images/logos/company-logo-2.png",
  },
  {
    imgPath: "./images/logos/company-logo-3.png",
  },
  {
    imgPath: "./images/logos/company-logo-4.png",
  },
  {
    imgPath: "./images/logos/company-logo-5.png",
  },
  {
    imgPath: "./images/logos/company-logo-6.png",
  },
  {
    imgPath: "./images/logos/company-logo-7.png",
  },
  {
    imgPath: "./images/logos/company-logo-8.png",
  },
  {
    imgPath: "./images/logos/company-logo-9.png",
  },
  {
    imgPath: "./images/logos/company-logo-10.png",
  },
  {
    imgPath: "./images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "./images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "./images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "./images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "./images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "./images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "./images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "./images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "./images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "./models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "./models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "./models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "./models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "./models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Muhammad Ibrahim brings incredible technical expertise to the table. His ability to quickly grasp complex concepts and deliver fast, modern web experiences is outstanding.",
    imgPath: "./images/exp1.png",
    logoPath: "./images/logo1.png",
    title: "Full Stack Developer",
    date: "March 2024 - Present",
    responsibilities: [
      "Architect and develop responsive, high-performance web applications using modern JavaScript frameworks.",
      "Integrate robust backend APIs and databases to create seamless, dynamic user experiences.",
      "Focus on writing clean, scalable, and maintainable code following industry best practices.",
    ],
  },
  {
    review: "Muhammad Ibrahim approaches development challenges with a deep problem-solving mindset. His dedication to clean code and efficient UI design makes him a highly valuable asset to any project.",
    imgPath: "./images/exp2.png",
    logoPath: "./images/logo2.png",
    title: "Frontend React Developer",
    date: "January 2024 - March 2024",
    responsibilities: [
      "Specialized in building interactive user interfaces using React, Tailwind CSS, and Framer Motion.",
      "Translated complex UI/UX designs into pixel-perfect, mobile-responsive web pages.",
      "Optimized web applications for maximum speed, accessibility, and cross-browser compatibility.",
    ],
  },
  {
    review: "Working with Muhammad Ibrahim is a great experience. He consistently delivers high-quality web solutions that perfectly align with our product goals and user needs.",
    imgPath: "./images/exp3.png",
    logoPath: "./images/logo3.png",
    title: "Web Development Journey Started | Early 2024",
    date: "Early 2024",
    responsibilities: [
      "Mastered advanced JavaScript and specialized in building dynamic, component-driven user interfaces using React.",
      "Expanded into backend development, constructing robust RESTful APIs using Node.js and Express.js.",
      "Actively building full-stack applications, focusing on scalable architecture and seamless frontend-to-backend integration.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "./images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "./images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "./images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Muhammad Ibrahim. He took our complex requirements and turned them into a seamless, highly interactive frontend using React. His problem-solving abilities are outstanding.",
    imgPath: "./images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Collaborating with Muhammad Ibrahim was an absolute pleasure. His dedication to delivering exceptional, scalable web applications using the MERN stack was evident throughout our project. Highly recommended!",
    imgPath: "./images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Muhammad Ibrahim's expertise in modern JavaScript frameworks is truly impressive. He delivered a robust Node.js and Express backend for our platform, ensuring our data flowed perfectly to the UI.",
    imgPath: "./images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Working with Muhammad Ibrahim was a fantastic experience. He transformed our outdated UI into a modern, component-driven React application. His attention to detail is unmatched.",
    imgPath: "./images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "He turned our concepts into a fresh, intuitive platform that is both fast and responsive. Fantastic work overall, especially with his clean code architecture.",
    imgPath: "./images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Muhammad Ibrahim was a pleasure to work with. He understood our full-stack requirements perfectly. His skills in both React on the frontend and Node.js on the backend are top-notch.",
    imgPath: "./images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "./images/insta.png",
  },
  {
    name: "fb",
    imgPath: "./images/fb.png",
  },
  {
    name: "x",
    imgPath: "./images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "./images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

