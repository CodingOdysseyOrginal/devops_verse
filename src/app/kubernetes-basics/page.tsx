import Link from "next/link";
import { ChevronLeft } from 'react-feather'; 

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
      <h1 className="text-4xl font-bold">Kubernetes</h1>
      <p className="mt-4 text-lg">
        Kubernetes is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications.
      </p>

      {/* Table of Contents */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Table of Contents</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>What is Kubernetes?</li>
          <li>How Kubernetes Works</li>
          <li>Benefits of Kubernetes</li>
          <li>Additional Resources</li>
        </ul>
      </div>

      {/* What is Kubernetes? */}
      <section id="kubernetes" className="mt-8">
        <h2 className="text-3xl font-semibold">What is Kubernetes?</h2>
        <p className="mt-4">
          Kubernetes is a powerful system for managing containerized applications across multiple hosts. It provides tools for deploying applications, scaling them up or down, and managing the infrastructure.
        </p>
      </section>

      {/* How Kubernetes Works */}
      <section id="how-it-works" className="mt-8">
        <h2 className="text-3xl font-semibold">How Kubernetes Works</h2>
        <p className="mt-4">
          Kubernetes operates using clusters of nodes that run containerized applications. It manages these containers efficiently through features like automatic scaling, load balancing, and self-healing capabilities.
        </p>
      </section>

      {/* Benefits of Kubernetes */}
      <section id="benefits" className="mt-8">
        <h2 className="text-3xl font-semibold">Benefits of Kubernetes</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Automated scaling and load balancing</li>
          <li>Improved resource efficiency</li>
          <li>Self-healing and fault tolerance</li>
          <li>Portability across cloud providers</li>
          <li>Seamless deployment and management</li>
        </ul>
      </section>

      {/* Additional Resources */}
      <section id="resources" className="mt-8">
        <h2 className="text-3xl font-semibold">Additional Resources</h2>
        <p className="mt-4">Check out these resources to deepen your understanding of Kubernetes:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>YouTube: Kubernetes for Beginners</li>
          <li>Pluralsight: Kubernetes Fundamentals</li>
          <li>Udemy: Mastering Kubernetes</li>
        </ul>
      </section>
    </div>
  );
}
