"use client";

import React from "react";

export default function PandS() {
  return (
    <section className="relative bg-gray-100 py-16 flex items-center">
      <div className="w-full flex flex-col justify-center items-center px-4 md:px-8">
        {/* Main Content */}
        <h2 className="text-4xl md:text-5xl font-bold text-greenDark mb-8 text-center">
          Event Calendar
        </h2>

        {/* Calendar Container */}
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-4 md:p-6">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_04ed04d2eab27fc09397a2d9de53a167c408ac583689f07491256d4d04bac755%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            style={{ border: "none" }}
            width="100%"
            height="600"
            className="rounded-lg"
            title="Google Calendar"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
