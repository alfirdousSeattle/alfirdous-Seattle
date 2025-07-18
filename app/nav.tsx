"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < 100);
      setShowScrollTop(window.scrollY > 300);
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
        <nav className="fixed top-0 w-full z-50 bg-white shadow-lg transition-all duration-300 border-b border-emerald-100">
          <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-8">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="relative w-14 h-14 md:w-20 md:h-20">
                <Image
                  src="/images/Alfidous_Logo.PNG"
                  alt="Alfidous logo"
                  fill
                  className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-10 font-semibold text-emerald-800 text-lg md:text-xl">
              {[
                { href: "#about-us", label: "About Us" },
                { href: "#programs", label: "Programs" },
                { href: "#calander", label: "Event Calendar" },
                { href: "#contact", label: "Contact us" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-2 py-1 transition-colors duration-200 hover:text-emerald-600 focus:text-emerald-600 group"
                >
                  <span>{item.label}</span>
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                className="text-emerald-600 focus:outline-none p-2 rounded-full hover:bg-emerald-50 transition"
                aria-label="Toggle Menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Animated Slide Down */}
          <div
            className={`md:hidden bg-white/95 backdrop-blur-md text-emerald-800 w-full absolute top-full left-0 shadow-lg z-40 transition-all duration-300 ${menuOpen ? 'max-h-60 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}
            style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
          >
            <div className="flex flex-col space-y-3 px-6 text-lg">
              {[
                { href: "#about-us", label: "About Us" },
                { href: "#programs", label: "Programs" },
                { href: "#calander", label: "Event Calendar" },
                { href: "#contact", label: "Contact us" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-2 px-2 rounded-lg hover:bg-emerald-50 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* Scroll-to-Top Button (Arrow) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-white/90 text-emerald-700 border border-emerald-200 p-2 md:p-3 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-transform transform hover:scale-110 text-lg md:text-xl backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <span className="sr-only">Scroll to top</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
}
