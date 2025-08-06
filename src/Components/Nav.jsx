import { useState } from "react";
import { Link } from "react-router-dom";

 

export const Navbar2 = () => {
  const simpleLinks = [
    { title: "Projects", path: "/projects" },
    { title: "Developers", path: "/developers" },
    { title: "Areas", path: "/areas" },
    { title: "Services", path: "/services" },
    { title: "Blogs", path: "/blogs" },
    { title: "About Us", path: "/about-us" },
  ];

  return (
    <nav className="bg-white shadow px-10 py-20 flex gap-6">
      <NavDropdown label="Buy" keyName="buy" />
      <NavDropdown label="Rent" keyName="rent" />

      {simpleLinks.map((link) => (
        <Link
          key={link.title}
          to={link.path}
          className="text-[#0b2c50] hover:text-orange-600 font-medium"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

const dropdownOptions = {
  buy: {
    title: "Properties for Sale",
    sections: [
      {
        heading: "Property Types",
        items: [
          { label: "Apartments", to: "/buy/apartments" },
          { label: "Villas", to: "/buy/villas" },
          { label: "Townhouses", to: "/buy/townhouses" },
          { label: "Penthouses", to: "/buy/penthouses" },
        ],
      },
      {
        heading: "Resources",
        items: [
          { label: "Buyer's Guide", to: "/resources/buyers-guide" },
          { label: "Mortgage", to: "/resources/mortgage" },
        ],
      },
    ],
    image: {
      label: "Explore Signature",
      title: "Signature Collection",
      to: "/signature",
      src: "https://images.pexels.com/photos/7578931/pexels-photo-7578931.jpeg",
    },
  },

  rent: {
    title: "Properties for Rent",
    sections: [
      {
        heading: "Rental Types",
        items: [
          { label: "Apartments", to: "/rent/apartments" },
          { label: "Villas", to: "/rent/villas" },
          { label: "Townhouses", to: "/rent/townhouses" },
        ],
      },
      {
        heading: "Help & Support",
        items: [
          { label: "Renting Guide", to: "/resources/rent-guide" },
          { label: "FAQs", to: "/resources/faqs" },
        ],
      },
    ],
    image: {
      label: "Explore Rentals",
      title: "Luxury Rentals",
      to: "/rentals/luxury",
      src: "https://images.pexels.com/photos/7578931/pexels-photo-7578931.jpeg",
    },
  },

  invest: {
    title: "Investment Opportunities",
    sections: [
      {
        heading: "Categories",
        items: [
          { label: "Off-Plan Projects", to: "/invest/off-plan" },
          { label: "Commercial Properties", to: "/invest/commercial" },
          { label: "Plots", to: "/invest/plots" },
        ],
      },
      {
        heading: "Tools",
        items: [
          { label: "ROI Calculator", to: "/tools/roi-calculator" },
          { label: "Market Insights", to: "/tools/insights" },
        ],
      },
    ],
    image: {
      label: "Explore Investments",
      title: "Top Investment Picks",
      to: "/investments/top-picks",
      src: "https://images.pexels.com/photos/7578931/pexels-photo-7578931.jpeg",
    },
  },
};

const NavDropdown = ({ label, keyName }) => {
  const [open, setOpen] = useState(false);
  const content = dropdownOptions[keyName];

  if (!content.sections) return null;

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="px-4 py-2 text-[#0b2c50] font-medium hover:text-orange-600">
        {label}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-[750px] bg-white shadow-xl rounded-xl p-6 flex gap-6 z-50">
          {/* Left Column: Links */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-[#0b2c50] mb-4">
              {content.title}
            </h4>
            <div className="grid grid-cols-2 gap-y-3 text-gray-700 text-sm">
              {content.sections.map((section, idx) => (
                <div key={idx}>
                  <h5 className="text-gray-400 font-semibold mb-2">
                    {section.heading}
                  </h5>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.to}>
                        <Link to={item.to} className="hover:text-blue-600">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image with CTA */}
          <div className="w-70 h-50 relative">
            <img
              src={content.image.src}
              alt={content.image.title}
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 rounded-xl flex flex-col items-center justify-center text-white">
              <h4 className="text-base font-semibold mb-2">
                {content.image.title}
              </h4>
              <Link
                to={content.image.to}
                className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-sm"
              >
                {content.image.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
 
 