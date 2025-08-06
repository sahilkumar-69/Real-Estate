import { useNavigate } from "react-router-dom";

export default function Hero({ video ,Hidebtn}) {
  const Navigate = useNavigate();
  return (
    <section className="relative h-[95svh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={video || "src/assets/realEstate_bg_video.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Find Your Dream Property</h1>
        <p className="text-xl mb-6">
          Explore top real estate options around you.
        </p>
        <button
        
          onClick={() => {
            scrollTo({ top: 1600, behavior: "smooth" });
            // Navigate("/buy/properties-for-sale");
          }}
          className={`bg-white ${Hidebtn || Hidebtn == undefined ?"hidden":""} text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition`}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
