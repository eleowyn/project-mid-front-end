import html5Icon from "/assets/icons/frontend/html5.svg";
import css3Icon from "/assets/icons/frontend/css3.svg";
import jsIcon from "/assets/icons/frontend/js.svg";
import reactIcon from "/assets/icons/frontend/react.svg";
import reduxIcon from "/assets/icons/frontend/redux.svg";
import bootstrapIcon from "/assets/icons/frontend/bootstrap.svg";
import materialUiIconad from "/assets/icons/frontend/material-ui.svg";
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
import adobeae from "/assets/icons/others/adobe-after-effects.svg";
import figmaIcon from "/assets/icons/others/figma.svg";

import awsProfessionalBadge from "/assets/images/aws-professional-badge.png";
import awsDeveloperBadge from "/assets/images/aws-developer-badge.png";
import firstplace from "/assets/images/1stplace-scientific-writing.jpg";

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
    { icon: adobeae, name: "AE" },
  ],
};

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Capcut Template Creator",
    company: "CAPCUT",
    description: `As a video editor using AE, I decided to try creating templates at capcut as a freelancing job. Designed and published over 30 templates. 21.1K views every month and more than 500 downloads`,
    technologies: [
      "AE",
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
    title: "Study Tracker - Dekstop App",
    description:
      "Developed a desktop-based application using C# and MySQL to tracks students daily, work or school life. Provided with features to edit profile which include username, user's name, email, and password. Dynamic Calendar tracker for track, delete and display events. To-list of task and any possibilites that important to be done, Score Tracker for student who wants to calculate and predict their score, Pomodoro with timer, Flashcards for Help with studying, Diary for save your experiences each day and litle memory games ",
    technologies: [
      "C#",
      "MySQL",
    ],
    githubLink: "https://github.com/eleowyn/Study101Project-Visual-Programming.git",
  },
  {
    title: "UNKLAB Shop",
    description:
      'Developed a simple e-commerce website for students or any person at UNKLAB to shop at UNKLAB shop, provided with merchandise, school supplies, etc.',
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/eleowyn/unklab-shop-final-frontend.git",
  },
  {
    title: "Lost and Found UNKLAB",
    description:
      "Created a simple Lost and Found website for student's and teacher or workers at UNKLAB to find their lost things and to helped other people find their important things",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/eleowyn/web-design-project.git",
  },
];

export const CERTIFICATIONS = [
  {
    title: "",
    issuer: "",
    date: "",
    link: "",
    badge: "",
  },
  {
    title: "First Place Scientific Writing",
    issuer: "Manado University",
    date: "Feb 2023",
    link: "",
    badge: firstplace,
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
