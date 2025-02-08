/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 bg-transparent transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-6">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <div className="text-xl relative w-16 h-16 md:w-32 md:h-32">
                
                <Image
                  src="/images/Alfidous_Logo.PNG"
                  alt="Alfidous logo"
                  fill
                  className="object-fill"
                />
              </div>
            </a>
          </div>

          <div className="hidden md:flex space-x-6 font-semibold bg-white text-emerald-700 text-sm md:text-base px-5">
            <a href="#about-us" className="hover:text-emerald-500 transition">About Us</a>
            <a href="#programs" className="hover:text-emerald-500 transition">Programs</a>
            <a href="#calendar" className="hover:text-emerald-500 transition">Events</a>
            <a href="#contact" className="hover:text-emerald-500 transition">Contact</a>
            <button onClick={() => setModalOpen(true)} className="hover:text-emerald-500 transition">Donate</button>
          </div>

          <div className="md:hidden">
            <button
              className="text-emerald-500 focus:outline-none"
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
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

        {menuOpen && (
          <div className="md:hidden bg-white text-emerald-700 w-full absolute top-full left-0 shadow-lg z-40">
            <div className="flex flex-col space-y-3 py-3 px-4 text-sm">
              <a href="#about-us" className="hover:text-emerald-500 transition" onClick={() => setMenuOpen(false)}>About Us</a>
              <a href="#programs" className="hover:text-emerald-500 transition" onClick={() => setMenuOpen(false)}>Programs</a>
              <a href="#calendar" className="hover:text-emerald-500 transition" onClick={() => setMenuOpen(false)}>Events</a>
              <a href="#contact" className="hover:text-emerald-500 transition" onClick={() => setMenuOpen(false)}>Contact</a>
              <button onClick={() => { setMenuOpen(false); setModalOpen(true); }} className="hover:text-emerald-500 transition">Donate</button>
            </div>
          </div>
        )}
      </nav>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-greenDark mb-4">Donate to help fund more activities and reach more people!</h2>
            <Image
              src="/images/Zelle_QR_Code.JPG"
              alt="Donation QR Code"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}
