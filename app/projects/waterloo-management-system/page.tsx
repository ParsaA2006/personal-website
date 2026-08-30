import type { Metadata } from "next"
import ProjectReport from "@/components/site/project-report"
import { getProjectBySlug } from "@/lib/portfolio-data"

const project = getProjectBySlug("waterloo-management-system")

export const metadata: Metadata = {
  title: `${project.title} | Parsa Ahmadi`,
  description: project.shortDescription,
}

export default function WaterlooManagementSystemPage() {
  return (
    <ProjectReport
      project={project}
      reportIndex="03"
      thesis="This project is an earlier full-stack application focused on building a structured teacher and student database website with authentication, roles, and SQL-backed data handling."
      caption="An earlier backend and database project that still helps explain the progression into later software, data, and platform work."
      imageClassName="object-contain p-6 sm:p-10"
      sections={[
        {
          label: "Overview",
          title: "Why it is still here",
          body: "I kept it public because it still reflects an important part of my development: learning how to model application data, handle authentication, and connect backend logic to a usable interface.",
        },
        {
          label: "Scope",
          title: "What it covers",
          body: "The core scope was creating a web application that could manage user information and permissions in a more organized way than a simple static site. The project centered on CRUD-style workflows, role-based access, and SQL-backed data handling.",
        },
        {
          label: "Technical",
          title: "Implementation focus",
          body: "It is not the newest project on the site, but it still captures an early backend foundation that later work builds on.",
          bullets: [
            "C# and .NET for backend application logic.",
            "SQL-backed storage for structured data management.",
            "Authentication and role-based access control concepts.",
            "End-to-end full-stack implementation experience.",
          ],
        },
        {
          label: "Context",
          title: "What it shows now",
          body: "It is not one of my newest or strongest showcase projects, but it is still a useful part of the portfolio. It shows an earlier stage of my backend and database work, and it helps round out the progression from foundational application development to the more recent software, data, and AI work elsewhere on the site.",
        },
      ]}
    />
  )
}
