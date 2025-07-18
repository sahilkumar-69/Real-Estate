import { useState } from "react";
import {
  FiSearch,
  FiMapPin,
  FiChevronDown,
  FiHeart,
  FiShare2,
  FiFilter,
} from "react-icons/fi";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { properties } from "../Data";
import { useNavigate } from "react-router-dom";

import ExploreIn from "../Components/Home/ExploreIn";
import PropertyFilterButton from "../Components/ButtonComponents/PropertyFilterButton";
import ExpertCardsWraper from "../Components/PropForSale/ExpertCardsWraper";
import Description from "../Components/Others/Description";
import HelpFindProperty from "../Components/PropForSale/PostComponent";

const RentPropertyListingPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("latest");
  const navigate = useNavigate();

 
  // Filter properties based on active filter
  const filteredProperties = properties.filter((property) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return property.featured;
    if (activeFilter === "villas") return property.type === "villa";
    if (activeFilter === "apartments") return property.type === "apartment";
    if (activeFilter === "off-plan") return property.status === "off-plan";
    return true;
  });
  //button title data

  const btnTitle = [
    "All Properties",
    "Featured",
    "Villas",
    "Apartments",
    "Off-Plan",
  ];

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "latest") return b.id - a.id;
    if (sortBy === "price-low")
      return (
        parseInt(a.price.replace(/[^\d]/g, "")) -
        parseInt(b.price.replace(/[^\d]/g, ""))
      );
    if (sortBy === "price-high")
      return (
        parseInt(b.price.replace(/[^\d]/g, "")) -
        parseInt(a.price.replace(/[^\d]/g, ""))
      );
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Properties For Sale
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Find your dream property from our extensive collection of premium
            listings
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-14 py-8 -mt-10 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Location</label>
              <div className="relative">
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Locations</option>
                  <option>Downtown India </option>
                  <option>India Marina</option>
                  <option>Palm Jumeirah</option>
                  <option>Business Bay</option>
                  <option>Jumeirah Village Circle</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Property Type</label>
              <div className="relative">
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Townhouse</option>
                  <option>Penthouse</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Price Range</label>
              <div className="relative">
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Any Price</option>
                  <option>AED 0 - 1,000,000</option>
                  <option>AED 1,000,000 - 3,000,000</option>
                  <option>AED 3,000,000 - 5,000,000</option>
                  <option>AED 5,000,000+</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-medium flex items-center justify-center">
                <FiSearch className="mr-2" /> Search
              </button>
            </div>
          </div>

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

          {/* Advanced Filters - shown when showFilters is true */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Bedrooms</h4>
                <div className="flex flex-wrap gap-2">
                  {["Any", "1", "2", "3", "4", "5+"].map((num) => (
                    <button
                      key={num}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Bathrooms</h4>
                <div className="flex flex-wrap gap-2">
                  {["Any", "1", "2", "3", "4", "5+"].map((num) => (
                    <button
                      key={num}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
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
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Max
                    </label>
                    <input
                      type="number"
                      min={0}
                      placeholder="Any"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Property Listings */}
      <div className="container mx-auto px-14 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden  hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop="true"
                  className="w-full overflow-hidden h-64"
                >
                  {property.image.map((img, idx) => (
                    <SwiperSlide key={property.idx}>
                      <img
                        src={img}
                        alt={property.title}
                        className="w-full h-64 object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <FiHeart className="text-gray-700" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <FiShare2 className="text-gray-700" />
                  </button>
                </div>
                {property.status === "off-plan" && (
                  <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Off-Plan
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <FiMapPin className="mr-1" size={14} />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {property.price}
                </div>

                <div className="flex justify-between text-gray-700 border-t border-b border-gray-100 py-3 mb-4">
                  <div className="flex items-center">
                    <FaBed className="mr-2 text-gray-500" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="mr-2 text-gray-500" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <FaRulerCombined className="mr-2 text-gray-500" />
                    <span>{property.area} sq.ft</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    navigate("/rent/property-for-rent/dfsa");
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg bg-blue-600 text-white">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              4
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
        <ExploreIn />
      </div>
      <HelpFindProperty />
      <div className="px-6 md:px-20 py-16">
        <h2 className="text-2xltext-3xl md:text-4xl font-bold text-slate-800 mb-2  max-w-4xl">
          Meet out Experts Now. Contact them when you feel free !
        </h2>

        <ExpertCardsWraper />
      </div>
      <div className="px-6 md:px-20 py-16">
        <Description />
      </div>
    </div>
  );
};

export default RentPropertyListingPage;
