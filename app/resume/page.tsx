import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container py-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Resume</h1>
          <p className="text-muted-foreground">My education, skills, and professional experience</p>
        </div>
        <Button className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="space-y-8">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>parsa.ahmadi@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>(123) 456-7890</span>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <h3 className="font-semibold">University of Waterloo</h3>
                <span className="text-sm text-muted-foreground">2020 - 2025 (Expected)</span>
              </div>
              <p>Bachelor of Applied Science in Mechatronics Engineering</p>
              <p className="text-sm text-muted-foreground">GPA: 3.8/4.0</p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>C/C++</Badge>
                  <Badge>Python</Badge>
                  <Badge>MATLAB</Badge>
                  <Badge>JavaScript</Badge>
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Engineering Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>SolidWorks</Badge>
                  <Badge>AutoCAD</Badge>
                  <Badge>ANSYS</Badge>
                  <Badge>Altium Designer</Badge>
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Robotics</Badge>
                  <Badge>Control Systems</Badge>
                  <Badge>PCB Design</Badge>
                  <Badge>Microcontrollers</Badge>
                  <Badge>Embedded Systems</Badge>
                  <Badge>3D Printing</Badge>
                  <Badge>IoT</Badge>
                  <Badge>Machine Learning</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Experience 1 */}
            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <h3 className="font-semibold">Engineering Intern</h3>
                <span className="text-sm text-muted-foreground">May 2023 - August 2023</span>
              </div>
              <p className="text-muted-foreground">Tech Innovations Inc.</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                <li>Developed automated testing systems for robotic components</li>
                <li>Implemented sensor calibration procedures for precision measurement</li>
                <li>Created comprehensive documentation for maintenance protocols</li>
                <li>Collaborated with cross-functional teams to optimize testing efficiency</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <h3 className="font-semibold">Research Assistant</h3>
                <span className="text-sm text-muted-foreground">September 2022 - April 2023</span>
              </div>
              <p className="text-muted-foreground">University of Waterloo</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                <li>Assisted in research on advanced control systems for autonomous vehicles</li>
                <li>Developed simulation models to test control algorithms</li>
                <li>Analyzed performance data and prepared research reports</li>
                <li>Presented findings at departmental research symposium</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <h3 className="font-semibold">Junior Robotics Developer</h3>
                <span className="text-sm text-muted-foreground">May 2022 - August 2022</span>
              </div>
              <p className="text-muted-foreground">Automation Solutions Ltd.</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                <li>Contributed to the development of industrial automation systems</li>
                <li>Designed mechanical components using CAD software</li>
                <li>Programmed PLC systems for automated manufacturing processes</li>
                <li>Participated in on-site installation and testing of systems</li>
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
              <h3 className="font-semibold">Autonomous Delivery Robot</h3>
              <p className="text-sm">
                Designed and built a small-scale autonomous robot capable of navigating indoor environments and
                delivering small packages.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Smart Home Energy Monitor</h3>
              <p className="text-sm">
                Developed a system to monitor and analyze home energy usage with real-time feedback and suggestions for
                optimization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Robotic Arm Control System</h3>
              <p className="text-sm">
                Implemented a control system for a 6-DOF robotic arm with inverse kinematics for precise positioning and
                object manipulation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <span>Certified SolidWorks Associate (CSWA)</span>
              <span className="text-sm text-muted-foreground">2022</span>
            </div>
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <span>Machine Learning Specialization - Coursera</span>
              <span className="text-sm text-muted-foreground">2021</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
