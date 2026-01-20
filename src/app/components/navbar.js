"use client";

import { Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Thirumalai.pdf";
    link.download = "Thirumalai-Resume.pdf";
    link.click();
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      90;

    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(id);
  };

  // Scroll spy (robust version)
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBtnClass = (id) =>
    `flex items-center px-3 py-1 cursor-pointer rounded-full transition ${
      activeSection === id
        ? "text-blue-600 font-semibold bg-blue-50"
        : "text-gray-700 hover:text-blue-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm z-50">
      <div className="text-xl font-bold">Developerzzz</div>

      <div className="hidden xl:flex lg:flex 2xl:flex space-x-4 text-sm">
        <button onClick={() => scrollToSection("home")} className={navBtnClass("home")}>Home</button>
        <button onClick={() => scrollToSection("about")} className={navBtnClass("about")}>About</button>
        <button onClick={() => scrollToSection("skills")} className={navBtnClass("skills")}>Skills</button>
        <button onClick={() => scrollToSection("projects")} className={navBtnClass("projects")}>Projects</button>
        <button onClick={() => scrollToSection("contact")} className={navBtnClass("contact")}>Contact</button>
      </div>

      <button
        onClick={downloadCV}
        className="bg-yellow-400 px-4 py-2 text-sm rounded-xl flex items-center text-white hover:bg-yellow-500"
      >
        <Download size={18} className="mr-2" />
        Download CV
      </button>
    </nav>
  );
}
