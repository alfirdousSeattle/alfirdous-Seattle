/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 pt-0 text-center text-white">
      <h2 className="text-5xl font-bold text-greenDark mb-6">Contact Us</h2>
      <p className="text-lg text-greenDark leading-relaxed mb-6">
        Have questions or want to get involved? Reach out to us!
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 space-y-6 md:space-y-0 md:space-x-8">
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex justify-center">
          <img
            src="/images/Alfidous_Logo.PNG"
            alt="Alfidous logo"
            className="w-24 h-24 md:w-52 md:h-52 "
          />
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-center md:items-start text-greenDark space-y-3">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/alfirdousseattle/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-emerald-400 transition duration-300"
            aria-label="Visit our Instagram page"
          >
            <FaInstagram className="text-3xl" />
            <span className="text-lg">Instagram</span>
          </a>

          {/* Phone and Email */}
          <p className="flex items-center space-x-2">
            <FaPhoneAlt className="text-lg" />
            <span className="text-lg">Phone: (206) 454 - 0026</span>
          </p>
          <p className="flex items-center space-x-2">
            <FaEnvelope className="text-lg" />
            <span className="text-lg">Email: admin@alfirdousseattle.org</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
