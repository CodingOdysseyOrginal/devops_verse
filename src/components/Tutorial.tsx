import Link from "next/link";

const topics = [
  { title: "CI/CD Fundamentals", link: "/cd-fundamentals" },
  { title: "Docker Containers Explained", link: "/docker-containers" },
  { title: "Kubernetes Basics", link: "/kubernetes-basics" },
  { title: "Infrastructure as Code", link: "/infrastructure-as-code" },
  { title: "Monitoring and Logging", link: "/monitoring-logging" },
];

export default function Tutorial() {
  return (
    <section className="py-20 bg-gray-800 text-center text-white" id="tutorial">
      <h1 className="text-4xl font-extrabold">DevOps Tutorials</h1>
      <p className="mt-4 text-lg">
        Here you will find beginner to advanced DevOps tutorials covering tools, practices, and methodologies.
      </p>

      {/* Grid for tutorial topics */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {topics.map((topic, index) => (
          <Link key={index} href={topic.link} passHref>
            <div 
              className="p-6 bg-gray-700 text-white rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-600 cursor-pointer"
              aria-label={`Go to ${topic.title} tutorial`}
            >
              <h3 className="text-xl font-semibold">{topic.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
