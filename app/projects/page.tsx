"use client";

import React, { useState, useEffect, useRef } from "react";
import Card from "..//components/Cards";
import Particles from "..//components/Particles";

export default function Projects() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const { offsetWidth: width, offsetHeight: height, offsetLeft, offsetTop } = containerRef.current;
        const x = ((event.clientX - offsetLeft + window.scrollX) / width) * 100;
        const y = ((event.clientY - offsetTop + window.scrollY) / height) * 100;
        setCursorPosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Document Upload System",
      description: "Document upload system that uses Django for the backend, AWS as the cloud service for storage and HTML for the frontend layout",
      link: "https://github.com/payallenka/facultyUpload",
    },
    {
      title: "LockCrypt: Password Security Solution",
      description: "This is used to reform the architecture of the way our passwords are stored so that the data stays safe and breach free moreover giving all its rights to the user itself. Built using SpringBoot, MongoDB, MySQL, Eureka server and has a microservice architecture.",
      link: "https://github.com/payallenka/LockCrypt",
    },
    {
      title: "CPU Simulator",
      description: "A CPU simulator to help visualize the paging mechanism when a memory space is requested. Built using Java. And the codespace is a classic demonstration of the OOPs concept.",
      link: "https://github.com/payallenka/CPU_Simulator",
    },
    {
      title: "Amazon Clone",
      description: "Amazon website clone using HTML, CSS. This shows the basic layout of amazon.com as in the year 2024.",
      link: "https://github.com/payallenka/Amazon-Clone",
    },
    {
      title: "Obese Survey Form",
      description: "A form built to analyze the reasons for increasing obesity in the current generation. Built using Django for the backend, SQLite database, Streamlit for the frontend. It uses the built-in Django REST framework for the admin portal access created using the superuser.",
      link: "https://github.com/payallenka/obeseSurveyFrontend",
    },
    {
      title: "Query Ease",
      description: "A pure terminal-flavored database management system made for a layman to manage their database by answering simple yes/no questions and being hassle-free from the syntax of MySQL. This has been built to perform basic level operations on a database.",
      link: "https://github.com/payallenka/QueryEase",
    },
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
            className={`text-xl  ${
              darkMode ? "hover:text-gray-400" : "hover:text-gray-600"
            }`}
          >
            Home
          </a>
          <a
            href="..//contacts"
            className={`text-xl ${
              darkMode ? "hover:text-gray-400" : "hover:text-gray-600"
            }`}
          >
            Contact
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

        <h1 className="text-4xl font-bold mb-12 text-center">My Work</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-screen-lg $">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              className="w-full max-w-xs transition-transform transform hover:scale-105 hover:rotate-3" // Added transform and hover effects
            />
          ))}
        </div>
      </div>
    </div>
  );
}
