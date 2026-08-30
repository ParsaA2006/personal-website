import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Reveal from "@/components/home/reveal"
import SectionRail from "@/components/site/section-rail"
import {
  type AcademicTerm,
  type TimelineEvent,
  getAcademicTerms,
  getPublicResumeHref,
  getTimelineEvents,
  portfolioData,
} from "@/lib/portfolio-data"

const timelineEvents = getTimelineEvents()
const academicTerms = getAcademicTerms()
const termById = new Map(academicTerms.map((term) => [term.id, term]))
const foundationEvents = timelineEvents.filter((event) => event.chapter === "Foundation")
const yearChapters = ["2024", "2025", "2026"] as const
const resumeHref = getPublicResumeHref()
const yearRailNotes: Record<(typeof yearChapters)[number], string> = {
  "2024": "The first Waterloo stretch.",
  "2025": "The year everything started stacking at once.",
  "2026": "A more software-heavy chapter, still tied to school.",
}

function getParallelAnchorId(event: TimelineEvent, mainEvents: TimelineEvent[]) {
  if (!mainEvents.length) {
    return undefined
  }

  if (event.relatedTermId) {
    const relatedMainEvent = mainEvents.find((candidate) => candidate.relatedTermId === event.relatedTermId)

    if (relatedMainEvent) {
      return relatedMainEvent.id
    }
  }

  const nextMainEvent = mainEvents.find((candidate) => candidate.sortOrder > event.sortOrder)
  return nextMainEvent?.id ?? mainEvents[mainEvents.length - 1]?.id
}

export const metadata: Metadata = {
  title: portfolioData.seo.pages.journey.title,
  description: portfolioData.seo.pages.journey.description,
}

function AcademicTermSummary({ term }: { term: AcademicTerm }) {
  const isCurrent = term.status === "current"

  return (
    <div
      className={`mt-6 grid gap-5 border-t border-[color:var(--rule-neutral)] pt-4 ${
        isCurrent ? "lg:grid-cols-[minmax(15rem,18rem)_minmax(0,1fr)]" : "lg:grid-cols-[12rem_minmax(0,1fr)]"
      }`}
    >
      <div className="min-w-0">
        <p className="annotation-text text-[var(--signal-copper)]">{term.term}</p>
        <p
          className={`mt-3 font-display uppercase tracking-[-0.07em] text-[var(--technical-green)] ${
            isCurrent
              ? "max-w-[5ch] text-[clamp(3rem,4.6vw,4.9rem)] leading-[0.78]"
              : "text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.86]"
          }`}
        >
          {typeof term.average === "number" ? term.average.toFixed(2) : "Current"}
        </p>
        <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
          {typeof term.average === "number" ? "Term average" : "No grades yet"}
        </p>
        {term.standing ? (
          <p className="mt-3 text-[0.96rem] leading-7 text-[var(--carbon-soft)]">{term.standing}</p>
        ) : null}
        {isCurrent ? (
          <p className="mt-4 max-w-[18ch] text-[0.96rem] leading-7 text-[var(--carbon-soft)]">
            Current or upcoming term. Courses are set, but there are no grades yet.
          </p>
        ) : null}
      </div>

      <div className="grid min-w-0 gap-3">
        {term.courses.map((course) => (
          <div
            key={course.code}
            className="grid gap-2 border-b border-[color:var(--rule-neutral)] pb-3 sm:grid-cols-[minmax(0,1fr)_auto]"
          >
            <div className="min-w-0">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--signal-copper)]">{course.code}</p>
              <p className="mt-1 text-[0.98rem] leading-7 text-[var(--carbon-soft)]">{course.name}</p>
            </div>
            <div className="font-display text-[1.8rem] uppercase leading-none tracking-[-0.05em] text-[var(--carbon)]">
              {typeof course.grade === "number" ? course.grade : "--"}
            </div>
          </div>
        ))}

        {term.notes?.length ? (
          <div className="grid gap-2 pt-1">
            {term.notes.map((note) => (
              <p key={note} className="annotation-note text-[var(--carbon-soft)]">
                {note}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

function TimelineEntry({ event }: { event: TimelineEvent }) {
  const relatedTerm = event.relatedTermId ? termById.get(event.relatedTermId) : undefined
  const isParallel = event.lane === "parallel"
  const shouldRenderAcademicTerm = event.type === "academic-term" && relatedTerm

  return (
    <Reveal className={isParallel ? "timeline-parallel-panel min-w-0 pb-6" : "timeline-term-panel min-w-0 pb-8"}>
      {isParallel ? (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="annotation-text text-[var(--signal-copper)]">Parallel</span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">{event.dateLabel}</span>
        </div>
      ) : (
        <p className="annotation-text text-[var(--signal-copper)]">{event.dateLabel}</p>
      )}
      <h3
        className={`mt-4 font-display uppercase leading-[0.94] tracking-[-0.05em] ${
          isParallel
            ? "text-[clamp(1.7rem,2.6vw,2.45rem)] text-[var(--carbon)]"
            : "text-[clamp(2.4rem,4vw,3.8rem)] text-[var(--technical-green)]"
        }`}
      >
        {event.title}
      </h3>
      <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">{event.subtitle}</p>
      <p className="mt-5 max-w-[60ch] text-[1rem] leading-7 text-[var(--carbon-soft)]">{event.description}</p>

      {event.location || event.evaluation ? (
        <div className="mt-5 grid gap-3 border-t border-[color:var(--rule-neutral)] pt-4 annotation-note sm:grid-cols-2">
          {event.location ? (
            <div className="flex items-start justify-between gap-6">
              <span>Location</span>
              <span className="text-right text-[var(--carbon)]">{event.location}</span>
            </div>
          ) : null}
          {event.evaluation ? (
            <div className="flex items-start justify-between gap-6">
              <span>Evaluation</span>
              <span className="text-right text-[var(--carbon)]">{event.evaluation}</span>
            </div>
          ) : null}
        </div>
      ) : null}

      {event.type !== "academic-term" && relatedTerm ? (
        <div className="mt-5 border-t border-[color:var(--rule-neutral)] pt-4">
          <p className="annotation-note">
            Runs alongside {relatedTerm.term} in the main academic lane. The full term breakdown stays there so this
            column can stay focused on the parallel work itself.
          </p>
        </div>
      ) : null}

      {shouldRenderAcademicTerm ? <AcademicTermSummary term={relatedTerm} /> : null}
    </Reveal>
  )
}

export default function JourneyPage() {
  return (
    <div className="site-shell min-h-screen text-[var(--carbon)]">
      <main className="relative z-[1] pb-20 md:pb-28">
        <section className="border-b border-[color:var(--rule-neutral)]">
          <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 pb-16 pt-12 sm:px-7 md:pb-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:pb-24 xl:pt-16">
            <div className="xl:col-span-2">
              <SectionRail
                index="01"
                title="Journey"
                note="Mostly school, work, and how they overlapped."
              />
            </div>

            <div className="grid gap-10 xl:col-span-10">
              <Reveal className="grid gap-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-7">
                  <p className="annotation-text text-[var(--signal-copper)]">Field Record / Chronology</p>
                  <h1 className="type-display-section mt-4 max-w-[9ch] text-[var(--technical-green)]">Journey</h1>
                  <p className="editorial-lead mt-8 max-w-[40ch] text-[var(--carbon-soft)]">
                    {portfolioData.journey.introduction} This page is meant to read like an authored sequence through
                    time, not a resume timeline or transcript table.
                  </p>
                </div>

                <div className="grid gap-4 border-t border-[color:var(--rule-neutral)] pt-5 xl:col-span-5 xl:border-t-0 xl:pl-6 xl:pt-2">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Waterloo / chronology / August 30, 2026
                  </p>
                  <p className="text-[1rem] leading-7 text-[var(--carbon-soft)]">
                    Academic terms stay connected to the co-op sequence and overlapping work, so the story reads as one
                    evolving engineering track instead of disconnected categories.
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-[color:var(--rule-neutral)] pt-4">
                    <Link href={resumeHref} className="field-link text-[var(--carbon)]">
                      Resume PDF
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/" className="field-link text-[var(--technical-green)]">
                      Back home
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal variant="clip" className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-5">
                  <figure className="route-figure">
                    <div className="absolute left-4 top-4 z-10 border border-[rgba(23,23,23,0.14)] bg-[rgba(251,248,242,0.88)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                      Fig. 01
                    </div>
                    <div className="aspect-[16/11]">
                      <Image
                        src={portfolioData.journey.photo.src}
                        alt={portfolioData.journey.photo.alt}
                        width={2200}
                        height={1650}
                        priority
                        className="h-full w-full object-cover object-[50%_38%]"
                      />
                    </div>
                    <figcaption className="grid gap-2 border-t border-[color:var(--rule-neutral)] px-4 py-4 sm:px-5">
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {portfolioData.journey.photo.caption}
                      </span>
                      <span className="font-editorial text-[0.98rem] leading-7 text-[var(--carbon-soft)]">
                        Yes, this photo is here again. I like it too much, and it says more about Waterloo than a polished profile shot ever could.
                      </span>
                    </figcaption>
                  </figure>
                </div>

                <div className="grid gap-5 xl:col-span-7 xl:pl-6">
                  <p className="annotation-text text-[var(--signal-copper)]">Foundation sequence</p>
                  <div className="grid gap-4 border-t border-[color:var(--rule-neutral)] pt-4">
                    {foundationEvents.map((event, index) => (
                      <Reveal
                        key={event.id}
                        className="grid gap-3 border-b border-[color:var(--rule-neutral)] pb-4 sm:grid-cols-[10rem_minmax(0,1fr)]"
                        delayMs={index * 60}
                      >
                        <div>
                          <p className="font-display text-[1.7rem] uppercase tracking-[-0.04em] text-[var(--technical-green)]">
                            {event.title}
                          </p>
                          <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                            {event.subtitle}
                          </p>
                        </div>
                        <p className="text-[1rem] leading-7 text-[var(--carbon-soft)]">{event.description}</p>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {yearChapters.map((year, yearIndex) => {
          const chapterEvents = timelineEvents.filter((event) => event.chapter === year)
          const mainEvents = chapterEvents.filter((event) => event.lane === "main")
          const parallelEvents = chapterEvents.filter((event) => event.lane === "parallel")
          const parallelEventsByAnchor = parallelEvents.reduce((map, event) => {
            const anchorId = getParallelAnchorId(event, mainEvents)

            if (!anchorId) {
              return map
            }

            const bucket = map.get(anchorId) ?? []
            bucket.push(event)
            map.set(anchorId, bucket)
            return map
          }, new Map<string, TimelineEvent[]>())

          return (
            <section key={year} className="border-b border-[color:var(--rule-neutral)]">
              <div className="mx-auto grid max-w-[1440px] gap-y-16 px-5 py-16 sm:px-7 md:py-20 xl:grid-cols-12 xl:gap-x-8 xl:px-12 xl:py-24">
                <div className="xl:col-span-2">
                  <SectionRail
                    index={`0${yearIndex + 2}`}
                    title={year}
                    note={yearRailNotes[year]}
                  />
                </div>

                <div className="grid gap-10 xl:col-span-10">
                  <Reveal className="grid gap-8 border-t border-[color:var(--rule-neutral)] pt-8 xl:grid-cols-12 xl:gap-x-8">
                    <div className="xl:col-span-3">
                      <p className="font-display text-[clamp(4rem,8vw,7rem)] uppercase leading-[0.84] tracking-[-0.08em] text-[var(--carbon)]">
                        {year}
                      </p>
                    </div>

                    {parallelEvents.length ? (
                      <div className="grid min-w-0 gap-6 xl:col-span-9">
                        {mainEvents.map((event) => {
                          const anchoredParallelEvents = parallelEventsByAnchor.get(event.id) ?? []

                          return (
                            <div key={event.id} className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(16rem,0.48fr)] xl:gap-x-10">
                              <TimelineEntry event={event} />
                              {anchoredParallelEvents.length ? (
                                <div className="grid min-w-0 gap-6">
                                  {anchoredParallelEvents.map((parallelEvent) => (
                                    <TimelineEntry key={parallelEvent.id} event={parallelEvent} />
                                  ))}
                                </div>
                              ) : (
                                <div aria-hidden className="hidden xl:block" />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="grid gap-8 xl:col-span-9 xl:grid-cols-[minmax(0,1fr)_minmax(16rem,0.48fr)] xl:gap-x-10">
                        <div className="grid min-w-0 gap-6">
                          {mainEvents.map((event) => (
                            <TimelineEntry key={event.id} event={event} />
                          ))}
                        </div>

                        <div className="grid min-w-0 gap-6 pt-2 xl:pt-14">
                          <Reveal className="border-t border-[color:var(--rule-neutral)] pt-4">
                            <p className="annotation-note max-w-[24ch]">
                              This chapter stays on a single main track without an overlapping parallel lane.
                            </p>
                          </Reveal>
                        </div>
                      </div>
                    )}
                  </Reveal>
                </div>
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
}
