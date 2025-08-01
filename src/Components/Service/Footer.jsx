import { IoLogoYoutube, IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Pages",
    items: [
      { title: "Buy", to: "/buy/properties-for-sale" },
      { title: "Rent", to: "/rent/properties-for-rent" },
      { title: "Areas", to: "areas" },
      { title: "Developers", to: "developers" },
      { title: "Projects", to: "Partner with Nexus" },
      { title: "Services", to: "services" },
      // { title: "Ethnovate", to: "Ethnovate" },
    ],
  },
  {
    title: "Buy",
    items: [
      { title: "Properties for Sale", to: "Properties for Sale" },
      { title: "Guide to Buying", to: "Guide to Buying" },
      { title: "Signature Collection", to: "Signature Collection" },
      { title: "Mortgages", to: "Mortgages" },
      { title: "Property Management", to: "Property Management" },
      { title: "Legal Services", to: "Legal Services" },
      { title: "Currency Exchange", to: "Currency Exchange" },
      { title: "Snagging & Inspection", to: "Snagging & Inspection" },
    ],
  },
  {
    title: "Sell",
    items: [
      { title: "List your Property", to: "List your Property" },
      { title: "Guide to Selling", to: "Guide to Selling" },
      { title: "Book a Valuation", to: "Book a Valuation" },
    ],
  },
  {
    title: "Off Plan",
    items: [
      { title: "New Projects", to: "New Projects" },
      { title: "Guide to Buying Off Plan", to: "Guide to Buying Off Plan" },
      { title: "Best India  Communities", to: "Best India  Communities" },
      { title: "Top India  Developers", to: "Top India  Developers" },
      { title: "Upcoming Roadshows", to: "Upcoming Roadshows" },
      { title: "Branded Residences", to: "Branded Residences" },
    ],
  },
  {
    title: "Rent",
    items: [
      { title: "Properties to Rent", to: "Properties to Rent" },
      { title: "Guide to Renting", to: "Guide to Renting" },
      { title: "Short Term Rentals", to: "Short Term Rentals" },
      { title: "Property Management", to: "Property Management" },
    ],
  },

  {
    title: "About",
    items: [
      { title: "About Us", to: "about-us" },
      { title: "Meet The Team", to: "Meet The Team" },
      { title: "Our Awards", to: "Our Awards" },
      { title: "Careers", to: "Careers" },
      { title: "Philanthropy", to: "Philanthropy" },
      { title: "India  News & Blog", to: "India  News & Blog" },
      { title: "Sustainability Initiative", to: "Sustainability Initiative" },
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
              <Link
                to={item.to}
                key={i}
                className="cursor-pointer block text-sm font-thin hover:text-[#F68537] transition-colors duration-200 mb-1"
              >
                {item.title}
              </Link>
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
