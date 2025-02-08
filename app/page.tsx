"use client";

import Footer from "./footer";
import AboutUs from "./aboutus";
import Nav from "./nav";
import React from "react";
import PandS from "./pands";
import OrgPrograms from "./programs";



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-10 md:py-20 bg-[url('/images/Alfirdous_bg.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-2xl px-6 sm:px-12 py-10 rounded-lg">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-snug drop-shadow-lg animate-fade-up">
            Cultivating Connection, Community, and Care
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-2xl text-emerald-300">
            Join us in fostering growth, resilience, and belonging in the greater Seattle area.
          </p>
        </div>
      </section>

      <section id="about-us" className="py-20 bg-gradient-to-t from-yellowAccent/100 to-white mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <AboutUs />
        </div>
      </section>

      <section id="programs" className="py-20 bg-gradient-to-t from-white to-yellowAccent/100">
        <div className="max-w-5xl mx-auto px-6">
          <OrgPrograms />
        </div>
      </section>

      <section id="calander" className="py-20 bg-gradient-to-t from-yellowAccent/100 to-white mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <PandS />
        </div>
      </section>


      <section id="contact" className="pt-0 bg-gradient-to-t from-white to-yellowAccent/100">
        <Footer />
      </section>
    </div>
  );
}
