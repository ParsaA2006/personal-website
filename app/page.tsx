"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search } from "lucide-react"
import SearchBar from "@/components/ui/search-bar"

const projects = [
  {
    title: "Premier League Predictor",
    description: "A full-stack ML application that predicts match outcomes using XGBoost, with Docker containerization and CI/CD pipelines.",
    href: "/projects",
  },
  {
    title: "Tic-Tac-Toe Solver Robot",
    description: "An autonomous LEGO EV3 robot that plays Tic-Tac-Toe with color-sensor detection and calibrated motor control.",
    href: "/projects",
  },
]

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const normalized = search.trim().toLowerCase();
  const NAVIGATION = [
    { label: "home", path: "/" },
    { label: "about", path: "/about" },
    { label: "projects", path: "/projects" },
    { label: "resume", path: "/resume" },
  ];
  const navMatch = NAVIGATION.find((nav) => normalized === nav.label);
  if (navMatch) {
    router.push(navMatch.path);
  }

  const handleGrokSearch = async (query: string) => {
    const res = await fetch("/api/grok", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Failed to fetch answer");
    }
    return data;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <header className="w-full border-b border-gray-800 bg-black/80 backdrop-blur sticky top-0 z-30">
        <nav className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold tracking-tight">Parsa Ahmadi</div>
          <div className="flex gap-6 text-base font-medium">
            <Link href="/about" className="hover:text-blue-400 transition">About</Link>
            <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
            <Link href="/resume" className="hover:text-blue-400 transition">Resume</Link>
          </div>
        </nav>
        {/* New Search Bar */}
        <div className="container py-4">
          <SearchBar onSearch={handleGrokSearch} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex flex-col md:flex-row items-center gap-16 py-20 md:py-32">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-2">Parsa Ahmadi</h1>
          <p className="text-2xl text-gray-300 mb-4">Mechatronics Engineering Student at the University of Waterloo <span className="text-blue-400">|</span> Minor in Artificial Intelligence</p>
          <p className="text-lg text-gray-400 max-w-xl mb-6">
            Currently @ BTNX as a Software Engineering Intern. Previously @ Neurosnap and @ WARG. Passionate about building impactful software and engineering solutions that bridge technology and real-world needs.
          </p>
          <div className="flex gap-4 pt-2">
            <Link href="/projects">
              <Button className="px-6" variant="secondary">View Projects <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="px-6 border-gray-700 text-white">About Me</Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 p-2 shadow-xl flex items-center justify-center">
            <img
              src="/profile.jpg"
              alt="Parsa Ahmadi"
              width={320}
              height={320}
              className="rounded-2xl object-cover w-full h-full border-4 border-gray-800 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="flex flex-col bg-gray-900 rounded-xl shadow border border-gray-800 hover:shadow-lg transition p-6 h-full">
              <h3 className="text-lg font-semibold mb-2 text-white">{proj.title}</h3>
              <p className="text-gray-300 flex-1 mb-4">{proj.description}</p>
              <Link href={proj.href} className="text-blue-400 font-medium hover:underline mt-auto">View Project</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
