"use client";

import React, { useState } from "react";

export default function PandS() {
  const [showSolution, setShowSolution] = useState(false);
  const [activeProblem, setActiveProblem] = useState<number | null>(null);
  const [activeSolution, setActiveSolution]= useState<number | null>(null);

  const problems = [
    {
      id: 1,
      title: "Lack of Access to Outdoor and Enrichment Activities",
      content: `
        Many youth and families, especially in underserved communities, have limited opportunities to explore outdoor activities like hiking or snow tubing, which can foster physical health, mental wellness, and a connection to nature. A study found that only 19% of youth in King County meet the recommended 60 minutes of physical activity per day, with participation rates lower among girls (16%) compared to boys (22%), and only 11% among youth who don't speak English at home. Additionally, the "State of Play" report highlights that barriers such as cost, transportation, and lack of inclusive spaces limit participation in outdoor and physical activities for youth in King County.
      `,
    },
    {
      id: 2,
      title: "Social Isolation and Mental Health Struggles",
      content: `
        A lack of safe spaces for open dialogue contributes to feelings of loneliness, anxiety, and depression among youth. Mental health issues often go unaddressed due to stigma or lack of access to support. In 2017, suicide was the leading cause of death among Washington youth aged 15-19, with 76 teens dying by suicide.
      `,
    },
    {
      id: 3,
      title: "Limited Exposure to Career and Academic Opportunities",
      content: `
        Many first-generation students lack access to career networks, mentors, and guidance on navigating college applications, resumes, and professional pathways, limiting their potential for academic and career advancement. In Washington state, youth aged 16-19 are predominantly employed in industries offering entry-level positions with wages below a living wage, which may not provide substantial career development opportunities.
      `,
    },
    {
      id: 4,
      title: "Disconnection from Community Engagement",
      content: `
        Youth from low-income backgrounds often have fewer opportunities to participate in community service or philanthropy, missing out on experiences that build leadership skills and a sense of civic responsibility. In King County, approximately 8.5% of youth and young adults aged 16-24 are neither employed nor enrolled in school, indicating a segment of the population that may be disconnected from community engagement opportunities.
      `,
    },
  ];

  const solutions = [
    {
      id: 1,
      title: "Outdoor and Enrichment Activities",
      content: `
We provide youth and families with access to outdoor experiences, such as hiking, snow tubing, and nature retreats. These activities not only promote physical health but also expose participants to new environments that inspire creativity and confidence.      `,
    },
    {
      id: 2,
      title: "Safe Spaces for Conversations and Connections",
      content: `
Our community gatherings create inclusive spaces for youth and families to discuss life, mental health, and shared challenges over food. These events help combat social isolation, strengthen emotional well-being, and foster friendships.
      `,
    },
    {
      id: 3,
      title: "Career and Academic Readiness",
      content: `
Through college application workshops, resume-building sessions, company visits, and networking opportunities, we equip students with tools and knowledge to navigate academic and career pathways, bridging the gap for those without access to such resources.      `,
    },
    {
      id: 4,
      title: "Community Engagement and Service",
      content: `
We organize food distribution drives and community service projects that allow youth and families to give back, fostering leadership, empathy, and a stronger sense of belonging.
      `,
    },
    {
      id: 5,
      title: "Carpooling and Accessibility Support",
      content:`
      Recognizing transportation as a barrier for many families, we provide carpooling options for our activities to ensure that no one is left out due to logistical challenges.

      `,
    },
  ];

  return (
    <section id="problem-solution" className="py-2">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-greenDark mb-8 text-center">
          The Problem and Our Solutions
        </h2>
        <div className="relative">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-6">
            <button
              className={`px-6 py-2 text-lg font-semibold rounded-l-full transition-colors ${
                !showSolution ? "bg-emerald-700 text-white" : "bg-graySoft text-gray-800"
              }`}
              onClick={() => setShowSolution(false)}
            >
              The Problems
            </button>
            <button
              className={`px-6 py-2 text-lg font-semibold rounded-r-full transition-colors ${
                showSolution ? "bg-emerald-700 text-white" : "bg-graySoft text-gray-800"
              }`}
              onClick={() => setShowSolution(true)}
            >
              Our Solutions
            </button>
          </div>

          {/* Content Animation */}
          <div className="relative">
            <div className={`transition-all duration-500 ease-in-out ${showSolution ? "hidden" : "block"}`}>
              <h3 className="text-2xl font-bold text-greenDark mb-4">The Problem</h3>
              <p className="text-lg text-greenDark leading-relaxed">
                Residents of King County from low-income backgrounds, first-generation students, and
                communities of color face systemic challenges that limit opportunities for personal, social, and
                economic growth. These include lack of access to outdoor activities, mental health struggles,
                limited exposure to career opportunities, and disconnection from community engagement.
              </p>

              <br></br>

              <div className="space-y-4">
            {problems.map((problem) => (
              <div key={problem.id} className="">
                <button
                  className="w-full text-left px-4 py-2 text-lg font-semibold bg-greenDark hover:bg-emerald-700 transition-colors"
                  onClick={() =>
                    setActiveProblem(activeProblem === problem.id ? null : problem.id)
                  }
                >
                  {problem.title}
                </button>
                {activeProblem === problem.id && (
                  <div className="p-4 text-white bg-greenMuted">
                    <p className="leading-relaxed">{problem.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
            </div>

            <div className={`transition-all duration-500 ease-in-out ${showSolution ? "block" : "hidden"}`}>
              <h3 className="text-2xl font-bold text-greenDark mb-4">Our Solutions</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Al-Firdous Seattle tackles these challenges by creating programs and opportunities that foster
                growth, wellness, and connection. These include outdoor enrichment activities, safe spaces for
                dialogue, career readiness workshops, and initiatives to strengthen community ties.
              </p>

              <br></br>

              <div className="space-y-4">
            {solutions.map((solutions) => (
              <div key={solutions.id} className="">
                <button
                  className="w-full text-left px-4 py-2 text-lg font-semibold bg-greenDark hover:bg-emerald-700 transition-colors"
                  onClick={() =>
                    setActiveSolution(activeSolution === solutions.id ? null : solutions.id)
                  }
                >
                  {solutions.title}
                </button>
                {activeSolution === solutions.id && (
                  <div className="p-4 text-white bg-greenMuted">
                    <p className="leading-relaxed">{solutions.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
