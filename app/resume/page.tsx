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
          <a href="/Parsa_Ahmadi_Resume&Transcript_Fall 2025.pdf" target="_blank" rel="noopener noreferrer">
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
              <span>p3ahmadi@uwaterloo.com</span>
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
                <div className="text-sm text-muted-foreground">President's Scholarship of Distinction</div>
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
              <span className="font-semibold">Languages:</span> Python, Java, JavaScript, TypeScript, HTML/CSS, C++, C#, SQL, MATLAB, ROBOTC
            </div>
            <div>
              <span className="font-semibold">Developer Tools:</span> VS Code, Jupyter Notebook, Git, GitHub, AWS, Docker
            </div>
            <div>
              <span className="font-semibold">Technologies/Frameworks:</span> React, Next.js, .NET Core, ASP.NET, Node.js, Angular, Blazor, Tailwind CSS
            </div>
            <div>
              <span className="font-semibold">Design Software:</span> SOLIDWORKS, AutoCAD, Siemens NX, Fusion 360, Figma
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Neurosnap */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="font-semibold">Neurosnap</div>
                <div className="text-sm text-muted-foreground">Mar 2025 – May 2025 | Toronto, ON</div>
              </div>
              <div className="italic text-sm">Full Stack Developer Intern</div>
              <ul className="mt-1 list-disc list-inside text-sm space-y-1">
                <li>Developed a responsive website for OpenBioML using HTML, CSS, and JavaScript, increasing user base by 30%.</li>
                <li>Maintained and updated OpenBioML and Neurosnap websites, fixing bugs and adding new features using JavaScript, HTML, and CSS.</li>
                <li>Created a database of millions of chemical compounds, leveraging JavaScript for efficient data retrieval and analysis for Fortune 100 companies.</li>
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
            {/* UW Blueprint */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="font-semibold">UW Blueprint</div>
                <div className="text-sm text-muted-foreground">Oct 2024 – Dec 2024 | Waterloo, ON</div>
              </div>
              <div className="italic text-sm">Project Developer</div>
              <ul className="mt-1 list-disc list-inside text-sm space-y-1">
                <li>Added features to the UW Blueprint website using React, JavaScript, HTML, and CSS.</li>
                <li>Collaborated on the full software lifecycle: design, implementation, testing, review, and deployment.</li>
              </ul>
            </div>
            {/* UWAFT */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="font-semibold">UW Waterloo Alternative Fuels Team (UWAFT)</div>
                <div className="text-sm text-muted-foreground">Sep 2024 – Dec 2024 | Waterloo, ON</div>
              </div>
              <div className="italic text-sm">Mechanical Design Member – Chassis Team</div>
              <ul className="mt-1 list-disc list-inside text-sm space-y-1">
                <li>Co-designed structural chassis components to decrease material costs by 15%.</li>
                <li>Performed Finite Element Analysis (FEA) and used SolidWorks to optimize weight distribution and ensure compliance with safety and performance requirements.</li>
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
              <div className="font-semibold">Waterloo Management System | C#, .NET, SQL</div>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Designed and developed a Waterloo management system with secure role-based access control.</li>
                <li>Built a backend with C# and .NET; engineered a database using SQL to efficiently handle account information and automation.</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Tic-Tac-Toe Solver Robot | ROBOTC, Python</div>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Engineered a ROBOTC algorithm for a robot to play Tic-Tac-Toe optimally, achieving a 100% win/draw rate.</li>
                <li>Enhanced robot performance by integrating a Python-based solver, reducing positioning errors by 30% and solving the game in under 2 seconds with 100% accuracy.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
