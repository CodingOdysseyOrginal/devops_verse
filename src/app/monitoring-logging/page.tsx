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
      <h1 className="text-4xl font-bold">Monitoring & Logging</h1>
      <p className="mt-4 text-lg">
        Monitoring and logging are essential for maintaining system health, ensuring performance, and troubleshooting issues in software and infrastructure.
      </p>

      {/* Table of Contents */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Table of Contents</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>What is Monitoring?</li>
          <li>What is Logging?</li>
          <li>Key Tools for Monitoring & Logging</li>
          <li>Best Practices</li>
          <li>Additional Resources</li>
        </ul>
      </div>

      {/* What is Monitoring? */}
      <section id="monitoring" className="mt-8">
        <h2 className="text-3xl font-semibold">What is Monitoring?</h2>
        <p className="mt-4">
          Monitoring involves collecting, analyzing, and visualizing metrics from applications, infrastructure, and networks to ensure system health and performance.
        </p>
        <p className="mt-4">
          It helps teams proactively detect performance issues, bottlenecks, and security threats.
        </p>
      </section>

      {/* What is Logging? */}
      <section id="logging" className="mt-8">
        <h2 className="text-3xl font-semibold">What is Logging?</h2>
        <p className="mt-4">
          Logging captures and stores event data from applications and systems. Logs provide a detailed history of events, helping developers and operations teams debug and analyze incidents.
        </p>
      </section>

      {/* Key Tools for Monitoring & Logging */}
      <section id="tools" className="mt-8">
        <h2 className="text-3xl font-semibold">Key Tools for Monitoring & Logging</h2>
        <ul className="list-disc pl-6 mt-4">
          <li><strong>Prometheus & Grafana</strong> - For real-time monitoring and visualization</li>
          <li><strong>ELK Stack (Elasticsearch, Logstash, Kibana)</strong> - For centralized logging and analysis</li>
          <li><strong>Datadog</strong> - A cloud monitoring and security platform</li>
          <li><strong>New Relic</strong> - For application performance monitoring</li>
          <li><strong>Fluentd</strong> - A data collector for logs</li>
        </ul>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="mt-8">
        <h2 className="text-3xl font-semibold">Best Practices</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Set up alerts for critical system metrics</li>
          <li>Use log aggregation for centralized log management</li>
          <li>Visualize monitoring data with dashboards</li>
          <li>Rotate and archive logs to optimize storage</li>
          <li>Integrate monitoring with CI/CD pipelines</li>
        </ul>
      </section>

      {/* Additional Resources */}
      <section id="resources" className="mt-8">
        <h2 className="text-3xl font-semibold">Additional Resources</h2>
        <p className="mt-4">Check out these resources to deepen your understanding of Monitoring & Logging:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>YouTube: Introduction to Monitoring & Logging</li>
          <li>Pluralsight: Monitoring & Observability Fundamentals</li>
          <li>Udemy: Logging & Monitoring with ELK Stack</li>
        </ul>
      </section>
    </div>
  );
}
