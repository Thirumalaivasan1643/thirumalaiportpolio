"use client";
import React from "react";

export default function About() {
  return (
    <>
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block">
        <section
          id="about"
          className="min-h-screen text-black font-poppins py-10 px-6 scroll-mt-[90px]"
        >
          <div className="max-w-5xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-10">
              <h1 className="text-xl font-medium mb-3">
                About <span className="text-blue-600">Me</span>
              </h1>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                Passionate developer crafting digital experiences with clean
                code, modern technologies, and scalable architecture.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-md font-medium mb-4">Who I Am</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I specialize in React, Next.js, Node.js, and React Native. I
                  have hands-on experience building SaaS platforms, real-time
                  applications, e-commerce systems, and animation-rich websites
                  using GSAP, Parallax and AOS.
                  <br /><br />
                  My development philosophy centers on performance,
                  maintainability, and user experience. I enjoy solving complex
                  problems and debugging challenging issues.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-md font-medium mb-4">Personal Info</h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <div><b>Name:</b> Thirumalaivasan V</div>
                  <div><b>Role:</b> Software Developer</div>
                  <div><b>Location:</b> Dharmapuri, Tamil Nadu, India</div>
                  <div><b>Email:</b> thirumalai.ink@example.com</div>
                  <div><b>Experience:</b> 1+ Years</div>
                  <div><b>Availability:</b> Open to freelance & full-time</div>
                </div>
              </div>
            </div>

            {/* What I Do */}
            <div className="bg-white rounded-xl p-8 mb-10 shadow-sm">
              <h2 className="text-md font-medium mb-4 text-center">What I Do</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div>✅ Web Application Development</div>
                <div>✅ Mobile App Development</div>
                <div>✅ REST API & Backend Systems</div>
                <div>✅ Real-time Systems (Socket.IO)</div>
                <div>✅ UI Animations (GSAP, AOS)</div>
                <div>✅ Performance Optimization</div>
                <div>✅ Debugging & Problem Solving</div>
                <div>✅ Scalable Architecture Design</div>
                <div>✅ Code Review & Quality Assurance</div>
              </div>
            </div>

            {/* Career Goal */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
              <h2 className="text-md font-medium mb-3 text-blue-700">
                Career Goal
              </h2>
              <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
                My goal is to grow as a senior full-stack engineer, contribute to
                impactful products, and work with innovative teams to solve
                real-world problems through technology.
              </p>
            </div>

          </div>
        </section>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="block md:hidden">
        <section
          id="about"
          className="text-black font-poppins py-6 px-4 scroll-mt-[80px]"
        >
          <div className="max-w-md mx-auto">

            {/* Heading */}
            <div className="text-center mb-6">
              
              <p className="text-gray-500 text-xs leading-relaxed">
                Passionate developer crafting digital experiences with clean
                code and modern technologies.
              </p>
            </div>

            {/* Who I Am */}
            <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
              <h2 className="text-sm font-medium mb-2">Who I Am</h2>
              <p className="text-gray-600 text-xs leading-relaxed">
                I specialize in React, Next.js, Node.js, and React Native. I
                build SaaS platforms, real-time apps, e-commerce systems, and
                animation-rich websites using GSAP, Parallax and AOS.
              </p>
            </div>

            {/* Personal Info */}
            <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
              <h2 className="text-sm font-medium mb-2">Personal Info</h2>
              <div className="space-y-1 text-xs text-gray-600">
                <div><b>Name:</b> Thirumalaivasan V</div>
                <div><b>Role:</b> Software Developer</div>
                <div><b>Location:</b> Dharmapuri, Tamil Nadu</div>
                <div><b>Email:</b> thirumalai.ink@example.com</div>
                <div><b>Experience:</b> 1+ Years</div>
              </div>
            </div>

            {/* What I Do */}
            <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
              <h2 className="text-sm font-medium mb-3 text-center">What I Do</h2>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div>✅ Web Apps</div>
                <div>✅ Mobile Apps</div>
                <div>✅ REST APIs</div>
                <div>✅ Real-time Systems</div>
                <div>✅ UI Animations</div>
                <div>✅ Performance Optimization</div>
                <div>✅ Debugging</div>
                <div>✅ Problem Solving</div>
                <div>✅ Scalable Architecture</div>
                <div>✅ Code Quality</div>
                <div>✅ Database Design</div>
                <div>✅ Security Implementation</div>
              </div>
            </div>

            {/* Career Goal */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 text-center">
              <h2 className="text-sm font-medium mb-2 text-blue-700">
                Career Goal
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                My goal is to grow as a senior full-stack engineer and build
                impactful real-world products through innovative solutions.
              </p>
            </div>

            {/* Skills Overview */}
             

          </div>
        </section>
      </div>
    </>
  );
}