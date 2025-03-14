"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Register Your Account",
    description:
      "Sign up for a free Nail IB account in less than 60 seconds. No credit card required to access initial content.",
  },
  {
    title: "Browse Video Library",
    description:
      "Explore our extensive collection of videos organized by subject, topic, and difficulty level.",
  },
  {
    title: "Watch & Learn",
    description:
      "Stream HD videos on any device. Pause, rewind, and revisit content as needed to master concepts.",
  },
  {
    title: "Practice & Excel",
    description:
      "Combine video learning with our question bank, flashcards, and notes to maximize your IB score.",
  },
];

const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = containerRef.current?.querySelectorAll(".feature-card");

    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 }, // Start hidden & shifted down
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 2, // Smoothly reverse when scrolling back up
          },
        }
      );
    }
  }, []);

  return (
    <section
      className="py-16 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ fontFamily: "IntegralCF" }}
        >
          How to Access Our Video Content
        </h2>
        {/* Subheading */}
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Getting started with Nail IB videos is simple. Follow these steps to begin
          your journey toward IB excellence.
        </p>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="feature-card w-full md:w-[300px] flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-purple-600 text-white rounded-full mb-4 text-2xl font-bold">
                {index + 1}
              </div>
              <h3
                className="text-xl font-bold mb-2 text-center"
                style={{ fontFamily: "IntegralCF" }}
              >
                {step.title}
              </h3>
              <p className="text-gray-300 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
