import React from "react";
import { FaPlay } from "react-icons/fa";
import videoThumb from "../../../public/assets/RealEstateVideo.mp4";

const VideoCard = () => {
  const handleVideoClick = () => {
    console.log("Video clicked");
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-md">
      <video
        src={videoThumb}
        className="w-full h-auto object-cover cursor-pointer"
        autoPlay
        muted
        loop
        playsInline
        onClick={handleVideoClick}
      />

      <div
        onClick={handleVideoClick}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:scale-105 transition cursor-pointer"
        aria-label="Play Video"
      >
        <FaPlay className="text-blue-800 text-xl" />
      </div>
    </div>
  );
};

export default VideoCard;
