import React from "react";

const ContentSplitSection = ({
  subheading,
  heading,
  paragraphs = [],
  reverse = false,
  className = "",
}) => {
  return (
    <section
      className={`w-full px-4 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      } ${className}`}
    >
      <div className="w-full md:w-1/2">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          {subheading}
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mt-2 mb-4">
          {heading}
        </h2>
      </div>

      <div className="w-full md:w-1/2">
        {paragraphs.map((text, index) => (
          <p key={index} className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ContentSplitSection;
