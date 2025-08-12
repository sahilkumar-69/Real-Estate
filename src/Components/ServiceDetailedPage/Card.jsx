import { Card } from "./HoverCard";

export const CardDesign = () => {

 const cardData = [
  {
    title: "Buy Property in India",
    description:
      "Explore a vast portfolio of residential and commercial properties across India, including metro cities and emerging markets. Whether you're a first-time buyer or seasoned investor, our expert consultants provide legal, financial, and location-specific advice to ensure a smooth and profitable purchase experience.",
    bg: "https://images.pexels.com/photos/3935344/pexels-photo-3935344.jpeg",
  },
  {
    title: "Sell Property in India",
    description:
      "Maximize your property's market value with our end-to-end selling services, including professional staging, photography, digital marketing, and verified buyer connections. We handle all paperwork, negotiations, and legalities to provide a stress-free selling experience tailored to your goals.",
    bg: "https://images.pexels.com/photos/8482510/pexels-photo-8482510.jpeg",
  },
  {
    title: "Rent Property in Dubai",
    description:
      "Choose from premium apartments, villas, and commercial spaces for rent in Dubai’s top communities. We offer personalized options with flexible lease terms, luxury amenities, and full tenant support. Enjoy transparent contracts and quick move-in procedures with our experienced team.",
    bg: "https://images.pexels.com/photos/8963080/pexels-photo-8963080.jpeg",
  },
  {
    title: "Property Management",
    description:
      "Our full-service property management solutions include tenant screening, rent collection, maintenance scheduling, and detailed financial reporting. Whether you own one unit or an entire portfolio, we ensure your investments are protected, profitable, and fully compliant with local regulations.",
    bg: "https://images.pexels.com/photos/3656188/pexels-photo-3656188.jpeg",
  },
  {
    title: "Holiday Homes",
    description:
      "Convert your property into a successful short-term rental with our holiday home services. We provide professional furnishing, guest management, dynamic pricing, and listing optimization on platforms like Airbnb and Booking.com to generate consistent, high-yield income.",
    bg: "https://images.pexels.com/photos/13907870/pexels-photo-13907870.jpeg",
  },
  {
    title: "Mortgages",
    description:
      "Secure competitive mortgage solutions through our partner banks and lending institutions. Whether you're a resident or overseas buyer, we guide you through documentation, pre-approvals, EMI planning, and repayment options to finance your dream property efficiently and affordably.",
    bg: "https://images.pexels.com/photos/5849569/pexels-photo-5849569.jpeg",
  },
  {
    title: "Conveyancing",
    description:
      "Our licensed conveyancing team handles title verification, legal documentation, and ownership transfer to ensure compliance with real estate regulations. We simplify the entire legal process and represent your interests during negotiations and registration, making your transaction legally sound.",
    bg: "https://www.shutterstock.com/image-photo/legal-issues-real-estate-transactions-600nw-2399283423.jpg",
  },
  {
    title: "Snagging",
    description:
      "We conduct professional snagging inspections to identify construction flaws and finishing issues before handover. Our engineers document all defects and work with developers to ensure timely rectification, so you receive a property that meets promised specifications and quality standards.",
    bg: "https://images.pexels.com/photos/5691686/pexels-photo-5691686.jpeg",
  },
  {
    title: "Interior Design",
    description:
      "Transform your property into a stunning space with our award-winning interior design services. From conceptual planning to final execution, we provide custom themes, 3D renders, and premium furnishings to create interiors that reflect your lifestyle and elevate your property's value.",
    bg: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
  },
  {
    title: "Currency Exchange",
    description:
      "Facilitate your international property purchases with secure and efficient foreign exchange services. We offer real-time market rates, fast transfers, and personalized support to help you save money on currency conversions for investments, remittances, or repatriation of funds.",
    bg: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg",
  },
  {
    title: "2nd Citizenship",
    description:
      "Gain access to global mobility and tax advantages through our second citizenship and residency-by-investment programs. Our specialists help you invest in government-approved real estate projects that qualify you for passports from countries offering visa-free travel and financial benefits.",
    bg: "https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg",
  },
];


  
  return (
    <div className="container  not-last: mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Services We Provide </h2>
      </div>

      <div className="grid grid-cols-1     sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            bg={card.bg}
          />
        ))}
      </div>
    </div>
  );
};
