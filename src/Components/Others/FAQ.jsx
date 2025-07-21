import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Can I get a mortgage for an off-plan property in India?",
    answer:
      "Yes, many banks in India offer mortgages for off-plan properties, covering up to 50% of the property’s value during construction. Consult your bank for specific terms.",
  },
  {
    question: "What are the benefits of buying an off-plan property in India?",
    answer:
      "Benefits include lower entry costs, flexible payment plans, and the chance to own a property with modern features and high investment potential.",
  },
  {
    question: "What are the risks of buying off-plan properties?",
    answer:
      "Risks include potential construction delays or developer issues. Mitigate these risks by choosing reputable developers and understanding the project’s terms.",
  },
  {
    question: "How can I verify the credibility of a developer?",
    answer:
      "Research the developer’s track record, review their completed projects, and check their RERA registration for credibility.",
  },
  {
    question: "What types of off-plan properties are available in India?",
    answer:
      "India offers a wide variety of off-plan properties, including apartments, villas, townhouses, and penthouses, catering to diverse preferences and budgets.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-800 font-medium focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 py-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
