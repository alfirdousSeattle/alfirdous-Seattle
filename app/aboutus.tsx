"use client";

import React from "react";

export default function AboutUs() {
    return (
        <section
            className="relative bg-cover bg-center py-20 flex items-center"
        >
            <div className="w-full flex flex-col justify-center items-center px-8">
                {/* Main Content */}
                <h2 className="text-5xl font-bold text-greenDark mb-8 text-center">
                    About Al-Fidous Seattle
                </h2>
                <div className="text-xl mb-6 text-greenDark max-w-3xl">
                    <p>
                    Founded in 2024, Al-Firdous Seattle is dedicated to building a supportive and inclusive community where individuals feel valued, connected, and empowered. We create meaningful opportunities for engagement through outdoor experiences, workshops, mentorship, community service, and wellness retreats. Our initiatives foster personal growth, mental well-being, and strong social connections while addressing barriers like isolation and limited access to resources. By collaborating with local organizations, we expand our impact and continue to strengthen community ties.

                    </p>

                    <br />

                    <h3 className="text-2xl font-bold text-greenDark mb-4">Our Mission</h3>
                    <p className="leading-relaxed">
                        Al-Firdous Seattle envision a community where everyone feels valued, supported, and heard. Through our programs, we foster personal growth, mental wellness, and a deep connection to nature. Our goal is to uplift underserved individuals and break barriers of isolation by creating meaningful opportunities for connection and empowerment.


                    </p>

                    <br />

                    <h3 className="text-2xl font-bold text-greenDark mb-4">Our Vision</h3>
                    <p className="leading-relaxed">
                        We believe in uplifting a community where everyone feels valued, supported, and heard. By offering a safe space for growth and connection, we help individuals navigate unique challenges related to economic, social, and personal well-being, especially those who are underserved.


                    </p>

                    <br />

                    
                </div>
            </div>
        </section>
    );
}
