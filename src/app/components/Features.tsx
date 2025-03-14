"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SiContentstack } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";

interface Feature {
  title: string;
  description: string;
  icon: any;
}

const features: Feature[] = [
  {
    title: "4,950+ Expert-Led Videos",
    description:
      "Examiner-led tutorials break down complex topics into digestible steps. Perfect for busy IB students.",
    icon: <SiContentstack className="text-purple-500" size={50} />,
  },
  {
    title: "HD Quality, Crystal Clear Explanations",
    description:
      "Experience high-definition videos with excellent audio so you never miss a crucial detail.",
    icon: <FaChalkboardTeacher className="text-orange-500" size={50} />,
  },
  {
    title: "Learn at Your Own Pace",
    description:
      "Pause, rewind, or revisit any content whenever you need it, seamlessly integrated.",
    icon: <SiSololearn className="text-green-500" size={50} />,
  },
  {
    title: "Exam-Focused Content",
    description:
      "Strategic exam-oriented videos designed to help you master IB exam formats and question types.",
    icon: <SiContentstack className="text-red-500" size={50} />,
  },
  {
    title: "Topic-Wise Organization",
    description:
      "Navigate subject-specific topics easily, spending less time searching and more time learning.",
    icon: <FaChalkboardTeacher className="text-blue-500" size={50} />,
  },
  {
    title: "Complete IB Ecosystem",
    description:
      "Integrates with Nailib’s Past Papers, Flashcards, and more for an all-in-one IB study platform.",
    icon: <SiSololearn className="text-yellow-500" size={50} />,
  },
];

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = containerRef.current?.querySelectorAll(".feature-card");
    if (cards) {
      // Cards will slide in from below (y: 50 → y: 0) and fade in (opacity: 0 → 1)
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 2,
          },
        }
      );
    }
  }, []);

  return (
    <section className="w-full py-14 bg-gradient-to-l from-gray-700 via-gray-800 to-gray-900 text-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ fontFamily: "IntegralCF" }}
          >
            Why Nail IB Videos Are Essential
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our extensive video library is designed specifically for IB students
            to achieve their highest potential with less stress and more
            confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3
                className="text-xl font-bold text-center mb-2"
                style={{ fontFamily: "IntegralCF" }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
