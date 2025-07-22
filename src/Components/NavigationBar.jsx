import { useEffect, useState } from "react";
import { FaGlobe, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [currency, setCurrency] = useState("USD");
  const [showCurrency, setShowCurrency] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const navOptions = [
    { title: "Buy", path: "/buy/properties-for-sale" },
    { title: "Rent", path: "/rent/properties-for-rent" },
    { title: "Projects", path: "/projects" },
    { title: "Developers", path: "/developers" },
    { title: "Areas", path: "/areas" },
    { title: "Services", path: "/services" },
    { title: "Blogs", path: "/blogs" },
    { title: "More", path: "/more" },
  ];

  const currencies = ["USD", "INR", "AED", "EUR"];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-100 px-4 md:px-6 py-4 flex items-center justify-between transition-all duration-300 ${
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
          <Link
            key={index}
            to={option.path}
            className="hover:text-cyan-400 hover:underline"
          >
            {option.title}
          </Link>
        ))}
      </div>

      {/* Right Side Buttons */}
      <div className="hidden md:flex items-center gap-4 relative">
        <button className="border px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition">
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
        <div
          className={`absolute top-full left-0 w-full bg-black text-white flex flex-col gap-4 px-6 py-4 z-40 md:hidden transition-all`}
        >
          {navOptions.map((option, index) => (
            <Link
              key={index}
              to={option.path}
              className="hover:text-cyan-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {option.title}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-gray-700">
            <FaGlobe />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-black text-white border-none outline-none"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>
          <button className="border mt-2 py-1 rounded hover:bg-white hover:text-black transition">
            Login
          </button>
          <button className="border py-1 rounded hover:bg-white hover:text-black transition">
            List Property
          </button>
        </div>
      )}
    </nav>
  );
}
