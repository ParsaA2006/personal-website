import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

export default function PremierLeaguePredictorPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container max-w-3xl mx-auto space-y-10">
        <Link href="/projects" className="text-blue-400 hover:underline">&larr; Back to projects</Link>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-extrabold text-center">Premier League Predictor</h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl">
            A full-stack machine learning application that predicts Premier League match outcomes using advanced feature engineering, XGBoost, and scikit-learn. Features containerized deployment with Docker and integrated CI/CD pipelines.
          </p>
          <div className="w-full flex justify-center">
            <Image
              src="/prem.jpg"
              alt="Premier League Predictor"
              width={600}
              height={350}
              className="rounded-xl object-cover border border-gray-800"
            />
          </div>
          <div className="flex gap-4 mt-2">
            <Link href="https://github.com/ParsaA2006/premier-league-predictor" className="inline-flex items-center gap-2 text-blue-400 hover:underline" target="_blank">
              <Github className="h-5 w-5" />
              Code
            </Link>
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">Overview</h2>
          <p>
            The Premier League Predictor is a comprehensive machine learning application designed to forecast match outcomes in the English Premier League. By integrating data scraping, advanced feature engineering, and state-of-the-art ML models, the system provides accurate predictions that help users make informed decisions about match results. The application is fully containerized with Docker and features automated CI/CD pipelines for seamless deployment.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">The Problem</h2>
          <p>
            Predicting football match outcomes is a complex challenge that requires analyzing numerous factors including team form, player statistics, historical performance, and external variables. Manual analysis is time-consuming and often inaccurate. There was a need for an automated, data-driven solution that could process vast amounts of historical data and provide reliable predictions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">The Solution</h2>
          <p>
            The Premier League Predictor leverages machine learning to automate the prediction process. By scraping historical match data, engineering meaningful features, and training XGBoost models, the system can accurately predict match outcomes. The full-stack architecture with FastAPI backend and React frontend provides a user-friendly interface, while Docker containerization ensures consistent deployments across environments.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Automated data scraping from multiple sources</li>
            <li>Advanced feature engineering for predictive modeling</li>
            <li>XGBoost and scikit-learn for machine learning predictions</li>
            <li>FastAPI backend for high-performance API endpoints</li>
            <li>React and TypeScript frontend for intuitive user experience</li>
            <li>Docker containerization with multi-stage builds</li>
            <li>CI/CD pipelines for automated testing and deployment</li>
            <li>Reduced setup time by over 80% through containerization</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">How It Works</h2>
          <ol className="list-decimal pl-6 text-gray-200 space-y-1">
            <li>Data scraping modules collect historical match data, team statistics, and player information from various sources.</li>
            <li>Feature engineering transforms raw data into meaningful features including form, head-to-head records, and performance metrics.</li>
            <li>XGBoost models are trained on historical data to learn patterns and relationships.</li>
            <li>Users input upcoming matches through the React frontend.</li>
            <li>The FastAPI backend processes requests, applies the trained model, and returns predictions.</li>
            <li>Results are displayed with confidence scores and supporting statistics.</li>
            <li>CI/CD pipelines automatically test and deploy updates to production.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Technical Details</h2>
          <h3 className="text-xl font-semibold mt-4">Machine Learning</h3>
          <ul className="list-disc pl-6 text-gray-200">
            <li>XGBoost for gradient boosting and classification</li>
            <li>scikit-learn for data preprocessing and model evaluation</li>
            <li>Feature engineering for team form, player statistics, and historical performance</li>
            <li>Data validation and cleaning pipelines</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Backend</h3>
          <ul className="list-disc pl-6 text-gray-200">
            <li>FastAPI for high-performance RESTful API</li>
            <li>Python for data processing and ML inference</li>
            <li>Automated data scraping and feature extraction</li>
            <li>Model serving and prediction endpoints</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Frontend</h3>
          <ul className="list-disc pl-6 text-gray-200">
            <li>React with TypeScript for type-safe development</li>
            <li>Modern UI components for match selection and results display</li>
            <li>Real-time updates and interactive visualizations</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">DevOps</h3>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Docker with multi-stage builds for optimized images</li>
            <li>CI/CD pipelines for automated testing and deployment</li>
            <li>Consistent environments across development and production</li>
            <li>Automated testing and quality checks</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Results</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Accurate match outcome predictions using advanced ML models</li>
            <li>Reduced setup time by over 80% through Docker containerization</li>
            <li>Automated testing and deployment with CI/CD pipelines</li>
            <li>Consistent deployments across different environments</li>
            <li>Scalable architecture supporting high request volumes</li>
            <li>User-friendly interface for easy interaction</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Project Plan & Development</h2>
          <p>
            The Premier League Predictor was developed as a personal project to explore machine learning in sports analytics. The project followed an iterative development approach, starting with data collection and feature engineering, then model training and evaluation, followed by full-stack implementation and containerization. The focus was on creating a production-ready application with robust deployment pipelines.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Future Enhancements</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Real-time data integration for live match updates</li>
            <li>Advanced ensemble methods combining multiple models</li>
            <li>Player injury and transfer impact analysis</li>
            <li>Historical performance visualization and analytics</li>
            <li>Mobile app support for on-the-go predictions</li>
            <li>Integration with betting APIs for odds comparison</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Conclusion</h2>
          <p>
            The Premier League Predictor demonstrates the power of machine learning in sports analytics, combining data science, software engineering, and DevOps practices to create a comprehensive prediction system. By leveraging modern technologies and best practices, the project showcases how ML can be applied to real-world problems while maintaining high standards for code quality, deployment, and user experience.
          </p>
        </section>
      </div>
    </div>
  )
}

