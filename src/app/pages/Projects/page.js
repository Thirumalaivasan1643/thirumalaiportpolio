"use client";

import React, { useEffect, useState, useCallback } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

const projects = [
  {
    title: "Salon Management System (SaaS)",
    type: "SaaS Platform",
    desc: "Complete SaaS platform for salon businesses with appointment scheduling, staff management, inventory tracking, and analytics.",
    tech: ["React", "Next.js", "Node", "MongoDB"],
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800",
  },
  {
    title: "Portfolio Website",
    type: "Web App",
    desc: "Full-featured e-commerce platform with product catalog, shopping cart, secure checkout, JWT authentication and admin dashboard.",
    tech: ["React", "Redux", "Node"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    live: "https://portfolio-liart-psi-o2xho2eu26.vercel.app",
    github: "https://github.com/Thirumalaivasan1643/portfolio",
    open: "desktop and laptop",
  },
  {
    title: "",
    label: "GSAP & AOS Animation Project",
    type: "Animation Website",
    featured: true,
    desc: "Real-time booking system for multiple service providers with live tracking, notifications, calendar management and admin panels.",
    tech: ["GSAP", "AOS", "React", "Firebase"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
    live: "https://animation-site-eight.vercel.app",
    github: "https://github.com/Thirumalaivasan1643/Animation-site",
    open: "desktop and laptop",
  },
  {
    title: "Real-time Chat App",
    type: "Realtime App",
    desc: "WebSocket based messaging application with online status and real-time updates.",
    tech: ["Next.js", "Socket.IO"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Initialize with a safe default value for SSR
  const [visibleCount, setVisibleCount] = useState(() => {
    // This will only run during SSR or initial render
    return 3; // Default for SSR
  });

  const calculateItemsPerView = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  // Set visible count on mount
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(calculateItemsPerView());
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateItemsPerView]);

  const maxIndex = Math.max(0, Math.ceil(projects.length / visibleCount) - 1);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex, isPaused]);

  const nextSlide = () => {
    setIsPaused(true);
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsPaused(true);
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div>
      <div className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
        <section
          id="projects"
          className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-6"
        >
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="text-xl font-regular mb-2">
                My <span className="text-blue-600">Projects</span>
              </h2>
              <p className="text-gray-500 text-sm">
                Real-world applications built using modern technologies.
              </p>
            </div>

            <div className="relative overflow-hidden">
              {/* Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
              >
                <ChevronRight size={22} />
              </button>

              {/* Slides */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {Array.from({ length: maxIndex + 1 }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-1"
                  >
                    {projects
                      .slice(
                        slideIndex * visibleCount,
                        slideIndex * visibleCount + visibleCount,
                      )
                      .map((project, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-2xl shadow overflow-hidden w-[300px] h-[300px] mx-auto flex flex-col relative"
                        >
                          {project.featured && (
                            <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Star size={12} /> Featured
                            </div>
                          )}

                          <img
                            src={project.image}
                            alt="project"
                            className="w-full h-[130px] object-cover"
                          />

                          <div className="p-3 flex-1 flex flex-col justify-between">
                            <div>
                              {project.label ? (
                                <div className="text-xs text-blue-600 font-medium">
                                  {project.label}
                                </div>
                              ) : (
                                <h3 className="text-sm font-medium">
                                  {project.title}
                                </h3>
                              )}

                              <div className="text-[11px] text-gray-400 mb-1">
                                {project.type}
                              </div>

                              <p className="text-xs text-gray-600 line-clamp-2">
                                {project.desc}
                              </p>
                            </div>

                            {/* Tech badges */}
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.tech.map((t, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-2 mt-2">
                              {project.live && (
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-xs px-3 py-1 bg-blue-600 text-white rounded-md"
                                >
                                  <ExternalLink size={12} /> Live
                                </a>
                              )}
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-xs px-3 py-1 border rounded-md"
                                >
                                  <Github size={12} /> Code
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer text */}
            <p className="text-center text-xs text-gray-400 mt-8">
              More projects coming soon 🚀
            </p>
          </div>
        </section>
      </div>

      {/* mobile view */}

      <div className="block md:hidden">
        <section
          id="projects"
          className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-md mx-auto">
            {/* Heading */}
            <div className="text-center mb-6">
              <h2 className="text-lg font-medium">
                <span className="text-blue-600 ">Projects</span>
              </h2>
              <p className="text-xs text-gray- mt-5">
                Real-world applications built using modern technologies.
              </p>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden">
              {/* Slides */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {projects.map((project, i) => (
                  <div key={i} className="min-w-full px-2">
                    <div className="min-w-full px-2 flex justify-center">
                      <div className="bg-white rounded-lg   overflow-hidden   w-[260px]">
                        {/* Image */}
                        <div className="relative">
                          {project.featured && (
                            <div className="absolute top-1 right-1 bg-yellow-400 text-white text-[9px] px-1.5 py-0.5 rounded-full">
                              ⭐ Featured
                            </div>
                          )}

                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-32 object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-2 space-y-1.5">
                          {project.label ? (
                            <div className="text-[11px] text-blue-600 font-medium">
                              {project.label}
                            </div>
                          ) : (
                            <h3 className="text-sm font-semibold">
                              {project.title}
                            </h3>
                          )}

                          <div className="text-[10px] text-gray-400">
                            {project.type}
                          </div>

                          {project.open && (
                            <div className="text-[10px] text-purple-600 bg-purple-50 inline-block px-2 py-0.5 rounded-full mt-0.5">
                              Opens on: {project.open}
                            </div>
                          )}

                          <p className="text-[11px] text-gray-600 line-clamp-2">
                            {project.desc}
                          </p>

                          {/* Tech */}
                          <div className="flex flex-wrap gap-1 pt-1">
                            {project.tech.map((t, idx) => (
                              <span
                                key={idx}
                                className="text-[9px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Buttons */}
                          <div className="flex gap-1.5 pt-1">
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                className="flex-1 text-center text-[10px] py-1 bg-blue-600 text-white rounded"
                              >
                                Live
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                className="flex-1 text-center text-[10px] py-1 border rounded"
                              >
                                Code
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
              >
                ‹
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
              >
                ›
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
