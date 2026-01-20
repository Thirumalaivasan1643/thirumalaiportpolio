"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
} from "lucide-react";
import developerAnim from "../../../../public/Developer.json";

function Home() {
  const nameRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      nameRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      }
    ).to(nameRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(scrollRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Thirumalai.pdf";
    link.download = "Thirumalai-Resume.pdf";
    link.click();
  };

  return (
    <>
      {/* Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Poppins', sans-serif; }
        `}
      </style>

      <section
        id="home"
        className="h-screen bg-white text-black flex items-center px-4 relative"
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left space-y-4">

            <p className="text-blue-400 text-sm">
              Hello, I&apos;m
            </p>

            <h1
              ref={nameRef}
              className="
                text-xl sm:text-2xl lg:text-3xl
                font-medium transition-all duration-500
                hover:scale-105 hover:text-transparent hover:bg-clip-text
                hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400
              "
            >
              Thirumalaivasan V
            </h1>

            <h2 className="text-sm sm:text-md text-gray-400">
              Software Developer | Full-Stack Engineer
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build modern, scalable, and high-performance web & mobile applications using{" "}
              <span className="font-semibold text-blue-500">React</span>,{" "}
              <span className="font-semibold text-purple-500">Next.js</span>,{" "}
              <span className="font-semibold text-green-500">Node.js</span>{" "}
              and{" "}
              <span className="font-semibold text-pink-500">React Native</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-3">
              

              <a
                href="#projects"
                className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-3 text-gray-600">
              <a href="https://github.com/Thirumalaivasan1643" target="_blank"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/thirumalai28/" target="_blank"><Linkedin size={18} /></a>
             </div>

            {/* Quick Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-4 text-center">
              <div>
                <p className="text-lg font-semibold text-blue-600">1+</p>
                <p className="text-xs text-gray-500">Years Exp</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-blue-600">15+</p>
                <p className="text-xs text-gray-500">Projects</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-blue-600">10+</p>
                <p className="text-xs text-gray-500">Technologies</p>
              </div>
            </div>

          </div>

          {/* Right Animation */}
          <div className="flex justify-center items-center">
            <Lottie
              animationData={developerAnim}
              loop
              className="
                w-[220px] h-[220px]
                sm:w-[280px] sm:h-[280px]
                lg:w-[350px] lg:h-[350px]
              "
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center text-xs"
        >
          <ArrowDown size={18} />
          Scroll
        </div>

      </section>
    </>
  );
}

export default Home;
