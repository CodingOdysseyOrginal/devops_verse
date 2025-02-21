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
      <h1 className="text-4xl font-bold">Infrastructure as Code</h1>
      <p className="mt-4 text-lg">
        Infrastructure as Code (IaC) is a modern approach to managing and provisioning infrastructure using code and automation tools, ensuring consistency, scalability, and efficiency.
      </p>

      {/* Table of Contents */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Table of Contents</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>What is Infrastructure as Code?</li>
          <li>How IaC Works</li>
          <li>Benefits of IaC</li>
          <li>Additional Resources</li>
        </ul>
      </div>

      {/* What is Infrastructure as Code? */}
      <section id="iac" className="mt-8">
        <h2 className="text-3xl font-semibold">What is Infrastructure as Code?</h2>
        <p className="mt-4">
          Infrastructure as Code (IaC) is the practice of managing IT infrastructure through machine-readable scripts rather than manual processes. This allows teams to automate deployments, reduce errors, and maintain consistency across environments.
        </p>
      </section>

      {/* How IaC Works */}
      <section id="how-it-works" className="mt-8">
        <h2 className="text-3xl font-semibold">How IaC Works</h2>
        <p className="mt-4">
          IaC uses tools like Terraform, AWS CloudFormation, and Ansible to define and provision infrastructure. These tools enable version control, repeatability, and automated scaling of resources.
        </p>
      </section>

      {/* Benefits of IaC */}
      <section id="benefits" className="mt-8">
        <h2 className="text-3xl font-semibold">Benefits of IaC</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Faster and more consistent deployments</li>
          <li>Improved scalability and flexibility</li>
          <li>Reduced manual configuration errors</li>
          <li>Version-controlled infrastructure changes</li>
          <li>Better collaboration between teams</li>
        </ul>
      </section>

      {/* Additional Resources */}
      <section id="resources" className="mt-8">
        <h2 className="text-3xl font-semibold">Additional Resources</h2>
        <p className="mt-4">Check out these resources to deepen your understanding of IaC:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>YouTube: Introduction to Infrastructure as Code</li>
          <li>Pluralsight: IaC Fundamentals</li>
          <li>Udemy: Terraform & AWS CloudFormation Masterclass</li>
        </ul>
      </section>
    </div>
  );
}
