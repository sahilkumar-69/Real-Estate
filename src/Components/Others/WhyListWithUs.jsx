import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroSectionListProperty from "./HeroForListingPage";
import PropertyListingPage from "./ListingForm";
import SubscribeSection from "../SubscribeSection";
// import handshakeHouse from "../assets/handshake-house.png"; // <-- Update path based on your project

const WhyListWithUs = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const points = [
    "Most awarded real estate agency in India",
    "Our agents speak more than 45 languages",
    "Achieved 50+ billion INR sales in our career",
    "0% Zero fees to you",
    "Get listed on local & global portals",
  ];

  return (
    <>
      <HeroSectionListProperty />
      <section className="py-16 px-14 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why list your property with{" "}
              <span className="text-orange-600">Us?</span>
            </h2>

            <ul className="space-y-4 mb-8">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-lg"
                >
                  <FaCheckCircle className="text-orange-500 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={
                "https://images.pexels.com/photos/4963437/pexels-photo-4963437.jpeg"
              }
              alt="Handshake with house"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <PropertyListingPage />
      <div className="px-6 md:px-10 lg:px-20">
        <SubscribeSection />
      </div>
    </>
  );
};

export default WhyListWithUs;
