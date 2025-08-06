import React from "react";
import { Link } from "react-router-dom";

const AwardSection = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">
      <h2 className=" mt-16 my-8 text-3xl md:text-5xl font-bold text-[#002A5C]">
        Nexus REAL ESTATE
      </h2>
      <h3 className="text-3xl md:text-5xl font-bold text-[#F26B28] mt-2">
        AWARD–WINNING SERVICES
      </h3>
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Recognized nationally and internationally with multiple real estate
        trophies and awards.
      </p>

      <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
        <Link to={"/careers"}  className="bg-[#F26B28] text-white font-semibold py-3 px-6 rounded hover:bg-orange-600 transition">
          Careers at Nexus
        </Link>
       
      </div>
    </section>
  );
};

export default AwardSection;
