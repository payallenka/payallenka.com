"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "./cards";
import Particles from "../components/Particles"; // Updated path

export default function Projects() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (containerRef.current) {
      const { offsetWidth: width, offsetHeight: height, offsetLeft, offsetTop } = containerRef.current;
      const x = ((event.clientX - offsetLeft + window.scrollX) / width) * 100;
      const y = ((event.clientY - offsetTop + window.scrollY) / height) * 100;
      setCursorPosition({ x, y });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const projects = [
    {
      link: "https://github.com/payallenka",
      label: "Github",
      handle: "PayalLenka",
    },
    {
      link: "https://www.linkedin.com/in/payallenka/",
      label: "LinkedIn",
      handle: "payallenka",
    },
    {
      link: "https://www.instagram.com/payallenka_269/",
      label: "Instagram",
      handle: "@payallenka_269",
    },
    // Add more projects here as needed
  ];

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen flex flex-col items-center p-6 ${
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

      <div className="relative z-10 w-full max-w-screen-lg flex flex-col items-center">
        <nav className="flex justify-center space-x-10 mb-10">
          <a
            href="/"
            className={`text-xl ${
              darkMode ? "hover:text-gray-400" : "hover:text-gray-600"
            }`}
          >
            Home
          </a>
          <a
            href="/projects" // Fixed relative path
            className={`text-xl ${
              darkMode ? "hover:text-gray-400" : "hover:text-gray-600"
            }`}
          >
            Projects
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`text-xl ${
              darkMode ? "hover:text-gray-400" : "hover:text-gray-600"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        <h1 className="text-4xl font-bold mb-12 text-center">Let's connect digitally!</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-screen-lg">
          {projects.map((project, index) => (
            <Card
              key={index}
              link={project.link}
              label={project.label}
              handle={project.handle}
              className="w-full max-w-xs transition-transform transform hover:scale-105 hover:rotate-3" // Added transform and hover effects
            />
          ))}
        </div>
      </div>
    </div>
  );
}
