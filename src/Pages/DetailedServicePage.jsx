import ContentSplitSection from "../Components/ServiceDetailedPage/ContentSplitSection";
import HeroSectionForService from "../Components/ServiceDetailedPage/HeroSection";
import RealEstateServices from "../Components/ServiceDetailedPage/RealEstateService";
import {CardDesign} from "../Components/ServiceDetailedPage/Card";

const DetailedServicePage = () => {
  const heroProps = {
    backgroundImage: "/src/assets/service_sell.jpg",
    title: "Buy Property in India’s Top Cities",
    subtitle:
      "Find your dream home across India's leading real estate markets – from luxury apartments in Mumbai to budget-friendly homes in tier-2 cities.",
    buttonText: "Explore Properties",
    buttonLink: "/buy",
  };

  // realEstateServices.js
 const realEstateServices = [
  {
    title: "Extensive Market Knowledge",
    description:
      "Our experts possess deep knowledge of the Indian real estate market, enabling us to accurately assess your property's value and position it for maximum impact across metros and growing cities.",
  },
  {
    title: "Targeted Marketing Strategies",
    description:
      "We implement hyper-local and digital marketing strategies to maximize exposure for your property, targeting the right buyers through channels like 99acres, MagicBricks, and social media.",
  },
  {
    title: "Professional Listings",
    description:
      "We create visually compelling listings, highlighting unique features of your property with high-quality photos, videos, and walkthroughs to attract serious buyers.",
  },
  {
    title: "Expert Negotiation",
    description:
      "Our negotiation team works to secure the best deal for your property while ensuring legal and financial transparency, representing your interests every step of the way.",
  },
  {
    title: "Legal & Documentation Assistance",
    description:
      "From title verification to registration and stamp duty compliance, we assist with every legal aspect of your property transaction to ensure smooth execution.",
  },
  {
    title: "Home Loan & Financial Advisory",
    description:
      "We help buyers access the best home loan options from top Indian banks and provide personalized guidance to simplify financing decisions.",
  },
];


  const splitSection = {
    subheading:
      "Sell Property in India with Confidence: Partner with Nexus Real Estate",
    heading: "Why choose Nexus Real Estate to sell your property in India?",
    paragraphs: [
      "Looking to sell your property in India? Nexus Real Estate is your trusted partner for a seamless and successful selling experience. With deep expertise in the Indian real estate market, we provide personalized guidance throughout every stage of the selling process.",
      "At Nexus, we are committed to achieving the best results and surpassing your expectations. Our team prioritizes your needs and works tirelessly to market and sell your property quickly while maximizing your return on investment.",
      "Don't leave your property sale to chance. Work with a reliable, professional, and data-driven real estate partner. Contact us today to get started on your successful property sale journey in India.",
    ],
  };

  return (
    <>
      <HeroSectionForService {...heroProps} />
      <ContentSplitSection {...splitSection} />

      <RealEstateServices data={realEstateServices} />
    </>
  );
};

export default DetailedServicePage;
