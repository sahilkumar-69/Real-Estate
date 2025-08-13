import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import videoThumb from "../../../public/assets/RealEstateVideo.mp4";
import { IoIosPause } from "react-icons/io";

const VideoCard = () => {
  const videoref = useRef(null);
  const [play, setPlay] = useState(false);

  const handleVideoClick = () => {
    if (videoref.current) {
      if (videoref.current.paused) {
        setPlay(!play);
        videoref.current.play(); // ✅ actually plays video
      } else {
        setPlay(!play);

        videoref.current.pause(); // ✅ actually plays video
      }
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-md">
      <video
        ref={videoref}
        src={videoThumb}
        className="w-full h-[80svh] object-cover cursor-pointer"
        muted
        playsInline
        onClick={handleVideoClick}
      />

      <div
        onClick={handleVideoClick}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:scale-105 transition cursor-pointer"
        aria-label="Play Video"
      >
        {play ? (
          <FaPause className="text-blue-800 text-xl" />
        ) : (
          <FaPlay className="text-blue-800 text-xl" />
        )}
      </div>
    </div>
  );
};

export default VideoCard;
