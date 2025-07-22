import { FaHandshake, FaArrowRightArrowLeft, FaUsers } from "react-icons/fa6";

export default function PropertyMarketplace() {
  const data = [
    {
      icon: <FaHandshake size={40} className="text-blue-900" />,
      title: "Exclusive Access to Prime Properties",
      description:
        "Gain priority access to exclusive listings and off-plan developments in India’s top markets.",
    },
    {
      icon: <FaArrowRightArrowLeft size={40} className="text-blue-900" />,
      title: "Proven Track Record of Success",
      description:
        "Achieve your goals with our trusted expertise, delivering results for investors, buyers, and sellers.",
    },
    {
      icon: <FaUsers size={40} className="text-blue-900" />,
      title: "Expert Guidance in India’s Market",
      description:
        "Make informed, profitable decisions with our strategic insights into India's real estate market.",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-10 lg:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        India Premier Property Marketplace
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
