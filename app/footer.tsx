"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="max-w-5xl mx-auto px-6 pt-0 text-center text-white">
        <h2 className="text-5xl font-bold text-greenDark mb-6">Contact Us</h2>
        <p className="text-lg text-greenDark leading-relaxed mb-6">
          Have questions or want to get involved? Reach out to us!
        </p>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 space-y-6 md:space-y-0 md:space-x-8">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex justify-center">
            <Image
              src="/images/Alfidous_Logo.PNG"
              alt="Alfidous logo"
              width={96}
              height={96}
              className="w-24 h-24 md:w-52 md:h-52 object-contain"
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
              <span className="text-lg">AlFirdous Seattle</span>
            </a>

            {/* Phone and Email */}
            <a href="https://chat.whatsapp.com/FBazUU56JRDAwmUbGl0dZn">
              <p className="flex items-center space-x-2">
                <FaWhatsapp className="text-lg" />
                <span className="text-lg">WhatsApp Group</span>
              </p>
            </a>
            <p className="flex items-center space-x-2">
              <FaEnvelope className="text-lg" />
              <span className="text-lg">Email: admin@alfirdousseattle.org</span>
            </p>

            {/* Donate Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="mt-4 px-5 py-2 bg-emerald-700 text-white rounded-full shadow-lg hover:bg-greenDark transition-transform transform hover:scale-105"
            >
              Donate
            </button>
          </div>
        </div>
      </footer>

      {/* Donate Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-greenDark mb-4">
              Donate to help fund more activities and reach more people!
            </h2>
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
