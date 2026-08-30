"use client"

import Reveal from "@/components/home/reveal"
import { cn } from "@/lib/utils"

type SectionRailProps = {
  index: string
  title: string
  note: string
  inverse?: boolean
  className?: string
}

export default function SectionRail({ index, title, note, inverse = false, className }: SectionRailProps) {
  return (
    <Reveal className={cn("xl:sticky xl:top-24", className)}>
      <p className={cn("annotation-text", inverse ? "text-[var(--signal-copper)]" : "text-[var(--signal-copper)]")}>
        {index} / {title}
      </p>
      <div className={cn("mt-4 h-14 w-px", inverse ? "bg-[rgba(251,248,242,0.18)]" : "bg-[color:var(--rule-neutral)]")} />
      <p className={cn("annotation-note mt-4 max-w-[13rem]", inverse ? "text-[rgba(251,248,242,0.68)]" : "")}>
        {note}
      </p>
    </Reveal>
  )
}
