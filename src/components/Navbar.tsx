"use client";

import { useState } from "react";
import Image from "next/image";
import devLogo from "../../public/DevLogo.png"; 
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  // Set up dark mode with toggle
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-950" : "bg-blue-900"
      } h-20 px-6 flex items-center justify-between`}
    >
     
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image src={devLogo} alt="DevOps Logo" width={50} height={50} />
        </Link>
        <Link href="/" className="text-3xl font-bold text-white">
          <span className="text-green-300">DEVOPS</span>VERSE
        </Link>
      </div>

      {/* Dark Mode Toggle but doesnt work on the correct area*/}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-white p-2 rounded-lg hover:bg-gray-700 transition"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </nav>
  );
}
