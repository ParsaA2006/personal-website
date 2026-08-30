import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getProjectBySlug } from "@/lib/portfolio-data"

const project = getProjectBySlug("waterloo-management-system")

export const metadata: Metadata = {
  title: `${project.title} | Parsa Ahmadi`,
  description: project.shortDescription,
}

export default function WaterlooManagementSystemPage() {
  return (
    <div className="min-h-screen bg-black py-12 text-white">
      <div className="container mx-auto max-w-3xl space-y-10">
        <Link href="/projects" className="text-blue-400 hover:underline">
          &larr; Back to projects
        </Link>

        <div className="flex flex-col items-center gap-6">
          <h1 className="text-center text-4xl font-extrabold">{project.title}</h1>
          <p className="max-w-2xl text-center text-xl text-gray-300">{project.shortDescription}</p>
          <div className="flex w-full justify-center">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={350}
              className="rounded-xl border border-gray-800 object-cover"
            />
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">Overview</h2>
          <p>
            This project is an earlier full-stack application focused on building a structured teacher and student
            database website. I kept it public because it still reflects an important part of my development: learning
            how to model application data, handle authentication, and connect backend logic to a usable interface.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">What It Covers</h2>
          <p>
            The core scope was creating a web application that could manage user information and permissions in a more
            organized way than a simple static site. The project centered on CRUD-style workflows, role-based access,
            and SQL-backed data handling.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Technical Focus</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>C# and .NET for backend application logic</li>
            <li>SQL-backed storage for structured data management</li>
            <li>Authentication and role-based access control concepts</li>
            <li>End-to-end full-stack implementation experience</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Why It Stays On The Site</h2>
          <p>
            It is not one of my newest or strongest showcase projects, but it is still a useful part of the portfolio.
            It shows an earlier stage of my backend and database work, and it helps round out the progression from
            foundational application development to the more recent software, data, and AI work elsewhere on the site.
          </p>
        </section>
      </div>
    </div>
  )
}
