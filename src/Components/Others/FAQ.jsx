import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";



export default function FaqSection( {faqs} ) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100  lg:flex justify-center items-center py-12 px-4">
      <div className=" hidden lg:block lg:w-1/3">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/man-standing-behind-faq-4437412-3690813.png"
          alt=""
        />
      </div>
      <div className="max-w-4xl w-full lg:w-2/3 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4  lg:h-100 lg:overflow-y-scroll ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center  justify-between px-6 py-4 text-left text-gray-800 font-semibold focus:outline-none"
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
