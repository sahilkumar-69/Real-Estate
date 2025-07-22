import { useState } from "react";

const LuxuryPropertyInfo = ({ content }) => {
  const [showFull, setShowFull] = useState(false);

  const handleToggle = () => setShowFull(!showFull);

  return (
    <div className="   py-10   max-w-5xl">
      <div
        className={`text-lg leading-7 text-[#333] transition-all duration-500 ease-in-out ${
          showFull ? "max-h-full" : "max-h-[230px] overflow-hidden"
        } relative`}
      >
        <p dangerouslySetInnerHTML={{ __html: content }}></p>

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
