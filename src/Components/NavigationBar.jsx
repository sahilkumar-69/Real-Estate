import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import NavbarDropdown from "./Service/NavbarDropdown";

export default function Navbar({ setFilterOptions,setFilterOptionsForRent }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const navOptions = [
    { title: "Buy", path: "/buy/properties-for-sale" },
    { title: "Rent", path: "/rent/properties-for-rent" },
    { title: "Projects", path: "/projects" },
    { title: "Developers", path: "/developers" },
    { title: "Areas", path: "/areas" },
    { title: "Services", path: "/services" },
    { title: "Blogs", path: "/blogs" },
    { title: "About Us", path: "/about-us" },
  ];

  const menuContent = {
    Buy: {
      title: "Buy Properties",

      scroll: true,

      sections: [
        {
          heading: "Property type",
          type: "type",
          items: [
            {
              to: "/buy/properties-for-sale",
              label: "Studio",
              value: "studio",
            },
            {
              to: "/buy/properties-for-sale",
              label: "Commercial",
              value: "commercial",
            },
            {
              to: "/buy/properties-for-sale",
              label: "PentHouse",
              value: "penthouse",
            },
            {
              to: "/buy/properties-for-sale",
              label: "Bungalow",
              value: "bungalow",
            },
            { to: "/buy/properties-for-sale", label: "Villa", value: "villa" },
          ],
        },
        {
          heading: "Popular Locations",
          type: "location",

          items: [
            {
              to: "/buy/properties-for-sale",
              label: "Koregaon Park, Pune",
              value: "Koregaon Park, Pune",
            },
            {
              to: "/buy/properties-for-sale",
              label: "Andheri West, Mumbai",
              value: "Andheri West, Mumbai",
            },
            {
              to: "/buy/properties-for-sale",
              label: "Greater Kailash II, Delhi",
              value: "Greater Kailash II, Delhi",
            },
            {
              to: "/buy/properties-for-sale",
              label: "Jubilee Hills, Hyderabad",
              value: "Jubilee Hills, Hyderabad",
            },
          ],
        },
      ],
      image: {
        src: "https://images.pexels.com/photos/7578931/pexels-photo-7578931.jpeg",
        title: "Explore Properties",
        label: "View All",
        to: "/buy/properties-for-sale",
      },
    },
    Rent: {
      title: "Rent Properties",
      scroll: true,
      name: "rent",

      sections: [
        {
          heading: "Property type",
          type: "type",
          items: [
            {
              value: "Apartment",
              label: "Apartment",
              to: "/rent/properties-for-rent",
            },
            {
              value: "Townhouse",
              label: "Townhouse",
              to: "/rent/properties-for-rent",
            },
            { value: "Villa", label: "Villa", to: "/rent/properties-for-rent" },
            {
              value: "Penthouse",
              label: "Penthouse",
              to: "/rent/properties-for-rent",
            },
          ],
        },
        {
          heading: "Locations",
          type: "location",

          items: [
            {
              value: "Powai, Mumbai",
              label: "Powai, Mumbai",
              to: "/rent/properties-for-rent",
            },
            {
              value: "Worli, South Mumbai",
              label: "Worli, South Mumbai",
              to: "/rent/properties-for-rent",
            },
            {
              value: "Worli Sea Face, Mumbai",
              label: "Worli Sea Face, Mumbai",
              to: "/rent/properties-for-rent",
            },
            {
              value: "Whitefield, Bangalore",
              label: "Whitefield, Bangalore",
              to: "/rent/properties-for-rent",
            },
            {
              value: "Gurugram, Haryana",
              label: "Gurugram, Haryana",
              to: "/rent/properties-for-rent",
            },
          ],
        },
      ],
      image: {
        src: "/src/assets/rent_dropdown_img.jpg",
        title: "Find Rentals",
        label: "View All",
        to: "/rent/properties-for-rent",
      },
    },
    // Projects: {
    //   title: "Latest Projects",
    //   sections: [
    //     {
    //       heading: "Top Projects",
    //       items: [
    //         { label: "Under Construction", to: "/projects/under-construction" },
    //         { label: "Ready to Move", to: "/projects/ready-to-move" },
    //       ],
    //     },
    //   ],
    //   image: {
    //     src: "https://images.pexels.com/photos/7578931/pexels-photo-7578931.jpeg",
    //     title: "Explore Projects",
    //     label: "View All",
    //     to: "/projects",
    //   },
    // },
    Developers: {
      title: "Top Developers",
      scroll: false,
      sections: [
        {
          heading: "Popular In India",
          items: [
            { label: "Binghatti", to: "/developers/6880d003c496783053e5e06d" },
            {
              label: "Samana Developers",
              to: "/developers/6881c0aac496783053e5e079",
            },
            {
              label: "Imtiaz Developments",
              to: "/developers/6881c1dac496783053e5e07b",
            },
            {
              label: "Aldar Properties",
              to: "/developers/6881befcc496783053e5e077",
            },
            {
              label: "Azizi Developments",
              to: "/developers/6881baabc496783053e5e071",
            },
          ],
        },
        {
          heading: "Popular In Your City",
          items: [
            { label: "Damac Properties", to: "/developers/6880cf93c496783053e5e06b" },
            {
              label: "Sobha Realty",
              to: "/developers/6881b9efc496783053e5e06f",
            },
            {
              label: "Emaar Properties",
              to: "/developers/6880ce9ec496783053e5e069",
            },
          
          ],
        },
      ],
      image: {
        src: "/src/assets/developers_dropdown.jpg",
        title: "All Developers",
        label: "Browse",
        to: "/developers",
      },
    },
    Areas: {
      title: "Popular Areas",
      sections: [
        {
          heading: "Cities",
          items: [
            { label: "Hyderabad", to: "/areas/6889e1de8b94dd0080d2eb17" },
            { label: "Mumbai", to: "/areas/6889e1048b94dd0080d2eb13" },
            { label: "Kolkata", to: "/areas/6889e2918b94dd0080d2eb1b" },
            { label: "Chandigarh", to: "/areas/6889e4538b94dd0080d2eb25" },
            { label: "Delhi", to: "/areas/6889e0aa8b94dd0080d2eb11" },
            { label: "Jaipur", to: "/areas/6889e39f8b94dd0080d2eb21" },
          ],
        },
        {
          heading: " ",
          items: [
            { label: "Bengaluru", to: "/areas/6889e1748b94dd0080d2eb15" },
            { label: "Chennai", to: "/areas/6889e2368b94dd0080d2eb19" },
            { label: "Ahmedabad", to: "/areas/6889e3458b94dd0080d2eb1f" },
            { label: "Pune", to: "/areas/6889e2f18b94dd0080d2eb1d" },
          ],
        },
      ],
      image: {
        src: "/src/assets/area_dropdown.jpg",
        title: "Explore Areas",
        label: "Browse",
        to: "/areas",
      },
    },
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed  top-0 left-0 w-full z-50 px-4 md:px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-white shadow text-black" : "bg-black text-white"
      }`}
    >
      {/* Logo */}
      <div
        onClick={() => {
          navigate("/");
          scrollTo({ behavior: "smooth", top: 0 });
        }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src="/src/assets/nexus real estate logo.png"
          alt="logo"
          className="w-28 object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 font-medium relative">
        {navOptions.map((option, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setOpenMenu(option.title)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link to={option.path} className="hover:text-cyan-400 transition">
              {option.title}
            </Link>

            {menuContent[option.title] && (
              <NavbarDropdown
                setFilterOptions={setFilterOptions}
                setFilterOptionsForRent={setFilterOptionsForRent}
                open={openMenu === option.title}
                content={menuContent[option.title]}
              />
            )}
          </div>
        ))}
      </div>

      {/* Right Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={() => navigate("/list-property")}
          className="border px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition"
        >
          List Property
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          className="text-green-700
           text-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col gap-4 px-6 py-4 z-40 md:hidden transition-all">
          {navOptions.map((option, index) => (
            <div key={index}>
              <Link
                to={option.path}
                className="block py-2 hover:text-cyan-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {option.title}
              </Link>
              {menuContent[option.title]?.sections && (
                <div className="pl-4 text-sm text-gray-300">
                  {menuContent[option.title].sections[0].items.map(
                    (sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sub.to}
                        className="block py-1 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => navigate("/list-property")}
            className="border py-1 rounded hover:bg-white hover:text-black transition"
          >
            List Property
          </button>
        </div>
      )}
    </nav>
  );
}
