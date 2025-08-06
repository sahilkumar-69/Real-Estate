import React, {useEffect} from "react";
import HeroBanner from "../components/SellingGuide/HeroBanner";
import StepList from "../components/SellingGuide/StepList";
// import FAQSection from '../components/SellingGuide/FAQSection';
import CTASection from "../Components/SellingGuide/CTASection.jsx";
import RelatedProperties from "../components/SellingGuide/RelatedProperties";
import { steps, faqs } from "../Data.js";
import StepTimeline from "../Components/SellingGuide/TimeLine.jsx";
import HeroSection from "../Components/SellingGuide/HeroSection.jsx";
import SubscribeSection from "../Components/SubscribeSection.jsx";
import ExploreIn from "../Components/Home/ExploreIn.jsx";

const sampleProps = [
  {
    image: "src/assets/placeholder1.avif",
    title: "Modern Marina Apt",
    price: "AED 3,950,000",
  },
  {
    image: "src/assets/placeholder3.avif",
    title: "Downtown 2‑Bed",
    price: "AED 5,000,000",
  },
  {
    image: "src/assets/placeholder.avif",
    title: "Sports City Studio",
    price: "AED 565,000",
  },
];




export default function SellGuidePage() {
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <div className="container mx-auto px-14 py-8">
        <main className="bg-white">
          <StepTimeline />
          <section className="py-12 px-6 md:px-20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Step‑by‑Step Guide to Selling
            </h2>
            <StepList steps={steps} />
          </section>

          <ExploreIn Title={"Explore new Properties"} />
          <RelatedProperties properties={sampleProps} />

          <SubscribeSection />
        </main>
      </div>
    </div>
  );
}
