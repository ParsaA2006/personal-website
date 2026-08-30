import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Reveal from "@/components/home/reveal"
import SectionRail from "@/components/site/section-rail"
import SkillsRows from "@/components/site/skills-rows"
import {
  getExperiencesForAbout,
  getJourneyPath,
  getProjectsForAbout,
  getPublicResumeHref,
  portfolioData,
} from "@/lib/portfolio-data"

const experiences = getExperiencesForAbout().slice(0, 4)
const projects = getProjectsForAbout().slice(0, 2)
const journeyHref = getJourneyPath()
const resumeHref = getPublicResumeHref()

export const metadata: Metadata = {
  title: portfolioData.seo.pages.about.title,
  description: portfolioData.seo.pages.about.description,
}

export default function AboutPage() {
  return (
    <div className="site-shell min-h-screen text-[var(--carbon)]">
      <main className="relative z-[1] pb-20 md:pb-28">
        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 pb-16 pt-12 sm:px-7 md:pb-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:pb-24 xl:pt-16">
            <div className="xl:col-span-2">
              <SectionRail
                index="01"
                title="About"
                note="The background behind the work."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-7">
                  <p className="annotation-text text-[var(--signal-copper)]">Profile / Working Thesis</p>
                  <h1 className="type-display-section mt-4 max-w-[11ch] text-[var(--technical-green)]">
                    Practical systems, not just prototypes.
                  </h1>
                </div>

                <div className="grid gap-4 border-t border-[color:var(--rule-neutral)] pt-5 xl:col-span-5 xl:border-t-0 xl:pl-6 xl:pt-2">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Waterloo / software + AI + mechatronics / August 30, 2026
                  </p>
                  <p className="text-[1rem] leading-7 text-[var(--carbon-soft)]">
                    I care about turning technical depth into dependable implementation, whether that means backend
                    systems, cloud data pipelines, or the more physical constraints of robotics work.
                  </p>
                </div>
              </Reveal>

              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.9fr)]">
                <div className="grid gap-6">
                  {portfolioData.profile.aboutParagraphs.map((paragraph) => (
                    <p key={paragraph} className="editorial-copy max-w-[64ch] text-[var(--carbon-soft)]">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="grid gap-4 border-t border-[color:var(--rule-neutral)] pt-5 annotation-note lg:border-t-0 lg:pl-10 lg:pt-0">
                  <div className="flex items-start justify-between gap-6">
                    <span>School</span>
                    <span className="max-w-[18ch] text-right text-[var(--carbon)]">{portfolioData.education.school}</span>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span>Degree</span>
                    <span className="max-w-[18ch] text-right text-[var(--carbon)]">Mechatronics Engineering</span>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span>Minor</span>
                    <span className="max-w-[18ch] text-right text-[var(--carbon)]">{portfolioData.education.minor}</span>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span>Expected graduation</span>
                    <span className="max-w-[18ch] text-right text-[var(--carbon)]">
                      {portfolioData.education.expectedGraduation}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span>GPA</span>
                    <span className="max-w-[18ch] text-right text-[var(--carbon)]">{portfolioData.education.gpa}</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-16 sm:px-7 md:py-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-24">
            <div className="xl:col-span-2">
              <SectionRail
                index="02"
                title="Skills"
                note="The tools change. The habits matter more."
              />
            </div>

            <div className="grid gap-5 xl:col-span-10">
              <SkillsRows groups={portfolioData.skills} />
            </div>
          </div>
        </section>

        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-16 sm:px-7 md:py-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-24">
            <div className="xl:col-span-2">
              <SectionRail
                index="03"
                title="Background"
                note="A short record of the work so far."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-6 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-4">
                  <p className="annotation-text text-[var(--signal-copper)]">Recent roles</p>
                </div>

                <div className="grid gap-5 xl:col-span-8 xl:pl-6">
                  {experiences.map((experience) => (
                    <div key={experience.id} className="grid gap-3 border-b border-[color:var(--rule-neutral)] pb-5 sm:grid-cols-[12rem_minmax(0,1fr)]">
                      <div>
                        <p className="font-display text-[1.55rem] uppercase tracking-[-0.04em] text-[var(--technical-green)]">
                          {experience.company}
                        </p>
                        <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                          {experience.period}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--signal-copper)]">
                          {experience.role}
                        </p>
                        <p className="mt-3 text-[1rem] leading-7 text-[var(--carbon-soft)]">{experience.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-6 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-4">
                  <p className="annotation-text text-[var(--signal-copper)]">Selected projects</p>
                </div>

                <div className="grid gap-5 xl:col-span-8 xl:pl-6">
                  {projects.map((project) => (
                    <div key={project.slug} className="grid gap-3 border-b border-[color:var(--rule-neutral)] pb-5 sm:grid-cols-[12rem_minmax(0,1fr)]">
                      <div>
                        <p className="font-display text-[1.55rem] uppercase tracking-[-0.04em] text-[var(--technical-green)]">
                          {project.title}
                        </p>
                        <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                          {project.period}
                        </p>
                      </div>
                      <div>
                        <p className="text-[1rem] leading-7 text-[var(--carbon-soft)]">{project.shortDescription}</p>
                        <Link href={`/projects/${project.slug}`} className="field-link mt-4 text-[var(--technical-green)]">
                          Open case study
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
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
                title="Next Paths"
                note="Two useful exits, depending on what you want."
              />
            </div>

            <div className="grid gap-8 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <div>
                  <p className="annotation-text text-[var(--signal-copper)]">Journey</p>
                  <p className="mt-4 font-display text-[clamp(1.9rem,3vw,3rem)] uppercase leading-[0.96] tracking-[-0.05em] text-[var(--technical-green)]">
                    The Waterloo chronology, co-op sequence, and grade record.
                  </p>
                  <Link href={journeyHref} className="field-link mt-6 text-[var(--technical-green)]">
                    Open journey
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div>
                  <p className="annotation-text text-[var(--signal-copper)]">Resume</p>
                  <p className="mt-4 font-display text-[clamp(1.9rem,3vw,3rem)] uppercase leading-[0.96] tracking-[-0.05em] text-[var(--carbon)]">
                    The condensed dossier version with direct handoff to the PDF.
                  </p>
                  <Link href={resumeHref} className="field-link mt-6 text-[var(--carbon)]">
                    Open resume
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
