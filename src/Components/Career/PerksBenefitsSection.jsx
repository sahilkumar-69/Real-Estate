import React from "react";

const PerksBenefitsSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left Side Text */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">
            Perks & Benefits
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Join a team where you’re rewarded for fulfilling your potential and growth
          </h2>
        </div>

        {/* Right Side Image */}
        <div className="rounded-xl overflow-hidden">
          <img
            src=" \public\assets\CareerImages\groupPhoto.jpg" // update this path to your actual image
            alt="Team at Nexus Real Estate"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PerksBenefitsSection;
