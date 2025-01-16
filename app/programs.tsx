"use client";

import React, { useState, useEffect } from "react";

const OrgPrograms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
    // Ensure styles don't mismatch between server and client


    useEffect(() => {
      // Prevent any SSR/client mismatch logic here
    }, []);

  const programs = [
    {
      id: 1,
      title: "Community Conversations Program",
      description: [
        "Creating safe spaces for meaningful dialogue and social connections through meals and friendship-building activities.",
        "Community meals with conversations about life and mental health.",
        "Inclusive gatherings to foster social bonds."
      ],
    },
    {
      id: 2,
      title: "Friendship & Wellness Program",
      description: [
        "Wellness retreats and guided discussions.",
        "Creative activities to promote emotional wellness.",
        "Kids Fun Night to promote joy for young ones."
      ],
    },
    {
      id: 3,
      title: "Career & Academic Pathways Program",
      description: [
        "College application workshops.",
        "Resume-building sessions.",
        "Networking opportunities with professionals."
      ],
    },
    {
      id: 4,
      title: "Cultural & Family Bonding Program",
      description: [
        "Family camping trips to foster bonding.",
        "Multi-Cultural Nights to celebrate shared traditions and diversity."
      ],
    },
    {
      id: 5,
      title: "Outdoor Adventures Program",
      description: [
        "Hiking trips and nature retreats.",
        "Snow tubing adventures and carpooling services."
      ],
    },
    {
      id: 6,
      title: "Community Engagement Program",
      description: [
        "Food distribution drives.",
        "Community service projects.",
        "Small vendor bazaars to support local entrepreneurs."
      ],
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? programs.length - 2 : prev - 2));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 2) % programs.length);
  };

  return (
 
      
      <section id="programs" className="relative py-0">
  <h2 className="text-5xl font-bold text-greenDark mb-8 text-center">Our Programs</h2>
  <p className="text-lg text-greenDark leading-relaxed text-center mb-8">
    Explore our initiatives designed to foster growth, wellness, and community engagement. Open Calendar to See Upcoming Events
    <button
      onClick={() => setShowModal(true)}
      className="px-6 py-3 ml-4 bg-emerald-700 text-white rounded-full shadow-lg hover:bg-greenDark transition-transform transform hover:scale-105"
    >
      🗓
    </button>
  </p>

  {/* Modal */}
  {showModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h3 className="text-xl font-bold text-greenDark">Upcoming Events</h3>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            &#x2715;
          </button>
        </div>
        <div className="p-6">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=abdulahimohamud22%40gmail.com&ctz=America%2FLos_Angeles"
            style={{ border: 0 }}
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          ></iframe>
        </div>
      </div>
    </div>
  )}

  {/* Carousel */}
  <div className="relative overflow-hidden mt-8">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 50}%)` }}
    >
      {programs.map((program) => (
        <div key={program.id} className="flex-shrink-0 w-1/2 px-4 relative">
          <div className="h-72 bg-greenDark px-5 rounded-lg shadow-lg flex flex-col justify-start items-center overflow-hidden">
            {/* Title Over Content */}
            <h3 className="text-2xl font-bold text-yellowAccent mb-4 text-center">
              {program.title}
            </h3>
            {/* Scrollable Description */}
            <ul
              className="text-white px-4 list-disc list-inside overflow-y-auto"
              style={{ maxHeight: "150px" }}
              onScroll={(e) => console.log("Scrolled: ", e.target.scrollTop)}
            >
              {program.description.map((item, i) => (
                <li key={i} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Buttons */}
    <button
      onClick={handlePrev}
      className="absolute left-4 bottom-8 transform -translate-y-1/2 bg-white text-emerald-700 px-4 py-2 rounded-full shadow-lg"
    >
      &lt;
    </button>
    <button
      onClick={handleNext}
      className="absolute right-4 bottom-8 transform -translate-y-1/2 bg-white text-emerald-700 px-4 py-2 rounded-full shadow-lg"
    >
      &gt;
    </button>
  </div>
</section>


  );
};

export default OrgPrograms;
