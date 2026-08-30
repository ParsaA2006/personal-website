"use client"

import { createElement, type CSSProperties, type ElementType, type HTMLAttributes, type ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  children: ReactNode
  delayMs?: number
  threshold?: number
  variant?: "rise" | "clip" | "line"
}

export default function Reveal({
  as = "div",
  children,
  className,
  delayMs = 0,
  threshold = 0.18,
  variant = "rise",
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (mediaQuery.matches) {
      setIsVisible(true)
      return
    }

    const node = ref.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [threshold])

  return createElement(as, {
    ref,
    className: cn("home-reveal", isVisible && "is-visible", className),
    "data-reveal-variant": variant,
    style: {
      ...(style as CSSProperties),
      animationDelay: isVisible && delayMs ? `${delayMs}ms` : undefined,
    } as CSSProperties,
    ...props,
    children,
  })
}
