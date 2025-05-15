import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => Promise<any> // Accepts any response shape
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [resumeUrl, setResumeUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    setResumeUrl(null)
    setError(null)
    try {
      const res = await onSearch(query)
      // If res is a string, treat as old behavior; if object, handle resumeUrl
      if (typeof res === "string") {
        setResult(res)
      } else if (typeof res === "object" && res !== null) {
        setResult(res.result)
        if (res.resumeUrl) setResumeUrl(res.resumeUrl)
      }
    } catch (err: any) {
      setError("Sorry, something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-xl mx-auto">
      <div className="flex items-center gap-2">
        <Input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Ask anything about Parsa..."
          className="flex-1"
          disabled={loading}
        />
        <Button type="submit" disabled={loading || !query.trim()} size="icon" variant="secondary">
          {loading ? <Loader2 className="animate-spin h-5 w-5" /> : <Search className="h-5 w-5" />}
        </Button>
      </div>
      {resumeUrl ? (
        <div className="rounded bg-muted p-4 text-sm text-muted-foreground whitespace-pre-line">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      ) : result && (
        <div className="rounded bg-muted p-4 text-sm text-muted-foreground whitespace-pre-line">
          {result}
        </div>
      )}
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </form>
  )
} 