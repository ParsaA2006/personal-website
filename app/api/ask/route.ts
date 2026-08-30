import { NextRequest, NextResponse } from "next/server"

const DEFAULT_GROQ_MODEL = "openai/gpt-oss-120b"

const RESUME_KEYWORDS = [
  "resume",
  "cv",
  "download resume",
  "view resume",
  "get resume",
  "see resume",
  "open resume",
  "show resume",
  "download cv",
  "view cv",
  "get cv",
  "see cv",
  "open cv",
  "show cv",
]

const SYSTEM_PROMPT = `
You are Ask Parsa, the AI assistant on Parsa Ahmadi's personal website.

Use the following information when answering questions about Parsa:
- Parsa Ahmadi is a Mechatronics Engineering student at the University of Waterloo pursuing a minor in Artificial Intelligence.
- His experience includes Software Engineering Intern roles at BTNX and Neurosnap, work with the Waterloo Aerial Robotics Group (WARG), and a Mechanical Engineer Intern role at Linamar Corporation.
- Featured projects on the site include the Premier League Predictor, Tic-Tac-Tron, and the Waterloo Management System.
- His technical stack includes Python, TypeScript, JavaScript, C/C++, C#, Java, SQL, MATLAB, React, Next.js, ASP.NET, .NET, Node.js, Angular, Blazor, Tailwind CSS, Docker, PyTorch, TensorFlow, XGBoost, PostgreSQL, SQL Server, Redis, OpenCV, and ROS2.

Answer in short, polished paragraphs. Do not use bullet points, numbered lists, or markdown. If the website information does not clearly support an answer, say you do not have that detail rather than guessing.
`.trim()

type GroqErrorResponse = {
  error?: {
    message?: string
  } | string
}

type GroqChatCompletionResponse = {
  choices?: Array<{
    message?: {
      content?: string
    }
  }>
}

function getGroqApiKey() {
  return process.env.GROQ_API_KEY ?? process.env.GROK_API_KEY
}

function getGroqModel() {
  return process.env.GROQ_MODEL ?? process.env.GROK_MODEL ?? DEFAULT_GROQ_MODEL
}

function getProviderErrorMessage(payload: GroqErrorResponse) {
  if (typeof payload.error === "string") {
    return payload.error
  }

  return payload.error?.message
}

function getUserFacingErrorMessage(status: number) {
  if (status === 429) {
    return "Ask Parsa AI is busy right now. Please try again in a moment."
  }

  return "Ask Parsa AI couldn't answer right now. Please try again in a moment."
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { query?: unknown }
    const query = typeof body.query === "string" ? body.query.trim() : ""

    if (!query) {
      return NextResponse.json({ error: "Please enter a question for Ask Parsa." }, { status: 400 })
    }

    const lowerQuery = query.toLowerCase()
    if (RESUME_KEYWORDS.some((keyword) => lowerQuery.includes(keyword))) {
      return NextResponse.json({
        result: "You can download or view Parsa Ahmadi's resume here:",
        resumeUrl: "/Parsa-Ahmadi-S2026.pdf",
      })
    }

    const apiKey = getGroqApiKey()
    if (!apiKey) {
      return NextResponse.json({ error: "Ask Parsa AI is not configured on the server." }, { status: 500 })
    }

    const model = getGroqModel()
    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: query,
          },
        ],
      }),
    })

    if (!groqResponse.ok) {
      let providerErrorMessage: string | undefined

      try {
        const providerError = (await groqResponse.json()) as GroqErrorResponse
        providerErrorMessage = getProviderErrorMessage(providerError)
      } catch {
        providerErrorMessage = await groqResponse.text()
      }

      console.error("Groq request failed", {
        status: groqResponse.status,
        model,
        providerErrorMessage,
      })

      const status = groqResponse.status === 429 ? 503 : 502
      return NextResponse.json({ error: getUserFacingErrorMessage(groqResponse.status) }, { status })
    }

    const data = (await groqResponse.json()) as GroqChatCompletionResponse
    const result = data.choices?.[0]?.message?.content?.trim()

    if (!result) {
      console.error("Groq response did not include message content", { model })
      return NextResponse.json({ error: "Ask Parsa AI returned an empty response. Please try again." }, { status: 502 })
    }

    return NextResponse.json({ result })
  } catch (error) {
    console.error("Ask Parsa request failed", error)
    return NextResponse.json(
      { error: "Ask Parsa AI couldn't answer right now. Please try again in a moment." },
      { status: 500 },
    )
  }
}
