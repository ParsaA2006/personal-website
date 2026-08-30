import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { getProjectHref, getProjectsForProjectsPage, portfolioData } from "@/lib/portfolio-data"

const projects = getProjectsForProjectsPage()

export const metadata: Metadata = {
  title: portfolioData.seo.pages.projects.title,
  description: portfolioData.seo.pages.projects.description,
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black py-12 text-white">
      <div className="container mx-auto max-w-4xl space-y-10">
        <div className="space-y-2 text-center">
          <h1 className="mb-2 text-4xl font-extrabold">Projects</h1>
          <p className="text-lg text-gray-300">
            A collection of my work across software engineering, machine learning, and robotics.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-lg md:flex-row"
            >
              <div className="flex aspect-video w-full items-center justify-center overflow-hidden bg-gray-800 md:w-1/3 md:aspect-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={480}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <CardTitle className="mb-2 text-2xl font-bold text-white">{project.title}</CardTitle>
                  <p className="mb-2 text-sm text-muted-foreground">{project.period}</p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology} variant="secondary">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                  <CardDescription className="mb-4 text-base text-gray-300">
                    {project.shortDescription}
                  </CardDescription>
                </div>
                <div className="mt-4 flex gap-4">
                  {project.repositoryUrl ? (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  ) : null}
                  <Button size="sm" asChild>
                    <Link href={getProjectHref(project.slug)}>
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
