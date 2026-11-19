import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Al-Vinda Akbar Geannasech — Backend Developer | Laravel & Node.js",
  author: "Al-Vinda Akbar Geannasech",
  description:
    "Backend Developer based in Indonesia. I specialize in building RESTful APIs, managing databases, and developing reliable backend systems using Laravel, Express.js, and NestJS.",
  lang: "en",
  siteLogo: "/Foto Profil 2.png",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Stack", href: "#stack" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Contacts", href: "#contact" },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/alvinda-akbar-ba05322b2",
    },
    { text: "Github", href: "https://github.com/Nandaakbar15" },
    { text: "Instagram", href: "https://www.instagram.com/alvindaakbar1933/" },
  ],
  socialImage: "/my-portfolio-thumbnail.png",
  canonicalURL: "https://portfolio-alvinda.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Al-Vinda Akbar Geannasech",
    specialty: "Backend Developer",
    summary:
      "Backend Developer based in Indonesia. I specialize in building RESTful APIs, managing databases, and developing reliable backend systems using Laravel, Express.js, and NestJS.",
    email: "alvindaakbar@gmail.com",
  },
  experience: [
    {
      company: "PT. Supernova Palapa Nusantara",
      position: "Backend Engineer - Internship",
      startDate: "Feb 2024",
      endDate: "Aug 2024",
      summary: [
        "Developed RESTful APIs using NestJS and TypeScript to support web and mobile applications",

        "Implemented authentication and authorization mechanisms using JWT.",

        "Designed and managed MongoDB collections to support application data requirements",

        "Implemented middleware, request validation, and error handling to improve API reliability",

        "Collaborated with frontend developers to integrate backend services and application features",
      ],
    },
    {
      company: "CV. Gilang Kencana Mulya",
      position: "Web Developer - Freelance",
      startDate: "July 2024",
      endDate: "Sep 2024",
      summary: [
        "Developing a company profile website application using Next.js",
        "Designed data structures to manage company personnel, team information, and portfolio content",
        "Implemented responsive landing page interfaces using Tailwind CSS.",
      ],
    },
    {
      company: "PT. Moonlight Technology",
      position: "Web Developer - Internship",
      startDate: "July 2025",
      endDate: "Aug 2025",
      summary: [
        "Developing a company profile website application using Next.js",
        "Built an admin dashboard and integrated frontend components with backend APIs.",
        "Designed and managed PostgreSQL database structures to store company information",
        "Implemented responsive user interfaces using Tailwind CSS.",
      ],
    },
    {
      company: "PT. Minilemon Technology",
      position: "Web Developer - Internship",
      startDate: "Sept 2025",
      endDate: "Feb 2026",
      summary: [
        "Developed RESTful APIs for an ROI Calculator application using Express.js and JavaScript.",

        "Designed and managed MySQL database structures and relationships to store calculation data and results.",

        "Implemented input validation and error handling to improve API reliability.",

        "Tested API endpoints using Postman to ensure functionality and consistency.",

        "Collaborated on developing a company profile website for the D'Topeng Kingdom Foundation Museum using React.js, TypeScript, and Tailwind CSS.",
      ],
    },
  ],
  projects: [
    {
      name: "Company Profile AlvindaWebStudio",
      summary:
        "A Company Profile AlvindaWebStudio using Next.js and Tailwind CSS",
      linkPreview: "https://alvindawebstudio.vercel.app/",
      linkSource:
        "https://github.com/Nandaakbar15/company-profile-alvindawebstudio.git",
      image:
        "/projects/Screenshot Project Website Company profile AlvindaWebStudio.png",
    },
    {
      name: "Mini Job Tracker App",
      summary:
        "Mini job tracker website to track candidate status or applicants using React.js, Express.js, Tailwind CSS and MySQL",
      linkPreview: "/",
      linkSource:
        "https://github.com/Nandaakbar15/mini-job-tracker-app-frontend.git",
      image: "/projects/Screenshot Mini Job Tracker App.png",
    },
    {
      name: "Ps Go App",
      summary:
        "Laravel & React based PS rental and booking application, equipped with admin dashboard and booking system.",
      linkPreview: "/",
      linkSource: "https://github.com/Nandaakbar15/PsGo-frontend",
      image: "/projects/Screenshot project Ps Go.png",
    },
    {
      name: "Information system manages library",
      summary:
        "Manages library web based Application using Laravel, Tailwind CSS and MySQL.",
      linkPreview: "/",
      linkSource:
        "https://github.com/Nandaakbar15/sistem-informasi-perpustakaan-berbasis-website.git",
      image: "/projects/Screenshot Perpustakaan App.png",
    },
  ],
  about: {
    description: `
      I am a Backend Developer with internship and freelance experience in developing RESTful APIs and web applications using Laravel, Express.js, and NestJS.

      During my internships, I worked on API development, database management using MongoDB, MySQL, and PostgreSQL, authentication, and frontend-backend integration.

      Through freelance and personal projects, I have also gained experience developing backend systems for inventory management, employee management, e-commerce, and business applications.

      I enjoy solving technical problems, designing efficient backend systems, and building reliable applications. I am continuously improving my backend development skills and eager to contribute to a collaborative development team.
    `,
    image: "/Foto profil.jpg",
  },
  skills: [
    {
      category: "Native Language",
      items: [
        { name: "HTML5", image: "/tech-logo/html.png" },
        { name: "CSS3", image: "/tech-logo/css.png" },
        { name: "PHP", image: "/tech-logo/php.png" },
        { name: "JavaScript", image: "/tech-logo/js logo.png" },
      ],
    },
    {
      category: "Framework and Library",
      items: [
        { name: "Laravel", image: "/tech-logo/Laravel logo.png" },
        { name: "Express", image: "/tech-logo/expressjs-logo.webp" },
        { name: "NodeJS", image: "/tech-logo/nodejs-logo.png" },
        { name: "NestJS", image: "/tech-logo/nestjs.svg" },
        { name: "React", image: "/tech-logo/React.js-logo.png" },
        { name: "Next.js", image: "/tech-logo/Next.js-logo.png" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", image: "/tech-logo/mysql-logo.png" },
        { name: "MongoDB", image: "/tech-logo/MongoDB-logo.png" },
        { name: "PostgreSQL", image: "/tech-logo/postgresql_logo.png" },
      ],
    },
  ],
};
