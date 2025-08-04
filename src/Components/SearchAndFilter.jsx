// --- SearchAndFilter.jsx ---

import { FiSearch, FiChevronDown, FiFilter } from "react-icons/fi";
import PropertyFilterButton from "./ButtonComponents/PropertyFilterButton";
import FilterDropDown from "./Others/FilterDropDown";

const SearchAndFilter = ({
  activeFilter,
  setActiveFilter,
  setShowFilters,
  showFilters,
  sortBy,
  setSortBy,
  filterOptions,
  setFilterOptions,
  uniqueFilters,
}) => {
  const btnTitle = [
    "All Properties",
    "Featured",
    "Villas",
    "Apartments",
    "Off-Plan",
  ];

  return (
    <div className="container mx-auto px-14 py-8 -mt-10 relative z-20">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Top dropdown filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {uniqueFilters?.locations?.length > 0 && (
            <FilterDropDown
              label="Location"
              options={uniqueFilters.locations}
              value={filterOptions.location}
              onChange={(value) =>
                setFilterOptions((prev) => ({ ...prev, location: value }))
              }
            />
          )}

          {uniqueFilters?.types?.length > 0 && (
            <FilterDropDown
              label="Property Type"
              options={uniqueFilters.types}
              value={filterOptions.type}
              onChange={(value) =>
                setFilterOptions((prev) => ({ ...prev, type: value }))
              }
            />
          )}

          {uniqueFilters?.statuses?.length > 0 && (
            <FilterDropDown
              label="Status"
              options={uniqueFilters.statuses}
              value={filterOptions.status}
              onChange={(value) =>
                setFilterOptions((prev) => ({ ...prev, status: value }))
              }
            />
          )}

          <div className="flex items-end">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-medium flex items-center justify-center">
              <FiSearch className="mr-2" /> Search
            </button>
          </div>
        </div>

        {/* Filter Buttons and Sort */}
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex space-x-2 mb-4 md:mb-0">
            {btnTitle.map((title, index) => (
              <PropertyFilterButton
                title={title}
                key={index}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-gray-700"
            >
              <FiFilter className="mr-2" /> More Filters
            </button>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="latest">Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <FiChevronDown className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bedrooms */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Bedrooms</h4>
              <div className="flex flex-wrap gap-2">
                {["Any", "1", "2", "3", "4", "5+"].map((num) => (
                  <button
                    key={num}
                    onClick={() =>
                      setFilterOptions((prev) => ({ ...prev, bedrooms: num }))
                    }
                    className={`px-4 py-2 border rounded-lg ${
                      filterOptions.bedrooms === num
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Bathrooms */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Bathrooms</h4>
              <div className="flex flex-wrap gap-2">
                {["Any", "1", "2", "3", "4", "5+"].map((num) => (
                  <button
                    key={num}
                    onClick={() =>
                      setFilterOptions((prev) => ({ ...prev, bathrooms: num }))
                    }
                    className={`px-4 py-2 border rounded-lg ${
                      filterOptions.bathrooms === num
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Area */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Area (sq.ft)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Min
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    min={0}
                    value={filterOptions.minArea}
                    onChange={(e) =>
                      setFilterOptions((prev) => ({
                        ...prev,
                        minArea: e.target.value,
                      }))
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Max
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    min={0}
                    value={filterOptions.maxArea}
                    onChange={(e) =>
                      setFilterOptions((prev) => ({
                        ...prev,
                        maxArea: e.target.value,
                      }))
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;
