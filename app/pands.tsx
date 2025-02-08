"use client";

import React from "react";

export default function PandS() {



  return (


    <section
      className="relative bg-cover bg-center py-20 flex items-center"
    >
      <div className="w-full flex flex-col justify-center items-center px-8">
        {/* Main Content */}
        <h2 className="text-5xl font-bold text-greenDark mb-8 text-center">
          Event Calander
        </h2>
        <iframe
                src="https://calendar.google.com/calendar/embed?src=5e40732622747c8af72c82a2bf9e33b841325301999165803e1e7cd2255b3e4a%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                style={{ border: 2 }}
                width="100%"
                height="500"
                
                title="Google Calendar"
              >

              </iframe>
      </div>
    </section>
    
)}
