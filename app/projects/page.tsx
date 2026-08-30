import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, MoveRight } from "lucide-react"
import Reveal from "@/components/home/reveal"
import SectionRail from "@/components/site/section-rail"
import { getProjectHref, getProjectsForProjectsPage, portfolioData } from "@/lib/portfolio-data"

const projects = getProjectsForProjectsPage()
const [primaryProject, secondaryProject, archiveProject] = projects

export const metadata: Metadata = {
  title: portfolioData.seo.pages.projects.title,
  description: portfolioData.seo.pages.projects.description,
}

export default function ProjectsPage() {
  return (
    <div className="site-shell min-h-screen text-[var(--carbon)]">
      <main className="relative z-[1] pb-20 md:pb-28">
        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 pb-16 pt-12 sm:px-7 md:pb-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:pb-24 xl:pt-16">
            <div className="xl:col-span-2">
              <SectionRail
                index="01"
                title="Projects"
                note="A few projects that show how I like to work."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-8">
                  <p className="annotation-text text-[var(--signal-copper)]">Case Study Index / 2026</p>
                  <h1 className="type-display-section mt-4 max-w-[9ch] text-[var(--technical-green)]">Projects</h1>
                  <p className="editorial-lead mt-8 max-w-[40ch] text-[var(--carbon-soft)]">
                    A selective record of full-stack software, applied machine learning, and robotics work. Each project
                    is staged differently, but the visual language stays consistent.
                  </p>
                </div>

                <div className="grid gap-4 border-t border-[color:var(--rule-neutral)] pt-5 xl:col-span-4 xl:border-t-0 xl:pl-6 xl:pt-2">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Sunday, August 30, 2026 / public project index
                  </p>
                  <p className="text-[1rem] leading-7 text-[var(--carbon-soft)]">
                    The strongest software and AI work leads the page, while earlier backend foundations stay visible as
                    supporting evidence rather than filler.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-16 sm:px-7 md:py-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-24">
            <div className="xl:col-span-2">
              <SectionRail index="02" title="Lead Case" note="One of the clearest software pieces in the set." />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-5 xl:pt-4">
                  <p className="annotation-text text-[var(--signal-copper)]">Case File / 01</p>
                  <h2 className="type-display-feature mt-4 max-w-[10ch] text-[var(--technical-green)]">{primaryProject.title}</h2>
                  <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {primaryProject.period} / ML + full-stack application
                  </p>
                  <p className="editorial-copy mt-8 max-w-[34ch] text-[var(--carbon-soft)]">
                    {primaryProject.shortDescription}
                  </p>
                  <div className="mt-8 grid gap-2 border-t border-[color:var(--rule-neutral)] pt-4">
                    <p className="annotation-text text-[var(--technical-green)]">Stack</p>
                    <p className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {primaryProject.technologies.join(" / ")}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                    <Link href={getProjectHref(primaryProject.slug)} className="field-link text-[var(--technical-green)]">
                      Open case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {primaryProject.repositoryUrl ? (
                      <Link
                        href={primaryProject.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="field-link text-[var(--carbon)]"
                      >
                        Repository
                        <Github className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>

                <Reveal variant="clip" className="xl:col-span-7 xl:pl-6" delayMs={100}>
                  <figure className="home-figure group relative border border-[rgba(24,37,31,0.2)] bg-[var(--technical-green)] p-5 sm:p-8">
                    <div className="home-figure-label absolute left-5 top-5 border border-[rgba(251,248,242,0.15)] bg-[rgba(24,37,31,0.55)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[rgba(251,248,242,0.72)]">
                      Fig. 01
                    </div>
                    <div className="aspect-[16/11] overflow-hidden border border-[rgba(251,248,242,0.14)] bg-[rgba(251,248,242,0.08)]">
                      <Image
                        src={primaryProject.image}
                        alt={primaryProject.title}
                        width={1200}
                        height={840}
                        className="home-figure-media h-full w-full object-contain p-6 sm:p-10"
                      />
                    </div>
                    <figcaption className="home-figure-caption mt-4 flex flex-col gap-2 border-t border-[rgba(251,248,242,0.14)] pt-4 sm:flex-row sm:items-start sm:justify-between">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[rgba(251,248,242,0.58)]">
                        Modeling / data pipeline / interface
                      </span>
                      <span className="home-figure-note max-w-[28ch] font-editorial text-sm leading-6 text-[rgba(251,248,242,0.82)]">
                        Historical data, feature engineering, prediction workflows, and full-stack delivery brought into
                        the same system.
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-16 sm:px-7 md:py-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-24">
            <div className="xl:col-span-2">
              <SectionRail
                index="03"
                title="Physical System"
                note="The robotics side still matters to me."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <Reveal variant="clip" className="xl:col-span-7" delayMs={80}>
                  <figure className="home-figure group relative overflow-hidden border border-[color:var(--rule-neutral)] bg-[rgba(255,255,255,0.42)]">
                    <div className="home-figure-label absolute left-4 top-4 z-10 border border-[rgba(23,23,23,0.14)] bg-[rgba(251,248,242,0.88)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                      Fig. 02
                    </div>
                    <div className="aspect-[16/11]">
                      <Image
                        src={secondaryProject.image}
                        alt={secondaryProject.title}
                        width={1200}
                        height={850}
                        className="home-figure-media h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="home-figure-caption border-t border-[color:var(--rule-neutral)] px-4 py-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground sm:px-6">
                      Sensors / board-state logic / calibrated motion / physical constraints
                    </figcaption>
                  </figure>
                </Reveal>

                <div className="xl:col-span-5 xl:pl-6">
                  <p className="annotation-text text-[var(--signal-copper)]">Case File / 02</p>
                  <h2 className="type-display-feature mt-4 max-w-[11ch] text-[var(--carbon)]">{secondaryProject.title}</h2>
                  <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {secondaryProject.period} / Robotics + control
                  </p>
                  <p className="editorial-copy mt-8 max-w-[34ch] text-[var(--carbon-soft)]">
                    {secondaryProject.shortDescription}
                  </p>
                  <p className="editorial-copy mt-6 max-w-[34ch] text-[var(--carbon-soft)]">
                    It still matters because it shows the hardware-software side of the story: sensing, logic,
                    calibration, and reliability under physical constraints.
                  </p>
                  <div className="mt-8 grid gap-2 border-t border-[color:var(--rule-neutral)] pt-4">
                    <p className="annotation-text text-[var(--technical-green)]">Stack</p>
                    <p className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {secondaryProject.technologies.join(" / ")}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                    <Link href={getProjectHref(secondaryProject.slug)} className="field-link text-[var(--technical-green)]">
                      Open case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {secondaryProject.repositoryUrl ? (
                      <Link
                        href={secondaryProject.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="field-link text-[var(--carbon)]"
                      >
                        Repository
                        <Github className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-16 sm:px-7 md:py-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-24">
            <div className="xl:col-span-2">
              <SectionRail
                index="04"
                title="Archive"
                note="Earlier work, still worth keeping in view."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-4">
                  <p className="annotation-text text-[var(--signal-copper)]">Archive / Foundation system</p>
                  <h2 className="mt-4 font-display text-[clamp(2rem,3vw,3.1rem)] uppercase leading-[0.95] tracking-[-0.05em] text-[var(--technical-green)]">
                    {archiveProject.title}
                  </h2>
                  <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {archiveProject.period} / Backend + data modeling
                  </p>
                </div>

                <div className="grid gap-8 xl:col-span-8 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] xl:pl-6">
                  <div>
                    <p className="editorial-copy max-w-[42ch] text-[var(--carbon-soft)]">{archiveProject.shortDescription}</p>
                    <div className="mt-8 grid gap-2 border-t border-[color:var(--rule-neutral)] pt-4">
                      <p className="annotation-text text-[var(--technical-green)]">Stack</p>
                      <p className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {archiveProject.technologies.join(" / ")}
                      </p>
                    </div>
                    <Link href={getProjectHref(archiveProject.slug)} className="field-link mt-8 text-[var(--technical-green)]">
                      Open case study
                      <MoveRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <Reveal variant="clip" delayMs={80}>
                    <figure className="route-figure">
                      <div className="absolute left-4 top-4 z-10 border border-[rgba(23,23,23,0.14)] bg-[rgba(251,248,242,0.88)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                        Fig. 03
                      </div>
                      <div className="aspect-[4/3] overflow-hidden bg-[rgba(35,54,46,0.05)] p-6">
                        <Image
                          src={archiveProject.image}
                          alt={archiveProject.title}
                          width={900}
                          height={700}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </figure>
                  </Reveal>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
