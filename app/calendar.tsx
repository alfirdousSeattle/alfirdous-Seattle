"use client";

import React from 'react';

export default function Calendar() {
    return (
        <div className="min-h-screen bg-[url('/images/Forestbg.jpg')] bg-cover bg-center text-white">
            {/* Overlay for better text readability */}
            <div className="bg-black bg-opacity-60 min-h-screen flex items-center justify-center">
                <section className="section-base p-6 md:p-12 bg-white bg-opacity-80 shadow-lg rounded-lg max-w-4xl">
                    <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
                        Adventure Awaits
                    </h1>
                    <p className="text-center text-gray-700 mb-6">
                        Plan your next hiking trip and explore the wonders of nature with our event calendar!
                    </p>
                    <div
                        className="rounded-lg overflow-hidden border-2 border-gray-200 shadow-md transition-transform duration-500 transform hover:scale-105"
                    >
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=abdulahimohamud22%40gmail.com&ctz=America%2FLos_Angeles"
                            style={{ border: 0 }}
                            width="100%"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                            title="Google Calendar"
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    );
}
