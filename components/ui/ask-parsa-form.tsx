"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, Search } from "lucide-react"

interface AskResponse {
  error?: string
  result?: string
  resumeUrl?: string
}

const FALLBACK_ERROR_MESSAGE = "Ask Parsa AI couldn't answer right now. Please try again in a moment."

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
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-xl flex-col gap-2">
      <div className="flex items-center gap-2">
        <Input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ask anything about Parsa..."
          className="flex-1"
          disabled={loading}
        />
        <Button type="submit" disabled={loading || !query.trim()} size="icon" variant="secondary">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
        </Button>
      </div>
      {result || resumeUrl ? (
        <div className="whitespace-pre-line rounded bg-muted p-4 text-sm text-muted-foreground">
          {result ? <p>{result}</p> : null}
          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Download Resume (PDF)
            </a>
          ) : null}
        </div>
      ) : null}
      {error ? <div className="text-sm text-red-500">{error}</div> : null}
    </form>
  )
}
