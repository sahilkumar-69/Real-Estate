import { IoIosArrowForward } from "react-icons/io";
import { LuSmartphone } from "react-icons/lu";
import { Navigate, useNavigate } from "react-router-dom";

const AboutHero = () => {
  const navigate = useNavigate();
  const handleMeetTeam = () => {
    navigate("/meet-the-team");
  };

  const handleContactTeam = () => {
    window.location.href = "tel:+918888888888";
  };

  return (
    <section className="w-full py-20 px-4 md:px-0 text-center">
      <div className="flex justify-center items-center text-sm text-[#001f3f] space-x-2 mb-6">
        <span className="text-gray-400"></span>
        <a href="" className="underline underline-offset-4 text-[#001f3f]"></a>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-[#001f3f] leading-tight">
        We take pride in our <br />
        <span className="text-[#001f3f]">diversity.</span>
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-600 mt-6">
        At Provident, we are your one-stop-shop for all things real estate.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
        <button
          onClick={handleMeetTeam}
          className="bg-gradient-to-r from-[#e84e12] to-[#ff5a1f] text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:opacity-90 transition-all duration-300"
        >
          Meet our team <IoIosArrowForward size={18} />
        </button>

        <button
          onClick={handleContactTeam}
          className="bg-[#f2f6fc] text-[#001f3f] font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-[#e6effc] transition-all duration-300"
        >
          Contact our team <LuSmartphone size={18} />
        </button>
      </div>
    </section>
  );
};

export default AboutHero;
