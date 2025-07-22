import { useEffect, useState } from "react";
import { propertiesForRent, rentDescription } from "../Data";
import ExploreIn from "../Components/Home/ExploreIn";
import ExpertCardsWraper from "../Components/PropForSale/ExpertCardsWraper";
import Description from "../Components/Others/Description";
import HelpFindProperty from "../Components/PropForSale/PostComponent";
import SearchAndFilter from "../Components/SearchAndFilter";
import RentAndBuyHeroSection from "../Components/RentAndBuyHeroSection";
import Pagination from "../Components/Others/Pagination";
import PropertyListingCard from "../Components/Cards/PropertyListingCard";
import FaqSection from "../Components/Others/FAQ";
import WhyChoose from "../Components/Others/WhyChoose";
import Hero from "../Components/Home/Home_Hero_section";
import ContactForm from "../Components/Home/ContactForm";
import { FAQForRent } from "../Data";

const RentProperty = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("latest");

  // pagination

  const itemsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);

  // Filter properties based on active filter
  const filteredProperties = propertiesForRent.filter((property) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return property.featured;
    if (activeFilter === "villas") return property.type === "villa";
    if (activeFilter === "apartments") return property.type === "apartment";
    if (activeFilter === "off-plan") return property.status === "off-plan";
    return true;
  });

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

  const SearchAndFilterProps = {
    activeFilter,
    setActiveFilter,
    setShowFilters,
    showFilters,
    sortBy,
    setSortBy,
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero video={"/src/assets/rent_hero.mp4"} />
      {/* Search and Filter Section */}
      <SearchAndFilter {...SearchAndFilterProps} />

      {/* Property Listings */}
      <div className="container mx-auto px-14 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((property) => (
            <PropertyListingCard property={property} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination {...paginateProps} />

        {/* Property */}
        <ExploreIn Title={"Properties in Low Budget"} PropertyType={"rent"} />
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
