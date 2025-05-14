"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search } from "lucide-react"

const blogs = [
  {
    title: "My Experience as a Software Engineer at Neurosnap",
    date: "May 2025",
    excerpt:
      "Joining Neurosnap as a Software Engineer Intern was transformative. I developed a responsive website for OpenBioML, architected a database of millions of chemical compounds, and learned the value of user-focused technology in a fast-paced, collaborative environment...",
    full: `My time at Neurosnap was nothing short of transformative. Joining the team as a Software Engineer Intern, I was immediately immersed in a fast-paced, collaborative environment where innovation was the norm. I was entrusted with the responsibility of developing a responsive website for OpenBioML, a platform that supports cutting-edge research in machine learning and chemistry. Using HTML, CSS, and JavaScript, I worked tirelessly to ensure the site was seamless across all devices. I still remember the excitement when we saw a 30% increase in user engagement after our redesign went live.\n\nOne of my proudest achievements was architecting a database of millions of chemical compounds. The scale was daunting at first, but by leveraging JavaScript and modern web technologies, I built a system that enabled researchers from Fortune 100 companies to access and analyze data efficiently. I learned the importance of balancing performance with usability, and the feedback from users was incredibly rewarding.\n\nBeyond the technical work, what made Neurosnap special was the team. I was mentored by brilliant engineers who encouraged me to take ownership of my projects and think creatively. We held weekly brainstorming sessions where no idea was too ambitious, and I felt my confidence as a developer grow with every sprint. The experience solidified my passion for software engineering and showed me the impact that thoughtful, user-focused technology can have on the world.\n\nLooking back, Neurosnap was more than just an internship—it was a place where I discovered my potential, learned to embrace challenges, and found joy in building solutions that matter.`
  },
  {
    title: "My Experience at Linamar as a Mechanical Engineer Intern",
    date: "Apr 2025",
    excerpt:
      "At Linamar, I dove into large-scale manufacturing, led the transition to new FMEA standards, and automated processes that saved over $40,000 annually. The relationships and mentorship I found there shaped my approach to engineering and teamwork...",
    full: `My internship at Linamar Corporation was my first deep dive into the world of large-scale manufacturing. I was both nervous and excited on my first day, walking through the bustling factory floors and seeing the intricate machinery in action. My main responsibilities included reviewing Engineering Change Notices (ECNs), conducting capability tests, and updating process documentation. I quickly learned that attention to detail and clear communication were essential in this environment.\n\nOne of the highlights of my time at Linamar was leading the transition to the new AIAG-VDA FMEA format for major automotive clients. It was a complex project that required coordination across multiple teams, and I took pride in ensuring our processes met the latest industry standards. I also spearheaded the automation of a manual operation, which resulted in annual cost savings of over $40,000—a result that was celebrated by my team and gave me a real sense of accomplishment.\n\nDesigning models and drawings in SolidWorks became a daily routine, and I loved the challenge of optimizing parts to reduce costs by up to 40%. But what I valued most were the relationships I built with my colleagues. From sharing coffee breaks to troubleshooting on the shop floor, I learned the value of teamwork and resilience. The mentorship I received helped me grow not just as an engineer, but as a problem-solver and collaborator.\n\nLinamar taught me that engineering is as much about people as it is about technology. The lessons I learned there continue to shape my approach to every project I take on.`
  },
  {
    title: "My Experience in 1A Mechatronics Engineering at Waterloo",
    date: "Dec 2023",
    excerpt:
      "1A Mechatronics at Waterloo was a whirlwind of learning and growth. Achieving a 95% average, I also built lifelong friendships and discovered the value of community, collaboration, and stepping out of my comfort zone...",
    full: `My first term (1A) in Mechatronics Engineering at the University of Waterloo was a whirlwind of new experiences, challenges, and growth. I came in eager to prove myself, and through hard work and late-night study sessions, I achieved a 95% average. The coursework was intense—math, physics, and engineering fundamentals—but I found myself genuinely enjoying the process of learning and pushing my limits.\n\nBut grades were only part of the story. What truly defined 1A for me were the friendships I made. I met people from all over the world, each with their own unique perspectives and stories. We bonded over shared struggles, celebrated each other's successes, and supported one another through tough times. Some of my fondest memories are of group projects that turned into late-night pizza runs, and study groups that became lifelong friendships.\n\nI also got involved in campus clubs and engineering competitions, which helped me step out of my comfort zone and develop leadership skills. The sense of community at Waterloo is something I cherish deeply. Looking back, 1A was not just about academic achievement, but about discovering who I am, learning to collaborate, and building a network of friends and mentors who continue to inspire me.\n\nAs I move forward in my academic and professional journey, I carry with me the lessons, friendships, and memories from 1A. It was the perfect start to my time at Waterloo, and I am excited for all that lies ahead.`
  }
]

const projects = [
  {
    title: "Waterloo Management System",
    description: "A secure management system with role-based access, built with C#, .NET, and SQL.",
    href: "/projects",
  },
  {
    title: "Tic-Tac-Toe Solver Robot",
    description: "A robot that plays Tic-Tac-Toe optimally using ROBOTC and Python, achieving 100% win/draw rate.",
    href: "/projects",
  },
]

export default function Home() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);
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
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(normalized) ||
      blog.excerpt.toLowerCase().includes(normalized) ||
      blog.full.toLowerCase().includes(normalized)
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <header className="w-full border-b border-gray-800 bg-black/80 backdrop-blur sticky top-0 z-30">
        <nav className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold tracking-tight">Parsa Ahmadi</div>
          <div className="flex gap-6 text-base font-medium">
            <Link href="/about" className="hover:text-blue-400 transition">About</Link>
            <Link href="#blogs" className="hover:text-blue-400 transition">Blogs</Link>
            <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
            <Link href="/resume" className="hover:text-blue-400 transition">Resume</Link>
          </div>
        </nav>
        {/* Search Bar */}
        <div className="container flex items-center py-4">
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search blogs, pages..."
              className="w-full rounded-lg bg-gray-900 text-white border border-gray-700 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex flex-col md:flex-row items-center gap-16 py-20 md:py-32">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-2">Parsa Ahmadi</h1>
          <p className="text-2xl text-gray-300 mb-4">Mechatronics Engineering Student at the University of Waterloo <span className="text-blue-400">|</span> Minor in Artificial Intelligence</p>
          <p className="text-lg text-gray-400 max-w-xl mb-6">
            Previously @ Neurosnap as a Software Engineer and @ Linamar as a Mechanical Engineer. Passionate about building impactful software and engineering solutions that bridge technology and real-world needs.
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

      {/* Featured Blogs Section */}
      <section id="blogs" className="container py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Featured Blogs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredBlogs.length === 0 ? (
            <div className="col-span-full text-center text-gray-400">No results found.</div>
          ) : filteredBlogs.map((blog, idx) => (
            <div key={idx} className="flex flex-col bg-gray-900 rounded-xl shadow border border-gray-800 hover:shadow-lg transition p-6 h-full">
              <div className="text-sm text-gray-400 mb-2">{blog.date}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{blog.title}</h3>
              {expanded === idx ? (
                <>
                  <pre className="whitespace-pre-wrap text-gray-200 mb-4" style={{fontFamily: 'inherit'}}>{blog.full}</pre>
                  <button
                    className="text-blue-400 font-medium hover:underline mt-auto text-left"
                    onClick={() => setExpanded(null)}
                  >Show less</button>
                </>
              ) : (
                <>
                  <p className="text-gray-300 flex-1 mb-4">{blog.excerpt}</p>
                  <button
                    className="text-blue-400 font-medium hover:underline mt-auto text-left"
                    onClick={() => setExpanded(idx)}
                  >Read more</button>
                </>
              )}
            </div>
          ))}
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
