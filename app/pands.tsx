"use client";

import React from "react";

export default function PandS() {
  return (
    <section className="bg-white py-16 md:py-24 min-h-screen flex items-center">
      <div className="w-full px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3 tracking-tight">
              Event Calendar
            </h2>
            <p className="text-lg text-emerald-900 mb-2 max-w-xl mx-auto">
              Stay up to date with our upcoming events, programs, and community gatherings.
            </p>
          </div>
          
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_04ed04d2eab27fc09397a2d9de53a167c408ac583689f07491256d4d04bac755%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            style={{ border: "none" }}
            width="100%"
            height="800"
            className="rounded-xl shadow-lg"
            title="Google Calendar"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
