 
import React, { useEffect, useState, useRef } from "react";

const DownArrow = () => {
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5, // show when 50% of hero is visible
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* This div wraps your hero and exposes the ref */}
      <div ref={heroRef} id="hero-section" className="relative">
        {/* your hero section content */}
      </div>

      {/* Down arrow shown only when hero is in view */}
      {isVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 text-blue-600 hover:text-blue-800 transition-colors duration-300 animate-bounce">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default DownArrow;
