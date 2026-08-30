import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"
import { getProjectBySlug } from "@/lib/portfolio-data"

const project = getProjectBySlug("premier-league-predictor")

export const metadata: Metadata = {
  title: `${project.title} | Parsa Ahmadi`,
  description: project.shortDescription,
}

export default function PremierLeaguePredictorPage() {
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
            This project explores how machine learning, backend APIs, and frontend product work can fit together in
            one application. I used historical match data, feature engineering, and gradient-boosted models to build
            a prediction workflow, then wrapped that workflow in a full-stack app that is easier to run and iterate on.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">What I Built</h2>
          <p>
            The system combines data collection, preprocessing, model training, and inference with a web interface for
            interacting with predictions. My focus was on structuring the project so the machine learning pieces were
            not isolated experiments, but part of a more complete application flow.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Technical Focus</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Python-based data processing and model experimentation</li>
            <li>Feature engineering and XGBoost-driven prediction workflows</li>
            <li>FastAPI endpoints for serving application logic and model results</li>
            <li>React and TypeScript for the user-facing interface</li>
            <li>Dockerized workflows to keep development and deployment more consistent</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Why I Kept It</h2>
          <p>
            I still include this project because it represents a useful intersection of machine learning and software
            engineering. It shows how I think about turning technical experimentation into something closer to a
            product, with clearer interfaces between data, backend services, and the frontend experience.
          </p>
        </section>
      </div>
    </div>
  )
}
