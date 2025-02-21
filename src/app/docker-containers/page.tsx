import Link from "next/link";
import { ChevronLeft } from "react-feather";

export default function Page() {
  return (
    <div className="p-10 text-white bg-gray-900 min-h-screen">
      <div className="mb-8">
        <Link href="/" className="text-blue-400 hover:underline flex items-center">
          <ChevronLeft 
            className="w-16 h-16 text-green-400 animate-bounce-left-to-right transition-all duration-500 ease-in-out hover:scale-110 
            border-2 border-transparent hover:border-white rounded-full p-3" 
          />
        </Link>
      </div>
      <h1 className="text-4xl font-bold">Docker Containers</h1>
      <p className="mt-4 text-lg">
        Docker containers are lightweight, portable, and self-sufficient environments that allow developers to package applications and their dependencies together. They provide consistency across multiple environments, making development and deployment more efficient.
      </p>

      {/* Table of Contents */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Table of Contents</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>What is Docker?</li>
          <li>How Containers Work</li>
          <li>Benefits of Using Docker</li>
          <li>Additional Resources</li>
        </ul>
      </div>

      {/* What is Docker? */}
      <section id="what-is-docker" className="mt-8">
        <h2 className="text-3xl font-semibold">What is Docker?</h2>
        <p className="mt-4">
          Docker is an open-source platform that enables developers to automate application deployment using containerization. It ensures that applications run the same way regardless of where they are deployed.
        </p>
        <p className="mt-4">
          It simplifies software development by eliminating issues related to different environments and dependencies.
        </p>
      </section>

      {/* How Containers Work */}
      <section id="how-containers-work" className="mt-8">
        <h2 className="text-3xl font-semibold">How Containers Work</h2>
        <p className="mt-4">
          Containers virtualize the operating system instead of the hardware. Each container includes the necessary libraries, binaries, and dependencies, but they share the host OS kernel, making them lightweight and fast.
        </p>
        <p className="mt-4">
          Unlike traditional virtual machines, containers start instantly and consume fewer resources.
        </p>
      </section>

      {/* Benefits of Using Docker */}
      <section id="benefits" className="mt-8">
        <h2 className="text-3xl font-semibold">Benefits of Using Docker</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Consistent environments across development, testing, and production</li>
          <li>Faster deployment and scaling</li>
          <li>Lightweight and resource-efficient</li>
          <li>Better dependency management</li>
          <li>Works seamlessly with CI/CD pipelines</li>
        </ul>
      </section>

      {/* Additional Resources */}
      <section id="resources" className="mt-8">
        <h2 className="text-3xl font-semibold">Additional Resources</h2>
        <p className="mt-4">Explore these resources to deepen your understanding of Docker:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>YouTube: Docker for Beginners</li>
          <li>Pluralsight: Docker Deep Dive</li>
          <li>Udemy: Docker and Kubernetes Masterclass</li>
        </ul>
      </section>
    </div>
  );
}
