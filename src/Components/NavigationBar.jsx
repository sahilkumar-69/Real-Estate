import { useEffect, useState } from "react";
import { FaGlobe, FaUser } from "react-icons/fa";

export default function Navbar() {
  const [currency, setCurrency] = useState("USD");
  const [showCurrency, setShowCurrency] = useState(false);

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
      <div className="text-2xl w-29 font-bold text-white">
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
        <a className="hover:text-cyan-400 hover:underline" href="/buy">
          Buy
        </a>
        <a className="hover:text-cyan-400 hover:underline" href="/rent">
          Rent
        </a>
        <a className="hover:text-cyan-400 hover:underline" href="/projects">
          Projects
        </a>
        <a className="hover:text-cyan-400 hover:underline" href="/developers">
          Developers
        </a>
        <a className="hover:text-cyan-400 hover:underline" href="/areas">
          Areas
        </a>
        <a className="hover:text-cyan-400 hover:underline" href="/services">
          Services
        </a>
        <a className="hover:text-cyan-400 hover:underline" href="/blogs">
          Blogs
        </a>
        <a className="hover:text-cyan-400 hover:underline" href="/more">
          More
        </a>
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

// import { useEffect, useState } from "react";
// import { FaGlobe, FaUser } from "react-icons/fa";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
//         scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="flex justify-between items-center">
//         <div
//           className={`text-2xl font-bold ${
//             scrolled ? "text-black" : "text-white"
//           }`}
//         >
//           Provident<span className="text-primary">.</span>
//         </div>

//         <div
//           className={`hidden md:flex space-x-6 font-medium ${
//             scrolled ? "text-black" : "text-white"
//           }`}
//         >
//           <a href="#">Buy</a>
//           <a href="#">Rent</a>
//           <a href="#">Projects</a>
//           <a href="#">Developers</a>
//           <a href="#">Areas</a>
//           <a href="#">Services</a>
//           <a href="#">Blogs</a>
//           <a href="#">More</a>
//         </div>

//         <div className="flex items-center space-x-4">
//           <button
//             className={`flex items-center border px-4 py-1 rounded-md transition ${
//               scrolled
//                 ? "border-black text-black hover:bg-black hover:text-white"
//                 : "border-white text-white hover:bg-white hover:text-black"
//             }`}
//           >
//             <FaUser className="mr-2" />
//             Login
//           </button>
//           <button
//             className={`border px-4 py-1 rounded-md transition ${
//               scrolled
//                 ? "border-black text-black hover:bg-black hover:text-white"
//                 : "border-white text-white hover:bg-white hover:text-black"
//             }`}
//           >
//             List Your Property
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }
