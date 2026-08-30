import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, Github, MoveRight } from "lucide-react"
import Reveal from "@/components/home/reveal"
import SectionRail from "@/components/site/section-rail"
import AskParsaForm from "@/components/ui/ask-parsa-form"
import {
  getHomeProjects,
  getJourneyPath,
  getJourneyPreviewYears,
  getProjectHref,
  getPublicResumeHref,
  portfolioData,
} from "@/lib/portfolio-data"

const featuredProjects = getHomeProjects()
const [featuredProject, roboticsProject] = featuredProjects
const [latestExperience, ...remainingExperiences] = portfolioData.experiences
const supportingExperiences = remainingExperiences.slice(0, 3)
const resumeHref = getPublicResumeHref()
const journeyHref = getJourneyPath()
const journeyPreviewYears = getJourneyPreviewYears()
const emailLink = portfolioData.profile.links.find((link) => link.label === "Email")
const socialLinks = portfolioData.profile.links.filter((link) => link.label === "LinkedIn" || link.label === "GitHub")
const emailDisplayParts = emailLink?.display?.split("@") ?? []
const hasSplitEmailDisplay = emailDisplayParts.length === 2

const homeIndexLinks = [
  {
    index: "01",
    label: "Selected Work",
    href: "#selected-work",
  },
  {
    index: "02",
    label: "Experience",
    href: "#experience",
  },
  {
    index: "03",
    label: "Journey",
    href: "#journey",
  },
  {
    index: "04",
    label: "Profile",
    href: "#profile",
  },
  {
    index: "05",
    label: "Ask Parsa",
    href: "#ask-parsa",
  },
  {
    index: "06",
    label: "Contact",
    href: "#contact",
  },
]

const highlightedSkillGroups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "C#", "C++", "SQL"],
  },
  {
    label: "Platforms",
    items: ["AWS", "Snowflake", "Databricks", "Docker", "Azure DevOps"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", ".NET", "PyTorch", "ROS2"],
  },
]

const heroNotes = [
  { label: "Base", value: portfolioData.education.location },
  { label: "Direction", value: "Backend systems / data platforms / practical AI" },
]

const homeProfileSummary =
  "Most of my recent work has been in software engineering, cloud data pipelines, and applied AI, with robotics still part of the broader engineering story."

export default function Home() {
  return (
    <div className="site-shell min-h-screen text-[var(--carbon)]">
      <main className="relative z-[1] pb-20 md:pb-28">
        <section id="intro" className="scroll-mt-24 border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-7 xl:px-12">
            <div className="grid gap-y-14 xl:min-h-[calc(100svh-4rem)] xl:grid-cols-12 xl:gap-x-8">
              <div className="pt-12 xl:col-span-2 xl:pt-20">
                <SectionRail
                  index="01"
                  title="Intro"
                  note="A quick first read before the deeper chapters."
                />
              </div>

              <div className="xl:col-span-10">
                <div className="home-landing-stage xl:sticky xl:top-16 xl:min-h-[calc(100svh-5rem)]">
                  <div className="grid h-full gap-10 py-12 xl:grid-cols-12 xl:gap-x-8 xl:py-12">
                    <div className="flex flex-col justify-between gap-10 xl:col-span-8">
                      <div>
                        <Reveal className="annotation-text text-[var(--technical-green)]">
                          University of Waterloo / Mechatronics Engineering / AI Minor
                        </Reveal>

                        <Reveal as="h1" className="home-dive-title mt-8 max-w-[8.6ch] text-[var(--carbon)]" delayMs={40}>
                          <span className="block">Parsa</span>
                          <span className="block pl-[0.18em] text-[var(--technical-green)]">Ahmadi</span>
                        </Reveal>

                        <Reveal
                          className="mt-8 max-w-[11ch] font-display text-[clamp(1.8rem,3vw,3.35rem)] uppercase leading-[0.94] tracking-[-0.05em] text-[var(--carbon-soft)]"
                          delayMs={110}
                        >
                          Software + AI + Mechatronics
                        </Reveal>
                      </div>

                      <div className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.9fr)]">
                        <Reveal className="editorial-lead max-w-[60ch] text-[var(--carbon-soft)]" delayMs={180}>
                          {portfolioData.profile.homeSummary}
                        </Reveal>

                        <Reveal className="grid gap-4" delayMs={220}>
                          <div className="grid gap-3 annotation-note">
                            {heroNotes.map((fact, index) => (
                              <div
                                key={fact.label}
                                className="grid gap-1 border-b border-[color:var(--rule-neutral)] pb-3 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-start"
                              >
                                <span className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                                  0{index + 1} / {fact.label}
                                </span>
                                <span className="text-[0.95rem] leading-7 text-[var(--carbon)]">{fact.value}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                            <ArrowDown className="h-4 w-4 text-[var(--signal-copper)]" />
                            Scroll through the chapters or use the index
                          </div>
                        </Reveal>
                      </div>
                    </div>

                    <div className="xl:col-span-4 xl:py-2">
                      <Reveal
                        variant="clip"
                        className="home-dive-panel border border-[color:var(--rule-neutral)] bg-[rgba(251,248,242,0.82)] p-5 sm:p-6"
                        delayMs={180}
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <p className="annotation-text text-[var(--technical-green)]">Home / Index</p>
                            <p className="mt-3 max-w-[24ch] text-[0.98rem] leading-7 text-[var(--carbon-soft)]">
                              Start with a chapter and let the rest of the page follow naturally.
                            </p>
                          </div>
                          <span className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                            Start / 01
                          </span>
                        </div>

                        <div className="mt-7 grid gap-x-5 gap-y-4 sm:grid-cols-2">
                          {homeIndexLinks.map((item) => (
                            <div key={item.label} className="border-t border-[color:var(--rule-neutral)] pt-3">
                              <p className="mb-2 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                                {item.index}
                              </p>
                              <Link
                                href={item.href}
                                className="group inline-flex items-center gap-3 font-display text-[1.28rem] uppercase leading-[0.98] tracking-[-0.04em] text-[var(--carbon)] transition-colors hover:text-[var(--technical-green)]"
                              >
                                <span>{item.label}</span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                              </Link>
                            </div>
                          ))}
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="selected-work" className="scroll-mt-24 border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-20 sm:px-7 md:py-24 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-28">
            <div className="xl:col-span-2">
              <SectionRail
                index="02"
                title="Selected Work"
                note="A few projects I still like revisiting."
              />
            </div>

            <div className="grid gap-16 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-5 xl:pt-5">
                  <p className="annotation-text text-[var(--signal-copper)]">Case File / 01</p>
                  <h2 className="type-display-feature mt-4 max-w-[11ch] text-[var(--technical-green)]">
                    {featuredProject.title}
                  </h2>
                  <p className="mt-5 font-mono text-[0.74rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {featuredProject.period} / Software + Machine Learning
                  </p>
                  <p className="editorial-copy mt-8 max-w-[36ch] text-[var(--carbon-soft)]">
                    {featuredProject.shortDescription}
                  </p>
                  <div className="mt-8 grid gap-2 border-t border-[color:var(--rule-neutral)] pt-4">
                    <p className="annotation-text text-[var(--technical-green)]">Stack</p>
                    <p className="font-mono text-[0.76rem] uppercase tracking-[0.17em] text-muted-foreground">
                      {featuredProject.technologies.join(" / ")}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                    <Link href={getProjectHref(featuredProject.slug)} className="field-link text-[var(--technical-green)]">
                      Open case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {featuredProject.repositoryUrl ? (
                      <Link
                        href={featuredProject.repositoryUrl}
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
                      Fig. 02
                    </div>
                    <div className="aspect-[16/11] overflow-hidden border border-[rgba(251,248,242,0.14)] bg-[rgba(251,248,242,0.08)]">
                      <Image
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        width={1200}
                        height={840}
                        className="home-figure-media h-full w-full object-contain p-6 sm:p-10"
                      />
                    </div>
                    <figcaption className="home-figure-caption mt-4 flex flex-col gap-2 border-t border-[rgba(251,248,242,0.14)] pt-4 sm:flex-row sm:items-start sm:justify-between">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[rgba(251,248,242,0.58)]">
                        Modeling / API / Frontend
                      </span>
                      <span className="home-figure-note max-w-[28ch] font-editorial text-sm leading-6 text-[rgba(251,248,242,0.82)]">
                        Historical match data, engineered features, and a full-stack interface brought into one applied
                        machine learning workflow.
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </Reveal>

              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <Reveal variant="clip" className="xl:col-span-7" delayMs={80}>
                  <figure className="home-figure group relative overflow-hidden border border-[color:var(--rule-neutral)] bg-[rgba(255,255,255,0.38)]">
                    <div className="home-figure-label absolute left-4 top-4 z-10 border border-[rgba(23,23,23,0.14)] bg-[rgba(251,248,242,0.86)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                      Fig. 03
                    </div>
                    <div className="aspect-[16/11]">
                      <Image
                        src={roboticsProject.image}
                        alt={roboticsProject.title}
                        width={1200}
                        height={850}
                        className="home-figure-media h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="home-figure-caption border-t border-[color:var(--rule-neutral)] px-4 py-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground sm:px-6">
                      Physical system / sensing / calibrated motion / game logic
                    </figcaption>
                  </figure>
                </Reveal>

                <div className="xl:col-span-5 xl:pl-6">
                  <p className="annotation-text text-[var(--signal-copper)]">Case File / 02</p>
                  <h2 className="type-display-feature mt-4 max-w-[12ch] text-[var(--carbon)]">{roboticsProject.title}</h2>
                  <p className="mt-5 font-mono text-[0.74rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {roboticsProject.period} / Robotics + Control
                  </p>
                  <p className="editorial-copy mt-8 max-w-[34ch] text-[var(--carbon-soft)]">
                    {roboticsProject.shortDescription}
                  </p>
                  <p className="editorial-copy mt-6 max-w-[34ch] text-[var(--carbon-soft)]">
                    Designed and programmed an autonomous robot that reads the board, reasons through the next move,
                    and executes it with reliable physical alignment across the grid.
                  </p>
                  <div className="mt-8 grid gap-2 border-t border-[color:var(--rule-neutral)] pt-4">
                    <p className="annotation-text text-[var(--technical-green)]">Stack</p>
                    <p className="font-mono text-[0.76rem] uppercase tracking-[0.17em] text-muted-foreground">
                      {roboticsProject.technologies.join(" / ")}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                    <Link href={getProjectHref(roboticsProject.slug)} className="field-link text-[var(--technical-green)]">
                      Open case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {roboticsProject.repositoryUrl ? (
                      <Link
                        href={roboticsProject.repositoryUrl}
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

              <Reveal className="flex flex-col gap-4 border-t border-[color:var(--rule-neutral)] pt-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="annotation-note max-w-[36ch]">
                  The homepage stays selective on purpose. The full project route carries the larger case-study index.
                </p>
                <Link href="/projects" className="field-link w-fit text-[var(--technical-green)]">
                  View all projects
                  <MoveRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-20 sm:px-7 md:py-24 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-28">
            <div className="xl:col-span-2">
              <SectionRail
                index="03"
                title="Experience"
                note="Recent work that shaped how I build."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-8">
                  <p className="annotation-text text-[var(--signal-copper)]">Most Recent / 2026</p>
                  <h2 className="type-display-section mt-4 max-w-[10ch] text-[var(--technical-green)]">
                    {latestExperience.company}
                  </h2>
                  <p className="mt-4 font-display text-[clamp(1.35rem,2.1vw,2rem)] uppercase tracking-[-0.03em] text-[var(--carbon-soft)]">
                    {latestExperience.role}
                  </p>
                  <p className="mt-3 font-mono text-[0.76rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {latestExperience.period} / {latestExperience.location}
                  </p>
                  <p className="editorial-lead mt-8 max-w-[60ch] text-[var(--carbon-soft)]">{latestExperience.summary}</p>

                  <div className="mt-10 grid gap-4 border-t border-[color:var(--rule-neutral)] pt-5">
                    {latestExperience.highlights.slice(0, 3).map((highlight, index) => (
                      <Reveal
                        key={highlight}
                        className="grid gap-3 border-b border-[color:var(--rule-neutral)] pb-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start"
                        delayMs={index * 80}
                      >
                        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--signal-copper)]">
                          0{index + 1}
                        </span>
                        <p className="editorial-copy text-[var(--carbon-soft)]">{highlight}</p>
                      </Reveal>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 border-t border-[color:var(--rule-neutral)] pt-5 xl:col-span-4 xl:border-t-0 xl:pl-6 xl:pt-0">
                  <div>
                    <p className="annotation-text text-[var(--technical-green)]">Technologies</p>
                    <p className="mt-4 font-mono text-[0.74rem] uppercase tracking-[0.17em] text-muted-foreground">
                      {latestExperience.technologies.join(" / ")}
                    </p>
                  </div>

                  <div className="grid gap-5 border-t border-[color:var(--rule-neutral)] pt-5">
                    {supportingExperiences.map((experience, index) => (
                      <Reveal key={experience.id} className="border-b border-[color:var(--rule-neutral)] pb-5" delayMs={index * 70}>
                        <p className="font-display text-[1.7rem] uppercase tracking-[-0.04em] text-[var(--carbon)]">
                          {experience.company}
                        </p>
                        <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                          {experience.period}
                        </p>
                        <p className="mt-3 text-[0.98rem] leading-7 text-[var(--carbon-soft)]">{experience.summary}</p>
                      </Reveal>
                    ))}
                  </div>

                  <Link href="/about" className="field-link w-fit text-[var(--technical-green)]">
                    Full background
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-24 border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-20 sm:px-7 md:py-24 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-28">
            <div className="xl:col-span-2">
              <SectionRail
                index="04"
                title="Journey"
                note="The longer Waterloo story lives here."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-5">
                  <p className="annotation-text text-[var(--signal-copper)]">Preview / Timeline</p>
                  <h2 className="type-display-section mt-4 max-w-[9ch] text-[var(--technical-green)]">Journey</h2>
                  <p className="editorial-lead mt-8 max-w-[34ch] text-[var(--carbon-soft)]">
                    A new route for the full chronology: early school chapters, Waterloo terms, co-ops, overlapping
                    engineering work, and the grades section without turning it into a transcript dump.
                  </p>
                  <div className="mt-8 border-t border-[color:var(--rule-neutral)] pt-4">
                    <Link href={journeyHref} className="field-link w-fit text-[var(--technical-green)]">
                      Explore full journey
                      <MoveRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="xl:col-span-7 xl:pl-6">
                  <div className="grid gap-5">
                    {journeyPreviewYears.map((year, index) => (
                      <Reveal
                        key={year.year}
                        className="grid gap-4 border-b border-[color:var(--rule-neutral)] pb-5 sm:grid-cols-[5.5rem_minmax(0,1fr)]"
                        delayMs={index * 70}
                      >
                        <p className="font-display text-[clamp(2rem,3.2vw,3rem)] uppercase leading-none tracking-[-0.06em] text-[var(--carbon)]">
                          {year.year}
                        </p>
                        <div className="grid gap-2">
                          {year.entries.map((entry) => (
                            <div
                              key={entry}
                              className="grid gap-1 border-t border-[color:var(--rule-neutral)] pt-3 first:border-t-0 first:pt-0 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start"
                            >
                              <span className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                                LOG
                              </span>
                              <span className="font-display text-[1.25rem] uppercase leading-[1.05] tracking-[-0.04em] text-[var(--technical-green)]">
                                {entry}
                              </span>
                            </div>
                          ))}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="profile" className="scroll-mt-24 border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-20 sm:px-7 md:py-24 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-28">
            <div className="xl:col-span-2">
              <SectionRail
                index="05"
                title="Profile"
                note="How I think about building things."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-7">
                  <p className="annotation-text text-[var(--signal-copper)]">Profile / Working Thesis</p>
                  <p className="mt-5 font-display text-[clamp(2.15rem,4.6vw,4.6rem)] uppercase leading-[0.95] tracking-[-0.05em] text-[var(--technical-green)]">
                    <span className="block">I build software,</span>
                    <span className="block">data systems,</span>
                    <span className="block">and applied AI.</span>
                  </p>
                </div>

                <div className="xl:col-span-5 xl:pl-6">
                  <p className="editorial-copy max-w-[34ch] text-[var(--carbon-soft)]">
                    {portfolioData.profile.aboutParagraphs[0]}
                  </p>
                  <p className="editorial-copy mt-6 max-w-[34ch] text-[var(--carbon-soft)]">
                    {homeProfileSummary}
                  </p>
                </div>
              </Reveal>

              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)]">
                <div className="grid gap-5">
                  {highlightedSkillGroups.map((group) => (
                    <div key={group.label} className="grid gap-2 border-b border-[color:var(--rule-neutral)] pb-4 sm:grid-cols-[11rem_minmax(0,1fr)]">
                      <p className="annotation-text text-[var(--technical-green)]">{group.label}</p>
                      <p className="font-mono text-[0.74rem] uppercase tracking-[0.17em] text-muted-foreground">
                        {group.items.join(" / ")}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 border-t border-[color:var(--rule-neutral)] pt-5 annotation-note lg:border-t-0 lg:pl-10 lg:pt-0">
                  <div className="flex items-start justify-between gap-6">
                    <span>Education</span>
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
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="ask-parsa"
          className="scroll-mt-24 border-b border-[rgba(251,248,242,0.12)] bg-[var(--technical-green)] text-[var(--paper-bright)]"
        >
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-20 sm:px-7 md:py-24 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-28">
            <div className="xl:col-span-2">
              <SectionRail
                index="06"
                title="Query"
                note="Ask whatever would help you get a clearer read."
                inverse
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[rgba(251,248,242,0.18)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-5">
                  <p className="annotation-text text-[var(--signal-copper)]">Query / Ask Parsa</p>
                  <h2 className="type-display-section mt-4 max-w-[9ch] text-[var(--paper-bright)]">Ask Parsa</h2>
                  <p className="editorial-lead mt-8 max-w-[34ch] text-[rgba(251,248,242,0.82)]">
                    Ask about recent experience, project background, Waterloo terms, or request the public resume. The
                    interaction should feel like querying the portfolio record, not opening a separate AI product.
                  </p>
                </div>

                <Reveal className="xl:col-span-7 xl:pl-6" delayMs={120}>
                  <AskParsaForm />
                </Reveal>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-20 sm:px-7 md:py-24 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-28">
            <div className="xl:col-span-2">
              <SectionRail
                index="07"
                title="Closing"
                note="A practical ending, with a more personal note."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <Reveal variant="clip" className="xl:col-span-5">
                  <figure className="home-figure group relative overflow-hidden border border-[color:var(--rule-neutral)] bg-[rgba(255,255,255,0.42)]">
                    <div className="home-figure-label absolute left-4 top-4 z-10 border border-[rgba(23,23,23,0.14)] bg-[rgba(251,248,242,0.88)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                      Fig. 07
                    </div>
                    <div className="aspect-[4/3] sm:aspect-[16/11] xl:aspect-[4/3]">
                      <Image
                        src={portfolioData.journey.photo.src}
                        alt={portfolioData.journey.photo.alt}
                        width={2200}
                        height={1650}
                        className="home-figure-media h-full w-full object-cover object-[50%_34%]"
                      />
                    </div>
                    <figcaption className="home-figure-caption grid gap-2 border-t border-[color:var(--rule-neutral)] px-4 py-4 sm:px-5">
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {portfolioData.journey.photo.caption}
                      </span>
                      <span className="home-figure-note max-w-[30ch] font-editorial text-[0.98rem] leading-7 text-[var(--carbon-soft)]">
                        The best part of the Waterloo chapter: the people in it.
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>

                <div className="xl:col-span-7 xl:pl-6">
                  <p className="annotation-text text-[var(--signal-copper)]">Closing / Contact</p>
                  <p className="mt-5 font-display text-[clamp(2.3rem,5vw,4.9rem)] uppercase leading-[0.94] tracking-[-0.05em] text-[var(--carbon)]">
                    Contact
                  </p>
                  <p className="editorial-copy mt-6 max-w-[38ch] text-[var(--carbon-soft)]">
                    If you want to reach out, everything is below. Direct contact, LinkedIn, GitHub, and the resume stay
                    easy to find, and the photo stays here because none of this happened alone.
                  </p>

                  <div className="mt-8 grid gap-8 border-t border-[color:var(--rule-neutral)] pt-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
                    <div>
                      {emailLink ? (
                        <div>
                          <p className="annotation-text text-[var(--technical-green)]">Direct contact</p>
                          {hasSplitEmailDisplay ? (
                            <Link
                              href={emailLink.href}
                              className="mt-4 inline-flex w-fit flex-col text-[var(--technical-green)]"
                            >
                              <span className="font-display text-[clamp(1.8rem,3vw,2.65rem)] uppercase leading-[0.92] tracking-[-0.05em]">
                                {emailDisplayParts[0]}
                              </span>
                              <span className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                                @{emailDisplayParts[1]}
                              </span>
                            </Link>
                          ) : (
                            <Link
                              href={emailLink.href}
                              className="mt-4 block break-words font-display text-[clamp(1.35rem,2.3vw,2rem)] uppercase tracking-[-0.04em] text-[var(--technical-green)]"
                            >
                              {emailLink.display}
                            </Link>
                          )}
                        </div>
                      ) : null}
                    </div>

                    <div className="grid gap-3">
                      {socialLinks.map((link) => (
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

                      <Link href={resumeHref} className="field-link w-fit text-[var(--technical-green)]">
                        Resume PDF
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <Link href={journeyHref} className="field-link w-fit text-[var(--technical-green)]">
                        Full journey
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
