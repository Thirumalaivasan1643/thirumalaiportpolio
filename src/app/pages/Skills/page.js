"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechnicalSkills() {
  const [activeCategory] = useState("Frontend Development");

  // Mobile auto slider index
  const [mobileIndex, setMobileIndex] = useState(0);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "Redux", "JavaScript", "TypeScript", "Tailwind"],
      color: "blue",
    },
    {
      id: "mobile",
      title: "Mobile Development",
      skills: ["React Native", "Expo", "iOS", "Android"],
      color: "purple",
    },
    {
      id: "backend",
      title: "Backend Development",
      skills: ["Node.js", "Express", "REST API", "Socket.IO"],
      color: "green",
    },
    {
      id: "database",
      title: "Databases",
      skills: ["MongoDB", "Firebase"],
      color: "yellow",
    },
    {
      id: "security",
      title: "Security & Auth",
      skills: ["JWT", "OAuth", "NextAuth"],
      color: "red",
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "AWS", "Vercel"],
      color: "indigo",
    },
  ];

  // Auto loop effect (mobile only)
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % skillCategories.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [skillCategories.length]);

  return (
    <>
      {/* ===================== DESKTOP ===================== */}
      <div className="hidden md:block">
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-xl text-gray-900 mb-3">
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Skills
                </span>
              </h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                A modern technology stack I use to build scalable applications.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <SkillBox
                  key={category.id}
                  title={category.title}
                  skills={category.skills}
                  color={category.color}
                  isActive={activeCategory === category.title}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ===================== MOBILE AUTO LOOP ===================== */}
      <div className="block md:hidden">
        <section id="skills" className="py-10 px-4 bg-gray-50 overflow-hidden">
          <div className="max-w-md mx-auto text-center mb-4">
            <p className="text-xs text-gray-600">
              Technologies I use to build modern applications
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {skillCategories.map((category) => (
                <div
                  key={category.id}
                  className="min-w-full flex justify-center px-4"
                >
                  <MobileSkillCard category={category} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/* ===================== DESKTOP SKILL BOX ===================== */

function SkillBox({ title, skills, color }) {
  const boxRef = useRef(null);
  const skillsRef = useRef([]);

  const colorSchemes = {
    blue: "border-blue-200 text-blue-700 bg-blue-50",
    green: "border-green-200 text-green-700 bg-green-50",
    purple: "border-purple-200 text-purple-700 bg-purple-50",
    yellow: "border-amber-200 text-amber-700 bg-amber-50",
    red: "border-rose-200 text-rose-700 bg-rose-50",
    indigo: "border-indigo-200 text-indigo-700 bg-indigo-50",
  };

  const colors = colorSchemes[color].split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        skillsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 75%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={boxRef}
      className={`border ${colors[0]} rounded-xl p-6 w-[400px] h-[200px]`}
    >
      <h3 className={`text-sm font-semibold mb-4 ${colors[1]}`}>
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            ref={(el) => (skillsRef.current[i] = el)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium ${colors[2]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===================== MOBILE SKILL CARD ===================== */

function MobileSkillCard({ category }) {
  const colorSchemes = {
    blue: "border-blue-200 text-blue-700 bg-blue-50",
    green: "border-green-200 text-green-700 bg-green-50",
    purple: "border-purple-200 text-purple-700 bg-purple-50",
    yellow: "border-amber-200 text-amber-700 bg-amber-50",
    red: "border-rose-200 text-rose-700 bg-rose-50",
    indigo: "border-indigo-200 text-indigo-700 bg-indigo-50",
  };

  const colors = colorSchemes[category.color].split(" ");

  return (
    <div className={`border ${colors[0]} rounded-xl p-4 w-[260px] bg-white shadow-sm`}>
      <div className="flex justify-between mb-3">
        <h3 className={`text-sm font-semibold ${colors[1]}`}>
          {category.title}
        </h3>
        <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full">
          {category.skills.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={i}
            className={`px-3 py-1 rounded-full text-[11px] font-medium ${colors[2]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
