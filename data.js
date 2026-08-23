/*
  ================================================================
  SITE DATA — this is the ONLY file you should ever need to touch
  by hand. Everything on the page (text, links, skills, projects,
  experience, LeetCode username) is generated from this object.
  ================================================================
*/
window.SITE_DATA = {
  meta: {
    siteTitle: "Shubham Kumar Sahu | Portfolio",
    logo: "./assets/logo.gif"
  },

  profile: {
    firstName: "Shubham",
    lastName: "Kumar Sahu",
    badge: "M.Tech DSAI · GATE Qualified",
    role: "AI & Full-Stack Engineer",
    tagline: "Architecting intelligent systems, data-driven pipelines, and scalable full-stack applications with a strong foundation in core algorithms.",
    heroImage: "./assets/IMG20250407172156-Photoroom.png",
    resumeFile: "resume.pdf",
    availability: "Available for hire",
    github: "https://github.com/Shubhamsahu82299",
    linkedin: "https://www.linkedin.com/in/shubham-kumar-sahu-204167262",
    email: "shubhamsahu82299@gmail.com",
    phone: "+91 8668464275",
    location: "Naya Raipur, Chhattisgarh"
  },

  publications: [
    {
      title: "A Review Paper on Fire Fighter Robot",
      journal: "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
      details: "Volume 13, Issue VI, June 2025",
      paperId: "IJRASET72561",
      doi: "10.22214/ijraset.2025.72561",
      paperLink: "https://www.ijraset.com/best-journal/a-research-paper-on-fire-fighter-robot",
      certLink: "https://www.ijraset.com/print-certificate/a-research-paper-on-fire-fighter-robot"
    }
  ],

  fellowship: {
    active: true,
    status: "Currently Pursuing",
    title: "CMIT Fellowship",
    institute: "IIIT Naya Raipur",
    icon: "fa-solid fa-graduation-cap",
    description: "Selected for the CMIT Fellowship at IIIT Naya Raipur, working on applied engineering and research alongside the academic community there."
  },

  terminal: {
    lines: [
      { cmd: "whoami", out: "Shubham Kumar Sahu — AI & Full-Stack Engineer" },
      { cmd: "cat status.txt", out: "M.Tech DSAI @ IIIT-NR · GATE Qualified · Open to work" },
      { cmd: "cat focus.txt", out: "Applied AI · Machine Learning · System Design · Scalable Web Systems" }
    ]
  },

  mission: {
    quote: "Focused on architecting {b:intelligent & scalable systems} where modern AI models meet robust {i:full-stack engineering}. Driven by turning complex algorithms and data into seamless, {u:high-performance} production solutions.",
    coreTech: "Python · PyTorch · Full-Stack · MLOps",
    engineering: "Applied AI & System Architecture",
    achievementLabel: "Academic Milestone",
    achievement: "M.Tech DSAI · GATE '26"
  },

  skills: [
    {
      icon: "fa-solid fa-brain",
      title: "AI & Data Science",
      tags: ["Python", "Machine Learning", "Deep Learning", "Pandas", "Scikit-Learn", "PyTorch"]
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "Full-Stack Web Dev",
      tags: ["React.js", "Node.js", "Express.js", "PHP", "Tailwind CSS", "JavaScript"]
    },
    {
      icon: "fa-solid fa-database",
      title: "Databases & Cloud",
      tags: ["MongoDB", "MySQL", "Supabase", "REST APIs"]
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Core & Tools",
      tags: ["DSA", "C/C++", "Java", "Git & GitHub", "Vercel", "Linux"]
    }
  ],

  experience: [
    {
      icon: "fa-solid fa-brain",
      role: "Machine Learning Intern",
      company: "1stop.ai",
      dateRange: "Aug 2024 – Sep 2024",
      certFile: "./Shubham_Aug_2024_internship_53992.pdf",
      bullets: [
        "Developed a Diabetes Prediction Model using ML techniques to analyze medical datasets with high accuracy.",
        "Focused on end-to-end Machine Learning pipelines, including data preprocessing and model fine-tuning."
      ]
    },
    {
      icon: "fa-solid fa-code",
      role: "Web Development Intern",
      company: "Acmegrade",
      dateRange: "Aug 2023 – Oct 2023",
      certFile: "./Shubham_Kumar_Sahu_Internship_Completion.pdf",
      bullets: [
        "Architected a functional e-commerce web application utilizing PHP and MySQL for robust backend performance.",
        "Designed and implemented high-performance, responsive web interfaces using HTML5, CSS3, and JavaScript."
      ]
    }
  ],

  projects: [
    {
      title: "Diabetes Prediction",
      tags: ["Python", "Machine Learning", "React.js", "Tailwind"],
      desc: "Machine Learning powered web system built to predict diabetes vulnerability using analytical Python models and an interactive web interface.",
      github: "https://github.com/Shubhamsahu82299/diabetes-prediction-frontend",
      live: "https://diabetes-prediction-frontend-roan.vercel.app/"
    },
    {
      title: "MedEcosystem",
      tags: ["PHP", "MySQL", "JavaScript", "CSS"],
      desc: "A comprehensive PHP full-stack medical ecosystem designed for healthcare management, data handling, and clean user dashboards.",
      github: "https://github.com/Shubhamsahu82299/MedEcosystem",
      live: "https://med-ecosystem.vercel.app/"
    },
    {
      title: "Apna Bazaar",
      tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      desc: "Full-featured e-commerce platform built on a robust PHP backend, handling dynamic product listings, user sessions, and secure operations.",
      github: "https://github.com/Shubhamsahu82299/ApnaBazaar",
      live: "https://apna-bazaar-lake.vercel.app/"
    },
    {
      title: "Weather App",
      tags: ["React.js", "REST API", "Tailwind"],
      desc: "Real-time weather dashboard using OpenWeather API. Features dynamic backgrounds based on climate conditions.",
      github: "https://github.com/Shubhamsahu82299/weather-app",
      live: "https://shubhamsahu82299.github.io/weather-app/"
    },
    {
      title: "Easy Learning",
      tags: ["React.js", "Framer Motion", "Tailwind"],
      desc: "Educational frontend platform with smooth Framer Motion transitions and course management UI.",
      github: "https://github.com/Shubhamsahu82299/easy-learning-frontend",
      live: "https://shubhamsahu82299.github.io/easy-learning-frontend/"
    },
    {
      title: "Real-time Chat",
      tags: ["React.js", "MongoDB", "Socket.io"],
      desc: "Messaging application focusing on instant UI updates and responsive chat layouts.",
      github: "https://github.com/Shubhamsahu82299/chat-app",
      live: "https://chat-app-two-psi-37.vercel.app/"
    }
  ],

  experiments: [
    { title: "CRUD-REACT", subtitle: "React/State", link: "https://github.com/Shubhamsahu82299/CRUD-REACT" },
    { title: "Password Generator", subtitle: "JS Logic", link: "https://shubhamsahu82299.github.io/password-generator/" },
    { title: "TodoList React", subtitle: "React Hooks", link: "https://shubhamsahu82299.github.io/todolist-react/" }
  ],

  leetcode: {
    username: "shubhamsahu82299"
  }
};