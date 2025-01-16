/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "./footer";
import AboutUs from "./aboutus";
import Nav from "./nav";
import React, { useEffect } from "react";
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
    className="relative w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-10 md:py-20"
  >
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-yellowAccent/100"></div>

    {/* Left: Logo */}
    <div className="relative z-10 flex-shrink-0 w-full md:w-auto mb-6 md:mb-0 flex justify-center">
      <img
        src="/images/Alfidous_Logo.PNG"
        alt="Alfidous logo"
        className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:max-w-lg lg:max-h-lg mx-0 object-contain"
      />
    </div>

    {/* Right: Text Content */}
    <div className="relative z-10 md:ml-8 max-w-lg">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-snug drop-shadow-lg">
        Cultivating Connection, Community, and Care
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-2xl text-emerald-700">
        Join us in fostering growth, resilience, and belonging in the greater Seattle area.
      </p>
    </div>
  </section>

  {/* About Us Section */}
  <section
    id="about-us"
    className="py-20 sm:py-24 md:py-20 bg-gradient-to-t from-yellowAccent/100 to-white mt-8"
  >
    <div className="max-w-5xl mx-auto px-6">
      <AboutUs />
    </div>
  </section>

  {/* Problem and Solution Section */}
  <section
    id="pands"
    className="py-20 sm:py-24 md:py-20 bg-gradient-to-t from-white to-yellowAccent/100"
  >
    <div className="max-w-5xl mx-auto px-6">
      <PandS />
    </div>
  </section>

  {/* Programs Section */}
  <section
    id="programs"
    className="py-20 sm:py-24 md:py-20 bg-gradient-to-t from-yellowAccent/100 to-white"
  >
    <div className="max-w-5xl mx-auto px-6">
      <OrgPrograms />
    </div>
  </section>

  {/* Contact Section */}
  <section
    id="contact"
    className="pt-0 bg-gradient-to-t from-white to-yellowAccent/100"
  >
    <Footer />
  </section>
</div>

  );
}
