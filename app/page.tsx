import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AskParsaForm from "@/components/ui/ask-parsa-form"
import { getHomeProjects, getProjectHref, portfolioData } from "@/lib/portfolio-data"

const featuredProjects = getHomeProjects()

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="border-b border-gray-800 bg-black/80">
        <div className="container py-4">
          <AskParsaForm />
        </div>
      </section>

      <section className="container flex flex-col items-center gap-16 py-20 md:flex-row md:py-32">
        <div className="flex-1 space-y-8">
          <h1 className="mb-2 text-5xl font-extrabold tracking-tight text-white">{portfolioData.profile.name}</h1>
          <p className="mb-4 text-2xl text-gray-300">
            {portfolioData.profile.headline} <span className="text-blue-400">|</span>{" "}
            {portfolioData.profile.subheadline}
          </p>
          <p className="mb-6 max-w-xl text-lg text-gray-400">{portfolioData.profile.homeSummary}</p>
          <div className="flex gap-4 pt-2">
            <Link href="/projects">
              <Button className="px-6" variant="secondary">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-gray-700 px-6 text-white">
                About Me
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex h-72 w-72 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 p-2 shadow-xl md:h-80 md:w-80">
            <Image
              src="/profile.jpg"
              alt={portfolioData.profile.name}
              width={320}
              height={320}
              className="h-full w-full rounded-2xl border-4 border-gray-800 object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-20">
        <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="flex h-full flex-col rounded-xl border border-gray-800 bg-gray-900 p-6 shadow transition hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mb-4 flex-1 text-gray-300">{project.shortDescription}</p>
              <Link href={getProjectHref(project.slug)} className="mt-auto font-medium text-blue-400 hover:underline">
                View Project
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
