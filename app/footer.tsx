"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-5xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            {/* Logo and Title - Left Side */}
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <Image
                src="/images/Alfidous_Logo.PNG"
                alt="Alfidous logo"
                width={90}
                height={90}
                className="w-20 h-20 object-contain rounded-xl shadow-lg bg-white"
              />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Al-Firdous Seattle</h2>
                <p className="text-slate-300 text-sm max-w-sm">
                  A Place of Support, Growth, and Community Empowerment
                </p>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex flex-col items-center md:items-end">
              {/* Donate Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full shadow-lg font-semibold text-base hover:from-green-600 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                Support Our Mission
              </button>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-slate-800 pt-6">
            <div className="text-center text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Al-Firdous Seattle. All rights reserved.
            </div>
          </div>
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
            <p className="text-emerald-700 font-medium">Scan the QR code to donate via Zelle</p>
          </div>
        </div>
      )}
    </>
  );
}
