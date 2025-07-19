"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define TypeScript Interface for Programs
interface Activity {
  name: string;
  image?: string;
  video?: string;
}

interface ProgramType {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string[];
  activities: Activity[];
  color: string;
}

const OrgPrograms: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramType | null>(null);

  const programs: ProgramType[] = [
    {
      id: 1,
      title: "Women-Only Activities",
      subtitle: "Safe spaces for connection and growth",
      image: "/images/hiking.jpg",
      color: "from-emerald-600 to-teal-700",
      description: [
        "Biweekly hiking adventures in beautiful natural settings.",
        "Monthly brunch and dinner potlucks fostering community bonds.",
        "Annual retreats for personal growth and relaxation.",
        "Exciting snow tubing activities during winter months."
      ],
      activities: [
        { name: "Biweekly Hiking", image: "/images/hiking.jpg" },
        { name: "Monthly Potlucks", image: "/images/potlock.JPG" },
        { name: "Annual Retreats", image: "/images/Annual.jpg" },
        { name: "Snow Tubing", image: "/images/snow.jpg" }
      ]
    },
    {
      id: 2,
      title: "Community Events",
      subtitle: "Building stronger connections",
      image: "/images/Arts.JPG",
      color: "from-purple-600 to-indigo-700",
      description: [
        "Creative Arts & Crafts Night for all skill levels.",
        "Fun Family Game Night with board games and activities.",
        "Outdoor Picnics experiences in nature.",
        "Community Bazaar showcasing local talents and crafts."
      ],
      activities: [
        { name: "Arts & Crafts Night", image: "/images/Arts.JPG" },
        { name: "Family Game Night", image: "/images/family.JPG" },
        { name: "Outdoor Picnics", image: "/images/Camping.jpg" },
        { name: "Community Bazaar", video: "/videos/Bazzar.mp4" }
      ]
    },
    {
      id: 3,
      title: "Youth Workshops",
      subtitle: "Empowering the next generation",
      image: "/images/Carrer.JPG",
      color: "from-blue-600 to-cyan-700",
      description: [
        "Professional resume building and career guidance workshops.",
        "Educational workshops and inspiring field trips.",
        "College preparation and application assistance workshops."
      ],
      activities: [
        { name: "Resume Workshop", image: "/images/Career.JPG" },
        { name: "Educational Workshops", image: "/images/Carrer.JPG" },
        { name: "College Workshops", image: "/images/Resume.jpeg" }
      ]
    },
    {
      id: 4,
      title: "Charity Engagements",
      subtitle: "Making a difference together",
      image: "/images/Charity.jpg",
      color: "from-red-600 to-pink-700",
      description: [
        "Supporting Afghan refugees through food drives and assistance.",
        "Ramadan food drives to help families in need.",
        "Ongoing donation drives for community members facing hardship."
      ],
      activities: [
        { name: "Afghan Refugee Food Drive", image: "/images/Afghan.png" },
        { name: "Ramadan Food Drive", image: "/images/Food.jpg" },
        { name: "Donations Drives", image: "/images/Charity.jpg" }
      ]
    },
  ];

  return (
    <section id="programs" className="bg-slate-50 py-20 min-h-screen flex items-center">
      <div className="w-full px-6 sm:px-12 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of programs designed to strengthen community bonds, 
            empower individuals, and create lasting positive impact.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {program.subtitle}
                </p>
              </div>

              {/* Card Content */}
              <div className="px-6 pb-4">
                <div className="relative h-40 bg-cover bg-center rounded-md mb-4 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.id === 1 && "Dedicated activities designed specifically for women to connect, learn, and grow together in a comfortable environment."}
                  {program.id === 2 && "Regular gatherings that bring our community together for celebration, learning, and mutual support."}
                  {program.id === 3 && "Educational and engaging workshops designed to help young people develop skills and confidence."}
                  {program.id === 4 && "Opportunities to give back to the broader community through organized charitable activities and drives."}
                </p>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-11/12 md:w-5/6 lg:w-4/5 max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="relative p-8 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-lg opacity-90">
                    {selectedProgram.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="text-white hover:text-gray-200 text-3xl transition-colors"
                >
                  &#x2715;
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {selectedProgram.activities.map((activity, index) => (
                  <div key={index} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative h-64">
                      {activity.video ? (
                        <video
                          src={activity.video}
                          controls
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                          src={activity.image || ''}
                          alt={activity.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {activity.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProgram.description[index]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrgPrograms;
