import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json()
    const apiKey = process.env.GROK_API_KEY
    console.log("API Key present:", !!apiKey)
    console.log("Query received:", query)

    if (!query) {
      return NextResponse.json({ error: "Missing query" }, { status: 400 })
    }
    if (!apiKey) {
      return NextResponse.json({ error: "Missing Grok API key" }, { status: 500 })
    }

    // Check if the query is about the resume
    const resumeKeywords = [
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
      "show cv"
    ]
    const lowerQuery = query.toLowerCase()
    if (resumeKeywords.some(keyword => lowerQuery.includes(keyword))) {
      return NextResponse.json({
        result: "You can download or view Parsa Ahmadi's resume here:",
        resumeUrl: "/Parsa_Ahmadi_Resume&Transcript_Fall 2025.pdf"
      })
    }

    const grokRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "Parsa Ahmadi is a Mechatronics Engineering student at the University of Waterloo with a minor in Artificial Intelligence. He is pursuing a degree in Mechatronics Engineering and Artificial Intelligence, and has experience as a Mechanical Engineer Intern at Linamar Corporations and a Software Engineering Intern at Neurosnap. Parsa has designed and developed projects such as the Waterloo Management System and a Tic-Tac-Toe Solver Robot, demonstrating his skills in mechatronics and artificial intelligence. He is proficient in programming languages including Python, Java, JavaScript, TypeScript, HTML/CSS, C++, C#, SQL, MATLAB, and ROBOTC, and has experience with tools and frameworks such as React, React Native, ASP.NET, .NET Core, Node.js, Angular, Blazor, and Tailwind CSS.",
          },
          {
            role: "user",
            content: query,
          },
        ],
      }),
    })

    if (!grokRes.ok) {
      const error = await grokRes.text()
      console.error("Grok API error:", error)
      return NextResponse.json({ error }, { status: grokRes.status })
    }

    const data = await grokRes.json()
    return NextResponse.json({ result: data.choices[0].message.content || "No answer found." })
  } catch (err: any) {
    console.error("Server error:", err)
    return NextResponse.json({ error: "Failed to contact Grok API." }, { status: 500 })
  }
} 