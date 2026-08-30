import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Github } from "lucide-react"
import Reveal from "@/components/home/reveal"
import SectionRail from "@/components/site/section-rail"
import type { Project } from "@/lib/portfolio-data"

type ReportSection = {
  label: string
  title: string
  body: string
  bullets?: string[]
  note?: string
}

type ProjectReportProps = {
  caption: string
  figureClassName?: string
  imageClassName?: string
  priority?: boolean
  project: Project
  reportIndex: string
  sections: ReportSection[]
  thesis: string
}

export default function ProjectReport({
  caption,
  figureClassName,
  imageClassName,
  priority = false,
  project,
  reportIndex,
  sections,
  thesis,
}: ProjectReportProps) {
  return (
    <div className="site-shell min-h-screen text-[var(--carbon)]">
      <main className="relative z-[1] pb-20 md:pb-28">
        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-14 px-5 pb-16 pt-12 sm:px-7 md:pb-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:pb-24 xl:pt-16">
            <div className="xl:col-span-2">
              <SectionRail
                index={reportIndex}
                title="Field Report"
                note="A closer technical read of one project."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="border-b border-[color:var(--rule-neutral)] pb-6">
                <Link href="/projects" className="field-link text-[var(--technical-green)]">
                  <ArrowLeft className="h-4 w-4" />
                  Back to projects
                </Link>
              </Reveal>

              <Reveal className="grid gap-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-7">
                  <p className="annotation-text text-[var(--signal-copper)]">Project / {reportIndex}</p>
                  <h1 className="type-display-section mt-4 max-w-[10ch] text-[var(--technical-green)]">{project.title}</h1>
                  <p className="editorial-lead mt-8 max-w-[38ch] text-[var(--carbon-soft)]">{thesis}</p>
                </div>

                <div className="grid gap-5 border-t border-[color:var(--rule-neutral)] pt-5 xl:col-span-5 xl:border-t-0 xl:pl-6 xl:pt-2">
                  <div>
                    <p className="annotation-text text-[var(--signal-copper)]">Period</p>
                    <p className="mt-3 font-display text-[1.45rem] uppercase tracking-[-0.04em] text-[var(--carbon)]">
                      {project.period}
                    </p>
                  </div>

                  <div className="border-t border-[color:var(--rule-neutral)] pt-4">
                    <p className="annotation-text text-[var(--technical-green)]">Stack</p>
                    <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {project.technologies.join(" / ")}
                    </p>
                  </div>

                  {project.repositoryUrl ? (
                    <div className="border-t border-[color:var(--rule-neutral)] pt-4">
                      <Link
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="field-link text-[var(--technical-green)]"
                      >
                        Repository
                        <Github className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : null}
                </div>
              </Reveal>

              <Reveal variant="clip">
                <figure className={`route-figure ${figureClassName ?? ""}`}>
                  <div className="absolute left-4 top-4 z-10 border border-[rgba(23,23,23,0.14)] bg-[rgba(251,248,242,0.88)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                    Fig. {reportIndex}
                  </div>
                  <div className="aspect-[16/10]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1400}
                      height={900}
                      priority={priority}
                      className={`h-full w-full ${imageClassName ?? "object-cover"}`}
                    />
                  </div>
                  <figcaption className="grid gap-2 border-t border-[color:var(--rule-neutral)] px-4 py-4 sm:px-6">
                    <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                      Project artifact / case-study evidence
                    </span>
                    <span className="font-editorial text-[0.98rem] leading-7 text-[var(--carbon-soft)]">{caption}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-[1440px] gap-y-14 px-5 py-16 sm:px-7 md:py-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-24">
            <div className="xl:col-span-2">
              <SectionRail
                index="AN"
                title="Analysis"
                note="The details that mattered while building it."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              {sections.map((section, index) => (
                <Reveal
                  key={section.title}
                  className="grid gap-6 border-t border-[color:var(--rule-neutral)] pt-6 xl:grid-cols-12 xl:gap-x-8"
                  delayMs={index * 70}
                >
                  <div className="xl:col-span-4">
                    <p className="annotation-text text-[var(--signal-copper)]">{section.label}</p>
                    <h2 className="mt-4 font-display text-[clamp(1.85rem,3vw,3rem)] uppercase leading-[0.96] tracking-[-0.05em] text-[var(--technical-green)]">
                      {section.title}
                    </h2>
                    {section.note ? (
                      <p className="annotation-note mt-5 max-w-[24ch] text-[var(--carbon-soft)]">{section.note}</p>
                    ) : null}
                  </div>

                  <div className="grid gap-4 xl:col-span-8 xl:pl-6">
                    <p className="editorial-copy max-w-[62ch] text-[var(--carbon-soft)]">{section.body}</p>

                    {section.bullets?.length ? (
                      <div className="grid gap-3 border-t border-[color:var(--rule-neutral)] pt-4">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <div key={bullet} className="grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                            <span className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                              0{bulletIndex + 1}
                            </span>
                            <p className="text-[1rem] leading-7 text-[var(--carbon-soft)]">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              ))}

              <Reveal className="flex flex-col gap-4 border-t border-[color:var(--rule-neutral)] pt-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="annotation-note max-w-[36ch]">
                  More route-level work, school chronology, and public resume details continue elsewhere in the site.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <Link href="/projects" className="field-link text-[var(--carbon)]">
                    All projects
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/journey" className="field-link text-[var(--technical-green)]">
                    Journey
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
