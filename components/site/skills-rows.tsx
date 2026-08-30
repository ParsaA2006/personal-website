import Reveal from "@/components/home/reveal"
import type { SkillGroup } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

type SkillsRowsProps = {
  className?: string
  groups: SkillGroup[]
}

export default function SkillsRows({ className, groups }: SkillsRowsProps) {
  return (
    <div className={cn("grid gap-5", className)}>
      {groups.map((group, index) => (
        <Reveal key={group.label} className="skills-row border-t border-[color:var(--rule-neutral)] pt-5" delayMs={index * 60}>
          <p className="skills-row-label annotation-text text-[var(--technical-green)]">{group.label}</p>
          <p className="skills-row-items font-mono text-[0.75rem] uppercase leading-7 tracking-[0.17em] text-muted-foreground">
            {group.items.join(" / ")}
          </p>
        </Reveal>
      ))}
    </div>
  )
}
