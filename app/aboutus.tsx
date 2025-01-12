"use client";

import React from 'react';

export default function AboutUs() {
    return (
        <section
            className="relative bg-cover bg-center h-screen flex items-center"
            style={{
                backgroundImage: 
                    "url('/images/Alfirdous_bg.jpg')", // Replace with a PNW-themed image if desired.
            }}
        >
            <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center px-8">
                {/* Main Content */}
                <div className="text-center text-white max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About Alfirdous Seattle
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our mission is to connect youth in the Pacific Northwest with outdoor
                        adventures and opportunities for career growth, including pathways into the
                        tech industry.
                    </p>
                    <p className="text-md md:text-lg mb-8">
                        Through activities like hiking, camping, and skill-building workshops, we
                        aim to inspire a love for nature and prepare young minds for a brighter
                        future.
                    </p>
                    {/* Call-to-Action Button */}
                    <a
                        href="#"
                        className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
