import React from "react";
import { ChevronDown, Search } from "lucide-react";

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/17364066/pexels-photo-17364066.jpeg')", // replace with your image path
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 max-w-6xl w-full px-4 md:px-6 text-white">
        {/* Breadcrumb */}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
          How to Sell your Property in India – A Step by Step Guide
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          At India, we make selling property with extraordinary returns a
          reality.
        </p>

        {/* Search bar */}
        {/* <div className="bg-white rounded-lg shadow-md p-2 md:flex items-center max-w-4xl w-full space-y-2 md:space-y-0 md:space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Area, project or community"
              className="w-full px-4 py-3 rounded-md outline-none text-black"
            />
            <Search
              className="absolute right-3 top-3 text-gray-400"
              size={18}
            />
          </div>

          <div className="flex items-center justify-between px-4 py-3 border rounded-md text-black cursor-pointer w-full md:w-40">
            Beds <ChevronDown size={16} />
          </div>

          <div className="flex items-center justify-between px-4 py-3 border rounded-md text-black cursor-pointer w-full md:w-40">
            Price Range <ChevronDown size={16} />
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md w-full md:w-auto">
            Search
          </button>
        </div> */}
      </div>
    </div>
  );
}
