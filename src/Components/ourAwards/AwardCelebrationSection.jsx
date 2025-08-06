import React from "react";

const AwardCelebrationSection = ({image}) => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#002653] mb-4">
          Celebrating Excellence
        </h2>
        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Our team’s dedication and performance have once again been recognized with top honors in the real estate industry.
        </p>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl shadow-lg">
          <img
            src={image} // Update this path
            alt="Team holding Sobha Star Award"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AwardCelebrationSection;
