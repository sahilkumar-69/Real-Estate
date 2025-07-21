import { useState } from "react";
import { FaClock } from "react-icons/fa6";

const HelpFindProperty = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleView = () => setShowMore(!showMore);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Left Side Image */}
        <div className="md:w-1/2 w-full">
          <img
            src=" https://static.vecteezy.com/system/resources/previews/013/507/535/non_2x/confident-it-expert-handsome-young-man-in-shirt-and-tie-working-on-laptop-and-smiling-while-standing-against-grey-background-free-photo.JPG" // replace with actual path or import
            alt="India Property"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-[#05264e] text-2xl md:text-3xl font-bold mb-4">
              Feeling Lost? Let Us Help You Find the Perfect Property!
            </h2>

            <div
              className={`text-[#4a4a4a] text-base leading-7 transition-all duration-300 ${
                showMore ? "max-h-full" : "max-h-[120px] overflow-hidden"
              } relative`}
            >
              <p>
                As seasoned property experts, we understand how challenging it
                can be to navigate through the myriad of options available in
                India's property market.
              </p>
              <p className="mt-4">
                Don't know where to begin? You don't need to sift through
                countless listings on various India property websites. Follow
                the simple steps on the screen to get a personalized selection
                of properties that match your preferences.
              </p>

              {!showMore && (
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              )}
            </div>

            <button
              className="text-orange-500 mt-2 underline font-semibold"
              onClick={toggleView}
            >
              {showMore ? "View Less" : "Read More"}
            </button>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex items-center gap-4 mt-6 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-lg">
              Find My Dream Home!
            </button>
            <div className="flex items-center gap-2 text-orange-500 font-medium underline underline-offset-2">
              <FaClock />
              <span>It takes less than 2 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpFindProperty;
