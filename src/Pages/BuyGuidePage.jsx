import { useEffect } from "react";

import StepList from "../Components/SellingGuide/StepList.jsx";

import { propertyData, stepsForBuying } from "../Data.js";
import StepTimeline from "../Components/SellingGuide/TimeLine.jsx";
import HeroSection from "../Components/SellingGuide/HeroSection.jsx";
import SubscribeSection from "../Components/SubscribeSection.jsx";
import ExploreIn from "../Components/Home/ExploreIn.jsx";
import { PropertySwiperCard } from "../Components/Home/PropertySwiperCard.jsx";

export default function BuyGuidePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stepsForbuying = [
    {
      title: " Define Your Budget & Requirements",
      description:
        "Start by assessing your finances and identifying your preferred location, property type, and amenities. Set a realistic budget that considers your loan eligibility, savings, and registration costs.",
    },
    {
      title: " Get Pre-approved for a Home Loan",
      description:
        "Approach banks or housing finance companies to get pre-approved for a home loan. This gives you a clear idea of how much you can borrow and makes you a serious buyer in the eyes of sellers.",
    },
    {
      title: " Engage a Trusted Real Estate Agent",
      description:
        "Work with a verified and experienced property consultant who knows the market, verifies legal documents, and negotiates on your behalf. A good agent can save you both time and money.",
    },
    {
      title: " Legal Due Diligence & Property Verification",
      description:
        "Verify the property title, ownership, and approvals with a lawyer. Ensure that the property is free of disputes and encumbrances. Check RERA registration for new projects.",
    },
    {
      title: "Registration & Possession",
      description:
        "Finalize the deal, pay the necessary stamp duty and registration fees, and legally transfer ownership. Ensure you collect all property documents, possession certificate, and occupancy certificate.",
    },
  ];

  const HeroSectionProps = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4PEQiDyUyH6zhnBCq5-Qs466g3hbsuD9HQ&s",
    title: " GUIDE TO BUY PROPERTY IN INDIA",
    desc: "Your step-by-step guide to buying the right property with confidence and ease.",
  };

  const StepTimelineProps = {
    steps: stepsForbuying,
    title: "GUIDE TO BUY PROPERTY IN INDIA",
    desc: "Your step-by-step guide to buying the right property with confidence and ease.",
  };

  return (
    <div className="font-sans text-gray-800">
      <HeroSection {...HeroSectionProps} />
      <div className="container mx-auto px-14 py-8">
        <main className="bg-white">
          <StepTimeline {...StepTimelineProps} />
          <section className="py-12 px-6 md:px-20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Step‑by‑Step Guide to Buying
            </h2>
            <StepList steps={stepsForBuying} />
          </section>

          <ExploreIn
            Title={"Explore new Properties"}
            Enablebtn={false}
            data={propertyData}
            CardComponent={PropertySwiperCard}
            cardProps={{ fr: "static" }}
          />
          {/* <RelatedProperties properties={sampleProps} /> */}

          <SubscribeSection />
        </main>
      </div>
    </div>
  );
}
