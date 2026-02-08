"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 px-6 flex justify-between items-center z-50 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? "text-white bg-black/30" : "text-black"
      }`}
    >
      <h1 className={`text-xl font-semibold transition-colors duration-300 ${
        scrolled ? "drop-shadow-sm" : ""
      }`}>
        AMADRA
      </h1>

      <ul className="hidden sm:flex gap-6 text-sm">
        <li><a href="#about" className="hover:opacity-80 transition">About</a></li>
        <li><a href="#members" className="hover:opacity-80 transition">Members</a></li>
        <li><a href="#projects" className="hover:opacity-80 transition">Projects</a></li>
        <li><a href="#contact" className="hover:opacity-80 transition">Contact</a></li>
      </ul>
    </nav>
  );
}