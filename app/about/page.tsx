import type { Metadata } from "next"
import { Briefcase, GraduationCap, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getExperiencesForAbout, getProjectsForAbout, portfolioData } from "@/lib/portfolio-data"

const experiences = getExperiencesForAbout()
const projects = getProjectsForAbout()

export const metadata: Metadata = {
  title: portfolioData.seo.pages.about.title,
  description: portfolioData.seo.pages.about.description,
}

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="space-y-12">
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <User className="h-6 w-6" />
            <h1 className="text-3xl font-bold">About Me</h1>
          </div>
          <div className="grid gap-8 md:grid-cols-1">
            <div className="space-y-4">
              {portfolioData.profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg">
                  {paragraph}
                </p>
              ))}
              <div className="pt-4">
                <h3 className="mb-4 text-xl font-semibold">Technical Skills</h3>
                <div className="space-y-4">
                  {portfolioData.skills.map((group) => (
                    <div key={group.label} className="space-y-2">
                      <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                        {group.label}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <Badge key={skill}>{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>{portfolioData.education.school}</CardTitle>
              <CardDescription>
                {portfolioData.education.degree}, Minor in {portfolioData.education.minor}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-sm text-muted-foreground">
                Expected Graduation: {portfolioData.education.expectedGraduation}
              </p>
              <p>GPA: {portfolioData.education.gpa}</p>
              <p>Selected coursework: {portfolioData.education.coursework.join(", ")}</p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <div className="space-y-4">
            {experiences.map((experience) => (
              <Card key={experience.id}>
                <CardHeader>
                  <CardTitle>{experience.role}</CardTitle>
                  <CardDescription>
                    {experience.company} | {experience.period} | {experience.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>{experience.summary}</p>
                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          <div className="space-y-4">
            {projects.map((project) => (
              <Card key={project.slug}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((skill) => (
                      <Badge key={skill} variant="secondary">
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
