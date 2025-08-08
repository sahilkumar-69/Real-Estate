import { motion } from "motion/react";

const Hero_section = ({ video }) => {
  return (
    <div className="bg-gray-100 relative mt-10 h-[95svh] overflow-hidden   ">
      <motion.div
        initial={{
          height: "0",
          left: "0",
          right: "0",
        }}
        animate={{
          height: "95%",

          position: "absolute",
        }}
        transition={{
          duration: 0.9,
          ease: "backInOut",
        }}
      >
        <video
          className="  w-full h-full object-cover  "
          autoPlay
          loop
          muted 
          playsInline
        >
          <source
            src={video || "public/assets/realEstate_bg_video.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default Hero_section;
