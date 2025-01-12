"use client";

import React, { useState } from "react";

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
          <a href="#home" className="text-2xl font-bold text-emerald-500">
            Alfirdous Seattle
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm uppercase font-medium">
          <li>
            <a href="#home" className="hover:text-emerald-500">Home</a>
          </li>
          <li>
            <a href="#about-us" className="hover:text-emerald-500">About Us</a>
          </li>
          <li>
            <a href="#events" className="hover:text-emerald-500">Events</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-emerald-500">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`absolute top-16 left-0 w-full bg-emerald-800 md:hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'block' : 'hidden'
      }`}>
        <ul className="py-6 space-y-4 text-center">
          <li>
            <a href="#home" onClick={toggleMenu} className="block text-white hover:text-emerald-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={toggleMenu} className="block text-white hover:text-emerald-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#events" onClick={toggleMenu} className="block text-white hover:text-emerald-300">
              Events
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} className="block text-white hover:text-emerald-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
