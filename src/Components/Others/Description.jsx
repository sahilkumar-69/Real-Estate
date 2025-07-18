import { useState } from "react";

const LuxuryPropertyInfo = () => {
  const [showFull, setShowFull] = useState(false);

  const handleToggle = () => setShowFull(!showFull);

  return (
    <div className="px-6 py-10 md:px-20 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#05264e] mb-6">
        Luxury Properties for Sale in Dubai
      </h2>

      <div
        className={`text-lg leading-7 text-[#333] transition-all duration-500 ease-in-out ${
          showFull ? "max-h-full" : "max-h-[230px] overflow-hidden"
        } relative`}
      >
        <p className="mb-4">
          Dubai has become synonymous with luxury living and is one of the
          world’s most desirable cities to invest in real estate. Known for its
          gleaming skyscrapers, ultra-modern developments, and high-end
          lifestyle, Dubai offers a wealth of luxury properties for sale that
          appeal to both international investors and local residents. From
          exquisite beachfront villas to opulent penthouses overlooking the
          skyline, the city caters to those seeking exclusive living
          experiences. Areas like{" "}
          <span className="text-orange-500 font-medium">Palm Jumeirah</span>,{" "}
          <span className="text-orange-500 font-medium">
            Dubai Hills Estate
          </span>
          , and{" "}
          <span className="text-orange-500 font-medium">Downtown Dubai</span>{" "}
          house some of the finest properties with breathtaking views,
          state-of-the-art amenities, and access to a sophisticated urban
          lifestyle.
        </p>

        <p className="mb-4">
          The city’s luxury properties include a variety of real estate options,
          such as spacious villas with private pools, townhouses located in
          serene communities, and premium penthouses with panoramic views of the
          Arabian Gulf and Dubai’s iconic landmarks.{" "}
          <span className="text-orange-500 font-medium">
            Dubai’s real estate market
          </span>{" "}
          has become an investment hotspot due to its unique blend of luxury,
          innovation, and global connectivity.
          lorem1120
        </p>

        {/* Gradient overlay */}
        {!showFull && (
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      <button
        onClick={handleToggle}
        className="mt-4 text-orange-500 font-semibold underline underline-offset-2"
      >
        {showFull ? "View Less" : "Read More"}
      </button>
    </div>
  );
};

export default LuxuryPropertyInfo;
