import React from "react";
import { Link } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa";

const CareersHero = () => {
  return (
    <div className="relative w-full h-[90vh]">
      {/* Background Image */}
      <img
        src="https://marathon.in/wp-content/uploads/2021/08/marathon_blog_page_aug-2021_home-in-30s_01.jpg" // Replace with actual image path or import
        alt="Careers Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 text-white text-center">
        <div className="max-w-3xl">
          <p className="text-sm text-gray-200 mb-2">
         
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Take the next step in your career
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            If you’re excited to have a game-changing career, we’re excited to welcome you to our world.
          </p>

           
        </div>
      </div>
    </div>
  );
};

export default CareersHero;
