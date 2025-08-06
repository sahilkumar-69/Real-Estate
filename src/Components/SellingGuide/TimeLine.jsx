import React from "react";



export default function StepTimeline({ steps, title, desc }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <p className="text-sm text-center text-gray-500 uppercase font-medium tracking-widest mb-2">
        {title}
      </p>
      <h2 className="text-3xl md:text-4xl text-center font-bold text-slate-800 mb-12">
        {desc}
      </h2>

      <div className="relative border-l-2 border-gray-200 ml-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:items-end" : "md:items-start"
            }`}
          >
            {/* Left side for even steps */}
            {index % 2 === 0 && (
              <div className="md:w-1/2 pr-8 text-right hidden md:block">
                <div className="bg-white shadow p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
              </div>
            )}

            {/* Timeline number */}
            <div className="absolute -left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow">
              {index + 1}
            </div>

            {/* Right side for odd steps */}
            {index % 2 === 1 && <div className="md:w-1/2" />}

            {/* Right side on mobile and actual content for odd steps */}
            <div
              className={`md:w-1/2 pl-8 md:pl-12 ${
                index % 2 === 0 ? "md:hidden" : ""
              }`}
            >
              <div className="bg-white shadow p-6 rounded-lg border border-gray-200 mt-6 md:mt-0">
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
