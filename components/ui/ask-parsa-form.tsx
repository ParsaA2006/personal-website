"use client"

import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"

interface AskResponse {
  error?: string
  result?: string
  resumeUrl?: string
}

const FALLBACK_ERROR_MESSAGE = "Ask Parsa AI couldn't answer right now. Please try again in a moment."
const SUGGESTED_QUERIES = [
  "What did Parsa work on at SPS Commerce?",
  "What kind of software roles is Parsa targeting?",
  "Which projects best show Parsa's AI and mechatronics background?",
  "Show Parsa's resume.",
]

export default function AskParsaForm() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [resumeUrl, setResumeUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedQuery = query.trim()
    if (!trimmedQuery) {
      return
    }

    setLoading(true)
    setResult(null)
    setResumeUrl(null)
    setError(null)

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmedQuery }),
      })

      const data = (await response.json()) as AskResponse

      if (!response.ok) {
        throw new Error(data.error || FALLBACK_ERROR_MESSAGE)
      }

      setResult(data.result || "No answer found.")
      setResumeUrl(data.resumeUrl || null)
    } catch (error) {
      setError(error instanceof Error ? error.message : FALLBACK_ERROR_MESSAGE)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <label htmlFor="ask-parsa-query" className="annotation-text block text-[var(--signal-copper)]">
          Enter query
        </label>

        <div className="flex flex-col gap-4 border-b border-[rgba(255,255,255,0.24)] pb-4 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <input
            id="ask-parsa-query"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ask about my work..."
            className="min-h-[3.6rem] min-w-0 w-full bg-transparent px-0 py-2 font-display text-[clamp(1.3rem,2.4vw,2.6rem)] leading-[0.95] tracking-[-0.05em] text-[var(--paper-bright)] placeholder:font-editorial placeholder:text-[rgba(251,248,242,0.58)] focus:outline-none"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 border border-[rgba(255,255,255,0.28)] px-5 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--paper-bright)] transition-colors hover:border-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--signal-copper)] disabled:cursor-not-allowed disabled:opacity-55 sm:w-fit"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
            <span>Run</span>
          </button>
        </div>
      </form>

      <div className="grid gap-3 border-b border-[rgba(255,255,255,0.14)] pb-6 md:grid-cols-2">
        {SUGGESTED_QUERIES.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => setQuery(suggestion)}
            className="group flex items-start justify-between gap-4 text-left text-[rgba(251,248,242,0.84)] transition-colors hover:text-[var(--paper-bright)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--signal-copper)]"
          >
            <span className="font-editorial text-[1rem] leading-7">{suggestion}</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--signal-copper)] opacity-80 transition-transform duration-300 group-hover:translate-x-1">
              Fill
            </span>
          </button>
        ))}
      </div>

      <div aria-live="polite" className="space-y-4">
        {result || resumeUrl ? (
          <div className="home-query-response border border-[rgba(255,255,255,0.2)] bg-[rgba(251,248,242,0.04)] p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.12)] pb-3">
              <span className="annotation-text text-[rgba(251,248,242,0.72)]">Result / 01</span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--signal-copper)]">
                Ask Parsa
              </span>
            </div>

            {result ? (
              <p className="max-w-[62ch] whitespace-pre-line font-editorial text-[1rem] leading-8 text-[var(--paper-bright)] sm:text-[1.04rem]">
                {result}
              </p>
            ) : null}

            {resumeUrl ? (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="field-link mt-6 text-[var(--paper-bright)]"
              >
                Open resume PDF
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        ) : null}

        {error ? (
          <div className="border border-[rgba(163,86,52,0.45)] bg-[rgba(163,86,52,0.08)] px-4 py-3 text-sm text-[var(--paper-bright)]">
            {error}
          </div>
        ) : null}
      </div>
    </div>
  )
}
