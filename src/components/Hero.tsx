import Image from "next/image";
import { ChevronDown } from "lucide-react";
import computer from "../../public/Dev.png";

export default function Hero() {
  return (
    <section className="py-20 px-6 bg-gray-950 text-center relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-5xl font-extrabold text-green-400">
            Welcome to <span className="text-blue-400">DevOps</span> Tutorials
          </h1>
          <p className="text-lg text-gray-50 leading-relaxed">
            Master DevOps tools, methodologies, and best practices with 
            beginner-friendly tutorials. Build, deploy, and automate with confidence.
          </p>
        </div>

        
        <div className="w-full md:w-1/2">
          <Image
            src={computer}
            alt="DevOps picture"
            width={500}
            height={300}
            className="rounded-lg shadow-xl border-4 border-white"
          />
        </div>
      </div>

     
      <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2">
        <a href="#tutorial">
          <ChevronDown 
            className="w-16 h-16 text-green-400 animate-bounce transition-all duration-500 ease-in-out hover:scale-110 
            border-2 border-transparent hover:border-white rounded-full p-3" 
          />
        </a>
      </div>
    </section>
  );
}
