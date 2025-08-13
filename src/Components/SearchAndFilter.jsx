// --- SearchAndFilter.jsx ---

import { FiFilter } from "react-icons/fi";
// import PropertyFilterButton from "./ButtonComponents/PropertyFilterButton";
import { MdOutlineFilterAltOff } from "react-icons/md";
import FilterDropDown from "./Others/FilterDropDown";
import AnimatedDropDown from "./Others/AnimatedDropDown2";
import { useEffect } from "react";

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
  const btnTitle = ["All Properties", "Villas", "Apartments"];

  useEffect(() => {}, [uniqueFilters, filterOptions]);

  return (
    <div className="container mx-auto px-4 z-20 lg:px-14 py-8 -mt-10 relative ">
      <div className="bg-white   rounded-lg shadow-lg p-6">
        {/* Top dropdown filters */}
        <div className="grid grid-cols-1   md:grid-cols-4 gap-4 mb-6">
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

          <AnimatedDropDown
            label="Sort By"
            options={[
              { op: "Latest", value: "latest" },
              { op: "Price: Low to High", value: "price-low" },
              { op: "Price: High to Low", value: "price-high" },
            ]}
            value={sortBy}
            onChange={setSortBy}
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-gray-700"
          >
            <FiFilter className="mr-2" /> More Filters
          </button>
          <button
            onClick={() => {
              setFilterOptions({
                beds: "Any",
                bathroom: "Any",
                minArea: "",
                maxArea: "",
                location: "",
                type: "",
                status: "",
              });
            }}
            className="flex items-center text-gray-700"
          >
            <MdOutlineFilterAltOff size={20} className="mr-2" /> Clear Filters
          </button>
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
                      setFilterOptions((prev) => ({ ...prev, beds: num }))
                    }
                    className={`px-4 py-2 border rounded-lg ${
                      filterOptions.beds === num
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
                      setFilterOptions((prev) => ({ ...prev, bathroom: num }))
                    }
                    className={`px-4 py-2 border rounded-lg ${
                      filterOptions.bathroom === num
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
