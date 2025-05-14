import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

export default function WaterlooManagementSystemPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container max-w-3xl mx-auto space-y-10">
        <Link href="/projects" className="text-blue-400 hover:underline">&larr; Back to projects</Link>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-extrabold text-center">Waterloo Management System</h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl">
            A secure, scalable management platform for Waterloo organizations, featuring robust role-based access, automated workflows, and a modern C#/.NET backend with SQL database integration.
          </p>
          <div className="w-full flex justify-center">
            <Image
              src="/management-system.png"
              alt="Waterloo Management System Screenshot"
              width={600}
              height={350}
              className="rounded-xl object-cover border border-gray-800"
            />
          </div>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="inline-flex items-center gap-2 text-blue-400 hover:underline" target="_blank">
              <Github className="h-5 w-5" />
              Code
            </Link>
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">Overview</h2>
          <p>
            The Waterloo Management System is a comprehensive platform designed to streamline operations for organizations and clubs at the University of Waterloo. Built with C# and .NET, it provides secure user authentication, role-based access control, and automated management of accounts, events, and resources. The system is engineered for reliability, scalability, and ease of use.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">The Problem</h2>
          <p>
            Many student organizations and university departments struggle with manual processes for managing memberships, events, and resources. These inefficiencies can lead to lost data, security risks, and administrative overhead. There was a need for a unified, secure, and user-friendly management solution.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">The Solution</h2>
          <p>
            The Waterloo Management System automates and centralizes key administrative tasks. With a modern web interface, secure authentication, and granular permissions, it empowers organizations to manage users, events, and resources efficiently. Automated notifications and reporting further reduce manual workload.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Role-based access control (admin, member, guest)</li>
            <li>Secure user authentication and password management</li>
            <li>Automated event scheduling and notifications</li>
            <li>Resource booking and inventory tracking</li>
            <li>Comprehensive reporting and analytics</li>
            <li>Modern, responsive web interface</li>
            <li>Audit logs for security and compliance</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">How It Works</h2>
          <ol className="list-decimal pl-6 text-gray-200 space-y-1">
            <li>Users register and log in with secure credentials.</li>
            <li>Admins assign roles and permissions to users.</li>
            <li>Members can view and sign up for events, book resources, and manage their profiles.</li>
            <li>Admins create and manage events, resources, and user accounts.</li>
            <li>Automated notifications are sent for upcoming events and changes.</li>
            <li>All actions are logged for security and auditing.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Technical Details</h2>
          <h3 className="text-xl font-semibold mt-4">Backend</h3>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Built with C# and ASP.NET Core</li>
            <li>RESTful API for frontend-backend communication</li>
            <li>Modular architecture for scalability</li>
            <li>Automated testing and CI/CD integration</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Database</h3>
          <ul className="list-disc pl-6 text-gray-200">
            <li>SQL Server for reliable, scalable data storage</li>
            <li>Entity Framework for ORM and migrations</li>
            <li>Encrypted storage of sensitive data</li>
            <li>Automated backups and disaster recovery</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Security</h3>
          <ul className="list-disc pl-6 text-gray-200">
            <li>JWT-based authentication and authorization</li>
            <li>Role-based access and permission checks</li>
            <li>Input validation and sanitization</li>
            <li>Audit logging for all critical actions</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Results</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Streamlined management for clubs and organizations</li>
            <li>Reduced administrative workload by 50% through automation</li>
            <li>Improved data security and compliance</li>
            <li>Positive feedback from users for ease of use and reliability</li>
            <li>Scalable to support hundreds of users and events</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Project Plan & Team</h2>
          <p>
            The Waterloo Management System was developed as a solo project, with a focus on full-stack development, security, and user experience. The project followed an agile methodology, with iterative development, regular testing, and user feedback incorporated throughout.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Recommendations</h2>
          <ul className="list-disc pl-6 text-gray-200">
            <li>Integrate calendar sync with Google and Outlook</li>
            <li>Add mobile app support for on-the-go management</li>
            <li>Expand analytics and reporting features</li>
            <li>Implement SSO for university-wide authentication</li>
            <li>Enhance accessibility for all users</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Conclusion</h2>
          <p>
            The Waterloo Management System demonstrates the power of modern web technologies to solve real-world administrative challenges. By automating key processes and providing a secure, user-friendly platform, it empowers organizations to focus on what matters most: their members and their mission.
          </p>
        </section>
      </div>
    </div>
  )
} 