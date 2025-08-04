import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
 

export default function TopCommunities() {
  return (
    <section className="bg-white   py-16 ">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#0b2c50] mb-4">
          Top India Communities
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Discover vibrant living in India through our comprehensive area guide,
          offering insights into top communities, attractions, and things to do.
          Explore the best restaurants, must-visit places, and top-rated
          apartments, while uncovering the finest properties for the community
          that best fits you.
        </p>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search Communities"
              className="w-full px-10 py-3 border rounded-md  outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0] "
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Dropdown */}
          <div className="relative w-full sm:w-40">
            <select className="appearance-none w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none  ">
              <option value="">All</option>
              <option value="apartments">Apartments</option>
              <option value="villas">Villas</option>
              <option value="townhouses">Townhouses</option>
            </select>
            <FaChevronDown className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
