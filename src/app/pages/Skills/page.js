"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechnicalSkills() {
  const [activeCategory] = useState("Frontend Development");

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      skills: [
        "React.js","Next.js","Redux","JavaScript (ES6+)","TypeScript",
        "Tailwind CSS","HTML5","CSS3","Framer Motion","GSAP","AOS","GlassMorphism"
      ],
      color: "blue",
    },
    {
      id: "mobile",
      title: "Mobile Development",
      skills: [
        "React Native","Expo","iOS Development","Android Development",
        "Mobile UI/UX","Cross-platform","Push Notifications",
      ],
      color: "purple",
    },
    {
      id: "backend",
      title: "Backend Development",
      skills: [
        "Node.js","Express.js","REST APIs","Python",
        "Microservices","API Optimization","WebSocket","Socket.IO",
      ],
      color: "green",
    },
    {
      id: "database",
      title: "Databases",
      skills: ["MongoDB","Mongoose","Firebase",],
      color: "yellow",
    },
    {
      id: "security",
      title: "Security & Auth",
      skills: ["JWT","NextAuth.js","OAuth 2.0","CORS","Encryption"],
      color: "red",
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      skills: [
        "Git","GitHub","Docker","AWS","Vercel","Figma",
        "Postman","Jira","Webpack",
      ],
      color: "indigo",
    },
  ];

  return (
    <section id="skills" className=" py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl text-gray-900 mb-3">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Skills
            </span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            A modern technology stack I use to build scalable and high-performance applications.
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
  );
}

/* ---------------- Skill Box ---------------- */

function SkillBox({ title, skills, color, isActive = true }) {
  const boxRef = useRef(null);
  const skillsRef = useRef([]);

  const colorSchemes = {
    blue: { border: "border-blue-200", text: "text-blue-700", badge: "bg-blue-50 text-blue-700" },
    green: { border: "border-green-200", text: "text-green-700", badge: "bg-green-50 text-green-700" },
    purple: { border: "border-purple-200", text: "text-purple-700", badge: "bg-purple-50 text-purple-700" },
    yellow: { border: "border-amber-200", text: "text-amber-700", badge: "bg-amber-50 text-amber-700" },
    red: { border: "border-rose-200", text: "text-rose-700", badge: "bg-rose-50 text-rose-700" },
    indigo: { border: "border-indigo-200", text: "text-indigo-700", badge: "bg-indigo-50 text-indigo-700" },
  };

  const colors = colorSchemes[color];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        skillsRef.current,
        { y: 25, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 75%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const animateSkills = () => {
    gsap.to(skillsRef.current, {
      y: -6,
      scale: 1.08,
      stagger: 0.04,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const resetSkillsAnimation = () => {
    gsap.to(skillsRef.current, {
      y: 0,
      scale: 1,
      stagger: 0.04,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
   <div
  ref={boxRef}
  className={`lg:block ${!isActive && "hidden lg:block"}`}
  onMouseEnter={animateSkills}
  onMouseLeave={resetSkillsAnimation}
>
  <div className={`border ${colors.border} rounded-xl p-6 w-[400px] h-[200px] overflow-hidden`}>
    <h3 className={`text-sm font-semibold mb-4 ${colors.text}`}>{title}</h3>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span
          key={i}
          ref={(el) => (skillsRef.current[i] = el)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium ${colors.badge} opacity-0`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>

  );
}
