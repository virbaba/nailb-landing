"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const CallToAction: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <section
      ref={ctaRef}
      className="py-16 bg-gradient-to-tl from-gray-600 via-indigo-900 to-gray-900"
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          style={{ fontFamily: "IntegralCF" }}
        >
          Ready to Transform Your IB Study Experience?
        </h2>
        <p className="text-white mb-8 text-lg">
          Sign up today for a free trial and unlock unlimited access to Nailib's
          premium video content.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="/signup"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded shadow hover:bg-gray-100 transition-colors"
          >
            Sign Up
          </a>
          <a
            href="/try-free"
            className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-blue-600 transition-colors"
          >
            Try It Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
