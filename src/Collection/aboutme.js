// aboutme.js
import React from "react";

import { MapPin, GraduationCap, Calendar, Briefcase } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        About Me
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-2 rounded"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side (Image Placeholder) */}
        <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg flex items-center justify-center">
  <img
    src="assets/profile2.png"
    alt="M Farquleet Khan"
    className="h-80 w-80 object-cover"
  />
</div>

        {/* Right Side (Content) */}
        <div>
          <h3 className="text-xl font-bold mb-4">Software Engineer</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm <span className="font-semibold text-purple-100">Muhammad Farquleet Khan</span>, a passionate Unity 2D/3D Game Developer with over 3 years of experience in designing and developing interactive, performance-driven games. Recently, I completed a 3-month internship at Amrood Labs, where I enhanced my skills in HTML, CSS, JavaScript, ReactJS, and modern web technologies. I hold a BS in Computer Science (BSCS) from Qarshi University, Lahore, and I am eager to apply my expertise in both game development and web development to create innovative, scalable, and user-friendly digital experiences.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900 rounded-lg p-4 flex items-center gap-3">
              <MapPin className="text-purple-500" />
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="font-semibold">Lahore, Pakistan</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-4 flex items-center gap-3">
              <GraduationCap className="text-purple-500" />
              <div>
                <p className="text-gray-400 text-sm">Education</p>
                <p className="font-semibold">BS Computer Science</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-4 flex items-center gap-3">
              <Calendar className="text-purple-500" />
              <div>
                <p className="text-gray-400 text-sm">Experience</p>
                <p className="font-semibold">3+ Years</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-4 flex items-center gap-3">
              <Briefcase className="text-purple-500" />
              <div>
                <p className="text-gray-400 text-sm">Current Role</p>
                <p className="font-semibold">
                  Software Engineer @ Amrood Labs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
