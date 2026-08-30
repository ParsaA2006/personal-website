"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, MoveRight, X } from "lucide-react"
import { useEffect, useState } from "react"
import { getJourneyPath, portfolioData } from "@/lib/portfolio-data"

const journeyPath = getJourneyPath()

const navItems = [
  { name: "Home", path: "/", index: "01" },
  { name: "About", path: "/about", index: "02" },
  { name: "Journey", path: journeyPath, index: "03" },
  { name: "Projects", path: "/projects", index: "04" },
  { name: "Resume", path: "/resume", index: "05" },
]

const homeSections = [
  { name: "Intro", path: "#intro", index: "01" },
  { name: "Work", path: "#selected-work", index: "02" },
  { name: "Experience", path: "#experience", index: "03" },
  { name: "Journey", path: "#journey", index: "04" },
  { name: "Profile", path: "#profile", index: "05" },
  { name: "Query", path: "#ask-parsa", index: "06" },
  { name: "Closing", path: "#contact", index: "07" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeHomeSection, setActiveHomeSection] = useState(homeSections[0].path)
  const isHome = pathname === "/"
  const activeHomeLabel = homeSections.find((section) => section.path === activeHomeSection) ?? homeSections[0]

  useEffect(() => {
    const resetHomeMotionVars = () => {
      document.documentElement.style.setProperty("--home-scroll", "0")
      document.documentElement.style.setProperty("--home-shift-x-neg", "0px")
      document.documentElement.style.setProperty("--home-shift-x-pos", "0px")
      document.documentElement.style.setProperty("--home-shift-y-xs-neg", "0px")
      document.documentElement.style.setProperty("--home-shift-y-sm-neg", "0px")
      document.documentElement.style.setProperty("--home-shift-y-md-neg", "0px")
    }

    if (!isHome) {
      setScrollProgress(0)
      setActiveHomeSection(homeSections[0].path)
      resetHomeMotionVars()
      return
    }

    const sections = homeSections
      .map((section) => document.getElementById(section.path.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section))

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0

      const anchor = scrollTop + window.innerHeight * 0.36
      let currentSection = homeSections[0].path

      sections.forEach((section) => {
        if (section.offsetTop <= anchor) {
          currentSection = `#${section.id}`
        }
      })

      setScrollProgress(progress)
      setActiveHomeSection(currentSection)
      document.documentElement.style.setProperty("--home-scroll", progress.toFixed(4))
      document.documentElement.style.setProperty("--home-shift-x-neg", `${progress * -18}px`)
      document.documentElement.style.setProperty("--home-shift-x-pos", `${progress * 22}px`)
      document.documentElement.style.setProperty("--home-shift-y-xs-neg", `${progress * -12}px`)
      document.documentElement.style.setProperty("--home-shift-y-sm-neg", `${progress * -14}px`)
      document.documentElement.style.setProperty("--home-shift-y-md-neg", `${progress * -26}px`)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      resetHomeMotionVars()
    }
  }, [isHome])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[color:var(--rule-neutral)] bg-[rgba(251,248,242,0.9)] backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-7 xl:px-12">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 text-[var(--carbon)] transition-colors hover:text-[var(--technical-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--signal-copper)] focus-visible:ring-offset-2"
        >
          <span className="annotation-text hidden text-[var(--signal-copper)] sm:block">PA / 2026</span>
          <span className="min-w-0">
            <span className="font-display block truncate text-xl uppercase tracking-[-0.06em]">{portfolioData.profile.name}</span>
            <span className="font-mono hidden text-[0.64rem] uppercase tracking-[0.24em] text-muted-foreground md:block">
              Software + AI + Mechatronics
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "group rounded-[2px] font-mono text-[0.72rem] uppercase tracking-[0.22em] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--signal-copper)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper-bright)] focus-visible:text-[var(--technical-green)]",
                pathname === item.path ? "text-[var(--technical-green)]" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="mr-2 text-[var(--signal-copper)]">{item.index}</span>
              <span className="relative">
                {item.name}
                <span
                  className={cn(
                    "absolute left-0 top-full mt-1 h-px w-full origin-left bg-current transition-transform duration-300",
                    pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </span>
            </Link>
          ))}

          {isHome ? (
            <div className="hidden items-center gap-3 border-l border-[color:var(--rule-neutral)] pl-6 xl:flex">
              {homeSections.map((section) => (
                <Link
                  key={section.path}
                  href={section.path}
                  className={cn(
                    "group relative rounded-[2px] font-mono text-[0.63rem] uppercase tracking-[0.22em] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--signal-copper)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper-bright)] focus-visible:text-[var(--technical-green)]",
                    activeHomeSection === section.path
                      ? "text-[var(--technical-green)]"
                      : "text-muted-foreground hover:text-[var(--technical-green)]",
                  )}
                >
                  {section.index}
                  <span
                    className={cn(
                      "absolute left-0 top-full mt-[0.35rem] h-px w-full origin-left bg-current transition-transform duration-300",
                      activeHomeSection === section.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              ))}

              <div className="ml-2 hidden items-center gap-2 2xl:flex">
                <span className="h-3.5 w-px bg-[color:var(--rule-neutral)]" />
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                  {activeHomeLabel.index}
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--technical-green)]">
                  {activeHomeLabel.name}
                </span>
              </div>
            </div>
          ) : null}
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 border border-[color:var(--rule-neutral)] px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--technical-green)] transition-colors hover:border-[color:var(--rule-strong)] hover:bg-[rgba(255,255,255,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--signal-copper)] md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-site-nav"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          <span>Index</span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-site-nav"
          className="home-mobile-menu border-t border-[color:var(--rule-neutral)] bg-[rgba(251,248,242,0.98)] md:hidden"
        >
          <nav className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-6 sm:px-7">
            <div className="grid gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "flex items-center justify-between border-b border-[color:var(--rule-neutral)] pb-3 font-display text-[1.55rem] uppercase tracking-[-0.05em]",
                    pathname === item.path ? "text-[var(--technical-green)]" : "text-foreground",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>
                    <span className="mr-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--signal-copper)]">
                      {item.index}
                    </span>
                    {item.name}
                  </span>
                  <MoveRight className="h-4 w-4" />
                </Link>
              ))}
            </div>

            {isHome ? (
              <div className="grid gap-3">
                <p className="annotation-text text-muted-foreground">Home Index</p>
                <div className="grid gap-2">
                  {homeSections.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={cn(
                        "rounded-[2px] font-mono text-[0.75rem] uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--signal-copper)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper-bright)] focus-visible:text-[var(--technical-green)]",
                        activeHomeSection === item.path
                          ? "text-[var(--technical-green)]"
                          : "text-muted-foreground hover:text-[var(--technical-green)]",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="mr-2 text-[var(--signal-copper)]">{item.index}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </nav>
        </div>
      )}

      {isHome ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-transparent">
          <div
            className="h-full bg-[var(--signal-copper)] transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      ) : null}
    </header>
  )
}
