"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-gradient-to-br from-emerald-700 via-green-900 to-emerald-800 text-white pt-12 pb-8 px-4 mt-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0">
          {/* Logo and Title */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Image
              src="/images/Alfidous_Logo.PNG"
              alt="Alfidous logo"
              width={96}
              height={96}
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-2xl shadow-lg bg-white mb-3"
            />
            <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">Contact Us</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mb-2"></div>
            <p className="text-base text-emerald-100 max-w-xs text-center md:text-left">
              Have questions or want to get involved? Reach out to us!
            </p>
          </div>

          {/* Divider for mobile */}
          <div className="block md:hidden w-full h-px bg-emerald-600 my-6" />

          {/* Contact Info and Socials */}
          <div className="flex-1 flex flex-col items-center md:items-end space-y-4">
            <div className="flex flex-col items-center md:items-end space-y-2">
              <a
                href="https://www.instagram.com/alfirdousseattle/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-emerald-300 transition duration-300"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram className="text-2xl" />
                <span className="text-lg font-medium">AlFirdous Seattle</span>
              </a>
              <a
                href="https://chat.whatsapp.com/FBazUU56JRDAwmUbGl0dZn"
                className="flex items-center space-x-2 hover:text-emerald-300 transition duration-300"
                aria-label="Join our WhatsApp group"
              >
                <FaWhatsapp className="text-xl" />
                <span className="text-lg font-medium">WhatsApp Group</span>
              </a>
              <a
                href="mailto:admin@alfirdousseattle.org"
                className="flex items-center space-x-2 hover:text-emerald-300 transition duration-300"
                aria-label="Email us"
              >
                <FaEnvelope className="text-xl" />
                <span className="text-lg font-medium">admin@alfirdousseattle.org</span>
              </a>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-6 px-7 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full shadow-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Donate
            </button>
          </div>
        </div>
        {/* Bottom Divider */}
        <div className="mt-10 border-t border-emerald-600 pt-6 text-center text-emerald-100 text-sm">
          &copy; {new Date().getFullYear()} Al-Firdous Seattle. All rights reserved.
        </div>
      </footer>

      {/* Donate Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
              onClick={() => setModalOpen(false)}
              aria-label="Close donate modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              Donate to help fund more activities and reach more people!
            </h2>
            <Image
              src="/images/Zelle_QR_Code.JPG"
              alt="Donation QR Code"
              width={200}
              height={200}
              className="mx-auto rounded-lg border border-emerald-100 shadow"
            />
            <p className="mt-4 text-emerald-700 font-medium">Scan the QR code to donate via Zelle</p>
          </div>
        </div>
      )}
    </>
  );
}
