import type { Metadata } from "next"
import Link from "next/link"
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  getExperiencesForResume,
  getProjectsForResume,
  getPublicResumeHref,
  portfolioData,
} from "@/lib/portfolio-data"

const experiences = getExperiencesForResume()
const projects = getProjectsForResume()
const resumeHref = getPublicResumeHref()

export const metadata: Metadata = {
  title: portfolioData.seo.pages.resume.title,
  description: portfolioData.seo.pages.resume.description,
}

export default function ResumePage() {
  const emailLink = portfolioData.profile.links.find((link) => link.label === "Email")
  const externalLinks = portfolioData.profile.links.filter((link) => link.label !== "Email")

  return (
    <div className="container mx-auto max-w-3xl py-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">{portfolioData.profile.name}</h1>
          <p className="text-muted-foreground">Resume</p>
        </div>
        <Button asChild className="w-full sm:w-auto">
          <a href={resumeHref} target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact & Links</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-4">
            {emailLink ? (
              <Link href={emailLink.href} className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{emailLink.display ?? emailLink.href.replace("mailto:", "")}</span>
              </Link>
            ) : null}
            {externalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-blue-500 hover:underline"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <div className="font-semibold">{portfolioData.education.school}</div>
                <div className="italic">
                  {portfolioData.education.degree} | Minor: {portfolioData.education.minor}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Coursework: {portfolioData.education.coursework.join(", ")}
                </div>
              </div>
              <div className="text-sm text-muted-foreground sm:text-right">
                Expected Graduation: {portfolioData.education.expectedGraduation}
                <br />
                {portfolioData.education.location}
              </div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">GPA: {portfolioData.education.gpa}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {portfolioData.skills.map((group) => (
              <div key={group.label}>
                <span className="font-semibold">{group.label}:</span> {group.items.join(", ")}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experiences.map((experience) => (
              <div key={experience.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div className="font-semibold">{experience.company}</div>
                  <div className="text-sm text-muted-foreground">
                    {experience.period} | {experience.location}
                  </div>
                </div>
                <div className="italic text-sm">{experience.role}</div>
                <ul className="mt-1 list-inside list-disc space-y-1 text-sm">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.map((project) => (
              <div key={project.slug}>
                <div className="font-semibold">
                  {project.title} | {project.technologies.join(", ")}
                </div>
                <ul className="ml-4 list-inside list-disc text-sm">
                  {project.resumeHighlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
