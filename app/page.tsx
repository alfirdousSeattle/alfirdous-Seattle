"use client";

import Footer from "./footer";
import AboutUs from "./aboutus";
import Nav from "./nav";
import React from "react";
import PandS from "./pands";
import OrgPrograms from "./programs";
import Contact from "./Contact";




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
        <div className="relative z-10 max-w-6xl px-6 sm:px-12 py-10 rounded-lg">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-snug drop-shadow-lg animate-fade-up">
          Welcome to Al-Firdous Seattle
          </h1>
          <h2 className="mt-4 text-2xl sm:text-xl md:text-3xl text-white">A Place of Support, Growth, and Community Empowerment</h2>
          
        </div>
      </section>

      <section id="about-us">
        <AboutUs />
      </section>

      <section id="programs">
        <OrgPrograms />
      </section>

      <section id="calander">
        <PandS />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
