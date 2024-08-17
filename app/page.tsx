"use client";

import React, { useState, useEffect, useRef } from "react";
import Particles from "./components/Particles";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const { offsetWidth: width, offsetHeight: height } = containerRef.current;
        const x = (event.clientX / width) * 100;
        const y = (event.clientY / height) * 100;
        setCursorPosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen flex flex-col items-center justify-center p-2 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
      style={{
        background: darkMode
          ? `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, rgba(0,0,0,0.1) 1%, rgba(0,0,0,0.9) 1.5%)`
          : `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, rgba(0,0,0,0.1) 1%, rgba(255,255,255,0.7) 1.5%)`,
        transition: "background 0.3s ease",
      }}
    >
      <Particles className="absolute inset-0 z-0" quantity={150} staticity={70} ease={30} refresh={false} />

      <nav className="relative z-10 flex space-x-10 mt-10 pl-10"> {/* Added pl-10 to shift to the right */}
        <a
          href="/projects"
          className={`text-xl transform transition-transform hover:scale-105 ${
            darkMode ? "hover:text-gray-400" : "hover:text-gray-600"
          }`}
        >
          Projects
        </a>
        <a
          href="/contacts"
          className={`text-xl transform transition-transform hover:scale-105 ${
            darkMode ? "hover:text-gray-400" : "hover:text-gray-600"
          }`}
        >
          Contact
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`text-xl transform transition-transform hover:scale-105 ${
            darkMode ? "hover:text-gray-400" : "hover:text-gray-600"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <div className="text-center mt-16 relative z-5">
        <h1
          className={`py-3.5 px-1 text-4xl duration-1000 cursor-default font-display sm:text-6xl md:text-9xl whitespace-nowrap glide-in`}
          style={{ color: darkMode ? "white" : "black" }}
        >
           Payal Lenka
        </h1>

        <p
          className={`mt-4 text-xs duration-300 transition-colors sm:text-sm md:text-base ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Open to work and network. Looking for open-source contributions in full stack web development and AI/ML domain.
        </p>
      </div>
    </div>
  );
}
