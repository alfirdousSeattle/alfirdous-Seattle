"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Track menu visibility

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < 100); // Hide navbar after scrolling down
      setShowScrollTop(window.scrollY > 300); // Show "⬆" arrow after scrolling down
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar - Only visible at the top of the page */}
      {showNavbar && (
        <nav className="fixed top-0 w-full z-50 bg-white shadow-md transition-all duration-300">
          <div className="container mx-auto flex justify-between items-center py-1 px-4 md:px-6">
            
            {/* Logo - Increased size but navbar stays compact */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center space-x-2">
                <div className="relative w-14 h-14 md:w-20 md:h-20">
                  <Image
                    src="/images/Alfidous_Logo.PNG"
                    alt="Alfidous logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation (Centered & Better Spacing) */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-8 font-semibold text-emerald-700 text-xl md:text-xl">
              <a href="#about-us" className="hover:text-emerald-500 transition">About Us</a>
              <a href="#programs" className="hover:text-emerald-500 transition">Programs</a>
              <a href="#calander" className="hover:text-emerald-500 transition">Event Calendar</a>
              <a href="#contact" className="hover:text-emerald-500 transition">Contact us</a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                className="text-emerald-500 focus:outline-none"
                aria-label="Toggle Menu"
                onClick={() => setMenuOpen(!menuOpen)} // Toggle menu state
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Display when `menuOpen` is true */}
          {menuOpen && (
            <div className="md:hidden bg-white text-emerald-700 w-full absolute top-full left-0 shadow-lg z-40">
              <div className="flex flex-col space-y-3 py-3 px-4 text-lg">
                <a href="#about-us" className="hover:text-emerald-500 transition" onClick={() => setMenuOpen(false)}>About Us</a>
                <a href="#programs" className="hover:text-emerald-500 transition" onClick={() => setMenuOpen(false)}>Programs</a>
                <a href="#calander" className="hover:text-emerald-500 transition" onClick={() => setMenuOpen(false)}>Event Calendar</a>
                <a href="#contact" className="hover:text-emerald-500 transition" onClick={() => setMenuOpen(false)}>Contact us</a>
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Scroll-to-Top Button (Arrow) */}
      {showScrollTop && (
         <button
         onClick={scrollToTop}
         className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-emerald-700 text-white 
         p-2 md:p-3 rounded-full shadow-lg hover:bg-greenDark 
         transition-transform transform hover:scale-110 text-sm md:text-base"
         aria-label="Scroll to top"
       >
          ⬆
        </button>
      )}
    </>
  );
}
