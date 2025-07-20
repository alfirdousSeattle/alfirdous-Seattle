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
            Founded in 2024, Al-Firdous Seattle is dedicated to building a supportive and inclusive community 
            where individuals feel valued, connected, and empowered. We create meaningful opportunities for 
            engagement through outdoor experiences, workshops, mentorship, community service, and wellness retreats. 
            Our initiatives foster personal growth, mental well-being, and strong social connections while addressing 
            barriers like isolation and limited access to resources. By collaborating with local organizations, we 
            expand our impact and continue to strengthen community ties.
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
              At Al-Firdous Seattle, we foster connection, well-being, and
              empowerment through inclusive programs, community engagement, and
              essential services. Whether you’re seeking support, opportunities to
              give back, or a welcoming space to grow, you belong here
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
              We envision a thriving, connected community where every
              individual feels valued, supported, and empowered. Through meaningful
              connections, accessible resources, and inclusive programs, we strive
              to create a future where everyone has a sense of belonging and the
              opportunity to grow and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
