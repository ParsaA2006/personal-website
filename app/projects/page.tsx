import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Waterloo Management System",
      description:
        "A secure management system with role-based access, built with C#, .NET, and SQL. Designed to efficiently handle account information and automation for Waterloo organizations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["C#", ".NET", "SQL", "Backend"],
      github: "#",
      demo: "#",
    },
    {
      title: "Tic-Tac-Toe Solver Robot",
      description:
        "A robot that plays Tic-Tac-Toe optimally using ROBOTC and Python, achieving a 100% win/draw rate. Features a Python-based solver and enhanced robot performance.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["ROBOTC", "Python", "Algorithm", "Robotics"],
      github: "#",
      demo: "#",
    },
    {
      title: "OpenBioML & Neurosnap Platform",
      description:
        "Developed a responsive website for OpenBioML using HTML, CSS, and JavaScript. Built a database of millions of chemical compounds for Fortune 100 research, and maintained/updated the Neurosnap platform.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["JavaScript", "HTML", "CSS", "Database", "Web Development"],
      github: "#",
      demo: "#",
    },
    {
      title: "Engineering FMEA Automation (Linamar)",
      description:
        "Automated a manual operation and led the transition to AIAG-VDA FMEA format for major automotive clients. Designed SolidWorks models, reducing part costs by up to 40% and improving process efficiency.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["SolidWorks", "Process Automation", "FMEA", "Production Analysis"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold mb-2">Projects</h1>
          <p className="text-gray-300">A showcase of my engineering and software projects, spanning automation, robotics, and web development.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl shadow-lg">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white text-2xl font-bold mb-1">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github}>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demo}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
