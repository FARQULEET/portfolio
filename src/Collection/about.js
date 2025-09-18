// src/Collection/about.js
"use client";
import React from "react";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

// ➕ NEW: import the highlighter + a theme
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function About() {
  // ➕ NEW: keep your code string separate
  const codeString = `const developer = {
  name: "Muhammad Farquleet Khan",
  role: "Software Engineer",
  experience: "3 Months",
  company: "Amrood Labs",
  skills: [
    "HTML", "CSS", "JavaScript",
    "ReactJs", "Git", "Unity"
  ],
  location: "Lahore, Pakistan",
  contact: () => "farquleetkhanniazi@gmail.com"
};

// Building scalable solutions, one commit at a time
console.log("Ready to innovate!");`;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 relative">
      {/* Availability Badge */}
     <div className="flex w-full justify-start">
       <span className="bg-black border border-gray-700 text-green-400 px-4 py-2 rounded-lg text-sm shadow-md">
          ● Available for opportunities
        </span>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Muhammad Farquleet Khan <br />
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-purple-500 mt-2">
            <Typewriter
              words={["Full Stack Developer", "Game Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-lg">
            Experienced Software Engineer with{" "}
            <span className="text-purple-400 font-semibold">3+ Month</span> of
            building high-performance applications at{" "}
            <a href="#" className="text-purple-400 underline">
              Amrood Labs
            </a>
            . Passionate about solving complex problems and delivering scalable
            solutions.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
              View my work
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
              Get in touch
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition">
              <Download size={18} /> Resume
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-xl">
            <a
              href="#"
              className="p-3 bg-gray-900 rounded-full hover:bg-purple-600 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-900 rounded-full hover:bg-purple-600 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:farquleetkhanniazi@gmail.com"
              className="p-3 bg-gray-900 rounded-full hover:bg-purple-600 transition"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+923164175530"
              className="p-3 bg-gray-900 rounded-full hover:bg-purple-600 transition"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Right Section (Code Block) */}
        <div className="flex-1 bg-[#12121a] rounded-2xl shadow-xl p-6 text-sm font-mono leading-relaxed w-full">
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          {/* 🔁 CHANGED: use SyntaxHighlighter instead of <pre><code> */}
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            customStyle={{
              background: "transparent",
              padding: 0,
              margin: 0,
              fontSize: 14,
              lineHeight: 1.7,
              borderRadius: "0.75rem",
            }}
            showLineNumbers
            wrapLongLines
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* Discover More */}
      <div className="absolute bottom-6 flex flex-col items-center">
        <p className="text-gray-400 text-sm mb-2">Discover more</p>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
