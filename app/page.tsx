/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "./footer";
import AboutUs from "./aboutus";
import Nav from "./nav";
import React, { useEffect, useState } from "react";
import PandS from "./pands";
import OrgPrograms from "./programs";

export default function Home() {


  useEffect(() => {
    const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href")?.substring(1); // Get the target section ID
      if (!targetId) return;

      const section = document.getElementById(targetId);
      if (section) {
        const offset = 70; // Offset for fixed navbar
        const topPosition =
          section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topPosition, behavior: "smooth" }); // Smooth scroll to the section
      }
    };

    const links = document.querySelectorAll("nav a");
    links.forEach((link) =>
      link.addEventListener("click", handleNavLinkClick as unknown as EventListener)
    );

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleNavLinkClick as unknown as EventListener)
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-yellowAccent/100"></div>

        <div className="relative z-10 flex items-center justify-center w-full px-6">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/Alfidous_Logo.PNG"
              alt="Alfidous logo"
              className="max-w-lg max-h-lg md:w-45 md:h-45 mx-0"
            />
          </div>

          {/* Right: Text Content */}
          <div className="ml-8 text-left max-w-lg">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-snug drop-shadow-lg">
              Cultivating Connection, Community, and Care
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-emerald-700">
              Join us in fostering growth, resilience, and belonging in the greater Seattle area.
            </p>
            <div className="mt-8">
              <a
                href="#about-us"
                className="px-8 py-4 text-lg font-semibold text-white bg-emerald-700 hover:bg-emerald-500 rounded-full shadow-lg transform hover:scale-105 "
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-gradient-to-t from-yellowAccent/100 to-white">
      
          
          <AboutUs />

      </section>

      {/* Problem and Solution Section */}
      <section id="pands" className="py-20 bg-gradient-to-t from-white to-yellowAccent/100">
        <div className="max-w-5xl mx-auto px-6">
          <PandS />
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-t from-yellowAccent/100 to-white">
      
       
       
        <div className="max-w-5xl mx-auto px-6">
          <OrgPrograms />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-white to-yellowAccent/100">
        
          <Footer />
      </section>
    </div>
  );
}
