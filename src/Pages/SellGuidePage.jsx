import { useEffect } from "react";
import StepList from "../components/SellingGuide/StepList";
import { propertyData } from "../Data.js";
import StepTimeline from "../Components/SellingGuide/TimeLine.jsx";
import HeroSection from "../Components/SellingGuide/HeroSection.jsx";
import SubscribeSection from "../Components/SubscribeSection.jsx";
import ExploreIn from "../Components/Home/ExploreIn.jsx";
import { PropertySwiperCard } from "../Components/Home/PropertySwiperCard.jsx";

export default function SellGuidePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stepsForSelling = [
    {
      title: "Find The Right Real Estate Agent",
      description:
        "Begin by partnering with India Consultants and signing Form A to engage our brokerage and marketing services formally. Benefit from a complimentary, precise property valuation, ensuring you’re well-informed before proceeding with the sale.",
    },
    {
      title: "Strategic Marketing Listing",
      description:
        "We craft listings with attention to detail, using professional photographs and engaging descriptions to highlight your property across various channels. For international visibility, we target the ideal buyer for you by leveraging DLD transaction data and property finder tools, ensuring your property is marketed at the most attractive selling price.",
    },
    {
      title: "Get the Best Buyer!",
      description:
        "We manage property viewings and negotiations to secure the right buyer for you. We’ll then assist you with all the necessary paperwork, such as Form F and obtaining the NOC (No Objection Certificate) from the developer, in addition to taking care of any mortgage settlements if needed.",
    },
    {
      title: "Transfer Ownership At The DLD",
      description:
        "A India consultant will accompany you and the conveyancer through the ownership transfer process at the DLD trustee’s office. Buyer payment, seller transfer fees, and the new Title Deed issuance are efficiently managed.",
    },
    {
      title: "Make the Most of Your Funds.",
      description:
        "Leverage our extensive combined market experience of 65 years to strategically invest your earnings. Our highly trained consultants are committed to guiding you throughout your investment journey.",
    },
  ];

  const HeroSectionProps = {
    img: "https://images.pexels.com/photos/17364066/pexels-photo-17364066.jpeg",
    title: " How to Sell your Property in India – A Step by Step Guide",
    desc: " At India, we make selling property with extraordinary returns a reality.",
  };
  const StepTimelineProps = {
    steps: stepsForSelling,
    title: "Guide to sell property in India",
    desc: "Your step-by-step guide to making the most of your property sale in India.",
  };

  return (
    <div className="font-sans text-gray-800">
      <HeroSection {...HeroSectionProps} />
      <div className="container mx-auto px-14 py-8">
        <main className="bg-white">
          <StepTimeline {...StepTimelineProps} />
          <section className="py-12 px-6 md:px-20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Step‑by‑Step Guide to Selling
            </h2>
            <StepList steps={stepsForSelling} />
          </section>

          {/* <ExploreIn Title={"Explore new Properties"} /> */}

          <ExploreIn
            Title={"Explore new Properties"}
            // Title="Featured Properties"
            Enablebtn={false}
            data={propertyData}
            CardComponent={PropertySwiperCard}
            cardProps={{ fr: "static" }}
          />

          <SubscribeSection />
        </main>
      </div>
    </div>
  );
}
