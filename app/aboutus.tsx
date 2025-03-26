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
                    About Al-Firdous Seattle
                </h2>
                <div className="text-xl mb-6 text-greenDark max-w-3xl">
                    <p>
                    Founded in 2024, Al-Firdous Seattle is dedicated to building a supportive and inclusive community where individuals feel valued, connected, and empowered. We create meaningful opportunities for engagement through outdoor experiences, workshops, mentorship, community service, and wellness retreats. Our initiatives foster personal growth, mental well-being, and strong social connections while addressing barriers like isolation and limited access to resources. By collaborating with local organizations, we expand our impact and continue to strengthen community ties.

                    </p>

                    <br />

                    <h3 className="text-2xl font-bold text-greenDark mb-4">Our Mission</h3>
                    <p className="leading-relaxed">
                    At Al-Firdous Seattle, we foster connection, well-being, and
empowerment through inclusive programs, community engagement, and
essential services. Whether you’re seeking support, opportunities to
give back, or a welcoming space to grow, you belong here

                    </p>

                    <br />

                    <h3 className="text-2xl font-bold text-greenDark mb-4">Our Vision</h3>
                    <p className="leading-relaxed">
                    We envision a thriving, connected community where every
individual feels valued, supported, and empowered. Through meaningful
connections, accessible resources, and inclusive programs, we strive
to create a future where everyone has a sense of belonging and the
opportunity to grow and succeed.

                    </p>

                    <br />

                    
                </div>
            </div>
        </section>
    );
}
