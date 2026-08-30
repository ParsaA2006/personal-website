export type PortfolioLink = {
  label: string
  href: string
  display?: string
  external?: boolean
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type ExperienceVisibility = {
  about: boolean
  resume: boolean
  askParsa: boolean
}

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
  technologies: string[]
  visibility: ExperienceVisibility
}

export type Project = {
  slug: string
  title: string
  period: string
  shortDescription: string
  image: string
  technologies: string[]
  repositoryUrl?: string
  featured: boolean
  showOnHome: boolean
  showOnProjectsPage: boolean
  showOnAbout: boolean
  showOnResume: boolean
  resumeHighlights: string[]
}

export const PUBLIC_RESUME_URL = "/Parsa-Ahmadi-Resume.pdf"

export const portfolioData = {
  profile: {
    name: "Parsa Ahmadi",
    headline: "Mechatronics Engineering Student at the University of Waterloo",
    subheadline: "Minor in Artificial Intelligence",
    homeSummary:
      "Most recently at SPS Commerce, with previous software engineering experience at BTNX and Neurosnap. Passionate about building reliable software, data platforms, and engineering systems that solve real-world problems.",
    aboutParagraphs: [
      "I'm Parsa Ahmadi, a Mechatronics Engineering student at the University of Waterloo pursuing a minor in Artificial Intelligence. My recent work spans software engineering, cloud data pipelines, and applied AI across internships, co-op roles, and technical projects.",
      "I enjoy building practical systems that connect product needs with dependable implementation, whether that means shipping TypeScript and .NET applications, automating data workflows, or working across machine learning and robotics projects.",
      "I'm especially interested in software engineering roles focused on backend systems, data infrastructure, developer platforms, and practical AI.",
    ],
    links: [
      { label: "Email", href: "mailto:p3ahmadi@uwaterloo.ca", display: "p3ahmadi@uwaterloo.ca" },
      { label: "LinkedIn", href: "https://linkedin.com/in/parsa-ahmadi2006", external: true },
      { label: "GitHub", href: "https://github.com/ParsaA2006", external: true },
      { label: "Personal Website", href: "/" },
    ] satisfies PortfolioLink[],
  },
  seo: {
    defaultTitle: "Parsa Ahmadi | Software Engineer & Mechatronics Student",
    defaultDescription:
      "Portfolio of Parsa Ahmadi, a University of Waterloo Mechatronics Engineering student focused on software engineering, data pipelines, and applied AI.",
    pages: {
      about: {
        title: "About | Parsa Ahmadi",
        description:
          "Learn about Parsa Ahmadi's background, education, technical skills, and software engineering experience.",
      },
      projects: {
        title: "Projects | Parsa Ahmadi",
        description:
          "Explore software, machine learning, and robotics projects by Parsa Ahmadi, including portfolio case studies and code links.",
      },
      resume: {
        title: "Resume | Parsa Ahmadi",
        description:
          "View Parsa Ahmadi's resume, technical skills, selected projects, and recent software engineering experience.",
      },
    },
  },
  documents: {
    resume: {
      label: "Resume PDF",
      href: PUBLIC_RESUME_URL,
    },
  },
  education: {
    school: "University of Waterloo",
    degree: "Bachelor of Applied Science in Mechatronics Engineering",
    minor: "Artificial Intelligence",
    expectedGraduation: "April 2029",
    location: "Waterloo, ON",
    gpa: "3.9 / 4.0",
    coursework: ["Data Structures and Algorithms", "Digital Logic"],
  },
  skills: [
    {
      label: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "C", "C++", "C#", "Java", "SQL", "HTML/CSS"],
    },
    {
      label: "Developer Tools",
      items: [
        "Azure",
        "Azure DevOps",
        "Git",
        "AWS",
        "Claude Code",
        "Docker",
        "Snowflake",
        "Databricks",
        "Kubernetes",
        "Postman",
        "PostgreSQL",
        "SQL Server",
        "MySQL",
        "Redis",
        "Jupyter Notebook",
        "Jira",
      ],
    },
    {
      label: "Frameworks/Libraries",
      items: [
        "React",
        "Next.js",
        "Angular",
        "Blazor",
        "ASP.NET",
        ".NET",
        "Entity Framework",
        "Node.js",
        "Express",
        "PyTorch",
        "TensorFlow",
        "scikit-learn",
        "XGBoost",
        "NumPy",
        "Pandas",
        "OpenCV",
        "ROS2",
        "PyQt",
      ],
    },
  ] satisfies SkillGroup[],
  experiences: [
    {
      id: "sps-commerce",
      company: "SPS Commerce",
      role: "Software Engineer Co-op — Data Pipeline",
      period: "May 2026 – August 2026",
      location: "Toronto, ON",
      summary:
        "Built data-platform tooling and cloud pipeline automation across TypeScript, .NET 8, Snowflake, AWS, Docker, Kubernetes, Databricks, and Azure DevOps.",
      highlights: [
        "Built a data-model-as-code CI/CD platform using TypeScript, Azure DevOps, Docker, and AWS to replace manual analytics deployment workflows.",
        "Built a .NET 8 data pipeline running in Kubernetes for automated FX-rate ingestion, S3 publishing, and Snowflake bulk loading.",
        "Worked on large-scale Snowflake data pipelines, dynamic tables, warehouse systems, and incremental processing.",
        "Optimized Snowflake workflows and downstream data movement to improve efficiency and reduce compute usage.",
        "Worked on customer-facing data-sharing capabilities using Snowflake Data Listings and Databricks Delta Sharing.",
      ],
      technologies: [
        "C#",
        ".NET 8",
        "TypeScript",
        "SQL",
        "Snowflake",
        "AWS",
        "Docker",
        "Kubernetes",
        "Azure DevOps",
        "Databricks",
      ],
      visibility: { about: true, resume: true, askParsa: true },
    },
    {
      id: "btnx",
      company: "BTNX",
      role: "Software Engineering Intern",
      period: "September 2025 – December 2025",
      location: "Toronto, ON",
      summary:
        "Built full-stack ERP software, backend APIs, and AI-assisted tooling across React, TypeScript, .NET, C#, SQL Server, Redis, Blazor, and Python.",
      highlights: [
        "Developed a full-stack ERP SaaS platform using React, TypeScript, and .NET, building 30+ end-to-end pages and designing the normalized SQL Server schema for 1,000+ active users.",
        "Reduced load times by 30% across key modules by optimizing LINQ queries in C#, implementing async validation, and improving SQL performance with indexes, stored procedures, and Redis caching.",
        "Engineered scalable RESTful APIs with ASP.NET and Entity Framework to handle 5,000+ daily requests and support integrations with Microsoft Graph and Amazon SP-API.",
        "Built an AI-powered conference tracking module with Blazor and Python, training OCR and NLP models with PyTorch to auto-populate attendee profiles with 96% accuracy.",
        "Developed Python scripts to train and deploy an XGBoost classification model for diagnostic strips, achieving 99% strip reader accuracy.",
      ],
      technologies: ["React", "TypeScript", ".NET", "ASP.NET", "C#", "SQL Server", "Redis", "Blazor", "Python", "PyTorch", "XGBoost", "Entity Framework"],
      visibility: { about: true, resume: true, askParsa: true },
    },
    {
      id: "neurosnap",
      company: "Neurosnap",
      role: "Software Engineering Intern",
      period: "May 2025 – August 2025",
      location: "Toronto, ON",
      summary:
        "Built backend services, database workflows, and ML pipeline integrations for AI-driven research tooling using Python, Flask, PostgreSQL, and Docker.",
      highlights: [
        "Built responsive research dashboards for AI-driven protein and enzyme analysis using TypeScript and React.",
        "Built backend services in Python using Flask, integrating ML pipelines for molecular docking and sequence analysis while reducing processing errors by more than 25%.",
        "Designed PostgreSQL schemas and indexed queries for protein structures, variant predictions, and experiment results, improving query performance by nearly 50%.",
        "Integrated RESTful APIs and containerized batch prediction pipelines with Docker, automating research workflows and saving laboratories $5,000+ annually.",
      ],
      technologies: ["TypeScript", "React", "Python", "Flask", "PostgreSQL", "Docker", "ML Pipelines"],
      visibility: { about: true, resume: true, askParsa: true },
    },
    {
      id: "warg",
      company: "Waterloo Aerial Robotics Group (WARG)",
      role: "Autonomy Team Member",
      period: "May 2025 – December 2025",
      location: "Waterloo, ON",
      summary:
        "Developed computer vision and telemetry systems for autonomous aerial robotics using OpenCV, TensorFlow, ROS2, Python, and C++.",
      highlights: [
        "Developed computer vision modules for landing pad detection and obstacle avoidance, increasing detection accuracy to 90% using OpenCV, TensorFlow, C++, and ROS2.",
        "Implemented real-time telemetry features in the IMACS 2.0 ground station, reducing communication latency from 150 ms to 90 ms using Python, PyQt, and ROS2.",
      ],
      technologies: ["C++", "Python", "OpenCV", "TensorFlow", "ROS2", "PyQt", "Computer Vision", "ML"],
      visibility: { about: true, resume: true, askParsa: true },
    },
    {
      id: "linamar",
      company: "Linamar Corporation",
      role: "Mechanical Engineer Intern",
      period: "January 2025 – April 2025",
      location: "Guelph, ON",
      summary:
        "Supported manufacturing engineering work across ECNs, FMEAs, production data analysis, SolidWorks design, and work-instruction improvements.",
      highlights: [
        "Reviewed and implemented engineering change notices, conducted capability tests, and updated manufacturing documentation to improve accuracy and efficiency.",
        "Led the transition from traditional AIAG-style FMEAs to the AIAG-VDA FMEA format for multiple customers to support updated industry standards.",
        "Collected and analyzed production data that helped automate a manual operation, contributing to annual cost savings of over $10,000.",
        "Designed gauges and fixtures in SolidWorks, reducing part costs by up to 40% compared to original purchase prices.",
        "Helped redesign machine work instructions with a structured troubleshooting guide, improving clarity and efficiency by 20%.",
      ],
      technologies: ["Manufacturing", "SolidWorks", "FMEA", "Process Improvement", "Data Analysis"],
      visibility: { about: true, resume: false, askParsa: true },
    },
  ] satisfies Experience[],
  projects: [
    {
      slug: "premier-league-predictor",
      title: "Premier League Predictor",
      period: "2025",
      shortDescription:
        "A full-stack machine learning application that predicts Premier League match outcomes using Python, FastAPI, React, TypeScript, and XGBoost.",
      image: "/prem.jpg",
      technologies: ["Python", "FastAPI", "React", "TypeScript", "Docker", "XGBoost", "scikit-learn"],
      repositoryUrl: "https://github.com/ParsaA2006/premier-league-predictor",
      featured: true,
      showOnHome: true,
      showOnProjectsPage: true,
      showOnAbout: true,
      showOnResume: true,
      resumeHighlights: [
        "Built a full-stack machine learning application to predict Premier League match outcomes using scraped data, engineered features, and XGBoost models.",
        "Implemented a FastAPI backend and React/TypeScript frontend with Dockerized workflows for consistent development and deployment.",
      ],
    },
    {
      slug: "tic-tac-tron",
      title: "Tic-Tac-Toe Solver Robot",
      period: "2024",
      shortDescription:
        "An autonomous LEGO EV3 robot that interprets the board state and plays Tic-Tac-Toe using RobotC, sensors, and calibrated motion control.",
      image: "/tic-tac-tron.jpg",
      technologies: ["C++", "RobotC", "Python", "Robotics", "Computer Vision"],
      repositoryUrl: "https://github.com/ParsaA2006/Tic-Tac-Tron",
      featured: true,
      showOnHome: true,
      showOnProjectsPage: true,
      showOnAbout: true,
      showOnResume: true,
      resumeHighlights: [
        "Designed and programmed an autonomous Tic-Tac-Toe robot that interprets the board state and executes moves using RobotC, sensors, and custom logic.",
        "Built calibrated movement and control logic for consistent move placement across the 3×3 grid.",
      ],
    },
    {
      slug: "waterloo-management-system",
      title: "Waterloo Management System",
      period: "2025",
      shortDescription:
        "A student management web application built with C#, .NET, and SQL, with authentication and role-based access control.",
      image: "/management-system.png",
      technologies: ["C#", ".NET", "SQL"],
      featured: false,
      showOnHome: false,
      showOnProjectsPage: true,
      showOnAbout: false,
      showOnResume: false,
      resumeHighlights: [
        "Designed and developed a Waterloo teacher and student database website.",
        "Built the backend with C# and .NET, implementing authentication, role-based access control, and SQL-backed data storage.",
      ],
    },
  ] satisfies Project[],
} as const

function uniqueItems(items: string[]) {
  return [...new Set(items)]
}

export function getHomeProjects() {
  return portfolioData.projects.filter((project) => project.showOnHome)
}

export function getProjectsForProjectsPage() {
  return portfolioData.projects.filter((project) => project.showOnProjectsPage)
}

export function getProjectsForAbout() {
  return portfolioData.projects.filter((project) => project.showOnAbout)
}

export function getProjectsForResume() {
  return portfolioData.projects.filter((project) => project.showOnResume)
}

export function getFeaturedProjects() {
  return portfolioData.projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string) {
  const project = portfolioData.projects.find((candidate) => candidate.slug === slug)

  if (!project) {
    throw new Error(`Unknown project slug: ${slug}`)
  }

  return project
}

export function getProjectHref(slug: string) {
  return `/projects/${slug}`
}

export function getExperiencesForAbout() {
  return portfolioData.experiences.filter((experience) => experience.visibility.about)
}

export function getExperiencesForResume() {
  return portfolioData.experiences.filter((experience) => experience.visibility.resume)
}

export function getPublicSkillItems() {
  return uniqueItems(portfolioData.skills.flatMap((group) => group.items))
}

export function getPublicResumeHref() {
  return portfolioData.documents.resume.href
}

export function getAskParsaContext() {
  const experienceLines = portfolioData.experiences
    .filter((experience) => experience.visibility.askParsa)
    .map((experience) => `- ${experience.company}: ${experience.role} (${experience.period}). ${experience.summary}`)
    .join("\n")

  const projectLines = portfolioData.projects
    .filter((project) => project.showOnProjectsPage)
    .map(
      (project) =>
        `- ${project.title} (${project.period}): ${project.shortDescription} Technologies: ${project.technologies.join(", ")}.`,
    )
    .join("\n")

  const skillLines = portfolioData.skills
    .map((group) => `- ${group.label}: ${group.items.join(", ")}.`)
    .join("\n")

  return `
You are Ask Parsa, the AI assistant on Parsa Ahmadi's personal website.

Use only the public portfolio facts below when answering questions about Parsa.
Do not mention or imply access to any transcript, application package, recommendation letter, removed file, or other private document.
Do not mention internal or confidential SPS Commerce details beyond the public-safe summary below.
If asked to share a document, only share the public resume at ${PUBLIC_RESUME_URL}.
If the website information does not clearly support an answer, say you do not have that detail rather than guessing.

Profile:
- ${portfolioData.profile.name} is a ${portfolioData.profile.headline} pursuing a ${portfolioData.profile.subheadline}.
- ${portfolioData.profile.homeSummary}

Education:
- ${portfolioData.education.school}
- ${portfolioData.education.degree}
- Minor: ${portfolioData.education.minor}
- Expected graduation: ${portfolioData.education.expectedGraduation}
- GPA: ${portfolioData.education.gpa}
- Selected coursework: ${portfolioData.education.coursework.join(", ")}

Skills:
${skillLines}

Experience:
${experienceLines}

Projects:
${projectLines}

Answer in short, polished paragraphs. Do not use bullet points, numbered lists, or markdown.
`.trim()
}
