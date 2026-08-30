import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import Reveal from "@/components/home/reveal"
import SectionRail from "@/components/site/section-rail"
import SkillsRows from "@/components/site/skills-rows"
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
  const externalLinks = portfolioData.profile.links.filter((link) => link.label !== "Email" && link.label !== "Personal Website")

  return (
    <div className="site-shell min-h-screen text-[var(--carbon)]">
      <main className="relative z-[1] pb-20 md:pb-28">
        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 pb-16 pt-12 sm:px-7 md:pb-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:pb-24 xl:pt-16">
            <div className="xl:col-span-2">
              <SectionRail
                index="01"
                title="Resume"
                note="The same material, just easier to scan here."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-8">
                  <p className="annotation-text text-[var(--signal-copper)]">Resume / Sunday, August 30, 2026</p>
                  <h1 className="type-display-section mt-4 max-w-[9ch] text-[var(--technical-green)]">
                    {portfolioData.profile.name}
                  </h1>
                  <p className="mt-6 font-display text-[clamp(1.35rem,2.2vw,2rem)] uppercase tracking-[-0.04em] text-[var(--carbon-soft)]">
                    Software + AI + Mechatronics
                  </p>
                </div>

                <div className="grid gap-4 border-t border-[color:var(--rule-neutral)] pt-5 xl:col-span-4 xl:border-t-0 xl:pl-6 xl:pt-2">
                  <p className="text-[1rem] leading-7 text-[var(--carbon-soft)]">
                    A reading-first version of the resume, with direct links kept visible and the PDF still available for
                    the formal handoff.
                  </p>
                  <a href={resumeHref} target="_blank" rel="noopener noreferrer" className="field-link w-fit text-[var(--technical-green)]">
                    Download PDF
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)]">
                <div className="grid gap-4">
                  {emailLink ? (
                    <div>
                      <p className="annotation-text text-[var(--signal-copper)]">Direct contact</p>
                      <Link
                        href={emailLink.href}
                        className="mt-4 block break-words font-display text-[clamp(1.45rem,2.8vw,2.35rem)] uppercase tracking-[-0.04em] text-[var(--technical-green)]"
                      >
                        {emailLink.display}
                      </Link>
                    </div>
                  ) : null}
                </div>

                <div className="grid gap-3 border-t border-[color:var(--rule-neutral)] pt-5 lg:border-t-0 lg:pl-10 lg:pt-0">
                  {externalLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="field-link w-fit text-[var(--carbon)]"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-16 sm:px-7 md:py-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-24">
            <div className="xl:col-span-2">
              <SectionRail index="02" title="Education" note="The academic layer underneath the work." />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-7">
                  <p className="font-display text-[clamp(2rem,3.6vw,3.6rem)] uppercase leading-[0.94] tracking-[-0.05em] text-[var(--technical-green)]">
                    {portfolioData.education.school}
                  </p>
                  <p className="mt-4 text-[1rem] leading-7 text-[var(--carbon-soft)]">
                    {portfolioData.education.degree} / Minor in {portfolioData.education.minor}
                  </p>
                </div>

                <div className="grid gap-4 annotation-note xl:col-span-5 xl:pl-6">
                  <div className="flex items-start justify-between gap-6">
                    <span>Expected graduation</span>
                    <span className="text-right text-[var(--carbon)]">{portfolioData.education.expectedGraduation}</span>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span>Location</span>
                    <span className="text-right text-[var(--carbon)]">{portfolioData.education.location}</span>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span>GPA</span>
                    <span className="text-right text-[var(--carbon)]">{portfolioData.education.gpa}</span>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span>Selected coursework</span>
                    <span className="max-w-[18ch] text-right text-[var(--carbon)]">
                      {portfolioData.education.coursework.join(", ")}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-16 sm:px-7 md:py-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-24">
            <div className="xl:col-span-2">
              <SectionRail index="03" title="Skills" note="A simple inventory, without the badge wall." />
            </div>

            <div className="grid gap-5 xl:col-span-10">
              <SkillsRows groups={portfolioData.skills} />
            </div>
          </div>
        </section>

        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-16 sm:px-7 md:py-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-24">
            <div className="xl:col-span-2">
              <SectionRail index="04" title="Experience" note="The work, in plain terms." />
            </div>

            <div className="grid gap-8 xl:col-span-10">
              {experiences.map((experience, index) => (
                <Reveal
                  key={experience.id}
                  className="grid gap-6 border-t border-[color:var(--rule-neutral)] pt-6 xl:grid-cols-12 xl:gap-x-8"
                  delayMs={index * 60}
                >
                  <div className="xl:col-span-4">
                    <p className="font-display text-[clamp(1.8rem,3vw,3rem)] uppercase leading-[0.95] tracking-[-0.05em] text-[var(--technical-green)]">
                      {experience.company}
                    </p>
                    <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {experience.period} / {experience.location}
                    </p>
                    <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--signal-copper)]">
                      {experience.role}
                    </p>
                  </div>

                  <div className="grid gap-4 xl:col-span-8 xl:pl-6">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <div key={highlight} className="grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                        <span className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                          0{highlightIndex + 1}
                        </span>
                        <p className="text-[1rem] leading-7 text-[var(--carbon-soft)]">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-16 sm:px-7 md:py-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-24">
            <div className="xl:col-span-2">
              <SectionRail index="05" title="Projects" note="Short project notes, with the deeper writeups elsewhere." />
            </div>

            <div className="grid gap-8 xl:col-span-10">
              {projects.map((project, index) => (
                <Reveal
                  key={project.slug}
                  className="grid gap-6 border-t border-[color:var(--rule-neutral)] pt-6 xl:grid-cols-12 xl:gap-x-8"
                  delayMs={index * 60}
                >
                  <div className="xl:col-span-4">
                    <p className="font-display text-[clamp(1.7rem,3vw,2.8rem)] uppercase leading-[0.95] tracking-[-0.05em] text-[var(--technical-green)]">
                      {project.title}
                    </p>
                    <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {project.period}
                    </p>
                  </div>

                  <div className="grid gap-4 xl:col-span-8 xl:pl-6">
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.17em] text-muted-foreground">
                      {project.technologies.join(" / ")}
                    </p>
                    {project.resumeHighlights.map((highlight, highlightIndex) => (
                      <div key={highlight} className="grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                        <span className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                          0{highlightIndex + 1}
                        </span>
                        <p className="text-[1rem] leading-7 text-[var(--carbon-soft)]">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
