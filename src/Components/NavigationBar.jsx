import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const navOptions = [
    {
      title: "Buy",
      path: "/buy/properties-for-sale",
      submenu: [
        { label: "Residential", path: "/buy/residential" },
        { label: "Commercial", path: "/buy/commercial" },
        { label: "Luxury Homes", path: "/buy/luxury" },
        { label: "Plots", path: "/buy/plots" },
      ],
    },
    {
      title: "Rent",
      path: "/rent/properties-for-rent",
      submenu: [
        { label: "Flats", path: "/rent/flats" },
        { label: "Apartments", path: "/rent/apartments" },
        { label: "PG", path: "/rent/pg" },
      ],
    },
    { title: "Projects", path: "/projects" },
    { title: "Developers", path: "/developers" },
    { title: "Areas", path: "/areas" },
    { title: "Services", path: "/services" },
    { title: "Blogs", path: "/blogs" },
    { title: "About Us", path: "/about-us" },
    // { title: "SellGuide", path: "/guide-to-selling" }, // fixed URL format
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-white shadow text-black" : "bg-black text-white"
      }`}
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src="/src/assets/nexus real estate logo.png"
          alt="logo"
          className="w-28 object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 font-medium">
        {navOptions.map((option, index) => (
          <div key={index} className="relative group">
            {option.submenu ? (
              <>
                <Link
                  to={option.path}
                  className="hover:text-cyan-400 transition"
                >
                  {option.title}
                </Link>
                <div className="absolute top-full left-0 mt-0 hidden group-hover:flex flex-col bg-white text-black shadow-md rounded z-50 p-2 min-w-[180px]">
                  {option.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sub.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link to={option.path} className="hover:text-cyan-400 transition">
                {option.title}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Right Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button onClick={() =>  navigate("/list-property") }  className="border px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition">
          List Property
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white text-xl"
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
              {option.submenu && (
                <div className="pl-4 text-sm text-gray-300">
                  {option.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sub.path}
                      className="block py-1 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={() =>  navigate("/list-property") } className="border py-1 rounded hover:bg-white hover:text-black transition">
            List Property
          </button>
        </div>
      )}
    </nav>
  );
}
