import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"
import { getProjectBySlug } from "@/lib/portfolio-data"

const project = getProjectBySlug("tic-tac-tron")

export const metadata: Metadata = {
  title: `${project.title} | Parsa Ahmadi`,
  description: project.shortDescription,
}

export default function TicTacTronPage() {
  return (
    <div className="min-h-screen bg-black py-12 text-white">
      <div className="container mx-auto max-w-3xl space-y-10">
        <Link href="/projects" className="text-blue-400 hover:underline">
          &larr; Back to projects
        </Link>

        <div className="flex flex-col items-center gap-6">
          <h1 className="text-center text-4xl font-extrabold">{project.title}</h1>
          <p className="max-w-2xl text-center text-xl text-gray-300">{project.shortDescription}</p>
          <div className="flex w-full justify-center">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={350}
              className="rounded-xl border border-gray-800 object-cover"
            />
          </div>
          {project.repositoryUrl ? (
            <div className="mt-2 flex gap-4">
              <Link
                href={project.repositoryUrl}
                className="inline-flex items-center gap-2 text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                Code
              </Link>
            </div>
          ) : null}
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">Overview</h2>
          <p>
            This project was a hands-on robotics build around a simple game: detect the state of a Tic-Tac-Toe board,
            decide on a move, and physically execute that move with an autonomous robot. It brought together sensing,
            control logic, mechanical constraints, and testing in a way that felt very representative of early
            mechatronics work.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Core Challenge</h2>
          <p>
            The hard part was not just writing move logic. The robot also needed to interpret player actions
            consistently and move to the correct board position in the physical world. That meant treating detection,
            calibration, and reliability as equally important parts of the system.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Technical Focus</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>RobotC control logic for board-state interpretation and move execution</li>
            <li>Sensor-driven detection of player moves</li>
            <li>Calibrated motor control for repeatable movement across the grid</li>
            <li>Coordination between software logic and the physical robot design</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Why It Still Matters</h2>
          <p>
            I keep this project on the site because it shows the hardware-software side of my background. Even though
            my recent work has been more software and data focused, this project still reflects how I approach systems
            thinking, debugging, and building under real physical constraints.
          </p>
        </section>
      </div>
    </div>
  )
}
