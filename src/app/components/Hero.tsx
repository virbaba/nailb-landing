"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { MdSlowMotionVideo } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleRefs = useRef<HTMLDivElement[]>([]);

  // Define the positions, colors, and icons for each bubble
  const bubblesData = [
    {
      top: "15%",
      left: "10%",
      color: "bg-blue-500",
      icon: <MdSlowMotionVideo className="text-white" size={28} />,
    },
    {
      top: "55%",
      left: "90%",
      color: "bg-red-500",
      icon: <CiPlay1 className="text-white" size={28} />,
    },
    {
      top: "80%",
      left: "15%",
      color: "bg-green-500",
      icon: <FaBook className="text-white" size={28} />,
    },
  ];

  // Animate the bubbles on mount
  useEffect(() => {
    gsap.to(bubbleRefs.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    });
  }, []);

  // Helper to store bubble div refs
  const addToBubbleRefs = (el: HTMLDivElement) => {
    if (el && !bubbleRefs.current.includes(el)) {
      bubbleRefs.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text & Buttons */}
          <div>
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
              style={{ fontFamily: "IntegralCF" }}
            >
              Expert-Led IB Video Tutorials <br className="hidden md:block" />
              <span className="text-yellow-400">For Your Perfect Score</span>
            </h1>
            <p className="text-gray-300 mb-6">
              Access over <span className="font-bold">4,950+</span> high-quality IB video tutorials spanning 1,120+ hours, created by elite educators and IB examiners. Your shortcut to IB excellence!
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors">
                Start Learning Free
              </button>
              <button className="px-6 py-3 bg-transparent border border-gray-500 hover:border-white hover:text-white text-gray-300 rounded-md font-semibold transition-colors">
                How It Works
              </button>
            </div>
            {/* Some quick stats or highlights (optional) */}
            <div className="mt-8 flex flex-wrap gap-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white">4,950+</span>
                <span>Videos</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white">HD</span>
                <span>Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white">24/7</span>
                <span>Access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lottie Animation */}
          <div className="flex justify-center md:justify-end">
          <DotLottieReact
                src="https://lottie.host/0f2d4895-4631-4b0e-aa22-9c65a13bdbf5/ifPH1pxhr9.lottie"
                loop
                autoplay
                className="h-[500px] w-[1000px]"
              />
          </div>
        </div>
      </div>

      {/* Floating Bubbles */}
      {bubblesData.map((bubble, index) => (
        <div
          key={index}
          ref={addToBubbleRefs}
          className={`absolute flex items-center justify-center w-14 h-14 rounded-full shadow-lg ${bubble.color}`}
          style={{ top: bubble.top, left: bubble.left }}
        >
          {bubble.icon}
        </div>
      ))}
    </section>
  );
};

export default Hero;