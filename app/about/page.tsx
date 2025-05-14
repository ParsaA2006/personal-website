import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, User } from "lucide-react"

export default function AboutPage() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Neurosnap",
      period: "Mar 2025 – May 2025",
      description:
        "Developed a responsive website for OpenBioML using HTML, CSS, and JavaScript, ensuring seamless functionality across multiple devices and improving user experience. Maintained and updated the OpenBioML and Neurosnap websites by fixing bugs and adding new features using JavaScript, HTML, and CSS. Created a database of millions of chemical compounds, leveraging JavaScript to enable efficient data retrieval and analysis, facilitating research for multiple Fortune 100 companies.",
      skills: ["JavaScript", "HTML", "CSS", "Database", "Web Development"],
    },
    {
      title: "Mechanical Engineer Intern",
      company: "Linamar Corporation",
      period: "Jan 2025 – Apr 2025",
      description:
        "Reviewed and implemented Engineering Change Notices (ECNs), conducted capability tests, and assisted in updating process dimension sheets, tool paths, and SolidWorks documentation to improve manufacturing accuracy and efficiency. Led the transition from traditional AIAG-style FMEAs to the new AIAG-VDA FMEA format for multiple customers, including General Motors, Ford, and Stellantis, ensuring compliance with updated industry standards. Collected and analyzed production data, and led the automation of a manual operation, resulting in annual cost savings of over $40,000. Designed models and professional drawings in SolidWorks for machine components, reducing part costs by up to 40%. Led the redesign of machine work instructions across multiple departments to implement a structured troubleshooting guide, improving efficiency by 20%.",
      skills: ["SolidWorks", "Production Analysis", "FMEA", "Process Automation"],
    },
    {
      title: "Project Developer",
      company: "UW Blueprint",
      period: "Oct 2024 – Dec 2024",
      description:
        "Added features to the UW Blueprint website, enhancing functionality using React, JavaScript, HTML, and CSS. Gained experience following the software development lifecycle, including designing, implementing, testing, reviewing, and deploying code in a collaborative environment.",
      skills: ["React", "JavaScript", "HTML", "CSS", "SDLC"],
    },
    {
      title: "Mechanical Design Member – Chassis Team",
      company: "UW Waterloo Alternative Fuels Team (UWAFT)",
      period: "Sep 2024 – Dec 2024",
      description:
        "Co-designed structural components of the vehicle chassis to decrease material costs by 15%. Performed Finite Element Analysis (FEA) and used SolidWorks to optimize weight distribution and ensure compliance with safety and performance requirements.",
      skills: ["SolidWorks", "FEA", "Mechanical Design"],
    },
  ]

  const projects = [
    {
      title: "Waterloo Management System | C#, .NET, SQL",
      period: "Mar 2025",
      description:
        "Designed and developed a Waterloo management system with a secure role-based access control. Built a backend with C# and .NET, and engineered a database using SQL to efficiently handle account information and automation.",
      skills: ["C#", ".NET", "SQL", "Backend"],
    },
    {
      title: "Tic-Tac-Toe Solver Robot | ROBOTC, Python",
      period: "Dec 2024",
      description:
        "Engineered a ROBOTC algorithm that enables a robot to play Tic-Tac-Toe optimally, achieving a 100% win/draw rate. Enhanced robot performance by integrating a Python-based solver, reducing positioning errors by 30% and solving the game in under 2 seconds with 100% accuracy.",
      skills: ["ROBOTC", "Python", "Algorithm", "Robotics"],
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
                    {exp.company} | {exp.period}
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
