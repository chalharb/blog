import { TimelineEntry } from "@/app/_components/timeline";

export const JOB_HISTORY: TimelineEntry[] = [
  {
    jobTitle: "Sitecore Architect",
    company: {
      name: "HCA Healthcare",
      url: "https://hcahealthcare.com",
    },
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Vite.js",
      ".NET",
      "Sitecore",
    ],
    datesActive: {
      isCurrent: true,
      startDate: new Date("2024-05-01"),
      endDate: new Date(),
    },
    description: `I'm currently shaping the overall Sitecore roadmap and leading an effort to completely modernize the Sitecore platform using the latest technologies.`,
  },
  {
    jobTitle: "Consulting Application Engineer",
    jobSubTitle: "(Technical Lead)",
    company: {
      name: "HCA Healthcare",
      url: "https://hcahealthcare.com",
    },
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React.js",
      ".NET",
      "Sitecore",
    ],
    datesActive: {
      isCurrent: false,
      startDate: new Date("2021-07-01"),
      endDate: new Date("2024-05-01"),
    },
    description: `I collaborated with stakeholders to shape product direction, led the Engineering Community to define standards, and managed unit testing efforts. I oversaw GitHub Enterprise configuration, conducted code reviews, mentored junior engineers, and contributed to hiring. I refined requirements, developed CI/CD pipelines, created technical documentation, and developed a Sitecore application using React, .NET, Azure DevOps, and GitHub Actions.`,
  },
  {
    jobTitle: "Senior Application Engineer",
    company: {
      name: "HCA Healthcare",
      url: "https://hcahealthcare.com",
    },
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React.js",
      "Java",
      ".NET",
      "Sitecore",
      "DotCMS",
    ],
    datesActive: {
      isCurrent: false,
      startDate: new Date("2019-11-01"),
      endDate: new Date("2021-07-01"),
    },
    description: `Developed a Coronavirus Assessment Tool with Microsoft Health Bot, managed Ataccama applications for data management, and streamlined development with Gulp.js and Webpack.js. I implemented CI/CD with Azure DevOps, conducted code reviews, mentored team members, and created documentation for DotCMS.`,
  },
  {
    jobTitle: "Front End Application Engineer II",
    company: {
      name: "HCA Healthcare",
      url: "https://hcahealthcare.com",
    },
    techStack: ["HTML", "CSS", "Javascript", "DotCMS", "Vue.js"],
    datesActive: {
      isCurrent: false,
      startDate: new Date("2016-12-01"),
      endDate: new Date("2019-11-01"),
    },
    description: `Led GitHub Enterprise migrations, developed and maintained core website functionality, implemented responsive design, and collaborated with teams for front-end integration. I automated testing, optimized performance, enhanced security, created Python automations, and ensured web accessibility compliance.`,
  },
  {
    jobTitle: "UX/UI Engineer",
    company: {
      name: "HCA Healthcare",
      url: "https://hcahealthcare.com",
    },
    techStack: ["HTML", "CSS", "Javascript", "Vue.js"],
    datesActive: {
      isCurrent: false,
      startDate: new Date("2016-09-01"),
      endDate: new Date("2016-12-01"),
    },
    description: `Collaborated with stakeholders to create design prototypes, translated mockups into functional prototypes using HTML, CSS, JavaScript, and Jekyll, conducted user tests to ensure usability, and audited websites for ADA compliance.`,
  },
  {
    jobTitle: "Full Stack Engineer",
    company: {
      name: "Younger Associates",
      url: "https://youngerfirm.com",
    },
    techStack: ["PHP", "Javascript", "CSS", "HTML", "Vue.js", "Laravel"],
    datesActive: {
      isCurrent: false,
      startDate: new Date("2015-04-01"),
      endDate: new Date("2016-09-01"),
    },
    description: `Collaborated with clients to create over 80 bespoke websites and applications, focusing on SEO to improve visibility and user experience. I developed pixel-perfect solutions with designers and managed networking and infrastructure for over 200 websites, ensuring reliable performance and security.`,
  },
];
