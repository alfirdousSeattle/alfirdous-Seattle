"use client";

import Footer from "./footer";
import Calendar from "./calendar";
import Aboutus from "./aboutus";
import Nav from "./nav";
import React, { useEffect } from "react";

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
    <div className="min-h-screen bg-emerald-700">
      <Nav />

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1500&auto=format&fit=crop&q=60")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-snug drop-shadow-lg">
            Discover Nature’s Beauty <br /> with Alfirdous Seattle
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Embark on unforgettable adventures and explore the great outdoors.
          </p>
          <div className="mt-8">
            <a
              href="#about-us"
              className="px-8 py-4 text-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-white">
        <div className="mt-12">
          <Aboutus />
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-emerald-700">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Upcoming Events</h2>
          <p className="text-lg text-white leading-relaxed">
            Join us on our upcoming adventures and community events.
          </p>
        </div>
        <div className="mt-12">
          <Calendar />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-emerald-700">
        <div className="mt-12">
          <Footer />
        </div>
      </section>
    </div>
  );
}
