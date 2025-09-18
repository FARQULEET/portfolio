// src/components/skill.js
import React, { useMemo, useState } from "react";

export default function Skill() {
  const [tab, setTab] = useState("backend"); // default like your screenshot

  const categories = useMemo(
    () => ({
      frontend: [
        { name: "React", desc: "Component-driven UI development", level: 92 },
        { name: "Next.js", desc: "SSR/SSG, routing & app directory", level: 90 },
        { name: "Tailwind CSS", desc: "Utility-first, responsive design", level: 95 },
        { name: "TypeScript", desc: "Typed React apps at scale", level: 85 },
      ],
      backend: [
        { name: "Node.js", desc: "Server-side JavaScript runtime", level: 90 },
        { name: "NestJS", desc: "Scalable Node.js server-side applications", level: 95 },
        { name: "Express", desc: "Fast, unopinionated web framework", level: 85 },
        { name: "REST APIs", desc: "RESTful web services design", level: 95 },
      ],
      database: [
        { name: "PostgreSQL", desc: "Relational DB, indexes & performance", level: 88 },
        { name: "MySQL", desc: "Relational DB, replication & tooling", level: 86 },
        { name: "MongoDB", desc: "Document store, schemas & aggregation", level: 82 },
        { name: "Redis", desc: "Caching, queues & pub/sub", level: 84 },
      ],
      tools: [
        { name: "Git & GitHub", desc: "Branching, PRs, releases", level: 96 },
        { name: "Docker", desc: "Containerization & local envs", level: 90 },
        { name: "CI/CD", desc: "Pipelines, testing & deploys", level: 88 },
        { name: "AWS", desc: "EC2, S3, CloudFront basics", level: 80 },
      ],
    }),
    []
  );

  const tabs = [
    { id: "frontend", label: "Frontend", icon: FrontendIcon },
    { id: "backend", label: "Backend", icon: BackendIcon },
    { id: "database", label: "Database", icon: DatabaseIcon },
    { id: "tools", label: "Tools & DevOps", icon: ToolsIcon },
  ];

  return (
    <section id="skills" className="relative w-full bg-[#0b0b0e] text-white">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Technical Skills &amp; Expertise
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-purple-500" />
          <p className="mt-5 text-sm sm:text-base text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work
            with in my professional career.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10">
          {/* Equal spacing: 4 equal columns. Icons-only on mobile; text shows at lg+. */}
          <div className="mx-auto max-w-3xl rounded-xl bg-white/5 p-1 border border-white/10">
            <div className="grid grid-cols-4 gap-2">
              {tabs.map(({ id, label, icon: Icon }) => {
                const active = tab === id;
                return (
                  <button
                    key={id}
                    role="tab"
                    aria-selected={active}
                    aria-label={label}
                    onClick={() => setTab(id)}
                    className={[
                      "w-full inline-flex items-center justify-center rounded-lg px-3 py-2.5 text-sm font-medium transition",
                      "gap-0 lg:gap-2", // no gap when text hidden; add gap on large screens
                      active
                        ? "bg-purple-600 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:bg-purple-600/90"
                        : "text-gray-200 hover:bg-white/10",
                    ].join(" ")}
                  >
                    <Icon className="h-4 w-4 opacity-90" />
                    <span className="hidden lg:inline whitespace-nowrap">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid of skill cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories[tab].map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- UI Pieces ---------- */

function SkillCard({ name, desc, level }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg transition-colors hover:bg-white/[0.05]">
      {/* soft glow blob */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-purple-500/20 blur-3xl" />
      {/* percentage chip */}
      <span className="absolute right-4 top-4 select-none rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-[11px] font-semibold text-purple-300">
        {level}%
      </span>

      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-gray-300">{desc}</p>

      {/* progress */}
      <div className="mt-4 h-[3px] w-full rounded bg-white/10">
        <div
          className="h-full rounded bg-gradient-to-r from-purple-500 to-fuchsia-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

/* ---------- Minimal inline icons (no extra libs) ---------- */

function FrontendIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m7 8-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
    </svg>
  );
}
function BackendIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="8" rx="2" />
      <rect x="3" y="12" width="18" height="8" rx="2" />
      <path d="M7 8h.01M7 16h.01" />
    </svg>
  );
}
function DatabaseIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" />
    </svg>
  );
}
function ToolsIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 7h.01M13 3a4 4 0 0 0 8 4c0 .34-.04.67-.11.99L13 21l-4-4L17.01 6.89A4 4 0 0 0 13 3ZM2 22l5-5" />
    </svg>
  );
}
