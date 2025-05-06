import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, User } from "lucide-react"

export default function AboutPage() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Innovations Inc.",
      period: "May 2023 - August 2023",
      description:
        "Worked on developing automated testing systems for robotic components. Implemented sensor calibration procedures and created documentation for maintenance protocols.",
      skills: ["Robotics", "Python", "CAD", "Testing"],
    },
    {
      title: "Research Assistant",
      company: "University of Waterloo",
      period: "September 2022 - April 2023",
      description:
        "Assisted in research on advanced control systems for autonomous vehicles. Developed simulation models and analyzed performance data.",
      skills: ["Control Systems", "MATLAB", "Data Analysis", "Simulation"],
    },
    {
      title: "Junior Robotics Developer",
      company: "Automation Solutions Ltd.",
      period: "May 2022 - August 2022",
      description:
        "Contributed to the development of industrial automation systems. Designed mechanical components and programmed PLC systems.",
      skills: ["PLC Programming", "AutoCAD", "Industrial Automation"],
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
          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <p className="text-lg">
                I'm Parsa Ahmadi, a Mechatronics Engineering student at the University of Waterloo with a passion for
                robotics, automation, and innovative engineering solutions.
              </p>
              <p>
                My academic journey has equipped me with a strong foundation in mechanical engineering, electronics, and
                programming. I'm particularly interested in the development of autonomous systems and the application of
                machine learning in robotics.
              </p>
              <p>
                Outside of academics, I enjoy participating in engineering competitions, working on personal projects,
                and staying updated with the latest technological advancements in my field.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>C/C++</Badge>
                  <Badge>Python</Badge>
                  <Badge>MATLAB</Badge>
                  <Badge>ROS</Badge>
                  <Badge>CAD</Badge>
                  <Badge>PCB Design</Badge>
                  <Badge>Microcontrollers</Badge>
                  <Badge>Control Systems</Badge>
                  <Badge>Machine Learning</Badge>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 p-2">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Parsa Ahmadi"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
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
              <CardDescription>Bachelor of Applied Science in Mechatronics Engineering</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">2020 - 2025 (Expected)</p>
              <p>
                Relevant coursework: Robotics, Control Systems, Embedded Systems, Machine Design, Digital Signal
                Processing, Artificial Intelligence
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
      </div>
    </div>
  )
}
