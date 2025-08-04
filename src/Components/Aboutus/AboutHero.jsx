import { IoIosArrowForward } from "react-icons/io";
import { LuSmartphone } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const AboutHero = () => {
  const navigate = useNavigate();

  const handleMeetTeam = () => {
    navigate("/meet-the-team");
  };

  const handleContactTeam = () => {
    window.location.href = "tel:+918888888888";
  };

  return (
    <section className="w-full py-20 px-6 md:px-8 text-center bg-white">
      {/* Breadcrumb or optional top note */}
      <nav
        className="flex justify-center items-center text-sm text-[#001f3f] space-x-2 mb-6"
        aria-label="breadcrumb"
      >
        {/* Optional breadcrumb text or navigation could go here */}
      </nav>

      {/* Hero Title */}
      <header className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#001f3f] leading-tight">
          We take pride in our <br />
          <span className="text-[#001f3f]">diversity.</span>
        </h1>


      {/* Subheading */}
      <p className="text-lg text-gray-600 mt-6">
        At Nexus, we are your one-stop-shop for all things real estate.
      </p>
        </header>



      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
        <button
          onClick={handleMeetTeam}
          className="bg-gradient-to-r from-[#e84e12] to-[#ff5a1f] text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:opacity-90 transition duration-300"
          role="button"
          title="Meet our expert team"
        >
          Meet our team <IoIosArrowForward size={18} />
        </button>

        <button
          onClick={handleContactTeam}
          className="bg-[#f2f6fc] text-[#001f3f] font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-[#e6effc] transition duration-300"
          role="button"
          title="Call our team"
        >
          Contact our team <LuSmartphone size={18} />
        </button>
      </div>
    </section>
  );
};

export default AboutHero;

