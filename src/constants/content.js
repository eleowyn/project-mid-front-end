import html5Icon from "/assets/icons/frontend/html5.svg";
import css3Icon from "/assets/icons/frontend/css3.svg";
import jsIcon from "/assets/icons/frontend/js.svg";
import reactIcon from "/assets/icons/frontend/react.svg";
import reduxIcon from "/assets/icons/frontend/redux.svg";
import bootstrapIcon from "/assets/icons/frontend/bootstrap.svg";
import materialUiIcon from "/assets/icons/frontend/material-ui.svg";
import tailwindCssIcon from "/assets/icons/frontend/tailwind-css.svg";

import pythonIcon from "/assets/icons/backend/python.svg";
import djangoIcon from "/assets/icons/backend/django.svg";
import nodejsIcon from "/assets/icons/backend/nodejs.svg";
import mysqlIcon from "/assets/icons/backend/mysql.svg";
import postgresqlIcon from "/assets/icons/backend/postgresql.svg";
import mongodbIcon from "/assets/icons/backend/mongodb.svg";
import CSharp from "/assets/icons/backend/c-sharp-c.svg";

import flutterIcon from "/assets/icons/mobile/flutter.svg";
import reactNativeIcon from "/assets/icons/mobile/react-native.svg";
import androidStudioIcon from "/assets/icons/mobile/android-studio.svg";
import xcodeIcon from "/assets/icons/mobile/xcode.svg";

import gitIcon from "/assets/icons/others/git.svg";
import githubIcon from "/assets/icons/others/github.svg";
import awsIcon from "/assets/icons/others/aws.svg";
import firebaseIcon from "/assets/icons/others/firebase.svg";
import dockerIcon from "/assets/icons/others/docker.svg";
import postmanIcon from "/assets/icons/others/postman.png";
import terraformIcon from "/assets/icons/others/terraform.svg";
import figmaIcon from "/assets/icons/others/figma.svg";

import awsProfessionalBadge from "/assets/images/aws-professional-badge.png";
import awsDeveloperBadge from "/assets/images/aws-developer-badge.png";
import awsSolutionBadge from "/assets/images/aws-solutions-badge.png";

export const ABOUT_CONTENT = `Motivated and Experienced as a UI/UX Designer. Interested in the field of technology, especially in the field of engineering, both in the scope of computers. informatics, and electronics. Training and developing in the fields of designing, mathematics and computer to bring contributions to the world.`;

export const TECHNOLOGIES = {
  Frontend: [
    { icon: html5Icon, name: "HTML5" },
    { icon: css3Icon, name: "CSS3" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: reactIcon, name: "React" },
    { icon: tailwindCssIcon, name: "Tailwind CSS" },
  ],
  Backend: [
    { icon: pythonIcon, name: "Python" },
    { icon: nodejsIcon, name: "NodeJS" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: CSharp, name: "C#" },
  ],
  Others: [
    { icon: gitIcon, name: "Git" },
    { icon: githubIcon, name: "GitHub" },
    { icon: firebaseIcon, name: "Firebase" },
    { icon: figmaIcon, name: "Figma" },
  ],
};

export const EXPERIENCES = [
  {
    year: "Jan 2022 - Present",
    role: "Software Engineer Level-2",
    company: "ConsultAdd Inc.",
    description: `As a Full Stack Developer, I designed and developed user interfaces for web applications using React and created RESTful APIs with serverless Node.js and Django. I utilized AWS for cloud integration and worked with offshore clients on their projects. Additionally, I contributed to multiple in-house products, encompassing both web and mobile applications.`,
    technologies: [
      "AWS",
      "Serverless",
      "Django",
      "DRF",
      "MERN",
      "NestJS",
      "Flutter",
      "Expo",
      "Firebase",
      "Prisma",
    ],
  },
];

export const EDUCATION = [
  {
    institution: "KLABAT University",
    university: "Klabat University",
    percentage: "4.0 GPA",
    year: "2023-now",
    degree: "Bachelor of Technology in Computer Science",
    location: "Airmadidi, North Minahasa",
    level: "college",
  },
  {
    institution: "GMIM",
    university: "SMA Kristen 1 Tomohon",
    percentage: "94.88",
    year: "2023",
    degree: "Senior High School (12<sup>th</sup>)",
    location: "Talete, Tomohon",
    level: "higher-secondary",
  },
  {
    institution: "Goverment School",
    university: "SMP Negeri 1 Tomohon",
    percentage: "90.7",
    year: "2020",
    degree: "Junior High School (9<sup>th</sup>)",
    location: "Talete, Tomohon",
    level: "high-school",
  },
];

export const PROJECTS = [
  {
    title: "STUDY TRACKER - WINDOWS FORM APP",
    description:
      "Developed a desktop-based application using C# and MySQL to tracks students daily, work or school life. Provided with features to edit profile which include username, user's name, email, and password. Dynamic Calendar tracker for track, delete and display events. To-list of task and any possibilites that important to be done, Score Tracker for student who wants to calculate and predict their score, Pomodoro with timer, Flashcards for Help with studying, Diary for save your experiences each day and litle memory games ",
    technologies: [
      "Dart",
      "Flutter",
      "Node",
      "React",
      "ExpressJS",
      "Mongodb",
      "Firebase",
    ],
    githubLink: "https://apkcombo.com/qpie/com.qpie.getyourtoken/",
  },
  {
    title: "Meal App",
    description:
      'Developed a meal app using Flutter featuring a beautiful and simple UI. Users can search for meals across various categories and apply filters such as "Only Vegetarian." The app allows users to mark dishes as favorites and provides detailed descriptions, including ingredients and cooking procedures.',
    technologies: ["Dart", "Flutter"],
    githubLink: "https://github.com/SoulCoder65/mealapp",
  },
  {
    title: "Twitter-Bot",
    description:
      "Created a Twitter bot using the Tweepy API and Tkinter. The bot can read tweets, write tweets, check followers and following, update profiles, search users, manage blocked users, and search trends.",
    technologies: ["Python", "Tweepy API", "Tkinter"],
    githubLink: "https://github.com/SoulCoder65/Twitter-Bot",
  },
  {
    title: "Cric Show",
    description:
      "Created a React JS cricket score web application that displays current match results, scores, player stats, and recent matches using the Cric API.",
    technologies: ["ReactJS", "Bootstrap", "Cric API"],
    githubLink: "https://github.com/SoulCoder65/CricShow",
  },
  {
    title: "Instagram Bot",
    description:
      "Created an Instagram bot using Tkinter and Selenium WebDriver. The bot can count the number of posts, followers, and following for any user or page, provide lists of followers and following, and like posts based on hashtags, pages, or specific users.",
    technologies: ["Python", "Selenium", "TKinter"],
    githubLink: "https://github.com/SoulCoder65/Instagram-Bot",
  },
  {
    title: "Bill Management System",
    description:
      "Developed a Bill Management System using Tkinter (Python) for shopkeepers to calculate item prices including GST and generate bills. The system also allows saving bills as text files and searching for them using bill numbers.",
    technologies: ["Python", "TKinter"],
    githubLink: "https://github.com/SoulCoder65/Bill-Management-System",
  },
  {
    title: "Github Search",
    description:
      "Created a GitHub stats website using the GitHub API to search for user information, including stats, followers, following, gists, profile details, programming languages used, repositories, and forked repos. Data is presented in charts and graph formats using React JS and React FusionCharts.",
    technologies: ["ReactJS"],
    githubLink: "https://github.com/SoulCoder65/githubsearch",
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services Training and Certification",
    date: "April 2024",
    link: "https://www.credly.com/badges/00c91b85-4948-4275-88c3-d143e0e888e7/public_url",
    badge: awsProfessionalBadge,
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services Training and Certification",
    date: "May 2023",
    link: "https://www.credly.com/badges/c356f476-c70b-4bd3-8af8-131497d7bb3a/public_url",
    badge: awsSolutionBadge,
  },
];

export const CONTACT = {
  phoneNo: "+628975574089",
  email: "elshera.dahlan@gmail.com",
  linkedin: "https://www.linkedin.com/in/elshera-dahlan-793a11280",
  github: "https://github.com/eleowyn",
  x: "https://x.com/eleowynz?t=6kZcMgdSfL181jZ2vtBEiw&s=09",
  instagram:
    "https://www.instagram.com/elshera.dahlann/profilecard/?igsh=NmI4M3Y5aDR5aXQ1",
};
