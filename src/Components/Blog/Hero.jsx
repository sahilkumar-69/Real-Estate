import { FiSearch } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export default function NewsHeader() {
  return (
    <section className="w-full py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        News, Media Gallery & Insights
      </h2>
      <p className="text-gray-600 text-lg mb-10">
        Take a look at the latest Real Estate News, Videos & Insights.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
        {/* Search Input */}
        <div className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-3 rounded-md w-full md:w-1/3">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by keyword"
            className="w-full focus:outline-none text-sm"
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex items-center justify-between gap-2 bg-white border border-gray-300 px-4 py-3 rounded-md w-full md:w-1/3 cursor-pointer">
          <span className="text-sm text-gray-600">All Categories</span>
          <IoIosArrowDown className="text-gray-500" />
        </div>

        {/* Subscribers Button */}
        {/* <div className="flex items-center gap-2 bg-[#f4f6fa] text-blue-900 font-semibold px-5 py-3 rounded-md text-sm">
          87.5k Subscribers <FaYoutube className="text-red-600" />
        </div> */}
      </div>
    </section>
  );
}
