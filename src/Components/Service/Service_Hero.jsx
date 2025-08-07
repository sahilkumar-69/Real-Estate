import React, { useState } from "react";

const Service_Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <section
      className="w-full h-[95vh] bg-cover bg-center z-10 flex items-center px-6 md:px-24 relative"
      style={{
        backgroundImage: `url("https://www.tribecacare.com/wp-content/uploads/2022/07/Edinburgh-Property-management.jpg")`,
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-[46rem]">
        <h1 className="text-3xl md:text-5xl space-y-3.5 text-black font-bold mb-4">
          Top–Notch{" "}
          <span className="bg-black px-2 rounded-md text-white">Property Services</span> in
          India
        </h1>

        <p className="text-lg  mb-6">
          We provide turnkey solutions to help you reap the best returns on your
          investment.
        </p>

        <button
          onClick={toggleForm}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Enquire Now
        </button>
      </div>

      {/* Enquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md relative">
            <button
              onClick={toggleForm}
              className="absolute top-2 right-3 text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Enquiry Form</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Service_Hero;
