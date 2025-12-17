import myExpressPortfolio from "@public/myExpressPortfolio.png";
import myKarcherBusiness from "@public/myKarcherBusiness.png";
import smartSensingDataAnalysis from "@public/smartSensingDataAnalysis.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's degree in Computer Science",
    location: "National University of Science, Ho Chi Minh City, Vietnam",
    description:
      "I graduated with a Bachelor's Degree in Computer Science. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2013 – Oct 2017",
  },
  {
    title: "Front-End Developer",
    location: "SNA, Ho Chi Minh City, Vietnam",
    description:
      "I worked as a front-end developer for 2 years in 1 job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2018 – Jul 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Zoi GmbH, Ho Chi Minh City, Vietnam",
    description:
      "I worked as a full-stack developer. My stack includes React, Ant Design, AWS S3, GitLab CI/CD, and Localization.",
    icon: React.createElement(FaReact),
    date: "Sep 2020 – Feb 2022",
  },
  {
    title: "Graduate Certificate in Computer Software Development",
    location: "Cambrian College, Sudbury, ON, Canada",
    description:
      "I pursued higher study and graduated with Honours in Software Development. Relevant courses include Advanced Web Development, Cloud Computing, Software Development Capstone",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 – Oct 2022",
  },
  {
    title: "Diploma in Software Engineering Technician",
    location: "Centennial College, Toronto, ON, Canada",
    description:
      "I graduated with another Honours Diploma in Software Engineering. I'm now open to full-time opportunities as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 – Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "myKärcher Business",
    description:
      "I worked as a full-stack developer on this B2B E-commerce project for 1.5 years. Business customers can bulk order Kaercher equipments on this site.",
    projectUrl: "https://business.kaercher.com",
    demoUrl: "https://youtu.be/G6340Czjc-4",
    tags: ["React", "Ant Design", "AWS S3", "GitLab CI/CD", "i18next Localization"],
    imageUrl: myKarcherBusiness,
  },
  {
    title: "Smart Sensing Data Analysis",
    description:
      "A web displaying real-time factory data via charts and graphs. I was a front-end developer for 2 year.",
    projectUrl: null,
    demoUrl: "https://youtu.be/BbgtB7zygGA",
    tags: ["React", "Styled-Components", "Redux", "Chart.js", "SQL Server"],
    imageUrl: smartSensingDataAnalysis,
  },
  {
    title: "Express Portfolio",
    description:
      "My old portfolio site.",
    projectUrl: "https://minhtrile-express-portfolio.onrender.com/",
    demoUrl: null,
    tags: ["Node", "Express.js", "EJS", "MongoDB"],
    imageUrl: myExpressPortfolio,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "HTML",
  "CSS",
  "XML",
  "JavaScript",
  "TypeScript",
  "Automation Test",
  "i18next Localization",
  "Redux",
  "REST API",
  "OOP",
  "Java",
  "Python",
  "Git",
  "Ant Design",
  "Tailwind",
  "Framer Motion",
  "MySQL",
  "Oracle PL/SQL",
  "MongoDB",
  "AWS DynamoDB",
  "AWS S3",
  "Agile Method",
  "Jira",
  "Trello",
  "Confluence",
] as const;
