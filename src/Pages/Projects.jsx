import React, { useEffect, useState } from "react";

import ProjectGrid from "../Components/ProjectGrid";
import RentAndBuyHeroSection from "../Components/RentAndBuyHeroSection";
import { properties } from "../Data";
import SearchAndFilter from "../Components/SearchAndFilter";
import Hero from "../Components/Home/Home_Hero_section";
import LuxuryPropertyInfo from "../Components/Others/Description";
import FaqSection from "../Components/Others/FAQ";
import WhyChoose from "../Components/Others/WhyChoose";
import ProjectPage from "../Components/Others/PageFiller";
import SubscribeSection from "../Components/SubscribeSection";

const Projects = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("latest");

  // Filter properties based on active filter
  const filteredProperties = properties.filter((property) => {
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

  return (
    <>
      <Hero video={"src/assets/Project_Hero_Video.mp4"} />
      <SearchAndFilter {...SearchAndFilterProps} />
      <ProjectGrid />
      <div className=" px-10 p-4">
        <LuxuryPropertyInfo />
      <WhyChoose />
      {/* <FaqSection faqs={} /> */}
      <SubscribeSection />
      </div>
    </>
  );
};

export default Projects;
