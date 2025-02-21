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
      <h1 className="text-4xl font-bold">CI/CD Fundamentals</h1>
      <p className="mt-4 text-lg">
        Continuous Integration (CI) and Continuous Deployment (CD) are essential software development practices. They aim to streamline development workflows, reduce manual intervention, and enable faster delivery of features.
      </p>

      {/* Table of Contents */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Table of Contents</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Continuous Integration</li>
          <li>Continuous Deployment</li>
          <li>Benefits of CI/CD</li>
          <li>Additional Resources</li>
        </ul>
      </div>

      {/* Continuous Integration */}
      <section id="ci" className="mt-8">
        <h2 className="text-3xl font-semibold">What is Continuous Integration (CI)?</h2>
        <p className="mt-4">
          Continuous Integration is the practice of automatically integrating code changes into a shared repository multiple times per day. Each integration triggers automated tests to ensure the changes do not break the codebase.
        </p>
        <p className="mt-4">
          CI ensures that developers can detect issues early and resolve them faster, creating a more stable codebase and improving collaboration among team members.
        </p>
      </section>

      {/* Continuous Deployment */}
      <section id="cd" className="mt-8">
        <h2 className="text-3xl font-semibold">What is Continuous Deployment (CD)?</h2>
        <p className="mt-4">
          Continuous Deployment is a practice where every code change that passes automated tests is automatically deployed to production. This eliminates manual deployment steps and reduces human error.
        </p>
        <p className="mt-4">
          CD ensures that teams can release new features and fixes quickly and reliably, improving the speed and quality of product updates.
        </p>
      </section>

      {/* Benefits of CI/CD */}
      <section id="benefits" className="mt-8">
        <h2 className="text-3xl font-semibold">Benefits of CI/CD</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Faster development cycles and releases</li>
          <li>Early detection and fixing of bugs</li>
          <li>More stable production environments</li>
          <li>Reduced manual intervention and errors</li>
          <li>Improved team collaboration and productivity</li>
        </ul>
      </section>

      {/* Additional Resources */}
      <section id="resources" className="mt-8">
        <h2 className="text-3xl font-semibold">Additional Resources</h2>
        <p className="mt-4">Check out these resources to deepen your understanding of CI/CD:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>YouTube: CI/CD Explained for Beginners</li>
          <li>Pluralsight: CI/CD Foundations</li>
          <li>Udemy: CI/CD Pipeline with Jenkins and Docker</li>
        </ul>
      </section>
    </div>
  );
}
