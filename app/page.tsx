"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const teamMembers = [
  {
    name: "Dhanush Krishna",
    role: "Second Year EEE Student",
    image: "/assets/member1.png",
    description:
      "Focused on frontend development with a strong interest in UI architecture, accessibility, and performance. Brings an engineering mindset to interface design and enjoys turning complex ideas into clean, usable experiences."
  },
  {
    name: "Manush Giridhar",
    role: "Second Year ECE Student",
    image: "/assets/member2.png",
    description:
      "Works on backend systems and core logic, with an interest in APIs, data flow, and system-level thinking. Approaches problems analytically and focuses on building reliable, well-structured foundations."
  },
  {
    name: "Abhinav R Adiga",
    role: "Second Year AI/ML Student",
    image: "/assets/member3.png",
    description:
      "Explores machine learning concepts and applies analytical thinking to problem-solving. Interested in data-driven systems, experimentation, and bridging intelligent models with practical applications."
  },
  {
    name: "Y Srujan",
    role: "Second Year CTMA Student",
    image: "/assets/member4.png",
    description:
      "Works at the intersection of product thinking and design. Focuses on user experience, visual clarity, and how technical decisions impact usability and overall product direction."
  },
  {
    name: "Ramachandran S",
    role: "Second Year CTMA Student",
    image: "/members/ram.jpg",
    description:
      "Leads system design and integration across the team. Actively builds full-stack projects, explores cybersecurity and networking concepts, and focuses on turning ideas into working, real-world systems. Strong interest in engineering depth, experimentation, and long-term scalability."
  }
];

export default function Home() {
  const [activeMember, setActiveMember] = useState<number | null>(null);

  useEffect(() => {
    if (activeMember !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeMember]);

  return (
   <main>
    <Navbar/>
    <Hero/>
    <section 
    id ="about"
     className="min-h-[70vh] animate-fade px-6 md:px-16 py-20 bg-gray-900"
    >
    <div>
    <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-100">About us</h1>
    <p className="text-gray-400 max-w-xl">AMADRA is a collaborative team of five individuals with complementary skills across development, design, and problem-solving. We work with a product-first mindset, balancing clean architecture, usability, and performance.
      We don’t chase buzzwords. We build, test, break, fix, and improve.</p>
    </div>
    </section>
    <section
      id="members"
      className="min-h-screen px-6 md:px-16 py-20 bg-gray-950"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-gray-100 text-center">
        Team
      </h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            onClick={() => setActiveMember(activeMember === i ? null : i)}
            className="relative cursor-pointer w-full max-w-[280px] h-[360px] bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition"
          >
            <Image
              src={member.image}
              alt="Team member"
              fill
              className="object-cover transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-end p-4">
              <h3 className="text-white text-lg font-semibold">
                {member.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section
      id="projects"
      className="px-6 md:px-16 py-24 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-100">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 max-w-3xl">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-100">
              AI Dropout Prediction System
            </h3>
            <p className="text-gray-400 leading-relaxed">
              An AI-based system designed to predict student dropouts and enable early
              intervention through counseling. The model analyzes attendance, academic
              performance, and fee-related data to identify at-risk students, helping
              institutions take proactive steps to improve retention and student
              outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      id="contact"
      className="px-6 md:px-16 py-24 bg-gray-950"
    >
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-100">
          Contact
        </h2>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400 mb-2">
            Reach us at
          </p>
          <a
            href="mailto:info.amadra@gmail.com"
            className="text-lg font-semibold text-gray-100 hover:underline"
          >
            info.amadra@gmail.com
          </a>
        </div>
      </div>
    </section>
    {activeMember !== null && (() => {
      const member = teamMembers[activeMember];
      return (
      <div
        className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center px-4"
        onClick={() => setActiveMember(null)}
      >
        <div
          className="bg-gray-900 w-full max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[75vw] h-[80vh] rounded-2xl p-6 md:p-10 overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setActiveMember(null)}
            className="absolute top-4 right-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
          >
            Close
          </button>
          <div className="flex flex-col md:flex-row gap-10 h-full">
            <div className="relative w-full md:w-2/5 h-full flex items-center">
              <div className="relative w-[90%] h-[85%]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-xl object-cover object-top"
                  sizes="(min-width: 768px) 40vw, 80vw"
                />
              </div>
            </div>

            <div className="text-gray-200 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2">
                {member.name}
              </h2>
              <p className="text-gray-400 mb-4">
                {member.role}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      );
    })()}
   </main>
  );
}
