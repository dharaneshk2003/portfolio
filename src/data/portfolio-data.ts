export const portfolioData = {
  name: "Dharanesh",
  fullName: "Kanchustambham Dharanesh",
  roles: ["Full Stack Web Developer", "Mobile App Developer", "SAP Technical Consultant"],
  tagline: "Building elegant interfaces & solving real-world problems with code.",
  about:
    "I'm a passionate Full-Stack Developer who thrives on turning complex problems into clean, intuitive digital experiences. With expertise spanning React, Node.js, and SAP-ABAP, I bridge the gap between modern web technologies and enterprise solutions. I believe great software isn't just functional — it's crafted with care, precision, and a deep understanding of the people who use it.",
  email: "dharaneshk2003@gmail.com",
  github: "https://github.com/dharaneshk2003/",
  linkedin: "https://www.linkedin.com/in/kanchustambham-dharanesh/",
  resumeUrl: "https://portifolio-zeta-umber-68.vercel.app/assets/resume-eJRl5MTU.pdf",

  skills: {
    frontend: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "React Native", level: 82 },
      { name: "Next.js", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 85 },
    ],
    mobile: [
      { name: "React Native", level: 70 },
      { name: "Expo", level: 65 },
    ],
    sapAbap: [
      { name: "SAP ABAP", level: 75 },
      { name: "ALV Reports", level: 70 },
    ],
    languages: [
      { name: "Python", level: 75 },
      { name: "Java", level: 75 },
      {name:"SQL",level:80},
    ],
    tools: [
      { name: "GitHub & GitHub Desktop", level: 83 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      {name:"Andriod Studio",level:75},
    ],
  },

  experience: [
    {
      role: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions",
      period: "July 2025 — Present",
      description:
        "Developed custom ABAP reports, module pool programs, and SAP applications. Worked on ABAP projects and optimized ALV report performance for enterprise clients.",
      highlights: [
        "Built custom ALV reports reducing data retrieval time by 40%",
        "Developed module pool programs with user-friendly interfaces",
      ],
    },
    {
      role: "Full Stack Web Developer / Mobile App Developer",
      company: "Personal Projects",
      period: "2022 — Present",
      description:
        "Built and deployed multiple full-stack websites as well as mobile applications using the MERN stack and ReactNative, focusing on clean architecture, responsive design, and optimal user experience.",
      highlights: [
        "Delivered 5+ production-ready web applications",
        "Implemented real-time features using API's and databases",
        "Managed end-to-end development lifecycle",
      ],
    },
  ],

  projects: {
    sap: [
      {
        title: "Student Records Maintenance System",
        tech: ["SAP ABAP","Module Pool Program with Table Control"],
        problem:
          "Maintaining Student Records tracking led to discrepancies and delayed reporting across multiple warehouse locations.",
        solution:
          " Implemented Table Maintenance Generator and custom transaction code for table maintenance and module pool program with table control enabling Create, Change, and Display functionality",
        outcome:
          "Delivered user-friendly screens with appropriate flow logic and PAI/PBO modules",
      },
    ],
    web: [
      {
        title: "YelpCamp",
        tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
        problem:
          "Camping enthusiasts lacked a centralized platform to share and discover campgrounds with honest reviews.",
        solution:
          "Built a community-driven platform with user authentication, campground listings, reviews, ratings, and image uploads.",
        outcome:
          "Created a fully functional community platform with 100+ campground listings.",
        github: "https://github.com/DharaneshKanchustambham/YelpCamp-Project",
        live: "https://yelpcamp-al0z.onrender.com/",
      },
      {
        title: "Ticketer",
        tech: ["Next.js", "TypeScript", "Convex Database"],
        problem:
          "Online ticket platforms struggled with high-traffic situations, leading to failed transactions.",
        solution:
          "Built a SaaS ticketing platform with a queue-based reservation system ensuring fair, smooth ticket purchasing.",
        outcome:
          "Zero failed transactions during peak traffic with queue management.",
        github: "https://github.com/dharaneshk2003/ticketer",
        live: "https://ticketer-theta.vercel.app/",
      },
    ],
    mobile: [
      {
        title: "Business Directory App",
        tech: ["React Native", "Expo", "Firebase"],
        problem:
          "Users struggled to find and explore local businesses in their area with a mobile-friendly experience.",
        solution:
          "Developed a mobile app with search, categorization, detailed listings, and map integration for business discovery.",
        outcome:
          "Simplified local business discovery with intuitive mobile UX.",
        github: "https://github.com/dharaneshk2003/business-directory",
        live: "https://drive.google.com/file/d/1mgquMsPnPhCxY244ii_YYfXW-qEAySFo/view?pli=1",
      },
    ],
  },
};
