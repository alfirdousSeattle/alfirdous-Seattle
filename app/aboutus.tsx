"use client";

import React from "react";

export default function AboutUs() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-screen flex items-center"

            >
                <div className=" w-full h-full flex flex-col justify-center items-center px-8">
                    {/* Main Content */}
                    <h2 className="text-5xl font-bold text-greenDark mb-8 text-center">About Al-Fidous Seattle</h2>
                    <div className="text-xl mb-6 text-greenDark max-w-3xl">
                        

                        <p>
                            Founded in 2024, Al-Firdous Seattle envisions a community where everyone
                            feels valued, supported, and heard. Through programs that foster personal growth,
                            mental wellness, and connection to nature, we aim to uplift underserved individuals
                            and break barriers of isolation.
                        </p>

                        <br></br>

                        <h3 className="text-2xl font-bold text-greenDark mb-4">Our Mission</h3>
              <p className="leading-relaxed">Our mission is to create a welcoming, safe space where individuals of all
                        backgrounds, ages, and socioeconomic statuses can feel a sense of community by building
                        strong, supportive bonds that empower them to embrace their values and heritage with confidence.</p>
                        

                    <br></br>
                    <h3 className="text-2xl font-bold text-greenDark mb-4">Our Vision</h3>
                    <p className="leading-relaxed"> Our vision is to uplift a community where everyone feels valued, supported, and
                        heard. We offer a safe space for growth, connection, and navigating unique challenges related to
                        economic, social, and personal well-being, especially for underserved individuals.
                    </p>
                        

                    </div>
                </div>
           

            
               
            </section>
        </>
    );
}
