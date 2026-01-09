import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, User } from "lucide-react"

export default function AboutPage() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "BTNX",
      period: "Sep 2025 – Dec 2025",
      description:
        "Built a full-stack ERP SaaS platform serving 1,000+ users, developing 30+ pages with React, TypeScript, and .NET. Optimized performance by 30% through database tuning and caching strategies. Created AI-powered features using PyTorch for OCR/NLP and XGBoost for diagnostic classification, achieving 96-99% accuracy.",
      skills: ["React", "TypeScript", ".NET", "ASP.NET", "C#", "SQL Server", "Redis", "Blazor", "Python", "PyTorch", "XGBoost", "Entity Framework"],
    },
    {
      title: "Software Engineering Intern",
      company: "Neurosnap",
      period: "May 2025 – Aug 2025",
      description:
        "Developed research dashboards and ML pipelines for protein analysis, improving render performance by 35% and reducing processing errors by 25%. Designed optimized PostgreSQL schemas and containerized prediction pipelines with Docker, automating workflows that saved research labs $20,000+ annually.",
      skills: ["TypeScript", "React", "Python", "Flask", "PostgreSQL", "Docker", "ML Pipelines"],
    },
    {
      title: "Autonomy Team Member",
      company: "Waterloo Aerial Robotics Group (WARG)",
      period: "May 2025 – Dec 2025",
      description:
        "Developed computer vision systems for autonomous drone navigation, achieving 90% detection accuracy using OpenCV and TensorFlow. Built real-time telemetry systems in ROS2, reducing communication latency by 40% through optimized asynchronous data handling.",
      skills: ["C++", "Python", "OpenCV", "TensorFlow", "ROS2", "PyQt", "Computer Vision", "ML"],
    },
  ]

  const projects = [
    {
      title: "Premier League Predictor | Python, FastAPI, React, TypeScript, Docker",
      period: "Nov 2025",
      description:
        "A full-stack ML application that predicts Premier League match outcomes using XGBoost and scikit-learn. Features automated data scraping, feature engineering, and containerized deployment with Docker and CI/CD pipelines, reducing setup time by 80%.",
      skills: ["Python", "FastAPI", "React", "TypeScript", "Docker", "XGBoost", "scikit-learn", "CI/CD"],
    },
    {
      title: "Tic-Tac-Toe Solver Robot | C++, RobotC",
      period: "Dec 2024",
      description:
        "An autonomous LEGO EV3 robot that plays Tic-Tac-Toe using color-sensor board detection and real-time game processing. Features calibrated multi-axis motor control for precise move placement across a 3×3 grid.",
      skills: ["C++", "RobotC", "Robotics", "Computer Vision"],
    },
  ]

  return (
    <div className="container py-12">
      <div className="space-y-12">
        {/* About Me Section */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <User className="h-6 w-6" />
            <h1 className="text-3xl font-bold">About Me</h1>
          </div>
          <div className="grid gap-8 md:grid-cols-1">
            <div className="space-y-4">
              <p className="text-lg">
                I'm Parsa Ahmadi, a driven Mechatronics Engineering student at the University of Waterloo with a strong passion for software engineering, automation, and innovative problem-solving. My experience spans full-stack web development, database engineering, and mechanical design, with a proven track record of delivering impactful solutions in both software and hardware domains.
              </p>
              <p>
                I thrive in collaborative environments and enjoy leveraging my technical skills to build scalable, user-centric applications. My background in both software and mechanical engineering allows me to approach challenges from a multidisciplinary perspective, making me well-suited for roles in software engineering, automation, and technology-driven innovation.
              </p>
              <p>
                I am actively seeking software engineering opportunities where I can contribute my expertise in web development, backend systems, and automation, while continuing to grow as a developer and engineer.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>Java</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>HTML/CSS</Badge>
                  <Badge>C/C++</Badge>
                  <Badge>SQL</Badge>
                  <Badge>MATLAB</Badge>
                  <Badge>ROBOTC</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>ASP.NET</Badge>
                  <Badge>.NET Core</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Angular</Badge>
                  <Badge>Blazor</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>VS Code</Badge>
                  <Badge>Git</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Jupyter Notebook</Badge>
                  <Badge>SolidWorks</Badge>
                  <Badge>AutoCAD</Badge>
                  <Badge>Figma</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>University of Waterloo</CardTitle>
              <CardDescription>Bachelor of Applied Science in Mechatronics Engineering, Minor in Artificial Intelligence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Expected Graduation: Apr 2029</p>
              <p>President's Scholarship of Distinction | GPA: 4.0/4.0</p>
              <p>
                Relevant coursework: Robotics, Control Systems, Embedded Systems, Machine Design, Digital Signal Processing, Artificial Intelligence
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>
                    {exp.company ? `${exp.company} | ${exp.period}` : exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>{exp.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          <div className="space-y-4">
            {projects.map((proj, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{proj.title}</CardTitle>
                  <CardDescription>{proj.period}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>{proj.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {proj.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
