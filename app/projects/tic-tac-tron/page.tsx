import type { Metadata } from "next"
import ProjectReport from "@/components/site/project-report"
import { getProjectBySlug } from "@/lib/portfolio-data"

const project = getProjectBySlug("tic-tac-tron")

export const metadata: Metadata = {
  title: `${project.title} | Parsa Ahmadi`,
  description: project.shortDescription,
}

export default function TicTacTronPage() {
  return (
    <ProjectReport
      project={project}
      reportIndex="02"
      thesis="This project was a hands-on robotics build around a simple game: detect the state of a Tic-Tac-Toe board, decide on a move, and physically execute that move with an autonomous robot."
      caption="The project matters less as a game demo and more as a systems exercise in sensing, logic, calibration, and reliable physical movement."
      priority
      sections={[
        {
          label: "Overview",
          title: "Why it matters",
          body: "It brought together sensing, control logic, mechanical constraints, and testing in a way that felt very representative of early mechatronics work.",
          note: "The interesting part is the software-physical handoff, not the novelty of the game itself.",
        },
        {
          label: "Challenge",
          title: "Core constraint",
          body: "The hard part was not just writing move logic. The robot also needed to interpret player actions consistently and move to the correct board position in the physical world. That meant treating detection, calibration, and reliability as equally important parts of the system.",
        },
        {
          label: "Technical",
          title: "Implementation focus",
          body: "The project only works if the logic and the hardware behavior stay aligned. That pushed the work beyond code into repeatability and physical consistency.",
          bullets: [
            "RobotC control logic for board-state interpretation and move execution.",
            "Sensor-driven detection of player moves.",
            "Calibrated motor control for repeatable movement across the grid.",
            "Coordination between software logic and the physical robot design.",
          ],
        },
        {
          label: "Why Keep It",
          title: "Why it stays on the site",
          body: "I keep this project on the site because it shows the hardware-software side of my background. Even though my recent work has been more software and data focused, this project still reflects how I approach systems thinking, debugging, and building under real physical constraints.",
        },
      ]}
    />
  )
}
