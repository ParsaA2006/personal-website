import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cpu, GraduationCap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Parsa Ahmadi</h1>
                <p className="text-xl text-muted-foreground">
                  Mechatronics Engineering Student at the University of Waterloo | Minor in Artificial Intelligence
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Full-stack developer and mechanical engineer passionate about robotics, automation, and innovative solutions, blending software, hardware, and design.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button className="w-full min-[400px]:w-auto">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="w-full min-[400px]:w-auto">
                    About Me
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 p-2">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Parsa Ahmadi"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Integrating mechanical design, electronics, and full-stack development to deliver high-impact engineering solutions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Robotics & Automation</h3>
              <p className="text-center text-muted-foreground">
                Building autonomous systems and automating processes to improve efficiency and precision
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Software & Web Development</h3>
              <p className="text-center text-muted-foreground">
                Creating full-stack applications with React, C#, .NET, JavaScript, and SQL to deliver robust solutions
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Engineering Excellence</h3>
              <p className="text-center text-muted-foreground">
                Applying theoretical knowledge and hands-on experience to solve complex mechanical and software challenges
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
