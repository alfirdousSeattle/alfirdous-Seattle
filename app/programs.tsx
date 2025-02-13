"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define TypeScript Interface for Programs
interface ProgramType {
  id: number;
  title: string;
  image: string;
  description: string[];
}

const OrgPrograms: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramType | null>(null);

  const programs: ProgramType[] = [
    {
      id: 1,
      title: "Women-Only Activities",
      image: "/images/hiking.jpg", // Using the hiking image for outdoor activities
      description: [
        "Biweekly hiking.",
        "Monthly brunch/dinner potlucks.",
        "Annual retreats.",
        "Snow tubing and more to come, Insha’Allah."
      ],
    },
    {
      id: 2,
      title: "Family-Oriented Events",
      image: "/images/family.JPG", // Keeping the family image for family gatherings
      description: [
        "Arts & Crafts Night.",
        "Family Game Night.",
        "Family Camping (in progress)."
      ],
    },
    {
      id: 3,
      title: "Workshops & Educational Sessions",
      image: "/images/Arts.JPG", // Image for workshops and educational sessions
      description: [
        "Resume Workshop.",
        "MS employee panel.",
        "Other topics relevant to the community’s needs."
      ],
    },
    {
      id: 4,
      title: "Youth Engagement",
      image: "/images/Carrer.JPG", // Image for youth-related events
      description: [
        "Special events and tours for boys and girls.",
        "Microsoft Campus Tour to encourage learning and social interaction."
      ],
    },
  ];

  return (
    <section id="programs" className="py-12">
      <h2 className="text-4xl font-bold text-greenDark mb-8 text-center">
        Our Programs
      </h2>

      {/* Cards Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {programs.map((program) => (
          <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image (Increased height to h-72 for a larger display) */}
            <Image
              src={program.image}
              alt={program.title}
              width={800}
              height={600}
              className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-greenDark mb-4">{program.title}</h3>
              <button
                onClick={() => setSelectedProgram(program)}
                className="px-5 py-2 bg-emerald-700 text-white rounded-full shadow-lg hover:bg-greenDark transition-transform transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Program Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h3 className="text-xl font-bold text-greenDark">
                {selectedProgram.title}
              </h3>
              <button
                onClick={() => setSelectedProgram(null)}
                className="text-gray-500 hover:text-gray-800"
              >
                &#x2715;
              </button>
            </div>
            <div className="p-6">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {selectedProgram.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrgPrograms;
