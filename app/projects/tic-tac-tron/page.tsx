import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

export default function TicTacTronPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container max-w-3xl mx-auto space-y-10">
        <Link href="/projects" className="text-blue-400 hover:underline">&larr; Back to projects</Link>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-extrabold text-center">Tic-Tac-Tron</h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl">
            An autonomous LEGO EV3 robot that plays Tic-Tac-Toe against a human opponent, using sensors, a stamping mechanism, and a random-move algorithm. Built for the MTE100 final project at the University of Waterloo.
          </p>
          <div className="w-full flex justify-center">
            <Image
              src="/tic-tac-tron.jpg"
              alt="Tic-Tac-Tron Robot"
              width={600}
              height={350}
              className="rounded-xl object-cover border border-gray-800"
            />
          </div>
          <div className="flex gap-4 mt-2">
            <Link href="https://github.com/ParsaA2006/Tic-Tac-Tron" className="inline-flex items-center gap-2 text-blue-400 hover:underline" target="_blank">
              <Github className="h-5 w-5" />
              Code
            </Link>
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">Overview</h2>
          <p>
            Tic-Tac-Tron is a fully autonomous robot designed to play Tic-Tac-Toe against a human player. The robot uses a color sensor to detect player moves, a random-decision algorithm to select its own moves, and a stamping mechanism to mark the board. The project integrates mechanical and software systems, focusing on move detection accuracy, positioning precision, and reliable marking.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">The Problem</h2>
          <p>
            Playing Tic-Tac-Toe with a robot requires accurate detection of human moves, precise movement to mark the board, and robust error handling to prevent cheating or mistakes. The challenge was to create a robot that could autonomously play a fair game, detect irregularities, and reliably interact with a physical board.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">The Solution</h2>
          <p>
            The solution was a LEGO EV3 robot with a color sensor for move detection, a stamping arm for marking, and a random-move algorithm for gameplay. The robot scans the board after each human move, selects a valid move, and marks it with a stamp. If it detects cheating or unexpected changes, it halts the game and displays an error.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Real-time board scanning with a color sensor</li>
            <li>Random-move algorithm for robot moves</li>
            <li>Stamping mechanism for marking moves</li>
            <li>Cheat detection and error handling</li>
            <li>Precise movement using motor encoders</li>
            <li>Interactive gameplay with user prompts</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">How It Works</h2>
          <ol className="list-decimal pl-6 text-gray-200 space-y-1">
            <li>Player chooses who goes first using EV3 buttons.</li>
            <li>After each human move, the player presses a touch sensor to signal the robot.</li>
            <li>The robot scans the board with its color sensor to detect the move.</li>
            <li>Robot selects a random valid move and moves to the chosen cell.</li>
            <li>Robot marks the cell with a stamp and returns to its starting position.</li>
            <li>If cheating or unexpected changes are detected, the robot halts and displays an error.</li>
            <li>Game continues until a win or draw is detected, then the robot announces the result.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Technical Details</h2>
          <h3 className="text-xl font-semibold mt-4">Hardware</h3>
          <ul className="list-disc pl-6 text-gray-200">
            <li>LEGO EV3 brick and motors</li>
            <li>Color sensor for move detection</li>
            <li>Touch sensor for user input</li>
            <li>Custom 3D-printed rack and pinion for arm movement</li>
            <li>Stamping mechanism for marking moves</li>
            <li>Pre-made Tic-Tac-Toe board</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Software</h3>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Written in RobotC (C++-like syntax)</li>
            <li>Functions for scanning, move selection, marking, and error handling</li>
            <li>Random-move algorithm (Minimax was considered but not feasible on EV3)</li>
            <li>2D arrays for board state and possible moves</li>
            <li>Proportional control for precise motor movement</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Results</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Accurate move detection after switching to filled circles for both player and robot moves</li>
            <li>Consistent and precise marking with the stamping mechanism</li>
            <li>Robot completes turns within 30 seconds after optimizing movement and speed</li>
            <li>Cheat detection reliably halts the game on rule violations</li>
            <li>Fun, interactive gameplay for users</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Project Plan & Team</h2>
          <p>
            The project was completed as part of MTE100 at the University of Waterloo by Behzad Waseem, Benjamin Pablo Tran, Shilo Jeyarajasingam, and Parsa Ahmadi. Tasks were divided among mechanical design, software, testing, and documentation. The team adapted the plan as challenges arose, such as switching from a drawing to a stamping mechanism and simplifying the move algorithm.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Recommendations</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Use a larger stamp for better color sensor accuracy</li>
            <li>Replace makeshift arm supports with stronger LEGO parts</li>
            <li>Redesign chassis to better support the arm</li>
            <li>Secure the linear gear with extra LEGO pieces</li>
            <li>Improve error handling and motor speed control in software</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Conclusion</h2>
          <p>
            Tic-Tac-Tron successfully demonstrates the integration of mechanical and software systems to create an autonomous, interactive robot. The project met its goals for move detection, positioning, marking accuracy, and time efficiency. The experience provided valuable lessons in design, teamwork, and problem-solving, and the robot remains a fun and engaging showcase of mechatronics engineering.
          </p>
        </section>
      </div>
    </div>
  )
} 