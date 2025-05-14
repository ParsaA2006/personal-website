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
      image: "/management-system.png",
      technologies: ["C#", ".NET", "SQL", "Backend"],
      github: "#",
      readMore: "/projects/waterloo-management-system",
    },
    {
      title: "Tic-Tac-Toe Solver Robot",
      description:
        "A robot that plays Tic-Tac-Toe optimally using ROBOTC and Python, achieving a 100% win/draw rate. Features a Python-based solver and enhanced robot performance.",
      image: "/tic-tac-tron.jpg",
      technologies: ["ROBOTC", "Python", "Algorithm", "Robotics"],
      github: "https://github.com/ParsaA2006/Tic-Tac-Tron",
      readMore: "/projects/tic-tac-tron",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container max-w-4xl mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-extrabold mb-2">Projects</h1>
          <p className="text-gray-300 text-lg">A collection of my work spanning software and robotics. Each project represents a unique challenge and solution.</p>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl shadow-lg flex flex-col md:flex-row">
              <div className="md:w-1/3 w-full aspect-video md:aspect-auto overflow-hidden flex items-center justify-center bg-gray-800">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <CardTitle className="text-white text-2xl font-bold mb-2">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <CardDescription className="text-base text-gray-300 mb-4">{project.description}</CardDescription>
                </div>
                <div className="flex gap-4 mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.readMore}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
