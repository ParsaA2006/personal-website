import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Parsa Ahmadi</h1>
          <p className="text-muted-foreground">Resume</p>
        </div>
        <Button asChild className="w-full sm:w-auto">
          <a href="/Parsa-Ahmadi-S2026.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="space-y-8">
        {/* Contact & Links */}
        <Card>
          <CardHeader>
            <CardTitle>Contact & Links</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>p3ahmadi@uwaterloo.ca</span>
            </div>
            <Link href="https://linkedin.com/in/parsa-ahmadi2006" className="text-blue-500 hover:underline" target="_blank">LinkedIn</Link>
            <Link href="https://github.com/ParsaA2006" className="text-blue-500 hover:underline" target="_blank">GitHub</Link>
            <Link href="/" className="text-blue-500 hover:underline">Personal Website</Link>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <div className="font-semibold">University of Waterloo</div>
                <div className="italic">Bachelor of Applied Science in Mechatronics Engineering | Minor: Artificial Intelligence</div>
                <div className="text-sm text-muted-foreground mt-1">Coursework: Data Structures and Algorithms, Digital Logic</div>
              </div>
              <div className="text-sm text-muted-foreground sm:text-right">Expected Graduation: Apr 2029<br />Waterloo, ON</div>
            </div>
            <div className="text-sm text-muted-foreground mt-2">GPA: 4.0/4.0</div>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-semibold">Languages:</span> Python, TypeScript, JavaScript, C, C++, C#, Java, SQL, HTML/CSS
            </div>
            <div>
              <span className="font-semibold">Developer Tools:</span> Azure, Git, AWS, Docker, Postman, PostgreSQL, SQL Server, MySQL, Redis, Jupyter Notebook, Jira
            </div>
            <div>
              <span className="font-semibold">Frameworks/Libraries:</span> React, Next.js, Angular, Blazor, ASP.NET, .NET, Entity Framework, Node.js, Express, PyTorch, TensorFlow, scikit-learn, XGBoost, NumPy, Pandas, OpenCV, ROS2, PyQt
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* BTNX */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="font-semibold">BTNX</div>
                <div className="text-sm text-muted-foreground">Sep 2025 – Dec 2025 | Toronto, ON</div>
              </div>
              <div className="italic text-sm">Software Engineering Intern</div>
              <ul className="mt-1 list-disc list-inside text-sm space-y-1">
                <li>Developed a full-stack ERP SaaS platform using React, Typescript, and .NET, building 30+ end-to-end pages and designing the normalized SQL Server schema, serving 1,000+ active users</li>
                <li>Reduced load times by 30% across key modules through optimizing LINQ queries in C#, implementing async/await validation, and improving SQL performance by introducing table indexes, stored procedures, and a Redis lookup cache</li>
                <li>Engineered scalable RESTful APIs with ASP.NET and Entity Framework to handle 5k+ daily requests, reducing downtime by 20% and implementing integrations with Microsoft Graph and Amazon SP API</li>
                <li>Built an AI-powered conference tracking module with Blazor and Python, training OCR and NLP models using PyTorch to extract business card data and auto-populate attendee profiles with 96% accuracy</li>
                <li>Developed Python scripts to train and deploy an XGBoost classification model for diagnostic strips with ONNX Runtime inference integrated into a Blazor interface, achieving 99% strip reader accuracy</li>
              </ul>
            </div>
            {/* Neurosnap */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="font-semibold">Neurosnap</div>
                <div className="text-sm text-muted-foreground">May 2025 – Aug 2025 | Toronto, ON</div>
              </div>
              <div className="italic text-sm">Software Engineering Intern</div>
              <ul className="mt-1 list-disc list-inside text-sm space-y-1">
                <li>Built responsive research dashboards for AI-driven protein and enzyme analysis using TypeScript and React, reducing dashboard render time by 35% for large bioinformatics datasets</li>
                <li>Built backend services in Python using Flask, integrating ML pipelines for molecular docking and sequence analysis, and reducing processing errors by more than 25%</li>
                <li>Designed PostgreSQL schemas and indexed queries for storing protein structures, variant predictions, and experiment results, improving query performance by nearly 50%</li>
                <li>Integrated RESTful APIs with Python and Flask for NeuroFold model inference and containerized batch prediction pipelines with Docker, automating research and saving laboratories $20000+ annually</li>
              </ul>
            </div>
            {/* WARG */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="font-semibold">Waterloo Aerial Robotics Group (WARG)</div>
                <div className="text-sm text-muted-foreground">May 2025 – Dec 2025 | Waterloo, ON</div>
              </div>
              <div className="italic text-sm">Autonomy Team Member</div>
              <ul className="mt-1 list-disc list-inside text-sm space-y-1">
                <li>Developed computer vision modules for landing pad detection and obstacle avoidance, increasing detection accuracy to 90% by training ML models with OpenCV, TensorFlow, and deploying inference pipelines in C++ within ROS2</li>
                <li>Implemented real-time telemetry features in the IMACS 2.0 ground-station, reducing communication latency from 150 ms to 90 ms by optimizing asynchronous data handling using Python, PyQt, and ROS2</li>
              </ul>
            </div>
            {/* Linamar */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="font-semibold">Linamar Corporation</div>
                <div className="text-sm text-muted-foreground">Jan 2025 – Apr 2025 | Guelph, ON</div>
              </div>
              <div className="italic text-sm">Mechanical Engineer Intern</div>
              <ul className="mt-1 list-disc list-inside text-sm space-y-1">
                <li>Reviewed and implemented Engineering Change Notices (ECNs), conducted capability tests, and updated process documentation to improve accuracy and efficiency.</li>
                <li>Led transition to AIAG-VDA FMEA format for major clients, ensuring compliance with industry standards.</li>
                <li>Automated a manual operation, saving $40,000+ annually; designed SolidWorks models, reducing part costs by up to 40%.</li>
                <li>Redesigned machine work instructions, improving efficiency by 20%.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="font-semibold">Premier League Predictor | Python, FastAPI, React, TypeScript, Docker</div>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Created a model to predict match outcomes, integrating data scraping with feature engineering and machine learning using XGBoost and scikit-learn</li>
                <li>Containerized the full-stack application using Docker with multi-stage builds and integrated CI/CD pipelines, enabling automated testing, consistent deployments across environments, and reducing setup time by over 80%</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Tic-Tac-Toe Solver Robot | C++, RobotC</div>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Programmed an autonomous LEGO EV3 Tic-Tac-Toe robot in C++, implementing color-sensor board detection and real-time game-state processing to interpret human moves</li>
                <li>Integrated and calibrated the EV3's multi-axis motors by mapping grid coordinates to calibrated motor rotation angles, ensuring accurate and consistent move placement across the 3×3 grid</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
