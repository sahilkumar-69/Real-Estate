import { IoLogoYoutube, IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "motion/react";

const footerSections = [
  {
    title: "Buy",
    items: [
      "Properties for Sale",
      "Guide to Buying",
      "Signature Collection",
      "Mortgages",
      "Property Management",
      "Legal Services",
      "Currency Exchange",
      "Snagging & Inspection",
    ],
  },
  {
    title: "Sell",
    items: ["List your Property", "Guide to Selling", "Book a Valuation"],
  },
  {
    title: "Off Plan",
    items: [
      "New Projects",
      "Guide to Buying Off Plan",
      "Best India  Communities",
      "Top India  Developers",
      "Upcoming Roadshows",
      "Branded Residences",
    ],
  },
  {
    title: "Rent",
    items: [
      "Properties to Rent",
      "Guide to Renting",
      "Short Term Rentals",
      "Property Management",
    ],
  },
  {
    title: "Services",
    items: [
      "Leasing",
      "Mortgages",
      "Conveyancing",
      "Holiday Homes",
      "Partner with Provident",
      "PRYPCO",
      "Ethnovate",
    ],
  },
  {
    title: "About",
    items: [
      "About Us",
      "Meet The Team",
      "Our Awards",
      "Careers",
      "Philanthropy",
      "India  News & Blog",
      "Sustainability Initiative",
    ],
  },
];

const socialIcons = [
  { icon: IoLogoYoutube, color: "#FF0800" },
  { icon: FaFacebook, color: "#1877F2" },
  { icon: FaSquareXTwitter, color: "#000000" },
  { icon: RiInstagramFill, color: "#E1306C" },
  { icon: FaLinkedin, color: "#0077B5" },
  { icon: FaTelegramPlane, color: "#0088cc" },
  { icon: IoLogoWhatsapp, color: "#25D366" },
];

const Footer = () => {
  return (
    <div className="bg-[#002366] px-6 pt-10 text-white">
      <div className="flex flex-wrap justify-between border-b border-white pb-6">
        {footerSections.map((section, idx) => (
          <div key={idx} className="w-1/2 md:w-1/3 lg:w-[16%] mb-6 md:mb-0">
            <p className="text-lg font-semibold mb-3">{section.title}</p>
            {section.items.map((item, i) => (
              <p
                key={i}
                className="cursor-pointer text-sm font-thin hover:text-[#F68537] transition-colors duration-200 mb-1"
              >
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Social Section */}
      <div className="flex flex-col items-center mt-10 gap-6">
        <div className="flex flex-wrap justify-center gap-6">
          {socialIcons.map(({ icon: Icon, color }, index) => (
            <motion.div
              key={index}
              whileInView={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Icon
                className="w-8 h-8 cursor-pointer transition-colors"
                style={{ color }}
              />
            </motion.div>
          ))}
        </div>
        <p className="border-t border-white py-4 text-sm text-center w-full">
          All rights reserved © 2025 Nexus Real Estate
        </p>
      </div>
    </div>
  );
};

export default Footer;
