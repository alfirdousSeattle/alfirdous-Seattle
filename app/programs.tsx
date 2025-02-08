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
      title: "Professional development",
      image: "/images/Carrer.JPG",
      description: [
        "Creating safe spaces for meaningful dialogue and social connections.",
        "Community meals with conversations about life and mental health.",
        "Inclusive gatherings to foster social bonds.",
      ],
    },
    {
      id: 2,
      title: "Potlucks",
      image: "/images/potlock.JPG",
      description: [
        "Wellness retreats and guided discussions.",
        "Creative activities to promote emotional wellness.",
        "Kids Fun Night to promote joy for young ones.",
      ],
    },
    {
      id: 3,
      title: "Wellness activities",
      image: "/images/hiking.jpg",
      description: [
        "College application workshops.",
        "Resume-building sessions.",
        "Networking opportunities with professionals.",
      ],
    },
    {
      id: 4,
      title: "Giving back",
      image: "/images/Charity.jpg",
      description: [
        "Family camping trips to foster bonding.",
        "Multi-Cultural Nights to celebrate traditions and diversity.",
      ],
    },
    // {
    //   id: 5,
    //   title: "Outdoor Adventures Program",
    //   image: "/images/outdoor_adventures.jpg",
    //   description: [
    //     "Hiking trips and nature retreats.",
    //     "Snow tubing adventures and carpooling services.",
    //   ],
    // },
    // {
    //   id: 6,
    //   title: "Community Engagement Program",
    //   image: "/images/community_engagement.jpg",
    //   description: [
    //     "Food distribution drives.",
    //     "Community service projects.",
    //     "Small vendor bazaars to support local entrepreneurs.",
    //   ],
    // },
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
            {/* Image (Fixed width & height) */}
            <Image
              src={program.image}
              alt={program.title}
              width={400} // Set appropriate width
              height={300} // Set appropriate height
              className="w-full h-48 object-cover"
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
