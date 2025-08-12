import React from "react";

export default function StepTimeline({ steps, title, desc }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative">
      <p className="text-sm text-center text-gray-500 uppercase font-medium tracking-widest mb-2">
        {title}
      </p>
      <h2 className="text-3xl md:text-4xl text-center font-bold text-slate-800 mb-12">
        {desc}
      </h2>

      {/* Steps wrapper with line inside */}
      <div className="relative space-y-16">
        {/* Center line for md+ screens */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-200 h-full"></div>
        {/* Left line for mobile */}
        <div className="md:hidden absolute top-0 left-4 w-0.5 bg-gray-200 h-full"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="md:grid md:grid-cols-2   md:gap-8 items-center relative"
          >
            {/* Left side content */}
            {index % 2 === 0 ? (
              <>
                <div className="hidden md:flex justify-end">
                  <div className="bg-white shadow p-6 rounded-lg border border-gray-200 max-w-md">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
              </>
            ) : (
              <>
                <div className="hidden md:block"></div>
                <div className="hidden md:flex justify-start">
                  <div className="bg-white shadow p-6 rounded-lg border border-gray-200 max-w-md">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                  </div>
                </div>
              </>
            )}

            {/* Number circle */}
            <div className="absolute md:left-1/2 md:-translate-x-1/2 left-0 md:top-1/2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow">
              {index + 1}
            </div>

            {/* Mobile content */}
            <div className="md:hidden pl-8">
              <div className="bg-white shadow p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
