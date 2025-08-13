import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";


const DeveloperHero = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h1 className="text-3xl md:text-4xl font-bold text-[#05264e]">
        India Real Estate Developers
      </h1>
      <p className="text-gray-600 mt-4 text-lg">
        Browse through top developers in India and explore their latest
        projects.
      </p>

      <div className="flex mt-4 w-full lg:w-[90%] items-center justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full outline-none pl-7 p-3 border-2 rounded-l-4xl border-black text-lg"
          placeholder="Search the developers . . . "
        />
        <button
          onClick={onSearch}
          className="flex hover:text-[#2ee42f] items-center justify-center gap-2 p-4 px-6 bg-black font-semibold text-white rounded-r-4xl"
        >
          Search
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default DeveloperHero;
 