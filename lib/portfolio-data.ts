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

export type AcademicCourse = {
  code: string
  name: string
  grade?: number
}

export type AcademicTermStatus = "completed" | "current"

export type AcademicTerm = {
  id: string
  term: string
  season: string
  program: string
  status: AcademicTermStatus
  average?: number
  standing?: string
  notes?: string[]
  courses: AcademicCourse[]
}

export type TimelineEventType = "education" | "academic-term" | "work" | "activity"

export type TimelineEventLane = "main" | "parallel"

export type TimelineEvent = {
  id: string
  type: TimelineEventType
  lane: TimelineEventLane
  sortOrder: number
  chapter: string
  title: string
  subtitle: string
  dateLabel: string
  description: string
  location?: string
  evaluation?: string
  relatedTermId?: string
}

export type JourneyPreviewYear = {
  year: string
  entries: string[]
}

export type JourneyPhoto = {
  src: string
  alt: string
  caption: string
}

export type PortfolioData = {
  profile: {
    name: string
    headline: string
    subheadline: string
    homeSummary: string
    aboutParagraphs: string[]
    links: PortfolioLink[]
  }
  seo: {
    defaultTitle: string
    defaultDescription: string
    pages: {
      about: {
        title: string
        description: string
      }
      journey: {
        title: string
        description: string
      }
      projects: {
        title: string
        description: string
      }
      resume: {
        title: string
        description: string
      }
    }
  }
  documents: {
    resume: {
      label: string
      href: string
    }
  }
  education: {
    school: string
    degree: string
    minor: string
    expectedGraduation: string
    location: string
    gpa: string
    coursework: string[]
  }
  journey: {
    path: string
    title: string
    introduction: string
    photo: JourneyPhoto
    previewYears: JourneyPreviewYear[]
  }
  academicTerms: AcademicTerm[]
  timelineEvents: TimelineEvent[]
  skills: SkillGroup[]
  experiences: Experience[]
  projects: Project[]
}

export const PUBLIC_RESUME_URL = "/Parsa-Ahmadi-Resume.pdf"

export const portfolioData: PortfolioData = {
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
    ],
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
      journey: {
        title: "Journey | Parsa Ahmadi",
        description:
          "Follow Parsa Ahmadi's academic and professional chronology across Waterloo terms, co-ops, parallel engineering work, and public grade summaries.",
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
  journey: {
    path: "/journey",
    title: "Journey",
    introduction:
      "A public field record of school, Waterloo terms, co-ops, and the parallel engineering work that ran alongside them.",
    photo: {
      src: "/waterloo-journey.jpg",
      alt: "Parsa with friends and classmates at the University of Waterloo.",
      caption: "Waterloo / classmates / favorite photo / 2026",
    },
    previewYears: [
      { year: "2024", entries: ["Waterloo / 1A"] },
      { year: "2025", entries: ["Co-op 1 / Linamar", "1B + Neurosnap", "Co-op 2 / BTNX", "WARG"] },
      { year: "2026", entries: ["2A / Waterloo", "Co-op 3 / SPS Commerce", "2B / current term"] },
    ],
  },
  academicTerms: [
    {
      id: "uw-1a",
      term: "1A",
      season: "Fall 2024",
      program: "Mechatronics Engineering",
      status: "completed",
      average: 94.64,
      standing: "Excellent Standing",
      notes: ["GENE 119 is present but does not show a numeric grade."],
      courses: [
        { code: "CHE 102", name: "Chemistry for Engineers", grade: 90 },
        { code: "MTE 121", name: "Digital Computation", grade: 91 },
        { code: "MTE 100", name: "Mechatronics Engineering", grade: 95 },
        { code: "MATH 116", name: "Calculus 1 (Eng)", grade: 100 },
        { code: "MATH 115", name: "Linear Algebra (Eng)", grade: 97 },
      ],
    },
    {
      id: "uw-1b",
      term: "1B",
      season: "Spring 2025",
      program: "Mechatronics Engineering",
      status: "completed",
      average: 90.91,
      standing: "Excellent Standing",
      notes: ["MTE 100B and GENE 120 are present but do not show numeric grades."],
      courses: [
        { code: "MATH 118", name: "Calculus 2 (Eng)", grade: 89 },
        { code: "MTE 111", name: "Material Structure & Properties", grade: 92 },
        { code: "MTE 140", name: "Algorithms & Data Structures", grade: 93 },
        { code: "MTE 120", name: "Circuits", grade: 88 },
        { code: "MTE 119", name: "Statics", grade: 94 },
      ],
    },
    {
      id: "uw-2a",
      term: "2A",
      season: "Winter 2026",
      program: "Mechatronics Engineering",
      status: "completed",
      average: 89.83,
      standing: "Excellent Standing",
      notes: ["MTE 200A Seminar is present without a numeric grade."],
      courses: [
        {
          code: "MSE 442",
          name: "Impact of Information Systems on Organizations & Society",
          grade: 85,
        },
        { code: "MTE 182", name: "Physics 2: Dynamics", grade: 90 },
        {
          code: "MTE 201",
          name: "Experimental Measurement & Statistical Analysis",
          grade: 96,
        },
        { code: "MTE 202", name: "Ordinary Differential Equations", grade: 81 },
        { code: "MTE 219", name: "Mechanics of Deformable Solids", grade: 99 },
        { code: "MTE 262", name: "Introduction to Digital Logic", grade: 88 },
      ],
    },
    {
      id: "uw-2b",
      term: "2B",
      season: "Fall 2026",
      program: "Mechatronics Engineering",
      status: "current",
      notes: ["Current or upcoming term. There are no grades yet."],
      courses: [
        { code: "MTE 200B", name: "Seminar" },
        { code: "MTE 203", name: "Advanced Calculus" },
        { code: "MTE 204", name: "Numerical Methods" },
        { code: "MTE 220", name: "Sensors & Instrumentation" },
        { code: "MTE 241", name: "Computer Structures & Real-Time Systems" },
        { code: "MTE 252", name: "Linear Systems & Signals" },
      ],
    },
  ],
  timelineEvents: [
    {
      id: "steelesview",
      type: "education",
      lane: "main",
      sortOrder: 1,
      chapter: "Foundation",
      title: "Steelesview",
      subtitle: "Elementary school",
      dateLabel: "Early education",
      description: "At the time I probably could not wait to move to the next step. Looking back, elementary school was a pretty good setup.",
    },
    {
      id: "zion",
      type: "education",
      lane: "main",
      sortOrder: 2,
      chapter: "Foundation",
      title: "Zion",
      subtitle: "Middle school",
      dateLabel: "Early education",
      description: "Back when getting to high school felt like the main objective. In retrospect, middle school was a pretty decent deal.",
    },
    {
      id: "ay-jackson",
      type: "education",
      lane: "main",
      sortOrder: 3,
      chapter: "Foundation",
      title: "A.Y. Jackson",
      subtitle: "High school",
      dateLabel: "Pre-Waterloo",
      description: "By then the only plan was getting to Waterloo as fast as possible. Looking back, high school was actually a good chapter too.",
    },
    {
      id: "waterloo-1a",
      type: "academic-term",
      lane: "main",
      sortOrder: 4,
      chapter: "2024",
      title: "1A Mechatronics Engineering",
      subtitle: "University of Waterloo",
      dateLabel: "Fall 2024",
      description: "First Waterloo term with a 94.64 average and Excellent Standing.",
      location: "Waterloo, ON",
      relatedTermId: "uw-1a",
    },
    {
      id: "linamar",
      type: "work",
      lane: "main",
      sortOrder: 5,
      chapter: "2025",
      title: "Co-op 1 — Linamar",
      subtitle: "Mechanical Engineer Intern",
      dateLabel: "Jan – Apr 2025",
      description: "Manufacturing engineering, FMEA transition work, and production-improvement analysis.",
      location: "Guelph, ON",
      evaluation: "Excellent",
    },
    {
      id: "waterloo-1b",
      type: "academic-term",
      lane: "main",
      sortOrder: 6,
      chapter: "2025",
      title: "1B Mechatronics Engineering",
      subtitle: "University of Waterloo",
      dateLabel: "Spring 2025",
      description: "Second Waterloo term with a 90.91 average and Excellent Standing.",
      location: "Waterloo, ON",
      relatedTermId: "uw-1b",
    },
    {
      id: "neurosnap",
      type: "activity",
      lane: "parallel",
      sortOrder: 7,
      chapter: "2025",
      title: "Neurosnap",
      subtitle: "Software Engineering Intern",
      dateLabel: "May – Aug 2025",
      description: "Parallel software engineering work in AI-driven research tooling during the 2025 period.",
      location: "Toronto, ON",
      relatedTermId: "uw-1b",
    },
    {
      id: "warg",
      type: "activity",
      lane: "parallel",
      sortOrder: 8,
      chapter: "2025",
      title: "WARG",
      subtitle: "Autonomy Team Member",
      dateLabel: "May – Dec 2025",
      description: "Computer vision and telemetry work for aerial robotics running alongside academic and co-op chapters.",
      location: "Waterloo, ON",
    },
    {
      id: "btnx",
      type: "work",
      lane: "main",
      sortOrder: 9,
      chapter: "2025",
      title: "Co-op 2 — BTNX",
      subtitle: "Software Engineering Intern",
      dateLabel: "Sep – Dec 2025",
      description: "Full-stack ERP development, backend APIs, and AI-assisted tooling.",
      location: "Toronto, ON",
      evaluation: "Outstanding",
    },
    {
      id: "waterloo-2a",
      type: "academic-term",
      lane: "main",
      sortOrder: 10,
      chapter: "2026",
      title: "2A Mechatronics Engineering",
      subtitle: "University of Waterloo",
      dateLabel: "Winter 2026",
      description: "Third completed Waterloo term with an 89.83 average and Excellent Standing.",
      location: "Waterloo, ON",
      relatedTermId: "uw-2a",
    },
    {
      id: "sps-commerce",
      type: "work",
      lane: "main",
      sortOrder: 11,
      chapter: "2026",
      title: "Co-op 3 — SPS Commerce",
      subtitle: "Software Engineer Co-op — Data Pipeline",
      dateLabel: "May – Aug 2026",
      description: "Cloud data platform tooling, CI/CD automation, and production pipeline engineering.",
      location: "Toronto, ON",
      evaluation: "Outstanding",
    },
    {
      id: "waterloo-2b",
      type: "academic-term",
      lane: "main",
      sortOrder: 12,
      chapter: "2026",
      title: "2B Mechatronics Engineering",
      subtitle: "University of Waterloo",
      dateLabel: "Fall 2026",
      description: "Current or upcoming term. Courses are set, but there are no grades yet.",
      location: "Waterloo, ON",
      relatedTermId: "uw-2b",
    },
  ],
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
  ],
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
      technologies: [
        "React",
        "TypeScript",
        ".NET",
        "ASP.NET",
        "C#",
        "SQL Server",
        "Redis",
        "Blazor",
        "Python",
        "PyTorch",
        "XGBoost",
        "Entity Framework",
      ],
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
  ],
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
        "Built calibrated movement and control logic for consistent move placement across the 3 x 3 grid.",
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
  ],
}

function uniqueItems(items: readonly string[]) {
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

export function getAcademicTerms() {
  return portfolioData.academicTerms
}

export function getTimelineEvents() {
  return [...portfolioData.timelineEvents].sort((left, right) => left.sortOrder - right.sortOrder)
}

export function getJourneyPreviewYears() {
  return portfolioData.journey.previewYears
}

export function getJourneyPath() {
  return portfolioData.journey.path
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

  const academicTermLines = portfolioData.academicTerms
    .map((term) => {
      const courseLines = term.courses
        .map((course) => `${course.code}${typeof course.grade === "number" ? ` ${course.grade}` : ""}`)
        .join(", ")
      const summaryParts = [
        `${term.term} (${term.season})`,
        term.average ? `Term average ${term.average}.` : "No grades yet.",
        term.standing ? `Standing: ${term.standing}.` : "",
        courseLines ? `Courses: ${courseLines}.` : "",
        term.notes?.length ? `Notes: ${term.notes.join(" ")}` : "",
      ].filter(Boolean)

      return `- ${summaryParts.join(" ")}`
    })
    .join("\n")

  const timelineLines = getTimelineEvents()
    .map(
      (event) =>
        `- ${event.dateLabel}: ${event.title} (${event.subtitle}). ${event.description}${event.evaluation ? ` Evaluation: ${event.evaluation}.` : ""}`,
    )
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

Academic terms:
${academicTermLines}

Journey chronology:
${timelineLines}

Skills:
${skillLines}

Experience:
${experienceLines}

Projects:
${projectLines}

Answer in short, polished paragraphs. Do not use bullet points, numbered lists, or markdown.
`.trim()
}
