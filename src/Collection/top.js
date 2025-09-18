// src/components/Top.js
import React, { useEffect, useRef, useState } from "react";

export default function Top() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function onClick(e) {
      if (!open) return;
      if (menuRef.current?.contains(e.target)) return;
      if (btnRef.current?.contains(e.target)) return;
      setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },

  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#home" className="text-white text-xl font-bold">
          mfarquleet<span className="text-purple-500">.dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-purple-400 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          ref={btnRef}
          type="button"
          aria-label="Open menu"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {/* Icon: hamburger / close */}
          <svg
            className={`h-6 w-6 transition-transform duration-200 ${open ? "scale-0" : "scale-100"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`absolute h-6 w-6 transition-transform duration-200 ${open ? "scale-100" : "scale-0"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-200 origin-top ${
          open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <nav className="mx-3 mb-3 rounded-xl border border-white/10 bg-black/95 text-white shadow-lg">
          <ul className="py-2">
            {navItems.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-white/10 transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
