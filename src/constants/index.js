import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  duke,
  divami,
  carrent,
  jobit,
  tripguide,
  threejs,
  android,
  apple,
  angular,
  firebase,
  python,
  tensorflow,
  jupyter,
  kotlin,
  mysql,
  postgresql,
  java,
  ai,
  studentswap,
  hackerrank,
  telco
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "AI/ML Specialist",
    icon: ai,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  // {
  //   title: "X",
  //   icon: creator,
  // },
];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

const technologies = [
  {
    category: "Web Development",
    items: [
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "React JS", icon: reactjs },
      { name: "Angular", icon: angular },
      { name: "Redux Toolkit", icon: redux },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Node JS", icon: nodejs },
      { name: "MongoDB", icon: mongodb },
      { name: "Git", icon: git },
      { name: "figma", icon: figma }
    ],
  },
  {
    category: "Mobile Development",
    items: [
      { name: "Android (Java/Kotlin)", icon: android },
      { name: "iOS (Swift)", icon: apple },
      { name: "Kotlin", icon: kotlin },
      { name: "Firebase", icon: firebase },
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
    ],
  },
  {
    category: "AI/ML",
    items: [
      { name: "Python", icon: python },
      { name: "Tensorflow", icon: tensorflow },
      { name: "Jupytor Notebook", icon: jupyter },
      { name: "Java", icon: java },
    ],
  },
];

// const technologies = [
//   {
//     name: "HTML",
//     icon: html
//   },
//   {
//     name: "CSS",
//     icon: css
//   },
//   {
//     name: "JavaScript",
//     icon: javascript
//   },
//   {
//     name: "TypeScript",
//     icon: typescript
//   },
//   {
//     name: "React",
//     icon: reactjs
//   },
//   {
//     name: "Redux",
//     icon: redux
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind
//   },
//   {
//     name: "Node.js",
//     icon: nodejs
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb
//   },
//   {
//     name: "Git",
//     icon: git
//   },
//   {
//     name: "Figma",
//     icon: figma
//   },
//   {
//     name: "Python",
//     icon: redux
//   },
//   {
//     name: "Kotlin",
//     icon: redux
//   },
//   {
//     name: "Swift",
//     icon: redux
//   },
//   {
//     name: "Java",
//     icon: redux
//   },
//   {
//     name: "Android",
//     icon: redux
//   },
//   {
//     name: "iOS",
//     icon: redux
//   },
//   {
//     name: "Firebase",
//     icon: redux
//   },
//   {
//     name: "MySQL",
//     icon: redux
//   },
//   {
//     name: "Postman",
//     icon: redux
//   },
//   {
//     name: "JIRA",
//     icon: redux
//   },
//   {
//     name: "Angular",
//     icon: redux
//   },
//   {
//     name: "Agile",
//     icon: redux
//   },
//   {
//     name: "CI/CD",
//     icon: redux
//   },
// ];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Duke.ai",
    icon: duke,
    iconURL: 'https://duke.ai/',
    iconBg: "white",
    date: "June 2023 - January 2024",
    points: [
      "Optimized the image processing pipeline, boosting document accuracy by 30% and data handling efficiency.",
      "Implemented NLP techniques for data extraction, improving retrieval accuracy by 25%.",
      "Used Python & Pandas for data analysis, boosting operational efficiency by 20%.",
    ],
  },
  {
    title: "Sr. Software Engineer",
    company_name: "Divami",
    icon: divami,
    iconBg: "#383E56",
    iconURL: 'https://divami.com/',
    date: "July 2019 - June 2022",
    points: [
      "Engineered Android and iOS apps for a trucking company, integrating 10+ key features such as SDK management, subscription models, media uploads, and in-app purchases; increased revenue by 45%, reduced crash rates by 60%, and successfully managed app store launches.",
      "Developed a financial planning Android app using MVVM architecture, leveraging Jetpack components like LiveData and ViewModel to boost codebase efficiency and reusability by 35%, ensuring faster updates and greater scalability.",
      "Spearheaded a successful iOS development Bootcamp and Hackathon, training 15+ employees and producing 5 new app prototypes, enhancing team skills in Swift and iOS development.",
      "Managed a team of 3 in delivering a backend project with Spring Boot and React, designing an SQL database, and integrating multiple payment gateways, boosting financial performance by 20%.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Divami",
    icon: divami,
    iconBg: "#E6DEDD",
    iconURL: 'https://divami.com/',
    date: "October 2018 - June 2019",
    points: [
      "Contributed to front-end development for a Dubai-based payment gateway solutions provider, implementing multiple features such as enhancing platform security by approximately 32% by integrating reCaptcha.",
      "Performed troubleshooting to fix critical production bugs and improved the performance of a fitness-tracking Android application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "StudentSwap",
    description:
      "Designing and developing a user-friendly cross-platform mobile application that streamlines the exchange of second-hand goods within the university community.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text",
      },
      {
        name: "firebase",
        color: "violet-text",
      },
      {
        name: "figma",
        color: "red-text",
      },
    ],
    image: studentswap,
    source_code_link: "https://github.com/sankalpvk18/StudentSwap",
  },
  {
    name: "Hackerrank Problem Solutions",
    description:
      "A collection of solutions for Hackerrank coding challenges, showcasing my problem-solving skills and proficiency in programming concepts and algorithms. Includes solutions from basic to advanced levels, covering data structures, algorithms, and more.",
    tags: [
      {
        name: "java",
        color: "blue-text",
      },
      {
        name: "python",
        color: "violet-text",
      },
      {
        name: "dsa",
        color: "red-text",
      },
    ],
    image: hackerrank,
    source_code_link: "https://github.com/sankalpvk18/-hackerRankSolved-",
  },
  {
    name: "Telco Churn Model",
    description:
      "Built and optimized machine learning models to identify potential customer churn, achieving an ROC-AUC score of 0.85. Deployed the model with Flask for API access and generated reports.",
    tags: [
      {
        name: "python",
        color: "blue-text",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "red-text",
      },
    ],
    image: telco,
    source_code_link: "https://github.com/sankalpvk18/Telco-customer-churn/tree/main",
  },
];

export { services, technologies, experiences, testimonials, projects };
