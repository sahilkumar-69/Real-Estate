import React from "react";

const steps = [
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

export default function StepTimeline() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <p className="text-sm text-center text-gray-500 uppercase font-medium tracking-widest mb-2">
        Guide to sell property in India
      </p>
      <h2 className="text-3xl md:text-4xl text-center font-bold text-slate-800 mb-12">
        Your step-by-step guide to making the most of your property sale in
        India.
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
