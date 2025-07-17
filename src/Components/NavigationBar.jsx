import { useEffect, useState } from "react";
import { FaGlobe, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navigate } from "../Data";

export default function Navbar() {
  const [currency, setCurrency] = useState("USD");
  const [showCurrency, setShowCurrency] = useState(false);

  const navOptions = [
    { title: "Buy", path: "/buy" },
    { title: "Rent", path: "/rent" },
    { title: "Projects", path: "/projects" },
    { title: "Developers", path: "/developers" },
    { title: "Areas", path: "/areas" },
    { title: "Services", path: "/services" },
    { title: "Blogs", path: "/blogs" },
    { title: "More", path: "/more" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currencies = ["USD", "INR", "AED", "EUR"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-around transition-all duration-300 ${
        scrolled ? "bg-white text-black " : "bg-transparent"
      }`}
    >
      {/* Left: Logo */}
      <div
        onClick={() => {
          navigate("/");
        }}
        className="text-2xl w-29 font-bold text-white"
      >
        <img
          className="w-full cursor-pointer backdrop:shadow-or "
          src="src\assets\nexus real estate logo.png"
          alt=""
        />
      </div>
      {/* Center: Nav Links */}
      <div
        className={`hidden md:flex space-x-6 font-medium ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        {navOptions.map((option, index) => (
          <Link
            key={index}
            className="hover:text-cyan-400 hover:underline"
            to={option.path}
          >
            {option.title}
          </Link>
        ))}
      </div>
      {/* Right: Currency + Buttons */}
      {/* <p className="text-white" >|</p> */}
      <div className="flex items-center space-x-4 text-white relative  ">
        {/* Currency Dropdown */}
        <div
          className={`flex  ${
            scrolled ? "text-black  " : "text-white"
          }  items-center cursor-pointer hover:text-gray-100`}
          onClick={() => setShowCurrency(!showCurrency)}
        >
          <FaGlobe className="mr-1" />
          {currency}
          <svg className="ml-1 w-3 h-3" viewBox="0 0 20 20">
            <path
              d="M5.25 7.75L10 12.5l4.75-4.75"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Dropdown Menu */}
        {showCurrency && (
          <div className="absolute top-10 right-24 bg-white text-black shadow-md rounded w-24 z-10">
            {currencies.map((cur) => (
              <div
                key={cur}
                className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setCurrency(cur);
                  setShowCurrency(false);
                }}
              >
                {cur}
              </div>
            ))}
          </div>
        )}

        {/* Login Button */}
        <button
          className={`flex items-center border border-white px-4 py-1 rounded-md hover:bg-white hover:text-blue-600 transition  ${
            scrolled ? "text-black  " : "text-white"
          }  `}
        >
          <FaUser className="mr-2" />
          Login
        </button>

        {/* List Property Button */}
        <button
          className={`border border-white px-4 py-1 rounded-md hover:bg-white hover:text-blue-600 transition ${
            scrolled ? "text-black  " : "text-white"
          }   `}
        >
          List Your Property
        </button>
      </div>
    </nav>
  );
}
 