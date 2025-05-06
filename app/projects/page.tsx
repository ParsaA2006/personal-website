import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Autonomous Delivery Robot",
      description:
        "Designed and built a small-scale autonomous robot capable of navigating indoor environments and delivering small packages.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["ROS", "Python", "Computer Vision", "Arduino"],
      github: "#",
      demo: "#",
    },
    {
      title: "Smart Home Energy Monitor",
      description:
        "Developed a system to monitor and analyze home energy usage with real-time feedback and suggestions for optimization.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["IoT", "Embedded Systems", "Data Visualization", "PCB Design"],
      github: "#",
      demo: "#",
    },
    {
      title: "Robotic Arm Control System",
      description:
        "Implemented a control system for a 6-DOF robotic arm with inverse kinematics for precise positioning and object manipulation.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["C++", "Control Theory", "MATLAB", "3D Printing"],
      github: "#",
      demo: "#",
    },
    {
      title: "Automated Hydroponics System",
      description:
        "Created an automated system for monitoring and controlling environmental conditions in a small-scale hydroponics setup.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Microcontrollers", "Sensors", "Automation", "Web Dashboard"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground">A showcase of my engineering projects and technical work</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{project.description}</CardDescription>
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
