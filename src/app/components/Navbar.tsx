"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Slide in the navbar on mount
  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate the mobile menu when it opens/closes
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (menuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
        });
      }
    }
  }, [menuOpen]);

  // Toggle the mobile menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Navigation links array
  const navLinks = ["Resources", "Schools", "Past Papers", "Question Bank", "Pricing"];

  return (
    <>
      <nav
        ref={navRef}
        className={`
          fixed w-full top-0 left-0 z-50
          flex items-center justify-around
          px-4 py-3 md:px-8 transition-all duration-300
          ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
        `}
      >
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-md font-bold">
            N
          </div>
          <span
            className={`
              text-xl font-bold transition-colors
              ${scrolled ? "text-blue-600" : "text-white"}
            `}
            style={{ fontFamily: "IntegralCF" }}
          >
            Nailib
          </span>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`
                  font-medium transition-colors 
                  ${scrolled ? "text-gray-700 hover:text-blue-500" : "text-white hover:text-blue-200"}
                `}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Login / Register (Desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          <button
            className={`
              px-4 py-2 border rounded-md font-semibold transition-colors
              ${scrolled ? "border-blue-500 text-blue-500" : "border-white text-white"}
              hover:bg-blue-500 hover:text-white
            `}
          >
            Login
          </button>
          <button
            className={`
              px-4 py-2 bg-blue-500 text-white rounded-md font-semibold
              hover:bg-blue-600 transition-colors
            `}
          >
            Register (Free)
          </button>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? (
              // Close Icon
              <IoMdClose
                size={25}
                className={scrolled ? "text-blue-600" : "text-white"}
              />
            ) : (
              // Hamburger Icon
              <RxHamburgerMenu
                size={25}
                className={scrolled ? "text-blue-600" : "text-white"}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden overflow-hidden" ref={mobileMenuRef}>
        <div className="bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-700 font-medium">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center space-y-4 pb-4">
            <button className="px-4 py-2 border rounded-md font-semibold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-colors">
              Register (Free)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;