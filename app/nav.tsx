/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from 'next/image';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-transparent text-white backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center space-x-2">
            <Image
              src="/images/Alfidous_Logo.PNG"
              alt="Alfidous logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <span className="text-2xl font-bold text-emerald-500"></span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-emerald-700">
          <a href="#about-us" className="hover:text-emerald-500 transition">
            About Us
          </a>
          <a href="#programs" className="hover:text-emerald-500 transition">
            Programs
          </a>
          <a href="#pands" className="hover:text-emerald-500 transition">
            P & S
          </a>
          <a href="#contact" className="hover:text-emerald-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-emerald-500 focus:outline-none"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-emerald-700 w-full absolute top-full left-0 shadow-lg z-40">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <a href="#about-us" className="hover:text-emerald-500 transition" onClick={toggleMenu}>
              About Us
            </a>
            <a href="#programs" className="hover:text-emerald-500 transition" onClick={toggleMenu}>
              Programs
            </a>
            <a href="#pands" className="hover:text-emerald-500 transition" onClick={toggleMenu}>
              P & S
            </a>
            <a href="#contact" className="hover:text-emerald-500 transition" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
