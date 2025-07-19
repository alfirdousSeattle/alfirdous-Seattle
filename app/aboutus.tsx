"use client";

import React from "react";

export default function AboutUs() {
  return (
    <section id="about" className="bg-slate-50 py-8 md:py-12 min-h-screen flex items-center">
      <div className="w-full px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              About Al-Firdous Seattle
            </h2>
          </div>

          {/* History Section - Centered */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900"> History</h3>
            </div>
            <p className="text-base text-gray-700 text-center">
              Founded in 2024, Al-Firdous Seattle emerged from a vision to create meaningful connections 
              and support systems within the Greater Seattle community. What began as a small group of 
              dedicated volunteers has grown into a vibrant organization that serves hundreds of individuals 
              and families through comprehensive programs including outdoor activities, educational workshops, 
              and charitable initiatives. Through collaboration with local organizations and the dedication 
              of our volunteer network, we've created lasting positive impact throughout the region.
            </p>
          </div>

          {/* Mission & Vision Section - Side by Side */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900"> Mission</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                At Al-Firdous Seattle, we foster connection, well-being, and empowerment through inclusive programs, 
                community engagement, and essential services. As a volunteer-driven organization, we believe in the 
                power of collective action and mutual support. Whether you're seeking support, opportunities to give 
                back, or a welcoming space to grow, you belong here.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                We envision a thriving, connected community where every individual feels valued, supported, and 
                empowered. Through meaningful connections, accessible resources, and inclusive programs, we strive to 
                create a future where everyone has a sense of belonging and the opportunity to grow and succeed. 
                Our volunteer-driven approach ensures sustainable impact and genuine community ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
