import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Al-Vinda Akbar Geannasech — Web Developer",
  author: "Al-Vinda Akbar Geannasech",
  description:
    "Web Developer based in Indonesia. I specialize in web application development and maintenance.",
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
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Al-Vinda Akbar Geannasech",
    specialty: "Web Developer",
    summary:
      "Web Developer based in Indonesia. I specialize in web application development and maintenance.",
    email: "alvindaakbar@gmail.com",
  },
  experience: [
    {
      company: "PT. Supernova Palapa Nusantara",
      position: "Backend Engineer",
      startDate: "Feb 2024",
      endDate: "Aug 2024",
      summary: [
        "Developing REST APIs with NestJS and MongoDB database to support web and mobile applications.",
        "Implement a secure and reliable API authentication system.",
        "Collaborate with frontend team to complete new feature integration within specified time.",
      ],
    },
    {
      company: "CV. Gilang Kencana Mulya",
      position: "Web Developer",
      startDate: "July 2024",
      endDate: "Sep 2024",
      summary: [
        "Developing website applications with Laravel for contractor, personnel, and company project management.",
        "Create an admin dashboard with a user-friendly interface using Bootstrap to simplify internal management.",
      ],
    },
    {
      company: "PT. Moonlight Technology",
      position: "Full Stack Web Developer",
      startDate: "July 2025",
      endDate: "Aug 2025",
      summary: [
        "Developing a company profile website application using Next.js",
        "Create an admin dashboard and landing page for regular users with a modern and user-friendly interface with Tailwind CSS.",
        "Menggunakan PostsGreSQL sebagai database untuk mengelola data perusahaan pada halaman admin",
      ],
    },
    {
      company: "PT. Minilemon Technology",
      position: "Full Stack Web Developer",
      startDate: "Sept 2025",
      endDate: "Feb 2026",
      summary: [
        "Developing a REST API for an ROI calculator application using Express.js",
        "Using MySQL as a database to store calculation data and calculator results",
        "Developing a company profile website for the D'Topeng Kingdom Foundation Museum using React.js, Typescript, and Tailwind CSS",
        "Create a landing page for regular users with a modern interface and create a mobile version display.",
      ],
    },
  ],
  projects: [
    {
      name: "Ps Go App",
      summary:
        "Laravel & React based PS rental and booking application, equipped with admin dashboard and booking system.",
      linkPreview: "/",
      linkSource: "https://github.com/Nandaakbar15/PsGo-frontend",
      image: "/projects/Screenshot project Ps Go.png",
    },
    {
      name: "Website-based Bookstore Application",
      summary:
        "Website-based bookstore application using React.js, Express.js and MySQL",
      linkPreview: "/",
      linkSource: "https://github.com/Nandaakbar15/website-tokobuku",
      image: "/projects/Screenshot project Website Toko Buku.PNG",
    },
    {
      name: "Aizawa Gamerstore",
      summary:
        "Simple E-commerce website selling consoles and games using React.js, Express.js and MySQL",
      linkPreview: "/",
      linkSource: "https://github.com/Nandaakbar15/aizawagamersniastore",
      image: "/projects/Screenshot project website Aizawa gamerstore.PNG",
    },
  ],
  about: {
    description: `
      I am a full-stack web developer with experience as an intern and freelancer. During my internship, I developed a Rest API using NestJS and a MongoDB database. As a freelancer, I developed a company website that handled contractor, personnel, and contractor data. I am passionate about building modern, scalable, and user-friendly websites and am ready to contribute to a team developing innovative technology solutions.
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
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", image: "/tech-logo/mysql-logo.png" },
        { name: "MongoDB", image: "/tech-logo/MongoDB-logo.png" },
      ],
    },
  ],
};

// #5755ff
