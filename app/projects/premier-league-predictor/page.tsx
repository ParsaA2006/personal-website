import type { Metadata } from "next"
import ProjectReport from "@/components/site/project-report"
import { getProjectBySlug } from "@/lib/portfolio-data"

const project = getProjectBySlug("premier-league-predictor")

export const metadata: Metadata = {
  title: `${project.title} | Parsa Ahmadi`,
  description: project.shortDescription,
}

export default function PremierLeaguePredictorPage() {
  return (
    <ProjectReport
      project={project}
      reportIndex="01"
      thesis="This project explores how machine learning, backend APIs, and frontend product work can fit together in one application rather than staying as disconnected experiments."
      caption="Historical match data, engineered features, model training, and a usable interface all live inside the same application flow."
      figureClassName="bg-[var(--technical-green)] p-5 sm:p-8"
      imageClassName="object-contain p-6 sm:p-10"
      priority
      sections={[
        {
          label: "Overview",
          title: "Why it exists",
          body: "I used historical match data, feature engineering, and gradient-boosted models to build a prediction workflow, then wrapped that workflow in a full-stack app that is easier to run and iterate on.",
          note: "The point was not just model accuracy, but turning the ML work into a more complete software system.",
        },
        {
          label: "System",
          title: "What I built",
          body: "The system combines data collection, preprocessing, model training, and inference with a web interface for interacting with predictions. My focus was on structuring the project so the machine learning pieces were not isolated experiments, but part of a more complete application flow.",
        },
        {
          label: "Technical",
          title: "Implementation focus",
          body: "The project is strongest where software engineering and applied ML meet: model experimentation, API boundaries, and the frontend layer all had to work together cleanly.",
          bullets: [
            "Python-based data processing and model experimentation.",
            "Feature engineering and XGBoost-driven prediction workflows.",
            "FastAPI endpoints for serving application logic and model results.",
            "React and TypeScript for the user-facing interface.",
            "Dockerized workflows to keep development and deployment more consistent.",
          ],
        },
        {
          label: "Why Keep It",
          title: "Why it stays on the site",
          body: "I still include this project because it represents a useful intersection of machine learning and software engineering. It shows how I think about turning technical experimentation into something closer to a product, with clearer interfaces between data, backend services, and the frontend experience.",
        },
      ]}
    />
  )
}
