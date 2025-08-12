import { useContext, useEffect, useState } from "react";
import {
  rentDescription,
  FAQForRent,
  propertyData,
} from "../Data";
import ExploreIn from "../Components/Home/ExploreIn";
import ExpertCardsWraper from "../Components/PropForSale/ExpertCardsWraper";
import Description from "../Components/Others/Description";
import HelpFindProperty from "../Components/PropForSale/PostComponent";
import SearchAndFilter from "../Components/SearchAndFilter";
import { PulseLoader } from "react-spinners";
import Pagination from "../Components/Others/Pagination";
import PropertyListingCard from "../Components/Cards/PropertyListingCard";
import FaqSection from "../Components/Others/FAQ";
import WhyChoose from "../Components/Others/WhyChoose";
import Hero from "../Components/Home/Home_Hero_section";
import BlogContext from "../context/Property.js";
import ContactForm from "../Components/Home/ContactForm";
import { PropertySwiperCard } from "../Components/Home/PropertySwiperCard.jsx";

const RentProperty = ({ filterOptions, setFilterOptions }) => {
  const { property, loading } = useContext(BlogContext);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  // const [filterOptions, setFilterOptions] = useState({
  //   bedrooms: "Any",
  //   bathrooms: "Any",
  //   minArea: "",
  //   maxArea: "",
  //   location: "",
  //   type: "",
  //   status: "",
  // });

  const [uniqueFilters, setUniqueFilters] = useState({
    locations: [],
    types: [],
    statuses: [],
    bedrooms: [],
    bathrooms: [],
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("latest");

  const itemsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);
  const [lowBedget, setLowBedget] = useState([]);

  useEffect(() => {
    if (property?.data?.length > 0) {
      const data = property.data;
      const locations = [
        ...new Set(data.map((p) => p.location).filter(Boolean)),
      ];
      const types = [...new Set(data.map((p) => p.type).filter(Boolean))];
      const statuses = [...new Set(data.map((p) => p.status).filter(Boolean))];
      const beds = [...new Set(data.map((p) => p.beds).filter(Boolean))];
      const bathroom = [
        ...new Set(data.map((p) => p.bathroom).filter(Boolean)),
      ];
      setUniqueFilters({ locations, types, statuses, beds, bathroom });

      setLowBedget(
        property.data
          .sort((a, b) => {
            return (a.price || 0) - (b.price || 0);
          })
          .slice(9)
      );
    }
  }, [property]);

  if (loading)
    return (
      <div className="text-center flex items-center justify-center h-screen mt-20 text-lg">
        <PulseLoader size={25} />
      </div>
    );

  // Filter properties based on active filter
  const filteredProperties = property.data.filter((property) => {
    if (activeFilter !== "all") {
      if (activeFilter === "featured" && !property.featured) return false;
      if (activeFilter === "villas" && property.type !== "villa") return false;
      if (activeFilter === "apartments" && property.type !== "apartment")
        return false;
      if (activeFilter === "off-plan" && property.status !== "off-plan")
        return false;
    }

    if (filterOptions.location && property.location !== filterOptions.location)
      return false;
    if (filterOptions.type && property.type !== filterOptions.type)
      return false;
    if (filterOptions.status && property.status !== filterOptions.status)
      return false;
    if (
      filterOptions.beds !== "Any" &&
      parseInt(property.beds) !== parseInt(filterOptions.beds)
    )
      return false;
    if (
      filterOptions.bathroom !== "Any" &&
      parseInt(property.bathroom) !== parseInt(filterOptions.bathroom)
    )
      return false;

    const area = parseInt(property.area || "0");
    const minArea = parseInt(filterOptions.minArea || "0");
    const maxArea = parseInt(filterOptions.maxArea || "999999");
    if (area < minArea || area > maxArea) return false;

    return true;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "latest") return b.id - a.id;
    if (sortBy === "price-low") return (a.price || 0) - (b.price || 0);
    if (sortBy === "price-high") return (b.price || 0) - (a.price || 0);

    return 0;
  });

  const SearchAndFilterProps = {
    activeFilter,
    setActiveFilter,
    setShowFilters,
    showFilters,
    sortBy,
    setSortBy,
    filterOptions,
    setFilterOptions,
    uniqueFilters,
  };

  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProperties.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const paginateProps = { totalPages, currentPage, handlePageChange };

  // console.log(currentItems)

  const heroProps = {
    title: "Flexible Living, No Long-Term Commitments",
    desc: "Find your ideal short-term or furnished rental. Enjoy comfort without the hassle.",
    video: "/assets/rent_hero.mp4",
    Hidebtn: true,
  };

  return (
    <div className="min-h-screen mt-15 md:mt-10 lg:mt-0 bg-gray-50">
      {/* Hero Section */}
      <Hero {...heroProps} />
      {/* Search and Filter Section */}
      <SearchAndFilter {...SearchAndFilterProps} />

      {/* Property Listings */}
      <div className="container mx-auto px-4 md:px-8 lg:px-14 py-4">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((property, index) => (
            <PropertyListingCard
              fr={"rent"}
              key={index}
              desc={true}
              property={property}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination {...paginateProps} />

        {/* Property */}
        <ExploreIn
          Title={"Properties in Affordable Prices"}
          Enablebtn={false}
          data={lowBedget}
          CardComponent={PropertySwiperCard}
          cardProps={{ fr: "rent" }}
        />
      </div>
      <HelpFindProperty />
      <div className="px-6 md:px-20 py-16">
        <h2 className="text-2xltext-3xl md:text-4xl font-bold text-slate-800 mb-2  max-w-4xl">
          Meet out Experts Now. Contact them when you feel free !
        </h2>

        <ExpertCardsWraper />
      </div>
      <ContactForm />

      <div className="px-6 md:px-20 py-16">
        <Description content={rentDescription} />
      </div>
      <WhyChoose />

      <FaqSection faqs={FAQForRent} />
    </div>
  );
};

export default RentProperty;
